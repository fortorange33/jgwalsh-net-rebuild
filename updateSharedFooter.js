const fs = require('fs');
const path = require('path');

const footerPath = path.join(__dirname, 'partials', 'footer.html');
const newFooter = fs.readFileSync(footerPath, 'utf8');
const htmlDir = __dirname;

fs.readdirSync(htmlDir).forEach(file => {
  if (file.endsWith('.html')) {
    const filePath = path.join(htmlDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    if (content.includes('<footer')) {
      const updated = content.replace(/<footer[\s\S]*?<\/footer>/g, newFooter);
      fs.writeFileSync(filePath + '.bak', content, 'utf8'); // backup
      fs.writeFileSync(filePath, updated, 'utf8');
      console.log(`✅ Updated footer in ${file}`);
    }
  }
});