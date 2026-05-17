const fs = require('fs');

let content = fs.readFileSync('src/pages/Home.tsx', 'utf-8');

// 1. Button rounded-md
content = content.replace(/rounded-full bg-\[#505F52\]/g, 'rounded-md bg-[#505F52]');
content = content.replace(/rounded-full text-lg/g, 'rounded-md text-lg');

// 2. Marquee removal
content = content.replace(/\{\/\* Marquee \*\/\}\s*<div className="w-full bg-\[#505F52\] py-4 overflow-hidden flex whitespace-nowrap">[\s\S]*?<\/div>[\s\S]*?<\/div>/, '');

// 3. Macbook color
content = content.replace(/bg-stone-50 rounded-t-xl sm:rounded-t-3xl border-\[6px\] sm:border-\[12px\] border-stone-300/g, 'bg-[#090B0A] rounded-t-xl sm:rounded-t-3xl border-[6px] sm:border-[12px] border-stone-900');
content = content.replace(/bg-stone-400 rounded-b-sm sm:rounded-b-md/g, 'bg-stone-900 rounded-b-sm sm:rounded-b-md');
content = content.replace(/bg-[#FAFAFA] flex items-center justify-center overflow-hidden relative/g, 'bg-black flex items-center justify-center overflow-hidden relative');
// Base
content = content.replace(/from-stone-200 to-stone-300/g, 'from-stone-700 to-stone-900');
content = content.replace(/bg-stone-400 rounded-b-md shadow-inner/g, 'bg-stone-900 rounded-b-md shadow-inner');
content = content.replace(/bg-stone-600\/50/g, 'bg-stone-900');


fs.writeFileSync('src/pages/Home.tsx', content);
