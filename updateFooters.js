const fs = require('fs');
const path = require('path');

const newFooter = `
<footer class="site-footer" role="contentinfo" aria-label="Professional profile footer">
  <h2 class="visually-hidden">Footer section for contact, credentials, and navigation</h2>
  <div class="footer-container">
    <p class="footer-mission">Dedicated to public service at the intersection of behavioral science, justice, and national security.</p>
    <div class="footer-links" aria-label="External links">
      <a href="https://linkedin.com/in/jgregorywalsh" target="_blank"><span aria-hidden="true">🔗</span> LinkedIn</a>
      <a href="https://github.com/jgwalsh02134" target="_blank"><span aria-hidden="true">💻</span> GitHub</a>
      <a href="https://www.usajobs.gov/" target="_blank"><span aria-hidden="true">🏛️</span> USAJOBS</a>
      <a href="https://orcid.org/0000-0002-4420-5724" target="_blank"><span aria-hidden="true">📚</span> ORCID</a>
      <a href="mailto:jgwalsh@proton.me"><span aria-hidden="true">✉️</span> Email</a>
      <a href="https://jgwalsh.net" target="_blank"><span aria-hidden="true">🌐</span> Website</a>
      <a href="https://saintsnetwork.siena.edu/profile/gregwalsh/" target="_blank"><span aria-hidden="true">🏫</span> Siena College</a>
      <a href="mailto:jgwalsh@bu.edu"><span aria-hidden="true">🎓</span> Boston University</a>
    </div>
    <div class="footer-credit">
      <p>© 2025 J. Gregory Walsh. All rights reserved.</p>
    </div>
  </div>
</footer>
`;

const directoryPath = './';

fs.readdirSync(directoryPath).forEach(file => {
  if (file.endsWith('.html')) {
    const filePath = path.join(directoryPath, file);
    let content = fs.readFileSync(filePath, 'utf-8');
    if (content.includes('<footer')) {
      content = content.replace(/<footer[\s\S]*?<\/footer>/g, newFooter);
      const backupPath = filePath + '.bak';
      fs.writeFileSync(backupPath, content, 'utf-8');
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`✅ Updated footer in ${file}`);
    }
  }
});