const fs = require('fs');
const path = require('path');

const headContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="assets/css/tailwind.min.css" rel="stylesheet">
  <title>J. Gregory Walsh</title>
</head>`;

const dir = '.';

fs.readdirSync(dir).forEach(file => {
  if (file.endsWith('.html')) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf-8');

    // Replace existing DOCTYPE to <head> section with new headContent
    content = content.replace(/<!DOCTYPE[\s\S]*?<head>[\s\S]*?<\/head>/i, headContent);

    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`✅ Updated head section in ${file}`);
  }
});