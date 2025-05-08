const fs = require('fs');
const path = require('path');

const filesToFix = [
  'card.html',
  'header.html',
  'partials/footer.html',
  'skills.html'
];

const generateHead = (title = 'J. Gregory Walsh') => `<!DOCTYPE html>\n<html lang=\"en\" data-theme=\"light\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <link href=\"assets/css/tailwind.min.css\" rel=\"stylesheet\">\n  <title>${title}</title>\n</head>`;

const header = `\n<header class=\"bg-blue-900 text-white p-4 shadow-md\" role=\"banner\">\n  <div class=\"max-w-6xl mx-auto flex justify-between items-center\">\n    <a href=\"index.html\" class=\"text-xl font-bold\">J. Gregory Walsh</a>\n    <button id=\"menu-toggle\" aria-label=\"Toggle menu\" class=\"md:hidden text-2xl focus:outline-none\">☰</button>\n    <ul id=\"menu\" class=\"hidden md:flex md:space-x-6 flex-col md:flex-row mt-4 md:mt-0 text-sm sm:text-base\" role=\"navigation\">\n      <li><a href=\"about.html\" class=\"hover:underline\">About</a></li>\n      <li><a href=\"skills.html\" class=\"hover:underline\">Skills</a></li>\n      <li><a href=\"experience.html\" class=\"hover:underline\">Experience</a></li>\n      <li><a href=\"projects.html\" class=\"hover:underline\">Projects</a></li>\n      <li><a href=\"contact.html\" class=\"hover:underline\">Contact</a></li>\n    </ul>\n  </div>\n</header>`;

const footer = `\n<footer class=\"bg-gray-200 dark:bg-gray-800 text-center text-sm sm:text-base py-4 mt-auto\">\n  <a href=\"privacy-policy.html\" class=\"hover:underline\">Privacy Policy</a> |\n  <a href=\"terms-of-service.html\" class=\"hover:underline\">Terms of Service</a>\n</footer>\n<script>\n  document.getElementById('menu-toggle')?.addEventListener('click', function () {\n    document.getElementById('menu')?.classList.toggle('hidden');\n  });\n</script>`;

const mainRegex = /<main[\s\S]*?<\/main>/gi;
const standardMain = `\n<main class=\"max-w-4xl mx-auto px-4 sm:px-6 md:px-10 py-10 flex-grow\">\n  <!-- PAGE CONTENT GOES HERE -->\n</main>`;

filesToFix.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    const titleMatch = content.match(/<title>(.*?)<\/title>/i);
    const title = titleMatch ? titleMatch[1] : 'J. Gregory Walsh';

    content = content.replace(/<!DOCTYPE[\s\S]*?<head>[\s\S]*?<\/head>/i, generateHead(title));
    content = content.replace(/<header[\s\S]*?<\/header>/gi, header);
    content = content.replace(/<footer[\s\S]*?<\/footer>(\s*<script[\s\S]*?<\/script>)?/gi, footer);
    content = content.replace(mainRegex, standardMain);

    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`✅ Fixed and updated ${filePath}`);
  } else {
    console.warn(`⚠️ File not found: ${filePath}`);
  }
});
