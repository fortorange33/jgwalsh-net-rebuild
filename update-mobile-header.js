const fs = require('fs');
const path = require('path');

// Mobile-optimized responsive header
const header = `
<header class="bg-blue-900 text-white p-4 shadow-md" role="banner">
  <div class="max-w-6xl mx-auto flex justify-between items-center">
    <a href="index.html" class="text-xl font-bold">J. Gregory Walsh</a>
    <button id="menu-toggle" aria-label="Toggle navigation menu" class="md:hidden text-2xl focus:outline-none">☰</button>
    <ul id="menu" class="hidden md:flex md:space-x-6 flex-col md:flex-row mt-4 md:mt-0 text-sm sm:text-base" role="navigation">
      <li><a href="about.html" class="hover:underline">About</a></li>
      <li><a href="skills.html" class="hover:underline">Skills</a></li>
      <li><a href="experience.html" class="hover:underline">Experience</a></li>
      <li><a href="projects.html" class="hover:underline">Projects</a></li>
      <li><a href="contact.html" class="hover:underline">Contact</a></li>
    </ul>
  </div>
</header>`;

// Recursively find all .html files
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

// Apply updated <header> to each file
getAllHtmlFiles('.').forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf-8');
  if (/<header[\s\S]*?<\/header>/gi.test(content)) {
    content = content.replace(/<header[\s\S]*?<\/header>/gi, header);
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`✅ Updated header in ${filePath}`);
  }
});