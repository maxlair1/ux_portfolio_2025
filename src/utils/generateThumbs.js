const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const publicDir = path.resolve(__dirname, "../../public");

const supportedExtensions = [".jpg", ".jpeg", ".png"];

function isSupportedImage(file) {
  const ext = path.extname(file).toLowerCase();
  const name = path.basename(file, ext);
  return (
    supportedExtensions.includes(ext) &&
    !name.endsWith("-25") &&
    !name.endsWith("-50")
  );
}

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(fullPath));
    } else {
      results.push(fullPath);
    }
  });
  return results;
}

const files = walk(publicDir).filter(isSupportedImage);

files.forEach((file) => {
  const ext = path.extname(file);
  const name = path.basename(file, ext);
  const dir = path.dirname(file);

  const output25 = path.join(dir, `${name}-25${ext}`);
  const output50 = path.join(dir, `${name}-50${ext}`);

  sharp(file)
    .resize({ width: 400 })
    .toFile(output25)
    .then(() => console.log(`Created: ${output25}`))
    .catch(console.error);

  sharp(file)
    .resize({ width: 800 })
    .toFile(output50)
    .then(() => console.log(`Created: ${output50}`))
    .catch(console.error);
});
