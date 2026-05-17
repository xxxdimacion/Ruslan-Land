const fs = require('fs');
let content = fs.readFileSync('src/pages/Home.tsx', 'utf8');

// The glows we want to add back at the beginning of the min-h-screen div
const glows = `
      {/* Top Glow */}
      <div
        aria-hidden="true"
        className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-[100px] sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)] pointer-events-none"
      >
        <div className="aspect-[1.5] w-[60rem] rounded-full bg-gradient-to-r from-[#04CFF9] to-[#028bfa] opacity-30" />
      </div>

      {/* Middle Glow */}
      <div
        aria-hidden="true"
        className="absolute top-[20%] left-1/4 -z-10 transform-gpu blur-[120px] pointer-events-none"
      >
        <div className="aspect-square w-[40rem] rounded-full bg-gradient-to-tr from-[#04CFF9] to-[#028bfa] opacity-20" />
      </div>

      {/* Right Glow */}
      <div
        aria-hidden="true"
        className="absolute top-[40%] right-0 -z-10 transform-gpu blur-[120px] pointer-events-none translate-x-1/3"
      >
        <div className="aspect-square w-[50rem] rounded-full bg-gradient-to-l from-[#04CFF9] to-[#028bfa] opacity-20" />
      </div>

      {/* Left Bottom Glow */}
      <div
        aria-hidden="true"
        className="absolute top-[60%] left-0 -z-10 transform-gpu blur-[120px] pointer-events-none -translate-x-1/3 w-[60rem] aspect-square rounded-full bg-gradient-to-tr from-[#04CFF9] to-[#028bfa] opacity-20"
      />

      {/* Bottom Right Glow */}
      <div
        aria-hidden="true"
        className="absolute top-[75%] right-1/4 -z-10 transform-gpu blur-[140px] pointer-events-none translate-x-1/4"
      >
        <div className="aspect-square w-[55rem] rounded-full bg-gradient-to-l from-[#04CFF9] to-[#028bfa] opacity-20" />
      </div>
      
      {/* Noise Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay"></div>
`;

// Insert the glows right after the wrapper div opening tag:
// <div className="min-h-screen bg-[#111111] text-white font-['Montserrat'] selection:bg-[#04CFF9] selection:text-white relative overflow-hidden">

const wrapperStart = content.indexOf('<div className="min-h-screen');
const wrapperEnd = content.indexOf('>', wrapperStart) + 1;

content = content.substring(0, wrapperEnd) + glows + content.substring(wrapperEnd);

// Ensure the divider has its glow
content = content.replace(
  /<div className="absolute left-1\/2 top-1\/2 -translate-x-1\/2 -translate-y-1\/2 w-3\/4 max-w-4xl h-\[1px\] bg-gradient-to-r from-transparent via-\[#04CFF9\]\/50 to-transparent"><\/div>/g,
  '<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-16 bg-[#04CFF9]/10 blur-[100px] rounded-full pointer-events-none"></div>\n      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-[#04CFF9]/50 to-transparent"></div>'
);

fs.writeFileSync('src/pages/Home.tsx', content);
