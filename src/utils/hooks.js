import { useEffect, useCallback, useState } from 'react';

export function useEventListener(element, type, listener) {
  useEffect(() => {
    if (!element) {
      return undefined;
    }
    element.addEventListener(type, listener);
    return () => {
      element.removeEventListener(type, listener);
    };
  }, [element, type, listener]);
}

export function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const callback = () => setWindowWidth(window.innerWidth);
  const getWindowWidth = useCallback(callback, []);
  useEventListener(window, 'resize', getWindowWidth);
  return windowWidth;
}

export function useDocument(url) {
  const [result, setResult] = useState({
    loading: true,
    error: null,
    blob: null
  });

  useEffect(() => {
    const controller = new AbortController();
    fetch(url, { signal: controller.signal })
      .then((res) => res.blob())
      .then((blob) => {
        setResult({
          loading: false,
          error: null,
          blob
        });
      })
      .catch((error) => {
        if (error.name !== 'AbortError') {
          setResult({
            loading: false,
            error,
            blob: null
          });
        }
      });
    return () => controller.abort();
  }, []);
  return result;
}
