function addSuffixToFilename(filename, suffix) {
  return filename.replace(/(\.[a-zA-Z0-9]+)$/, `${suffix}$1`);
}

export default function getImageSize(filename, size) {
  if (!filename) return null;
  return addSuffixToFilename(filename, `-${size}`);
}
