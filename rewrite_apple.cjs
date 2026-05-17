const fs = require('fs');
let content = fs.readFileSync('src/pages/Home.tsx', 'utf8');

// Remove the glowing elements (identified by blur-[120px], etc.)
const glowRegex = /\{\/\*.*?Glow.*?\*\/\}[\s\S]*?<div[\s\S]*?blur-\[\d+px\][\s\S]*?<\/div>(\s*<\/div>)?/gi;
// Also remove single line forms of glows
const glowDivRegex = /<div[^>]*blur-\[\d+px\][^>]*bg-gradient[^>]*>[\s\S]*?<\/div>/gi;
const simpleGlowRegex = /<div[^>]*blur-\[\d+px\][^>]*>[\s\S]*?<\/div>/gi;

content = content.replace(/\{\/\* .*?Glows? \*\/\}/gi, '');
content = content.replace(/<div(?:(?!<div)[\s\S])*?blur-\[\d+px\](?:(?!<div)[\s\S])*?<\/div>/gi, '');
content = content.replace(/<div(?:(?!<div)[\s\S])*?blur-3xl(?:(?!<div)[\s\S])*?<\/div>/gi, '');

// Colors
content = content.split('bg-[#111111]').join('bg-black');
content = content.split('bg-[#1C1C1C]').join('bg-[#161617]');
content = content.split('bg-[#222222]').join('bg-[#1D1D1F]');
content = content.split('bg-[#2A2A2A]').join('bg-[#2C2C2E]');
content = content.split('border-white/10').join('border-white/10');
content = content.split('font-[\'Montserrat\']').join('font-sans antialiased'); // Let Tailwind use system-ui

fs.writeFileSync('src/pages/Home.tsx', content);

let css = fs.readFileSync('src/index.css', 'utf8');
css = css.split('#111111').join('#000000');
css = css.split('#222222').join('#1D1D1F');
fs.writeFileSync('src/index.css', css);

const files = ['src/pages/Disclaimer.tsx', 'src/pages/Offer.tsx', 'src/pages/Privacy.tsx'];
for (const file of files) {
    if (fs.existsSync(file)) {
        let text = fs.readFileSync(file, 'utf8');
        text = text.split('bg-[#111111]').join('bg-black');
        text = text.split('bg-[#1C1C1C]').join('bg-[#161617]');
        text = text.split('font-[\'Montserrat\']').join('font-sans antialiased');
        fs.writeFileSync(file, text);
    }
}
