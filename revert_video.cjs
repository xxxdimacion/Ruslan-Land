const fs = require('fs');

let content = fs.readFileSync('src/pages/Home.tsx', 'utf-8');

// Section Accents
content = content.replace(/bg-transparent/g, 'bg-stone-50');

// Video wrapper rounded
content = content.replace(/rounded-t-\[2rem\] sm:rounded-t-\[3rem\]/g, 'rounded-t-xl sm:rounded-t-3xl');
content = content.replace(/rounded-b-\[2rem\] sm:rounded-b-\[3rem\]/g, 'rounded-b-xl sm:rounded-b-2xl');

fs.writeFileSync('src/pages/Home.tsx', content);
