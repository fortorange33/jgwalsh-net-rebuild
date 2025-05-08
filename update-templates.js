// update-templates.js
// Batch update HTML files in the project to use a mobile-responsive Tailwind template

const fs = require('fs');
const path = require('path');

const projectDir = __dirname;

const template = (title, heading, content) => `<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} | J. Gregory Walsh</title>
  <link rel="stylesheet" href="assets/css/tailwind.min.css">
</head>
<body class="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white flex flex-col min-h-screen">
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
  </header>
  <main class="max-w-4xl mx-auto px-4 sm:px-6 md:px-10 py-10 flex-grow">
    <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6">${heading}</h1>
    <div class="text-base sm:text-lg md:text-xl leading-relaxed mb-4">
      ${content}
    </div>
  </main>
  <footer class="bg-gray-200 dark:bg-gray-800 text-center text-sm sm:text-base py-4 mt-auto">
    <a href="privacy-policy.html" class="hover:underline">Privacy Policy</a> |
    <a href="terms.html" class="hover:underline">Terms of Service</a>
  </footer>
  <script>
    document.getElementById('menu-toggle').addEventListener('click', function () {
      document.getElementById('menu').classList.toggle('hidden');
    });
  </script>
</body>
</html>`;

function extractTitle(html) {
  const match = html.match(/<title>(.*?)<\/title>/i);
  return match ? match[1].replace(/\s*\|.*$/, '') : 'Page';
}
function extractHeading(html) {
  const match = html.match(/<h1[^>]*>(.*?)<\/h1>/i);
  return match ? match[1] : 'Heading';
}
function extractMainContent(html) {
  const match = html.match(/<main[\s\S]*?<h1[^>]*>.*?<\/h1>([\s\S]*?)<\/main>/i);
  return match ? match[1].trim() : '';
}

function updateFile(filePath) {
  const html = fs.readFileSync(filePath, 'utf8');
  const title = extractTitle(html);
  const heading = extractHeading(html);
  const content = extractMainContent(html);
  const newHtml = template(title, heading, content);
  fs.writeFileSync(filePath, newHtml, 'utf8');
  console.log(`Updated: ${filePath}`);
}

function walk(dir) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (file.endsWith('.html')) {
      updateFile(fullPath);
    }
  });
}

walk(projectDir);
console.log('All HTML files updated.');
