export const loadImagesWithPrefix = async (prefix, { omitVariants = true } = {}) => {
  //NOTE: If images.json does not exist, then run "npm run generate:image_index"
  const res = await fetch('/images.json');
  const filenames = await res.json();

  return filenames
    .filter(name => name.startsWith(`${prefix}_`))
    .filter(name => {
      if (!omitVariants) return true;
      // Only allow files that do NOT contain `-25`, `-50`, etc. before extension
      return !/-\d+(?=\.\w+$)/.test(name);
    })
    .map(name => `/${name}`);
};