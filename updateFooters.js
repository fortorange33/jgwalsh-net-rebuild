const fs = require('fs');
const path = require('path');

const newFooter = `
<footer class="site-footer">
  <div class="footer-container">
    <div class="footer-links">
      <a href="https://linkedin.com/in/jgregorywalsh" target="_blank">LinkedIn</a>
      <a href="https://github.com/jgwalsh02134" target="_blank">GitHub</a>
      <a href="https://www.usajobs.gov/" target="_blank">USAJOBS</a>
      <a href="https://orcid.org/0000-0002-4420-5724" target="_blank">ORCID</a>
      <a href="mailto:jgwalsh@proton.me">Email</a>
      <a href="https://jgwalsh.net" target="_blank">Website</a>
      <a href="https://saintsnetwork.siena.edu/profile/gregwalsh/" target="_blank">Siena College</a>
      <a href="mailto:jgwalsh@bu.edu">Boston University</a>
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
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`✅ Updated footer in ${file}`);
    }
  }
});