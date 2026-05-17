const fs = require('fs');

let content = fs.readFileSync('src/pages/Home.tsx', 'utf-8');

// Replace hover link colors
content = content.replace(/hover:text-\[#D9520E\]/g, 'hover:text-[#505F52]');
// Replace menu accordion group-hover colors
content = content.replace(/group-hover:text-\[#D9520E\]/g, 'group-hover:text-[#505F52]');
// Replace checkmarks and text colors
content = content.replace(/className="text-\[#D9520E\] font-medium"/g, 'className="text-[#505F52] font-medium"');
content = content.replace(/<span className="text-\[#D9520E\] font-bold text-xl">/g, '<span className="text-[#505F52] font-bold text-xl">');

// We also have <h3 className="text-3xl font-bold mb-2 text-[#D9520E]">Навсегда</h3>
content = content.replace(/text-\[#D9520E\]">Навсегда/g, 'text-[#505F52]">Навсегда');

// We also have text-[#D9520E] for the @xxxdimacion link
content = content.replace(/className="text-\[#D9520E\] hover:underline"/g, 'className="text-[#505F52] hover:underline"');

fs.writeFileSync('src/pages/Home.tsx', content);
