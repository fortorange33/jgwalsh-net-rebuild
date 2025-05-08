const fs = require('fs');
const path = require('path');

const newFooter = `
<footer class="site-footer bg-gray-900 text-white mt-10 p-6 text-center text-sm">
  <p class="mb-2">
    <a href="privacy-policy.html" class="text-blue-400 hover:underline">Privacy Policy</a> |
    <a href="terms-of-service.html" class="text-blue-400 hover:underline">Terms of Service</a>
  </p>
  <p class="text-gray-400">© 2025 J. Gregory Walsh. All rights reserved.</p>
</footer>
`;

const directoryPath = './';

fs.readdirSync(directoryPath).forEach(file => {
  if (file.endsWith('.html')) {
    const filePath = path.join(directoryPath, file);
    let content = fs.readFileSync(filePath, 'utf-8');

    // Replace existing <footer>...</footer> with newFooter
    if (content.includes('<footer')) {
      const updated = content.replace(/<footer[\s\S]*?<\/footer>/g, newFooter);
      fs.writeFileSync(filePath, updated, 'utf-8');
      console.log(`✅ Updated footer in ${file}`);
    }
  }
});