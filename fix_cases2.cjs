const fs = require('fs');

let content = fs.readFileSync('src/pages/Home.tsx', 'utf-8');

// 1. Bold the contact link 
content = content.replace(
  /<a href="https:\/\/t.me\/vazirbbv" target="_blank" rel="noopener noreferrer" className="text-\[#505F52\] hover:underline">@vazirbbv<\/a>/,
  '<a href="https://t.me/vazirbbv" target="_blank" rel="noopener noreferrer" className="text-[#505F52] hover:underline font-bold">@vazirbbv</a>'
);

// 2. Change section title
content = content.replace(/Кейсы участников/g, 'Мои кейсы');

// In navigation menu
content = content.replace(/>Кейсы</g, '>Мои кейсы<');

// 3. Replace grid
const oldGrid = content.match(/<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">([\s\S]*?)<\/div>\s*<\/div>\s*<\/motion\.section>/);

if (oldGrid) {
  const replacementGrid = `<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 30, filter: 'blur(5px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="bg-white/80 border border-stone-200 rounded-2xl p-6 flex flex-col gap-4"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-stone-200 rounded-full flex items-center justify-center text-xl font-bold">1</div>
                <div>
                  <h3 className="font-bold text-lg">Проект 1</h3>
                  <p className="text-[#505F52] font-medium">Результат кейса</p>
                </div>
              </div>
              <div className="text-black text-sm space-y-2">
                <p>Описание моего проекта, как я привлекал трафик и к каким результатам это привело.</p>
              </div>
              <div className="mt-auto bg-stone-100 rounded-lg aspect-video flex items-center justify-center border border-stone-200 text-stone-400">
                Скриншот или видео
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30, filter: 'blur(5px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="bg-white/80 border border-stone-200 rounded-2xl p-6 flex flex-col gap-4"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-stone-200 rounded-full flex items-center justify-center text-xl font-bold">2</div>
                <div>
                  <h3 className="font-bold text-lg">Проект 2</h3>
                  <p className="text-[#505F52] font-medium">Результат кейса</p>
                </div>
              </div>
              <div className="text-black text-sm space-y-2">
                <p>Описание моего проекта, как я привлекал трафик и к каким результатам это привело.</p>
              </div>
              <div className="mt-auto bg-stone-100 rounded-lg aspect-video flex items-center justify-center border border-stone-200 text-stone-400">
                Скриншот или видео
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30, filter: 'blur(5px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="bg-white/80 border border-stone-200 rounded-2xl p-6 flex flex-col gap-4"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-stone-200 rounded-full flex items-center justify-center text-xl font-bold">3</div>
                <div>
                  <h3 className="font-bold text-lg">Проект 3</h3>
                  <p className="text-[#505F52] font-medium">Результат кейса</p>
                </div>
              </div>
              <div className="text-black text-sm space-y-2">
                <p>Описание моего проекта, как я привлекал трафик и к каким результатам это привело.</p>
              </div>
              <div className="mt-auto bg-stone-100 rounded-lg aspect-video flex items-center justify-center border border-stone-200 text-stone-400">
                Скриншот или видео
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>`;

  content = content.replace(oldGrid[0], replacementGrid);
}

fs.writeFileSync('src/pages/Home.tsx', content);
