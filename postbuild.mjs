import { writeFile, copyFile } from 'fs/promises';

const domain = 'maxlair.com'; // ← change to your custom domain

try {
  // Copy index.html to 404.html
  await copyFile('dist/index.html', 'dist/404.html');
  // Create CNAME file
  await writeFile('dist/CNAME', domain);
  console.log('✅ postbuild: 404.html and CNAME created');
} catch (err) {
  console.error('❌ postbuild error:', err);
  process.exit(1);
}