const fs = require('fs');
const path = require('path');

const newFooter = `
<style>
  .site-footer {
    background-color: #f8f9fa;
    color: #212529;
    padding: 2rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    border-top: 1px solid #dee2e6;
  }
  .footer-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 2rem;
  }
  .footer-branding, .footer-navigation, .footer-legal {
    flex: 1 1 30%;
    min-width: 250px;
  }
  .footer-logo {
    max-width: 140px;
    margin-bottom: 1rem;
  }
  .footer-mission {
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
  }
  .footer-links,
  .legal-links {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .footer-links li,
  .legal-links li {
    margin-bottom: 0.5rem;
  }
  .footer-links a,
  .legal-links a {
    color: #007bff;
    text-decoration: none;
  }
  .footer-links a:hover,
  .legal-links a:hover {
    text-decoration: underline;
  }
</style>

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