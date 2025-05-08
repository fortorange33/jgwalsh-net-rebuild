const fs = require('fs');
const path = require('path');

const dir = '.';
const githubPattern = /<a[^>]*href=["']https:\/\/github\.com[^>]*>.*?<\/a>/gi;

fs.readdirSync(dir).forEach(file => {
  if (file.endsWith('.html')) {
    const filePath = path.join(dir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const updated = content.replace(githubPattern, '');
    fs.writeFileSync(filePath, updated, 'utf8');
    console.log(`✅ Removed GitHub link in ${file}`);
  }
});