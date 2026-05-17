const fs = require('fs');

let content = fs.readFileSync('src/pages/Home.tsx', 'utf-8');

// Checkout
content = content.replace(
  /<div className="text-center w-full max-w-4xl mx-auto">/,
  '<div className="text-center w-full max-w-4xl mx-auto bg-white/60 backdrop-blur-xl border border-stone-200 p-6 sm:p-12 rounded-[2rem] sm:rounded-[3rem] shadow-sm">'
);

// We need to find the end of checkout properly.
// The end of checkout is </motion.section>
content = content.replace(
  /<\/div>\n      <\/motion\.section>\n\n      <footer/,
  '</div>\n      </motion.section>\n\n      <footer' // wait, we just wrapped the same div, no need to add </div> because we replaced the opening tag of an existing div.
);

fs.writeFileSync('src/pages/Home.tsx', content);
