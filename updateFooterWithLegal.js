const fs = require('fs');
const path = require('path');

const newFooter = `
<footer class="site-footer bg-gray-900 text-white mt-10 p-8">
  <div class="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
    <div>
      <h3 class="font-bold text-lg mb-2">J. Gregory Walsh</h3>
      <p class="text-sm">Psychology-informed public service at the intersection of behavioral science, crisis response, and national security.</p>
    </div>
    <div>
      <h4 class="font-semibold mb-2">Navigate</h4>
      <ul class="text-sm space-y-1">
        <li><a href="about.html" class="hover:underline">About</a></li>
        <li><a href="projects.html" class="hover:underline">Projects</a></li>
        <li><a href="experience.html" class="hover:underline">Experience</a></li>
        <li><a href="contact.html" class="hover:underline">Contact</a></li>
        <li><a href="privacy-policy.html" class="hover:underline">Privacy Policy</a></li>
        <li><a href="terms-of-service.html" class="hover:underline">Terms of Service</a></li>
      </ul>
    </div>
    <div>
      <h4 class="font-semibold mb-2">Connect</h4>
      <a href="mailto:jgwalsh@proton.me" class="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded">Contact Me</a>
    </div>
  </div>
  <div class="text-center text-xs text-gray-400 mt-6">© 2025 J. Gregory Walsh. All rights reserved.</div>
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