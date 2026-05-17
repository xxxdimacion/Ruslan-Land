const fs = require('fs');
const paths = [
  './src/pages/Home.tsx',
  './src/pages/Disclaimer.tsx',
  './src/pages/Offer.tsx',
  './src/pages/Privacy.tsx'
];

paths.forEach(p => {
  let content = fs.readFileSync(p, 'utf-8');
  
  // Selection
  content = content.replace(/selection:bg-\[#D9520E\]/g, 'selection:bg-[#505F52]');
  // Hover links
  content = content.replace(/hover:text-\[#D9520E\]/g, 'hover:text-[#505F52]');
  content = content.replace(/text-\[#D9520E\] hover:underline/g, 'text-[#505F52] hover:underline');
  
  // Gradients and shadows non-related to payment
  if (p === './src/pages/Home.tsx') {
    content = content.replace(/from-\[#D9520E\] to-\[#B9420B\]/g, 'from-[#505F52] to-[#3D493E]');
    content = content.replace(/shadow-\[#D9520E\]\/20/g, 'shadow-[#505F52]/20');
    content = content.replace(/hover:border-\[#D9520E\]\/50/g, 'hover:border-[#505F52]/50');
    content = content.replace(/via-\[#D9520E\]\/50/g, 'via-[#505F52]/50');
    content = content.replace(/bg-\[#D9520E\]\/10 blur/g, 'bg-[#505F52]/10 blur');
  }

  fs.writeFileSync(p, content);
});
