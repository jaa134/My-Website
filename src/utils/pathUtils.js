const sanitizePathRegex = /\/\/+/g;
export const sanitizePath = (path) => {
  let result = path.replace(sanitizePathRegex, '/');
  if (result.endsWith('/')) {
    result = result.substring(0, result.length - 1);
  }
  return result;
};

export const isPathMatch = (expectedPath, currentPath) => (
  sanitizePath(expectedPath) === sanitizePath(currentPath)
);
