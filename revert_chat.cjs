const fs = require('fs');
let content = fs.readFileSync('src/pages/Home.tsx', 'utf8');

const regex = /<motion\.div\s+initial=\{\{\s*opacity:\s*0,\s*y:\s*40,\s*filter:\s*'blur\(10px\)'\s*\}\}[\s\S]*?<\/motion\.div>/;

const videoUI = `
        <motion.div 
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-full aspect-[16/10] sm:aspect-video rounded-xl sm:rounded-2xl overflow-hidden bg-white/5 border border-white/10 shadow-2xl z-10 mt-12 group flex items-center justify-center cursor-pointer"
        >
          {/* Macbook Pro base simulation */}
          <div className="absolute top-0 w-full h-4 sm:h-6 bg-[#222222] border-b border-white/10 flex items-center justify-center z-20">
            <div className="w-16 sm:w-24 h-2 sm:h-3 bg-[#111111] rounded-b-md shadow-inner"></div>
          </div>
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#04CFF9] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(4,207,249,0.5)] group-hover:scale-110 transition-transform cursor-pointer z-30">
            <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-[#111111] border-b-[10px] border-b-transparent ml-1"></div>
          </div>
        </motion.div>
`;

content = content.replace(regex, videoUI);
fs.writeFileSync('src/pages/Home.tsx', content);
