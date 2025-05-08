const fs = require('fs');
const path = require('path');

const newFooter = `
<footer class="site-footer" role="contentinfo" aria-label="Professional profile footer">
  <div class="footer-container">
    <div class="footer-branding">
      <img src="assets/icons/logo.svg" alt="J. Gregory Walsh Logo" class="footer-logo">
      <p class="footer-mission">Dedicated to public service at the intersection of behavioral science, justice, and national security.</p>
    </div>
    <nav class="footer-navigation" aria-label="Footer navigation">
      <ul class="footer-links">
        <li><a href="https://linkedin.com/in/jgregorywalsh" target="_blank">LinkedIn</a></li>
        <li><a href="https://github.com/jgwalsh02134" target="_blank">GitHub</a></li>
        <li><a href="https://www.usajobs.gov/" target="_blank">USAJOBS</a></li>
        <li><a href="https://orcid.org/0000-0002-4420-5724" target="_blank">ORCID</a></li>
        <li><a href="mailto:jgwalsh@proton.me">Email</a></li>
        <li><a href="https://jgwalsh.net" target="_blank">Website</a></li>
        <li><a href="https://saintsnetwork.siena.edu/profile/gregwalsh/" target="_blank">Siena College</a></li>
        <li><a href="mailto:jgwalsh@bu.edu">Boston University</a></li>
      </ul>
    </nav>
    <div class="footer-legal">
      <p>© 2025 J. Gregory Walsh. All rights reserved.</p>
      <ul class="legal-links">
        <li><a href="/privacy-policy.html">Privacy Policy</a></li>
        <li><a href="/terms-of-service.html">Terms of Service</a></li>
      </ul>
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