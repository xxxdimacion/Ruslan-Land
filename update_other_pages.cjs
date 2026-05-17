const fs = require('fs');

const files = [
    'src/pages/Disclaimer.tsx', 
    'src/pages/Offer.tsx', 
    'src/pages/Privacy.tsx'
];

for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Global styling replacements for dark theme and cyan accent
    const replacements = [
        ['bg-[#FAFAFA]', 'bg-[#111111]'],
        ['bg-[#EBEBEB]', 'bg-[#111111]'],
        ['text-black', 'text-white/90'],
        ['selection:bg-[#505F52]', 'selection:bg-[#04CFF9]'],
        ['selection:text-black', 'selection:text-[#111111]'],
        ['text-[#505F52]', 'text-[#04CFF9]'],
        ['bg-white', 'bg-[#1C1C1C]'],
        ['border-stone-200', 'border-white/10'],
        ['bg-stone-50', 'bg-[#111111]'],
    ];

    for (const [search, replace] of replacements) {
        content = content.split(search).join(replace);
    }
    
    fs.writeFileSync(file, content);
}
