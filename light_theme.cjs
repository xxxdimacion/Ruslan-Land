const fs = require('fs');

let content = fs.readFileSync('src/pages/Home.tsx', 'utf-8');

// Global backgrounds
content = content.replace(/bg-\[#0C0F0E\]/g, 'bg-[#FAFAFA]'); // Page background
content = content.replace(/text-\[#E4EBE7\]/g, 'text-stone-900'); // Main text

// Header
content = content.replace(/bg-\[#161B18\]\/70/g, 'bg-white/80'); // Nav bar
content = content.replace(/border-white\/5/g, 'border-stone-200'); // Borders
content = content.replace(/text-stone-300/g, 'text-stone-600'); 
content = content.replace(/hover:text-white/g, 'hover:text-stone-900');
content = content.replace(/text-stone-400/g, 'text-stone-500');

// Hero section
content = content.replace(/text-white\/90/g, 'text-stone-600');
content = content.replace(/<strong className="text-white font-bold">/g, '<strong className="text-stone-900 font-bold">');
content = content.replace(/<strong className="text-white">/g, '<strong className="text-stone-900">');
content = content.replace(/<strong className="font-medium text-white">/g, '<strong className="font-medium text-stone-900">');

// Video Player
content = content.replace(/bg-\[#090B0A\]/g, 'bg-stone-50'); // frame container
content = content.replace(/border-stone-800/g, 'border-stone-300'); // frame border
content = content.replace(/bg-stone-800/g, 'bg-stone-400'); // notch
content = content.replace(/bg-gradient-to-b from-stone-400 to-stone-600/g, 'bg-gradient-to-b from-stone-200 to-stone-300'); // frame base
content = content.replace(/bg-stone-500/g, 'bg-stone-400'); // thumb notch

// Marquee
content = content.replace(/bg-\[#161B18\]/g, 'bg-white'); // also fixes checkout cards
content = content.replace(/text-white font-black/g, 'text-stone-900 font-black');

// Cards
content = content.replace(/bg-\[#161B18\]\/80/g, 'bg-white'); // cases cards
content = content.replace(/bg-\[#232A26\]/g, 'bg-stone-100'); // numbers in cards
content = content.replace(/hover:bg-\[#1E2420\]/g, 'hover:bg-stone-50'); // accordion hover
content = content.replace(/bg-black\/20/g, 'bg-stone-100'); // small icon wrappers

// Grids / lines
content = content.replace(/stroke-white\/10/g, 'stroke-stone-200');
content = content.replace(/stroke-white\/5/g, 'stroke-stone-200');
content = content.replace(/fill-stone-800\/20/g, 'fill-stone-100/50');
content = content.replace(/bg-gradient-to-r from-transparent via-\[#505F52\]\/50 to-transparent/g, 'bg-gradient-to-r from-transparent via-[#505F52] to-transparent');

// Text specific for light theme
content = content.replace(/<span className="text-white">/g, '<span className="text-stone-900">');

// Checkout secondary button
content = content.replace(/bg-\[#1C221E\] hover:bg-\[#232A26\] border/g, 'bg-stone-100 hover:bg-stone-200 border');
content = content.replace(/text-white\/60/g, 'text-stone-500');

// Use proper text coloring for general "text-white" instances:
content = content.replace(/text-white/g, 'text-stone-900');

// BUT revert text color for buttons that should stay text-white:
content = content.replace(/'text-stone-900'/g, "'text-white'"); // in case there were literal strings
content = content.replace(/bg-\[#505F52\] hover:bg-\[#3D493E\] text-stone-900/g, 'bg-[#505F52] hover:bg-[#3D493E] text-white');
content = content.replace(/bg-\[#D9520E\] hover:bg-\[#B9420B\] text-stone-900/g, 'bg-[#D9520E] hover:bg-[#B9420B] text-white');

// Special pricing block
content = content.replace(/bg-\[#1D1B16\]/g, 'bg-[#FFF7F2]'); // Orange tinted background for lifetime
content = content.replace(/text-\[#505F52\] font-bold/g, 'text-[#505F52] font-bold'); // remains the same
content = content.replace(/text-stone-900 font-normal/g, 'text-stone-700 font-normal');

// Navigation logo fix - maybe the logo is white and needs to be black or green? 
// The logo is defined in Logo.tsx. We don't touch it here.

fs.writeFileSync('src/pages/Home.tsx', content);
