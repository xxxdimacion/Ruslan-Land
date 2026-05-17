const fs = require('fs');
let content = fs.readFileSync('src/pages/Home.tsx', 'utf-8');

// Also removing GridBackground since glassmorphism replaces text-based structure nicely
content = content.replace(/<GridBackground \/>/g, '');

content = content.replace(
  /\{\/\* Bottom Glow \*\/\}/,
  `{/* Cases Glow */}
      <div
        aria-hidden="true"
        className="absolute top-[60%] left-0 -z-10 transform-gpu blur-[120px] pointer-events-none -translate-x-1/3 w-[60rem] aspect-square rounded-full bg-gradient-to-tr from-[#505F52] to-[#7f9482] opacity-20"
      />

      {/* Bottom Glow */}`
);

fs.writeFileSync('src/pages/Home.tsx', content);
