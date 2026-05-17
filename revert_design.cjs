const fs = require('fs');

let content = fs.readFileSync('src/pages/Home.tsx', 'utf-8');

// 1. Text color: text-stone-600, text-stone-500 -> text-black for readability
content = content.replace(/text-stone-600/g, 'text-black');
content = content.replace(/text-stone-500/g, 'text-black');
// Only replace stone-400 where it's text
content = content.replace(/text-stone-400/g, 'text-black');

// 2. Header
content = content.replace(
  /<header className="fixed top-4 sm:top-6 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">\n        <div className="w-full max-w-4xl pointer-events-auto">/g,
  '<header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">'
);
content = content.replace(
  /<nav aria-label="Global" className="flex w-full items-center justify-between p-3 px-6 bg-white\/80 backdrop-blur-xl border border-stone-200 rounded-full shadow-2xl">/g,
  '<nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">'
);
content = content.replace(
  /<\/nav>\n        <\/div>\n      <\/header>/g,
  '</nav>\n      </header>'
);

// 3. Marquee
content = content.replace(
  /className="w-full bg-white border-y border-stone-200 py-4 overflow-hidden flex whitespace-nowrap"/g,
  'className="w-full bg-[#505F52] py-4 overflow-hidden flex whitespace-nowrap"'
);
content = content.replace(
  /className="animate-marquee flex gap-8 items-center text-stone-900 font-black text-xl md:text-2xl uppercase tracking-widest"/g,
  'className="animate-marquee flex gap-8 items-center text-white font-black text-xl md:text-2xl uppercase tracking-widest"'
);
content = content.replace(
  /className="animate-marquee2 flex gap-8 items-center text-stone-900 font-black text-xl md:text-2xl uppercase tracking-widest ml-8"/g,
  'className="animate-marquee2 flex gap-8 items-center text-white font-black text-xl md:text-2xl uppercase tracking-widest ml-8"'
);

// 4. Cases
content = content.replace(/rounded-\[2rem\]/g, 'rounded-2xl');
// The numbers in cases
content = content.replace(/bg-stone-100 rounded-full flex items-center justify-center text-xl font-bold/g, 'bg-stone-200 rounded-full flex items-center justify-center text-xl font-bold');

// 5. Payment Cards
content = content.replace(
  /className="bg-white border border-stone-200 p-8 flex flex-col hover:border-\[#505F52\]\/30 transition-colors rounded-\[2.5rem\]"/g,
  'className="bg-white border border-stone-200 p-8 flex flex-col hover:border-[#505F52]/50 transition-colors border-[2px] rounded-3xl"'
);
content = content.replace(
  /className="bg-\[#FFF7F2\] border-\[#D9520E\]\/30 p-8 flex flex-col border relative overflow-hidden rounded-\[2.5rem\]"/g,
  'className="bg-[#D9520E]/5 border-[#D9520E]/50 p-8 flex flex-col border-[2px] relative overflow-hidden rounded-3xl"'
);

// 6. Bottom Buttons
content = content.replace(
  /className="bg-\[#D9520E\] hover:bg-\[#B9420B\] text-white font-semibold py-2.5 px-6 rounded-full transition-all hover:scale-105 hover:shadow-\[0_0_20px_rgba\(217,82,14,0.3\)\] w-full sm:w-auto text-center flex flex-col items-center justify-center"/g,
  'className="bg-[#D9520E] hover:bg-[#B9420B] text-white font-bold py-3 px-8 rounded-md transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(217,82,14,0.4)] w-full sm:w-auto text-center flex flex-col items-center justify-center"'
);
content = content.replace(
  /className="bg-stone-100 hover:bg-stone-200 border border-stone-200 text-stone-900 font-semibold py-2.5 px-6 rounded-full transition-all hover:scale-105 hover:shadow-\[0_0_20px_rgba\(0,0,0,0.05\)\] w-full sm:w-auto text-center flex flex-col items-center justify-center"/g,
  'className="bg-[#505F52] hover:bg-[#3D493E] text-white font-bold py-3 px-8 rounded-md transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(80,95,82,0.4)] w-full sm:w-auto text-center flex flex-col items-center justify-center"'
);
content = content.replace(/<span className="text-sm font-bold uppercase tracking-wide">ОПЛАТИТЬ ПЕРЕВОДОМ<\/span>/g, '<span className="text-base font-bold uppercase tracking-wide">ОПЛАТИТЬ ПЕРЕВОДОМ</span>');
content = content.replace(/<span className="text-sm font-bold uppercase tracking-wide">ОПЛАТИТЬ ЧЕРЕЗ TRIBUTE<\/span>/g, '<span className="text-base font-bold uppercase tracking-wide">ОПЛАТИТЬ ЧЕРЕЗ TRIBUTE</span>');
content = content.replace(/<span className="text-\[10px\] text-white\/80 uppercase tracking-wide block mt-1">\(КАРТА И КРИПТА\)<\/span>/g, '<span className="text-xs text-white/80 mt-0.5 uppercase tracking-wide block">(КАРТА И КРИПТА)</span>');
content = content.replace(/<span className="text-\[10px\] text-black uppercase tracking-wide block mt-1">\(Любые карты\)<\/span>/g, '<span className="text-xs text-white/80 mt-0.5 uppercase tracking-wide block">(Любые карты)</span>');


fs.writeFileSync('src/pages/Home.tsx', content);
