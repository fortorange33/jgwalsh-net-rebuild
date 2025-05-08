const fs = require('fs');
const path = require('path');

const directoryPath = './';
const patternsToRemove = [
  /<li><a href="\/privacy-policy\.html">Privacy Policy<\/a><\/li>\n?/g,
  /<li><a href="\/terms-of-service\.html">Terms of Service<\/a><\/li>\n?/g,
];

fs.readdirSync(directoryPath).forEach(file => {
  if (file.endsWith('.html')) {
    const filePath = path.join(directoryPath, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    patternsToRemove.forEach(pattern => {
      if (pattern.test(content)) {
        content = content.replace(pattern, '');
        modified = true;
      }
    });

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Removed legal nav links from ${file}`);
    }
  }
});
