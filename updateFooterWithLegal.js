const fs = require('fs');
const path = require('path');

const newFooter = `
<footer class="site-footer" role="contentinfo" aria-label="Professional footer">
  <div class="footer-container">
    <div class="footer-branding">
      <img src="assets/icons/logo.svg" alt="J. Gregory Walsh Logo" class="footer-logo">
      <p class="footer-mission">
        Psychology-informed public service at the intersection of behavioral science, crisis response, and national security.
      </p>
    </div>
    <nav class="footer-navigation" aria-label="Footer navigation">
      <ul class="footer-links">
        <li><a href="about.html">About</a></li>
        <li><a href="projects.html">Projects</a></li>
        <li><a href="experience.html">Experience</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </nav>
    <div class="footer-legal">
      <ul class="legal-links">
        <li><a href="privacy-policy.html">Privacy Policy</a></li>
        <li><a href="terms-of-service.html">Terms of Service</a></li>
      </ul>
      <p class="footer-credit">© 2025 J. Gregory Walsh. All rights reserved.</p>
    </div>
  </div>
</footer>
`;

const directoryPath = './';

fs.readdirSync(directoryPath).forEach(file => {
  if (file.endsWith('.html')) {
    const filePath = path.join(directoryPath, file);
    let content = fs.readFileSync(filePath, 'utf-8');

    // Replace existing <footer>...</footer> with newFooter
    if (content.includes('<footer')) {
      const updated = content.replace(/<footer[\s\S]*?<\/footer>/g, newFooter);
      fs.writeFileSync(filePath, updated, 'utf-8');
      console.log(`✅ Updated footer in ${file}`);
    }
  }
});