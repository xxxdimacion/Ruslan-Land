const fs = require('fs');
const paths = [
  './src/pages/Home.tsx',
  './src/pages/Disclaimer.tsx',
  './src/pages/Offer.tsx',
  './src/pages/Privacy.tsx'
];

paths.forEach(p => {
  let content = fs.readFileSync(p, 'utf-8');
  content = content.replace(/bg-\[#391E12\]\/80/g, 'bg-stone-900/80');
  content = content.replace(/bg-\[#391E12\]\/50/g, 'bg-stone-900/50');
  content = content.replace(/bg-\[#391E12\]/g, 'bg-stone-900');
  
  content = content.replace(/bg-\[#21110a\]/g, 'bg-stone-950');
  content = content.replace(/border-\[#4A2818\]/g, 'border-stone-800');
  content = content.replace(/bg-\[#4A2818\]\/30/g, 'bg-stone-800/30');
  content = content.replace(/bg-\[#4A2818\]\/50/g, 'bg-stone-800/50');
  content = content.replace(/bg-\[#4A2818\]/g, 'bg-stone-800');
  content = content.replace(/bg-\[#5C321E\]/g, 'bg-stone-700');
  content = content.replace(/border-\[#5C321E\]\/50/g, 'border-stone-700/50');

  fs.writeFileSync(p, content);
});
