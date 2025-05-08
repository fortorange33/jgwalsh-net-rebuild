const fs = require('fs');
const path = require('path');

// Mobile-optimized header template
const newHeader = `\n<header class="bg-blue-900 text-white p-4 shadow-md" role="banner">\n  <div class="max-w-6xl mx-auto flex flex-wrap items-center justify-between">\n    <a href="index.html" class="text-xl font-bold block w-full md:w-auto mb-2 md:mb-0">\n      J. Gregory Walsh\n    </a>\n    <button id="menu-toggle" aria-label="Toggle navigation menu" class="md:hidden text-2xl focus:outline-none">☰</button>\n    <nav class="w-full md:w-auto">\n      <ul id="menu" class="hidden md:flex flex-col md:flex-row md:space-x-6 text-sm sm:text-base text-center md:text-left">\n        <li><a href="about.html" class="block py-1 hover:underline">About</a></li>\n        <li><a href="skills.html" class="block py-1 hover:underline">Skills</a></li>\n        <li><a href="experience.html" class="block py-1 hover:underline">Experience</a></li>\n        <li><a href="projects.html" class="block py-1 hover:underline">Projects</a></li>\n        <li><a href="contact.html" class="block py-1 hover:underline">Contact</a></li>\n      </ul>\n    </nav>\n  </div>\n</header>`;

// Recursively get all .html files
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

// Replace existing <header> with the new responsive one
getAllHtmlFiles('.').forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf-8');
  const updated = content.replace(/<header[\s\S]*?<\/header>/gi, newHeader);
  fs.writeFileSync(filePath, updated, 'utf-8');
  console.log(`✅ Updated header in ${filePath}`);
});
