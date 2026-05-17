const fs = require('fs');

let content = fs.readFileSync('src/pages/Home.tsx', 'utf-8');

// Accordion & Faq Item
content = content.replace(
  /className="bg-\[#161B18\]\/80 hover:bg-stone-800\/50 border border-white\/5 hover:border-white\/5 rounded-\[2rem\] mb-4 overflow-hidden transition-all duration-300"/g,
  'className="bg-[#161B18] hover:bg-[#1E2420] border border-white/5 mb-4 rounded-[2rem] overflow-hidden transition-all duration-300 shadow-sm"'
);

fs.writeFileSync('src/pages/Home.tsx', content);
