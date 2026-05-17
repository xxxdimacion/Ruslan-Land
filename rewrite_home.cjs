const fs = require('fs');

let content = fs.readFileSync('src/pages/Home.tsx', 'utf-8');

// Global styling replacements for dark theme and cyan accent
const replacements = [
  ['bg-[#EBEBEB]', 'bg-[#111111]'],
  ['text-black', 'text-white'],
  ['import { Logo } from \'../components/Logo\';', 'import { Logo } from \'../components/Logo\';\nimport { ArrowRight } from \'lucide-react\';'],
  ['selection:bg-[#505F52]', 'selection:bg-[#04CFF9]'],
  ['selection:text-black', 'selection:text-[#111111]'],
  ['from-[#505F52]', 'from-[#04CFF9]'],
  ['to-[#7f9482]', 'to-[#028bfa]'],
  ['from-stone-400 to-stone-500', 'from-[#04CFF9] to-[#028bfa]'],
  ['bg-gradient-to-l from-[#505F52] to-[#607262]', 'bg-gradient-to-l from-[#04CFF9] to-[#028bfa]'],
  ['bg-[#D9520E]', 'bg-[#04CFF9]'],
  ['shadow-[#505F52]/20', 'shadow-[#04CFF9]/20'],
  ['bg-[#505F52]', 'bg-[#04CFF9]'],
  ['hover:bg-[#3D493E]', 'hover:bg-[#02a0c4]'],
  ['text-[#D9520E]', 'text-[#04CFF9]'],
  ['shadow-[0_0_20px_rgba(80,95,82,0.5)]', 'shadow-[0_0_20px_rgba(4,207,249,0.5)]'],
  ['shadow-[0_0_20px_rgba(80,95,82,0.4)]', 'shadow-[0_0_20px_rgba(4,207,249,0.4)]'],
  ['bg-white/60', 'bg-[#1C1C1C]'],
  ['border-stone-200', 'border-white/10'],
  ['bg-stone-100', 'bg-[#2A2A2A]'],
  ['bg-white', 'bg-[#222222]'],
  ['hover:bg-stone-50', 'hover:bg-[#2A2A2A]'],
  ['hover:text-[#505F52]', 'hover:text-[#04CFF9]'],
  ['group-hover:text-[#505F52]', 'group-hover:text-[#04CFF9]'],
  ['group-hover:bg-[#505F52]/10', 'group-hover:bg-[#04CFF9]/10'],
  ['text-[#505F52]', 'text-[#04CFF9]'],
  ['border-[#D9520E]/50', 'border-[#04CFF9]/50'],
  ['Вазир', 'Руслан'],
  ['vazirbbv', 'ruslik_bazanul'],
  ['stroke-stone-200', 'stroke-white/10'],
  ['fill-stone-100/50', 'fill-white/5'],
  ['text-stone-900', 'text-white/90'],
  ['text-stone-600', 'text-white/60'],
  ['bg-[#FAFAFA]', 'bg-[#111111]'],
  ['backdrop-blur-xl', 'backdrop-blur-2xl'],
  ['border-stone-200/50', 'border-white/5']
];

for (const [search, replace] of replacements) {
    // using split and join to replace all occurrences
    content = content.split(search).join(replace);
}

// Add the Chat UI to the hero section instead of the video
const chatUI = `
        <motion.div 
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-full z-10 flex flex-col items-center px-4 sm:px-0 mt-12"
        >
          <div className="bg-[#E5E5E5] w-full max-w-2xl rounded-[40px] p-8 sm:p-12 shadow-2xl relative">
            <div className="flex flex-col gap-4 relative">
              <div className="bg-white text-black px-6 py-4 rounded-full self-start font-bold text-lg shadow-sm">
                Рынок за несколько лет менялся
              </div>
              
              <div className="flex justify-between items-center relative">
                <div className="bg-[#111111] text-white px-6 py-5 rounded-[24px] self-start max-w-[85%] font-medium text-lg leading-snug">
                  Проблемы в таргете тоже меняются и сейчас серьезный бизнес с бюджетом 2000-3000$
                </div>
                {/* Floating widget inside chat context */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[15%] bg-white rounded-[24px] px-6 py-4 shadow-xl z-20">
                  <div className="text-[#505F52] text-xl font-bold">5 488,89 $</div>
                  <div className="text-gray-400 text-sm mt-1">Общие расходы</div>
                </div>
              </div>

              <div className="bg-[#111111] text-white px-6 py-5 rounded-[24px] rounded-tl-[8px] self-start w-full max-w-full font-medium text-lg leading-snug">
                Просто не может позволить выбрать дурачка с навыком, которому он научился 3 года назад и не улучшал его
              </div>

              <div className="flex items-center justify-between w-full mt-4">
                <div className="flex gap-2">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <ArrowRight className="text-black w-6 h-6" />
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <ArrowRight className="text-black w-6 h-6" />
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <ArrowRight className="text-black w-6 h-6" />
                  </div>
                </div>
                <div className="bg-white text-black px-6 py-5 rounded-[24px] font-bold text-lg shadow-sm max-w-[240px] leading-snug">
                  Это слишком дорого и вот почему
                </div>
              </div>

            </div>
          </div>
          <div className="mt-8 flex items-center justify-between w-full max-w-2xl">
            <div className="px-6 py-3 rounded-full border border-white/20 text-white font-medium">
              ruslik_bazanul
            </div>
            <div className="w-16 h-[1px] bg-white/20 relative">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white/40"></div>
            </div>
          </div>
        </motion.div>
`;

const videoStart = content.indexOf('<div className="relative w-full aspect-[16/10]');
const videoEnd = content.indexOf('</div>', content.indexOf('<div className="w-16 sm:w-24 h-1.5 sm:h-2 bg-stone-900 rounded-b-md shadow-inner"></div>')) + 6;

if (videoStart !== -1 && videoEnd !== -1) { // removing video part, putting chatUI
    content = content.substring(0, videoStart) + chatUI + content.substring(videoEnd + '</div>\n            </div>'.length);
}

// Remove the MacBook Pro Notch and base divs manually if string matching slightly mismatched
content = content.replace(/<div className="relative w-full max-w-4xl mx-auto flex flex-col items-center mt-8">[\s\S]*?<motion\.button/, '<div className="relative w-full max-w-4xl mx-auto flex flex-col items-center mt-8">\n' + chatUI + '\n          <motion.button');

// Make text readability better for dark theme
content = content.split('text-black max-w-4xl mx-auto').join('text-white max-w-4xl mx-auto');
content = content.split('className="text-black font-bold"').join('className="text-white font-bold"');

fs.writeFileSync('src/pages/Home.tsx', content);
