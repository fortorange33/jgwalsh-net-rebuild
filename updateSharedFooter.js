const fs = require('fs');
const path = require('path');

// Ensure the icons are saved correctly in the following structure:
// assets/icons/
// ├── linkedin.svg
// ├── facebook.svg
// ├── github.svg
// ├── orcid.svg
// ├── usajobs.svg

// Re-run the script to update all HTML files with the new footer:
// node updateSharedFooter.js

// Deploy the changes to Cloudflare Pages:
// npx wrangler pages deploy . --project-name=jgwalsh-net-rebuild

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