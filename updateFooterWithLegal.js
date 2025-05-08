const fs = require('fs');
const path = require('path');

const newFooter = `
<footer class="bg-gray-900 text-white py-6">
  <div class="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
    <div class="text-sm text-gray-400">
      © 2025 J. Gregory Walsh. All rights reserved.
    </div>
    <div class="flex space-x-4 mt-4 sm:mt-0">
      <a href="privacy-policy.html" class="text-sm text-gray-300 hover:text-white transition">Privacy Policy</a>
      <a href="terms-of-service.html" class="text-sm text-gray-300 hover:text-white transition">Terms of Service</a>
    </div>
  </div>
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