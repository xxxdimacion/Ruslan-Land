const fs = require('fs');
let content = fs.readFileSync('src/pages/Home.tsx', 'utf8');

// I'll manually locate the big section and remove them. There are about 7 of them: 
// Top Glow, Grey Accent Glow, Middle Glow, Cases Glow, Large Grey Glow, Bottom Glow
content = content.replace(/\{\/\* .*?Glow.*?\*\/\}[\s\S]*?<\/div>\s*<\/div>/g, '');
content = content.replace(/\{\/\* Cases Glow \*\/\}[\s\S]*?\/>/g, '');

// Also the "Orange Glow" inside the hero section
content = content.replace(/\{\/\* Orange Glow \*\/\}[\s\S]*?<\/div>(\s*<\/div>)?/g, '');

// Specifically remove the blurred background elements:
const toRemove = [
    '<div\n        aria-hidden="true"\n        className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-[100px] sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)] pointer-events-none"\n      >\n        <div className="aspect-[1.5] w-[60rem] rounded-full bg-gradient-to-r from-[#04CFF9] to-[#028bfa] opacity-30" />\n      </div>',
    '<div\n        aria-hidden="true"\n        className="absolute top-[20%] left-1/4 -z-10 transform-gpu blur-[120px] pointer-events-none"\n      >\n        <div className="aspect-square w-[40rem] rounded-full bg-gradient-to-tr from-[#04CFF9] to-[#028bfa] opacity-20" />\n      </div>',
    '<div\n        aria-hidden="true"\n        className="absolute top-[40%] right-0 -z-10 transform-gpu blur-[120px] pointer-events-none translate-x-1/3"\n      >\n        <div className="aspect-square w-[50rem] rounded-full bg-gradient-to-l from-[#04CFF9] to-[#607262] opacity-20" />\n      </div>',
    '<div\n        aria-hidden="true"\n        className="absolute top-[60%] left-0 -z-10 transform-gpu blur-[120px] pointer-events-none -translate-x-1/3 w-[60rem] aspect-square rounded-full bg-gradient-to-tr from-[#04CFF9] to-[#028bfa] opacity-20"\n      />',
    '<div\n        aria-hidden="true"\n        className="absolute top-[75%] right-1/4 -z-10 transform-gpu blur-[140px] pointer-events-none translate-x-1/4"\n      >\n        <div className="aspect-square w-[55rem] rounded-full bg-gradient-to-l from-[#04CFF9] to-[#028bfa] opacity-20" />\n      </div>',
    '<div\n        aria-hidden="true"\n        className="absolute bottom-0 left-0 -z-10 transform-gpu blur-[120px] pointer-events-none -translate-x-1/4 translate-y-1/4"\n      >\n        <div className="aspect-square w-[50rem] rounded-full bg-gradient-to-tr from-[#04CFF9] to-[#028bfa] opacity-20" />\n      </div>',
    '<div\n          aria-hidden="true"\n          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 transform-gpu blur-[120px] pointer-events-none"\n        >\n          <div className="aspect-[1.5] w-[45rem] rounded-full bg-[#04CFF9] opacity-[0.15]" />\n        </div>'
];

for(const chunk of toRemove) {
    content = content.replace(chunk, '');
}

// Ensure the divider glow is removed
content = content.replace(/<div className="absolute left-1\/2 top-1\/2 -translate-x-1\/2 -translate-y-1\/2 w-64 h-16 bg-\[#04CFF9\]\/10 blur-3xl rounded-full pointer-events-none"><\/div>/g, '');

fs.writeFileSync('src/pages/Home.tsx', content);

