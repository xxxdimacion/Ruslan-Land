const fs = require('fs');

const paths = [
  './src/pages/Home.tsx',
  './src/pages/Disclaimer.tsx',
  './src/pages/Offer.tsx',
  './src/pages/Privacy.tsx'
];

paths.forEach(p => {
  let content = fs.readFileSync(p, 'utf-8');
  content = content.replace(/#505F52/g, '#D9520E'); // orange
  content = content.replace(/#3D493E/g, '#B9420B'); // dark orange
  content = content.replace(/80\,95\,82/g, '217,82,14');
  
  // Background colors
  content = content.replace(/bg-stone-900\/80/g, 'bg-[#391E12]/80');
  content = content.replace(/bg-stone-900\/50/g, 'bg-[#391E12]/50');
  content = content.replace(/bg-stone-900/g, 'bg-[#391E12]');
  
  content = content.replace(/bg-stone-950/g, 'bg-[#21110a]');
  content = content.replace(/border-stone-800/g, 'border-[#4A2818]');
  content = content.replace(/bg-stone-800\/30/g, 'bg-[#4A2818]/30');
  content = content.replace(/bg-stone-800\/50/g, 'bg-[#4A2818]/50');
  content = content.replace(/bg-stone-800/g, 'bg-[#4A2818]');
  content = content.replace(/bg-stone-700/g, 'bg-[#5C321E]');
  content = content.replace(/border-stone-700\/50/g, 'border-[#5C321E]/50');

  fs.writeFileSync(p, content);
});
