const fs = require('fs');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="50" fill="#505F52" />
  <svg x="20" y="20" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M6 3h12l4 6-10 13L2 9Z"/><path d="M11 3 8 9l4 13"/><path d="M13 3l3 6-4 13"/>
  </svg>
</svg>`;

const b64 = Buffer.from(svg).toString('base64');
const uri = `data:image/svg+xml;base64,${b64}`;

let content = fs.readFileSync('index.html', 'utf-8');
content = content.replace(/<link rel="icon" type="image\/png" href=".*?" \/>/, `<link rel="icon" type="image/svg+xml" href="${uri}" />`);
fs.writeFileSync('index.html', content);
