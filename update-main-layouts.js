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

const mainRegex = /<main[\s\S]*?<\/main>/gi;
const mainWrapper = `\n<main class="max-w-4xl mx-auto px-4 sm:px-6 md:px-10 py-10 flex-grow">\n  <!-- PAGE CONTENT GOES HERE -->\n</main>`;

getAllHtmlFiles('.').forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf-8');

  if (mainRegex.test(content)) {
    content = content.replace(mainRegex, mainWrapper);
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`✅ Updated <main> block in ${filePath}`);
  }
});
