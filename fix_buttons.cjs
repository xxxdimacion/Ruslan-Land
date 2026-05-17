const fs = require('fs');

let content = fs.readFileSync('src/pages/Home.tsx', 'utf-8');

// Replace top buttons
content = content.replace(
  'className="rounded-md bg-[#D9520E] hover:bg-[#B9420B] px-5 py-2.5 text-sm font-medium text-white transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(217,82,14,0.4)] uppercase tracking-wide"',
  'className="rounded-md bg-[#505F52] hover:bg-[#3D493E] px-5 py-2.5 text-sm font-medium text-white transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(80,95,82,0.4)] uppercase tracking-wide"'
);

// Mobile button
content = content.replace(
  'className="mt-4 w-fit self-start bg-[#D9520E] hover:bg-[#B9420B] text-white font-medium py-3 px-6 rounded-md text-lg transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(217,82,14,0.4)] uppercase tracking-wide text-center"',
  'className="mt-4 w-fit self-start bg-[#505F52] hover:bg-[#3D493E] text-white font-medium py-3 px-6 rounded-md text-lg transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(80,95,82,0.4)] uppercase tracking-wide text-center"'
);

// Hero button
content = content.replace(
  'className="mt-24 sm:mt-36 bg-[#D9520E] hover:bg-[#B9420B] text-white font-bold py-4 px-10 sm:px-16 rounded-md text-lg sm:text-xl transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(217,82,14,0.5)] uppercase tracking-wide w-full sm:w-auto"',
  'className="mt-24 sm:mt-36 bg-[#505F52] hover:bg-[#3D493E] text-white font-bold py-4 px-10 sm:px-16 rounded-md text-lg sm:text-xl transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(80,95,82,0.5)] uppercase tracking-wide w-full sm:w-auto"'
);

// Marquee
content = content.replace(
  '<div className="w-full bg-[#D9520E] py-4 overflow-hidden flex whitespace-nowrap">',
  '<div className="w-full bg-[#505F52] py-4 overflow-hidden flex whitespace-nowrap">'
);

fs.writeFileSync('src/pages/Home.tsx', content);
