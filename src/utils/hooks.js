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
