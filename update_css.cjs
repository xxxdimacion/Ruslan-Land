const fs = require('fs');
let content = fs.readFileSync('src/index.css', 'utf-8');
content += `
body {
    background-color: #111111;
    color: white;
}
* {
    border-color: rgba(255, 255, 255, 0.1);
}
.bg-white {
    background-color: #222222;
    color: white;
}
.text-black {
    color: white;
}
`;
fs.writeFileSync('src/index.css', content);
