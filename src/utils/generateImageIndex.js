const fs = require('fs');
const path = require('path');

const imageDir = path.join(__dirname, '../../public/');
const outFile = path.join(imageDir, 'images.json');

const imageFiles = fs.readdirSync(imageDir)
  .filter(name => /.+_.+\.(png|jpg|jpeg|gif)$/i.test(name));

fs.writeFileSync(outFile, JSON.stringify(imageFiles, null, 2));
console.log('✅ images.json generated');
