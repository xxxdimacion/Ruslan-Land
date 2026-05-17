const fs = require('fs');

let content = fs.readFileSync('src/pages/Home.tsx', 'utf-8');

// Max width alignment
content = content.replace(/max-w-3xl/g, 'max-w-4xl');

// Section Program
content = content.replace(
  /<h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">Что внутри\?<\/h2>/,
  '<div className="bg-white/60 backdrop-blur-xl border border-stone-200 p-6 md:p-12 rounded-[2rem] sm:rounded-[3rem] shadow-sm">\n        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">Что внутри?</h2>'
);
content = content.replace(
  /<\/div>\n      <\/motion\.section>\n\n      \{\/\* Block: Cases \*\/\}/,
  '</div>\n        </div>\n      </motion.section>\n\n      {/* Block: Cases */}'
);

// Section Cases
content = content.replace(
  /className="py-16 md:py-24 bg-stone-50 relative"/,
  'className="py-16 md:py-24 relative pt-12"'
);

// We can add a top border to cases to separate them cleanly, or maybe an olive border?
content = content.replace(/<GridBackground \/>/, '');

// Section FAQ
content = content.replace(
  /<h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">Частые вопросы<\/h2>/,
  '<div className="bg-white/60 backdrop-blur-xl border border-stone-200 p-6 md:p-12 rounded-[2rem] sm:rounded-[3rem] shadow-sm">\n        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">Частые вопросы</h2>'
);

content = content.replace(
  /<\/div>\n      <\/motion\.section>\n\n      \{\/\* Block 4: Checkout \*\/\}/,
  '</div>\n        </div>\n      </motion.section>\n\n      {/* Block 4: Checkout */}'
);

fs.writeFileSync('src/pages/Home.tsx', content);
