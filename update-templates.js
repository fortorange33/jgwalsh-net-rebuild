// update-templates.js
// Batch update HTML files in the project to use shared responsive components for <head>, <header>, and <footer>

const fs = require('fs');
const path = require('path');

// Mobile-optimized <head> generator with dynamic title
const generateHead = (title) => `<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <link href=\"assets/css/tailwind.min.css\" rel=\"stylesheet\">\n  <title>${title}</title>\n</head>`;

// Shared header and footer components
const header = `\n<header class=\"bg-blue-900 text-white p-4 shadow-md\" role=\"banner\">\n  <div class=\"max-w-6xl mx-auto flex justify-between items-center\">\n    <a href=\"index.html\" class=\"text-lg font-bold hover:underline\">J. Gregory Walsh</a>\n    <nav role=\"navigation\" aria-label=\"Main navigation\">\n      <ul class=\"flex gap-6 text-sm\">\n        <li><a href=\"about.html\" class=\"hover:underline\">About</a></li>\n        <li><a href=\"skills.html\" class=\"hover:underline\">Skills</a></li>\n        <li><a href=\"experience.html\" class=\"hover:underline\">Experience</a></li>\n        <li><a href=\"projects.html\" class=\"hover:underline\">Projects</a></li>\n        <li><a href=\"contact.html\" class=\"hover:underline\">Contact</a></li>\n      </ul>\n    </nav>\n  </div>\n</header>`;

const footer = `\n<footer class=\"site-footer bg-gray-900 text-white mt-10 p-6 text-center text-sm\">\n  <p class=\"mb-2\">\n    <a href=\"privacy-policy.html\" class=\"text-blue-400 hover:underline\">Privacy Policy</a> |\n    <a href=\"terms-of-service.html\" class=\"text-blue-400 hover:underline\">Terms of Service</a>\n  </p>\n  <p class=\"text-gray-400\">© 2025 J. Gregory Walsh. All rights reserved.</p>\n</footer>`;

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

getAllHtmlFiles('.').forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf-8');

  // Extract original <title>
  const titleMatch = content.match(/<title>(.*?)<\/title>/i);
  const title = titleMatch ? titleMatch[1] : 'J. Gregory Walsh';

  // Replace <head>, <header>, <footer>
  content = content.replace(/<!DOCTYPE[\s\S]*?<head>[\s\S]*?<\/head>/i, generateHead(title));
  content = content.replace(/<header[\s\S]*?<\/header>/gi, header);
  content = content.replace(/<footer[\s\S]*?<\/footer>/gi, footer);

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`✅ Updated layout in ${filePath}`);
});
