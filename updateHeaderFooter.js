const fs = require('fs');
const path = require('path');

const newHeader = `
<header class="bg-blue-900 text-white p-4 shadow-md" role="banner">
  <div class="max-w-6xl mx-auto flex justify-between items-center">
    <a href="index.html" class="text-lg font-bold hover:underline">J. Gregory Walsh</a>
    <nav role="navigation" aria-label="Main navigation">
      <ul class="flex gap-6 text-sm">
        <li><a href="about.html" class="hover:underline">About</a></li>
        <li><a href="skills.html" class="hover:underline">Skills</a></li>
        <li><a href="experience.html" class="hover:underline">Experience</a></li>
        <li><a href="projects.html" class="hover:underline">Projects</a></li>
        <li><a href="contact.html" class="hover:underline">Contact</a></li>
      </ul>
    </nav>
  </div>
</header>
`;

const newFooter = `
<footer class="site-footer bg-gray-900 text-white mt-10 p-6 text-center text-sm">
  <p class="mb-2">
    <a href="privacy-policy.html" class="text-blue-400 hover:underline">Privacy Policy</a> |
    <a href="terms-of-service.html" class="text-blue-400 hover:underline">Terms of Service</a>
  </p>
  <p class="text-gray-400">© 2025 J. Gregory Walsh. All rights reserved.</p>
</footer>
`;

fs.readdirSync('./').forEach(file => {
  if (file.endsWith('.html')) {
    const filePath = path.join('./', file);
    let content = fs.readFileSync(filePath, 'utf-8');

    content = content.replace(/<header[\s\S]*?<\/header>/g, newHeader);
    content = content.replace(/<footer[\s\S]*?<\/footer>/g, newFooter);

    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`✅ Updated header and footer in ${file}`);
  }
});