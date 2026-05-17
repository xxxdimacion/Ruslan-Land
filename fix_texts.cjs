const fs = require('fs');
const files = ['src/pages/Home.tsx', 'src/pages/Disclaimer.tsx', 'src/pages/Privacy.tsx', 'src/pages/Offer.tsx'];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf-8');
  content = content.replace(/text-stone-700/g, 'text-black');
  content = content.replace(/text-stone-600/g, 'text-black');
  content = content.replace(/text-stone-500/g, 'text-black');
  content = content.replace(/text-stone-400/g, 'text-black');
  content = content.replace(/text-stone-300/g, 'text-black');
  content = content.replace(/text-stone-900/g, 'text-black'); // Make ALL text very black
  fs.writeFileSync(file, content);
});
