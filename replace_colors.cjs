const fs = require('fs');
const paths = [
  './src/pages/Home.tsx',
  './src/pages/Disclaimer.tsx',
  './src/pages/Offer.tsx',
  './src/pages/Privacy.tsx'
];

paths.forEach(p => {
  let content = fs.readFileSync(p, 'utf-8');
  content = content.replace(/#CF3200/g, '#505F52');
  content = content.replace(/#A62800/g, '#3D493E');
  content = content.replace(/207,50,0/g, '80,95,82');
  fs.writeFileSync(p, content);
});
