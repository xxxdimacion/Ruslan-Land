const fs = require('fs');

let content = fs.readFileSync('src/pages/Disclaimer.tsx', 'utf-8');
content = content.replace(/TRAFF/g, 'Академией');
content = content.replace(/приобретая Академией/g, 'приобретая Академию'); 
content = content.replace(/в нём/g, 'в ней'); 
fs.writeFileSync('src/pages/Disclaimer.tsx', content);
