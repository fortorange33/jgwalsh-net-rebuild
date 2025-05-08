const fs = require('fs');
const path = require('path');

function getAllHtmlFiles(dir) {
  let results = [];
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      results = results.concat(getAllHtmlFiles(fullPath));
    } else if (file.endsWith('.html')) {
      results.push(fullPath);
    }
  });
  return results;
}

const checklist = {
  viewport: /meta\s+name=["']viewport["']\s+content=["']width=device-width,\s*initial-scale=1\.0["']\s*\/?\>/i,
  tailwind: /link\s+[^>]*href=["']assets\/css\/tailwind\.min\.css["']/i,
  header: /<header[\s\S]*?<\/header>/i,
  toggle: /=['"]menu-toggle['"]/i,
  main: /<main[^>]*class=["'][^"']*max-w-4xl[^"']*["']/i
};

console.log('📋 Checking HTML files for mobile-readiness...\n');

getAllHtmlFiles('.').forEach(filePath => {
  const content = fs.readFileSync(filePath, 'utf-8');
  let errors = [];

  if (!checklist.viewport.test(content)) errors.push('❌ Missing viewport meta tag');
  if (!checklist.tailwind.test(content)) errors.push('❌ Missing Tailwind CSS link');
  if (!checklist.header.test(content)) errors.push('❌ Missing <header> block');
  if (!checklist.toggle.test(content)) errors.push('❌ Missing menu toggle button');
  if (!checklist.main.test(content)) errors.push('❌ <main> missing "max-w-4xl" class');

  if (errors.length) {
    console.log(`🚫 ${filePath}`);
    errors.forEach(e => console.log('   ' + e));
  } else {
    console.log(`✅ ${filePath}`);
  }
});
