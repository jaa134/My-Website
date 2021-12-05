const sanitizePathRegex = /\/\/+/g;
export const sanitizePath = (path) => {
  let result = path.replace(sanitizePathRegex, '/');
  if (result.startsWith('/')) {
    result = result.substring(1, result.length);
  }
  if (result.endsWith('/')) {
    result = result.substring(0, result.length - 1);
  }
  return result;
};

export const isPathMatch = (pathToMatch, currentPath) => (
  sanitizePath(pathToMatch) === sanitizePath(currentPath)
);

export const isParentPath = (pathToMatch, currentPath) => (
  sanitizePath(currentPath).startsWith(sanitizePath(pathToMatch))
);
