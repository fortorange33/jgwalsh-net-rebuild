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

const mainRegex = /<main[\s\S]*?>([\s\S]*?)<\/main>/gi;

getAllHtmlFiles('.').forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf-8');

  content = content.replace(mainRegex, (_, inner) => {
    return `<main class="max-w-4xl mx-auto px-4 sm:px-6 md:px-10 py-10 flex-grow">\n${inner.trim()}\n</main>`;
  });

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`✅ Preserved and updated <main> in ${filePath}`);
});
