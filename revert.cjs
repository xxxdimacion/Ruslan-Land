const fs = require('fs');

const files = [
    'src/pages/Home.tsx',
    'src/pages/Disclaimer.tsx', 
    'src/pages/Offer.tsx', 
    'src/pages/Privacy.tsx'
];

for (const file of files) {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        
        content = content.replace(/bg-black/g, 'bg-[#111111]');
        content = content.replace(/text-black/g, 'text-[#111111]');
        content = content.replace(/bg-\[#161617\]/g, 'bg-[#1C1C1C]');
        content = content.replace(/bg-\[#1D1D1F\]/g, 'bg-[#222222]');
        content = content.replace(/bg-\[#2C2C2E\]/g, 'bg-[#2A2A2A]');
        content = content.replace(/font-sans antialiased/g, "font-['Montserrat']");
        
        fs.writeFileSync(file, content);
    }
}
