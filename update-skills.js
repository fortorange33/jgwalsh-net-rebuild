const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'skills.html');

const newContent = `<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Skills | J. Gregory Walsh</title>
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
    <h1 class="text-4xl sm:text-5xl font-bold text-center mb-6">Skills & Competencies</h1>
    <div class="space-y-4 text-base sm:text-lg leading-relaxed">
      <ul class="list-disc list-inside space-y-2">
        <li>Behavioral analysis and clinical psychology (McLean-Franciscan)</li>
        <li>Statistical analysis: SPSS, R, Excel, and Python (Pandas, Matplotlib)</li>
        <li>Crisis management, de-escalation, and threat assessment</li>
        <li>Data-driven intelligence reporting and policy analysis</li>
        <li>Federal application preparation (SF-86, USAJOBS, FBI pathways)</li>
        <li>Web development and data presentation (Tailwind CSS, GitHub Pages)</li>
      </ul>
    </div>
  </main>

  <footer class="bg-gray-200 dark:bg-gray-800 text-center text-sm sm:text-base py-4 mt-auto">
    <a href="privacy-policy.html" class="hover:underline">Privacy Policy</a> |
    <a href="terms-of-service.html" class="hover:underline">Terms of Service</a>
  </footer>

  <script>
    document.getElementById('menu-toggle').addEventListener('click', function () {
      document.getElementById('menu').classList.toggle('hidden');
    });
  </script>
</body>
</html>`;

fs.writeFileSync(filePath, newContent, 'utf-8');
console.log('✅ skills.html has been updated for mobile responsiveness.');
