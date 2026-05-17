const fs = require('fs');
const pages = ['src/pages/Disclaimer.tsx', 'src/pages/Privacy.tsx', 'src/pages/Offer.tsx'];

pages.forEach(page => {
  let content = fs.readFileSync(page, 'utf-8');
  content = content.replace(/bg-stone-900/g, 'bg-[#FAFAFA]');
  content = content.replace(/text-white/g, 'text-stone-900');
  content = content.replace(/text-stone-300/g, 'text-stone-600');
  content = content.replace(/text-stone-400/g, 'text-stone-500');
  content = content.replace(/prose-invert/g, 'prose');
  fs.writeFileSync(page, content);
});
