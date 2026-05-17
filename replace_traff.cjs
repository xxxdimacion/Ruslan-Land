const fs = require('fs');

let content = fs.readFileSync('src/pages/Home.tsx', 'utf-8');
content = content.replace(/TRAFF/g, 'АКАДЕМИЮ');
content = content.replace(/АКАДЕМИЮ Video/g, 'Academy Video');
content = content.replace(/<span className="sr-only">АКАДЕМИЮ<\/span>/g, '<span className="sr-only">Академия<\/span>');
content = content.replace(/в АКАДЕМИЮ/g, 'в Академию');
content = content.replace(/Кому подойдет АКАДЕМИЮ\?/g, 'Кому подойдет Академия?');
content = content.replace(/>АКАДЕМИЮ<\/strong>/g, '>Академия</strong>');
fs.writeFileSync('src/pages/Home.tsx', content);
