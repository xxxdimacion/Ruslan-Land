import React, { useState, useId, useCallback, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import useEmblaCarousel from "embla-carousel-react";
import { Link } from "react-router-dom";
import { Logo } from "../components/Logo";
import { ArrowRight } from "lucide-react";

const GalleryCarousel = ({
  images,
  title,
  aspectClass = "aspect-[3/4]",
  itemWidthClass = "flex-[0_0_80%] sm:flex-[0_0_280px]",
  imgClass = "object-cover",
  autoWidth = false,
  autoHeightClass = "h-[220px] sm:h-[350px] lg:h-[400px]",
}: {
  images: string[];
  title?: React.ReactNode;
  aspectClass?: string;
  itemWidthClass?: string;
  imgClass?: string;
  autoWidth?: boolean;
  autoHeightClass?: string;
}) => {
  const [emblaRef] = useEmblaCarousel({
    dragFree: true,
    containScroll: "trimSnaps",
  });

  return (
    <div className="w-full flex flex-col gap-6 mb-12 last:mb-0">
      {title && <h3 className="text-2xl font-bold px-2">{title}</h3>}
      <div
        className="overflow-hidden w-full cursor-grab active:cursor-grabbing"
        ref={emblaRef}
      >
        <div className="flex gap-4 items-center">
          {images.map((src, idx) => (
            <div
              className={
                autoWidth
                  ? `flex-[0_0_auto] min-w-0 flex items-center justify-center relative ${autoHeightClass}`
                  : `${itemWidthClass} min-w-0 relative ${aspectClass} rounded-2xl overflow-hidden shadow-sm`
              }
              key={idx}
            >
              <img
                src={src}
                alt={`Slide ${idx + 1}`}
                className={
                  autoWidth
                    ? "block max-h-full max-w-[85vw] sm:max-w-none w-auto h-auto pointer-events-none rounded-2xl shadow-sm"
                    : `w-full h-full pointer-events-none ${imgClass}`
                }
                referrerPolicy="no-referrer"
                draggable="false"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ImageCarousel = ({ images }: { images: string[] }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-gray-900 group shadow-sm">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((src, idx) => (
            <div className="flex-[0_0_100%] min-w-0" key={idx}>
              <img
                src={src}
                alt={`Slide ${idx + 1}`}
                className="w-full h-auto object-cover pointer-events-none"
                referrerPolicy="no-referrer"
                draggable="false"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={(e) => {
              e.stopPropagation();
              scrollTo(idx);
            }}
            className={`w-2 h-2 rounded-full transition-colors ${
              selectedIndex === idx ? "bg-stone-300" : "bg-stone-600"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    id: string,
  ) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-gray-900 font-['Montserrat'] selection:bg-[#04CFF9] selection:text-white relative overflow-hidden">
      {/* Global Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <GridBackground className="[mask-image:none]" />
      </div>
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 w-full z-50 bg-[#FAFAFA] border-b-2 border-gray-900">
        <header className="pointer-events-auto px-4 py-4 sm:px-8 sm:py-6 flex items-center justify-between w-full max-w-7xl mx-auto transition-all">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={(e) => scrollToSection(e, "hero")}
          >
            <img
              src="https://i.ibb.co/KjBKKxBh/photo-2026-05-16-19-31-22.jpg"
              alt="Logo"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
            />
            <span className="font-bold text-[15px] sm:text-lg tracking-tight text-gray-900">
              Руслик Базанул
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <button
              onClick={(e) => scrollToSection(e, "about")}
              className="text-sm font-semibold text-gray-900 hover:text-[#04CFF9] transition-colors"
            >
              Кто я?
            </button>
            <button
              onClick={(e) => scrollToSection(e, "program")}
              className="text-sm font-semibold text-gray-900 hover:text-[#04CFF9] transition-colors"
            >
              Что внутри?
            </button>
            <button
              onClick={(e) => scrollToSection(e, "faq")}
              className="text-sm font-semibold text-gray-900 hover:text-[#04CFF9] transition-colors"
            >
              FAQ
            </button>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={(e) => scrollToSection(e, "checkout")}
              className="hidden sm:block text-sm font-bold bg-[#04CFF9] text-gray-900 px-6 py-2.5 rounded-full hover:bg-gray-900 hover:text-[#04CFF9] transition-all"
            >
              Вступить
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-full text-gray-900 border border-transparent hover:border-gray-900 transition-colors"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </header>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 right-6 z-50 bg-white border border-gray-900 p-4 rounded-3xl shadow-xl flex flex-col gap-4 min-w-[200px]"
          >
            <button
              onClick={(e) => scrollToSection(e, "hero")}
              className="text-left font-medium hover:text-[#04CFF9] transition-colors"
            >
              Главная
            </button>
            <button
              onClick={(e) => scrollToSection(e, "about")}
              className="text-left font-medium hover:text-[#04CFF9] transition-colors"
            >
              Кто я?
            </button>
            <button
              onClick={(e) => scrollToSection(e, "program")}
              className="text-left font-medium hover:text-[#04CFF9] transition-colors"
            >
              Что внутри?
            </button>
            <button
              onClick={(e) => scrollToSection(e, "cases")}
              className="text-left font-medium hover:text-[#04CFF9] transition-colors"
            >
              Кейсы
            </button>
            <button
              onClick={(e) => scrollToSection(e, "checkout")}
              className="text-left font-medium hover:text-[#04CFF9] transition-colors"
            >
              Тарифы
            </button>
            <button
              onClick={(e) => scrollToSection(e, "faq")}
              className="text-left font-medium hover:text-[#04CFF9] transition-colors"
            >
              FAQ
            </button>
          </motion.div>
        )}
      </AnimatePresence>
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
      <div className="absolute inset-0 z-0 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.10] mix-blend-overlay"></div>

      {/* Noise Overlay */}

      {/* Block 1: Hero Section */}
      <section
        id="hero"
        className="relative pt-24 pb-4 flex flex-col items-center justify-start text-center w-full px-4 sm:px-6 max-w-6xl mx-auto z-10"
      >
        <div className="flex flex-col gap-8 w-full text-left pt-6">
          <motion.div
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full flex-1 flex flex-col justify-center items-center text-center"
          >
            <h1 className="text-[36px] sm:text-[48px] lg:text-[64px] leading-[1.05] font-black tracking-[-0.02em] mb-4 text-gray-900 uppercase">
              Опыт в <span className="relative inline-block whitespace-nowrap text-[#04CFF9] italic">
                100+ проектах
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-800 uppercase tracking-tight mb-6 max-w-3xl text-center">
              который поможет тебе начать делать первые <br />
              <span className="italic underline decoration-[#04CFF9] decoration-4 underline-offset-4">2-3к$ с таргета</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-medium max-w-2xl text-center mb-8">
              <strong className="text-gray-900">Смотри видео -</strong> там я разобрал основные моменты, как войти в таргет на ЛЮБУЮ НИШУ и найти первых клиентов уже через 7 дней
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full max-w-5xl mx-auto flex flex-col items-center"
          >
            <div className="relative w-full">
              {/* Screen */}
              <div className="relative w-full aspect-[16/10] bg-gray-900 border-x-[8px] sm:border-x-[12px] border-t-[8px] sm:border-t-[12px] border-b-[24px] sm:border-b-[32px] border-gray-800 rounded-t-3xl overflow-hidden shadow-2xl">
                {/* Screen Content */}
                <img
                  src="https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?q=80&w=2000&auto=format&fit=crop"
                  className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay grayscale"
                  alt="Background Texture"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#04CFF9] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(4,207,249,0.5)] group-hover:scale-110 transition-transform cursor-pointer z-30">
                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                  </div>
                </div>
                {/* Macbook branding on bottom bezel */}
                <div className="absolute bottom-[-18px] sm:bottom-[-24px] left-1/2 -translate-x-1/2 text-[8px] sm:text-[10px] text-gray-500 font-bold tracking-widest uppercase">
                  MacBook Pro
                </div>
              </div>
              {/* Base */}
              <div className="relative h-4 sm:h-6 bg-gray-300 rounded-b-2xl rounded-t-sm shadow-xl flex justify-center w-[105%] -ml-[2.5%] z-10 border-b-2 border-gray-400">
                <div className="w-24 sm:w-32 h-1.5 sm:h-2 bg-gray-400 rounded-b-md"></div>
              </div>
            </div>

            <button
              onClick={(e) => scrollToSection(e, "checkout")}
              className="mt-12 w-full bg-gray-900 hover:bg-black text-white text-base sm:text-lg font-black uppercase tracking-widest leading-none py-6 rounded-3xl shadow-[4px_4px_0_0_#04CFF9] hover:shadow-[2px_2px_0_0_#04CFF9] hover:translate-y-1 transition-all"
            >
              Вступить
            </button>
          </motion.div>
        </div>
      </section>

      {/* Ticker / Marquee */}
      <div className="w-full relative py-8 lg:py-12 overflow-hidden items-center flex">
        <div className="w-full bg-[#FAFAFA] border-y-2 border-gray-900 py-4 sm:py-6 relative flex overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10 pointer-events-none"></div>

          <div className="flex w-max animate-marquee whitespace-nowrap items-center">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="flex gap-8 sm:gap-16 px-4 sm:px-8 items-center"
              >
                {[
                  "Meta ADS",
                  "Лидген",
                  "Все о креативах",
                  "Кейсы по нишам",
                  "TikTok ADS",
                  "Разборы клиентов",
                  "Созвоны с участниками",
                ].map((item, index) => (
                  <React.Fragment key={index}>
                    <span
                      className={
                        index % 2 === 0
                          ? "text-[#04CFF9] font-black tracking-widest uppercase text-xl sm:text-2xl"
                          : "text-gray-900 font-bold tracking-widest uppercase text-xl sm:text-2xl"
                      }
                    >
                      {item}
                    </span>
                    <span className="w-2.5 h-2.5 rounded-full bg-gray-900"></span>
                  </React.Fragment>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Block 3: Accordion */}
      <div className="w-full relative py-12 md:py-24 overflow-hidden">
        <motion.section
          id="program"
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-6xl mx-auto flex flex-col items-center w-full relative z-10 px-4 sm:px-6"
        >
          <div className="w-full bg-white border-2 border-gray-900 rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-8 lg:p-12 shadow-[4px_4px_0_0_#111827] flex flex-col gap-6 lg:gap-10 items-start">
            <h2 className="text-[40px] md:text-[64px] font-black mb-2 text-gray-900 leading-[1.05] uppercase tracking-tight">
              ЧТО <span className="text-[#04CFF9]">ВНУТРИ?</span>
            </h2>

            <div className="w-full space-y-4">
              <AccordionItem
                title="Техничка по Meta и TikTok ADS"
                content={
                  <div className="space-y-4">
                    <p>
                      Несколько часов лекций, в которых наглядно разобраны все технические моменты, лайфхаки и тд
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>От регистрации кабинетов до первых конверсий</li>
                      <li>Полный сетап: антидетекты, прокси, трекеры, документы</li>
                      <li>Обход банов и проблем с верификацией</li>
                      <li>Примеры залива трафика на разные вертикали с их разбором</li>
                    </ul>
                  </div>
                }
              />
              <AccordionItem
                title="Кейсы по нишам"
                content="30+ скринов успешных заливов по самым разным тематикам, которые вы можете взять чтобы показать потенциальному клиенту и успешно его закрыть!"
              />
              <AccordionItem
                title="Разборы клиентов"
                content="Рассказываю как лил на разных клиентов - от стоматологий до аэрогрилей и инфобиза. Показываю кабинеты, креативы и логику работы с тематиками"
              />
              <AccordionItem
                title="Поиск клиентов"
                content="Рассказываю как ищу клиентов через запуск таргета на себя. Вся схема: креативы, технические моменты запуска и переговоры с клиентами которых я закрыл"
              />
              <AccordionItem
                title="Все о креативах"
                content="Показываю как я делаю все виды креативов, которые круто конвертят - видео, карусели и просто статичные фотки"
              />
              <AccordionItem
                title="Продажи и сервис"
                content="Рассказываю как вести клиентов так, чтобы вести их максимально долго и качественно"
              />
              <AccordionItem
                title="Созвоны"
                content="Ответы на вопросы и разборы ваших ситуаций на регулярных созвонах"
              />
              <AccordionItem
                title="Помощь от Руслана"
                content="Отвечаю на вопросы в чате и помогаю решить ваши проблемки"
              />
            </div>
          </div>
        </motion.section>
      </div>
      {/* Block 4: About Me */}
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full relative py-12 md:py-16 overflow-hidden flex flex-col items-center px-4 sm:px-6"
      >
        <div className="w-full max-w-6xl mx-auto flex flex-col gap-4 sm:gap-6 relative z-10">
          <div className="bg-white border-2 border-gray-900 px-6 py-8 md:py-12 lg:p-16 rounded-[2rem] sm:rounded-[3rem] shadow-[4px_4px_0_0_#111827] flex flex-col items-start relative overflow-hidden">
            <div className="flex flex-col gap-10 items-start w-full">
              <div className="flex flex-col items-start w-full">
                <h2 className="text-[40px] md:text-[64px] font-black mb-6 text-gray-900 leading-[1.05] uppercase tracking-tight">
                  Кто <span className="text-[#04CFF9]">Я?</span>
                </h2>

                <div className="w-full mb-8">
                  <GalleryCarousel
                    images={[
                      "https://i.ibb.co/5DhvJpF/photo-2026-05-17-02-26-09.jpg",
                      "https://i.ibb.co/0pY8NFH5/photo-2026-05-17-02-24-36.jpg",
                      "https://i.ibb.co/r288gPDw/photo-2026-05-16-20-16-04.jpg",
                    ]}
                    autoWidth={true}
                    autoHeightClass="h-[250px] sm:h-[300px] lg:h-[400px]"
                  />
                </div>

                <div className="text-base md:text-lg text-gray-700 leading-relaxed font-medium space-y-4 max-w-3xl">
                  <p>
                    Меня зовут Руслан. мне 27. Я шарю за все популярные фриланс профессии и остановился на таргете, где делаю 3-4к$ в мес
                  </p>
                  <p>
                    Бросил мед ВУЗ и начал жестко фрилансить, так прошло уже 7 лет. Не существует ниши, с которой бы я не работал хотя бы косвенно. Продвигал даже суррогатное материнство
                  </p>
                  <p>
                    Я хочу заработать настолько много денег, чтобы потом дарить квартиры за покупку приватки навсегда
                  </p>
                </div>
              </div>

              <div className="w-full pt-4">
                <div>
                  <GalleryCarousel
                    title={
                      <>
                        <span className="text-[32px] sm:text-[40px] font-black uppercase tracking-tight">
                          Результаты
                        </span>
                      </>
                    }
                    images={[
                      "https://i.ibb.co/vCXQV775/image-735.png",
                      "https://i.ibb.co/MDVpztsv/7283-FF3-C-2775-4495-86-E2-7-B3-E565-A57-A5-1.png",
                      "https://i.ibb.co/bjhh6Lwf/Group-1000011034.png",
                      "https://i.ibb.co/QFfprDP3/Group-1000011033.png",
                    ]}
                    autoWidth={true}
                    autoHeightClass="h-[250px] sm:h-[300px] lg:h-[400px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Block: FAQ Combined */}
      <motion.section
        id="faq"
        initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="pb-12 md:pb-16 px-4 sm:px-6 relative"
      >
        <div className="w-full max-w-6xl mx-auto">
          <div className="bg-white border-2 border-gray-900 rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-10 lg:p-14 flex flex-col lg:flex-row gap-10 items-start shadow-[4px_4px_0_0_#111827]">
            <div className="w-full lg:w-4/12 flex flex-col items-center lg:items-start lg:text-left text-center">
              <h2 className="text-[36px] sm:text-[48px] font-black uppercase text-gray-900 leading-[1.05] tracking-tight mb-6">
                Ответы на <br /> <span className="text-[#04CFF9]">Вопросы</span>
              </h2>
            </div>
            <div className="w-full lg:w-8/12 space-y-4">
              <FaqItem
                title="Подходит ли продукт новичкам?"
                content="Да. Внутри вся информация, чтобы даже новичок нашел первых клиентов уже через неделю"
              />
              <FaqItem
                title="Нужен ли бюджет на старт?"
                content="На старте можно обойтись минимальными вложениями. Для начала вполне хватит 30-50$ на первые заливы на себя"
              />
              <FaqItem
                title="В каком формате выдаются материалы?"
                content="В основном видео-разборы или лекции. Но есть и разделы с текстовыми гайдами"
              />
              <FaqItem
                title="Как часто обновляется информация?"
                content="Мы постоянно работаем над обновлением и пополнением информации"
              />
              <FaqItem
                title="Можно ли гавкать в чате?"
                content="Нет, только мяукать"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Block 4: Checkout */}
      <motion.section
        id="checkout"
        initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="py-12 px-4 sm:px-6 relative min-h-[60vh] flex items-center justify-center"
      >
        <div className="w-full max-w-6xl mx-auto flex flex-col items-center gap-10">
          <div className="flex flex-col items-center text-center gap-6">
            <h2 className="text-[40px] md:text-[56px] font-black uppercase tracking-tight text-gray-900 leading-[1.1]">
              Выбери свой <br className="sm:hidden" />
              <span className="text-[#04CFF9]">тариф</span>
            </h2>
            <p className="text-gray-600 font-medium text-lg leading-relaxed max-w-3xl">
              <strong className="font-bold text-gray-900">Вступай в Академию и закрой первого клиента через 7 дней!</strong>
              <br />
              <br />
              Если остались вопросы, пиши {" "}
              <a
                href="https://t.me/ruseinst"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#04CFF9] hover:underline font-bold"
              >
                @ruseinst
              </a>
              <br />
              <br />
              Отзывы про базу —{" "}
              <a
                href="https://t.me/ruslik_otz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#04CFF9] hover:underline font-bold"
              >
                @ruslik_otz
              </a>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mx-auto">
            <div className="bg-[#EDEBE6] border-2 border-gray-900 p-8 rounded-[2rem] flex flex-col transition-all shadow-[4px_4px_0_0_#111827] h-full">
              <span className="bg-white border border-gray-900 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider inline-flex w-fit mb-6">
                Подписка
              </span>
              <div className="mb-8">
                <span className="text-6xl font-black text-gray-900 tracking-tighter">
                  39$
                </span>
                <span className="text-gray-600 font-bold ml-2 uppercase text-sm">
                  / месяц
                </span>
              </div>
              <ul className="space-y-4 mb-10 flex-1">
                <li className="flex items-start gap-3">
                  <span className="text-gray-900 font-bold">✓</span>{" "}
                  <span className="text-gray-700 font-medium text-sm">
                    Полный доступ ко всем материалам
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-900 font-bold">✓</span>{" "}
                  <span className="text-gray-700 font-medium text-sm">
                    Обновления и новые связки
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-900 font-bold">✓</span>{" "}
                  <span className="text-gray-700 font-medium text-sm">
                    Доступ в закрытое комьюнити
                  </span>
                </li>
              </ul>

              <div className="flex flex-col gap-3 mt-auto">
                <a
                  href="https://t.me/m/VzASGbPMMTgy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900 hover:bg-black text-white font-bold py-4 px-6 rounded-2xl flex flex-col items-center justify-center transition-all border border-gray-900 w-full"
                >
                  <span className="text-sm font-bold uppercase tracking-wide text-center">
                    ОПЛАТИТЬ ПЕРЕВОДОМ
                  </span>
                  <span className="text-[10px] text-white/70 uppercase tracking-wide text-center pt-1">
                    (КАРТА И КРИПТА)
                  </span>
                </a>
                <a
                  href="https://t.me/tribute/app?startapp=sTUj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-gray-100 text-gray-900 border border-gray-900 py-4 px-6 rounded-2xl flex flex-col items-center justify-center transition-all w-full text-center"
                >
                  <span className="text-sm lg:text-xs xl:text-sm font-bold uppercase tracking-wide text-center w-full whitespace-nowrap">
                    ОПЛАТИТЬ ЧЕРЕЗ TRIBUTE
                  </span>
                  <span className="text-[10px] text-gray-600 uppercase tracking-wide text-center pt-1 w-full flex-shrink-0">
                    (Любые карты)
                  </span>
                </a>
              </div>
            </div>

            <div className="bg-[#04CFF9] border-2 border-gray-900 p-8 rounded-[2rem] flex flex-col text-white relative overflow-hidden transition-all shadow-[4px_4px_0_0_#111827] h-full">
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/20 blur-3xl rounded-full pointer-events-none"></div>
              <span className="bg-white border border-gray-900 px-4 py-1.5 rounded-full text-xs font-bold text-gray-900 uppercase tracking-wider inline-flex w-fit mb-6 relative z-10">
                Навсегда
              </span>
              <div className="mb-8 relative z-10">
                <span className="text-[64px] font-black leading-none tracking-tighter">
                  169$
                </span>
              </div>
              <ul className="space-y-4 mb-10 flex-1 relative z-10">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-white">✓</span>{" "}
                  <span className="font-bold text-sm">
                    Консультация 30 минут
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-white">✓</span>{" "}
                  <span className="font-medium text-sm">
                    Бессрочный доступ к Академии
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-white">✓</span>{" "}
                  <span className="font-medium text-sm">
                    Все будущие обновления бесплатно
                  </span>
                </li>
              </ul>

              <div className="flex flex-col gap-3 mt-auto relative z-10">
                <a
                  href="https://t.me/m/CquygeaWOTJi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-gray-100 text-gray-900 font-bold py-4 px-6 rounded-2xl flex flex-col items-center justify-center transition-all border border-gray-900 w-full"
                >
                  <span className="text-sm font-bold uppercase tracking-wide text-center">
                    ОПЛАТИТЬ ПЕРЕВОДОМ
                  </span>
                  <span className="text-[10px] text-gray-500 uppercase tracking-wide text-center pt-1">
                    (КАРТА И КРИПТА)
                  </span>
                </a>
                <a
                  href="https://t.me/tribute/app?startapp=sTUj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900 hover:bg-black text-[#2AABEE] border border-gray-900 py-4 px-6 rounded-2xl flex flex-col items-center justify-center transition-all w-full text-center"
                >
                  <span className="text-sm lg:text-xs xl:text-sm font-bold uppercase tracking-wide text-center w-full whitespace-nowrap">
                    ОПЛАТИТЬ ЧЕРЕЗ TRIBUTE
                  </span>
                  <span className="text-[10px] text-[#2AABEE]/70 uppercase tracking-wide text-center pt-1 w-full flex-shrink-0">
                    (Любые карты)
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Block 5: Footer */}
      <footer className="py-8 px-6 border-t-2 border-gray-900 bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-4">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-gray-600 font-medium text-sm text-center">
            <Link
              to="/disclaimer"
              className="hover:text-gray-900 transition-colors"
            >
              Дисклеймер
            </Link>
            <Link to="/offer" className="hover:text-gray-900 transition-colors">
              Договор оферты
            </Link>
            <Link
              to="/privacy"
              className="hover:text-gray-900 transition-colors"
            >
              Политика конфиденциальности
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function AccordionItem({
  title,
  content,
}: {
  title: string;
  content: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white hover:bg-[#FAFAFA] border-2 border-gray-900 mb-4 rounded-3xl overflow-hidden transition-all duration-300 shadow-[2px_2px_0_0_#111827]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 px-6 md:px-8 flex justify-between items-center text-left focus:outline-none group cursor-pointer"
      >
        <span className="text-xl md:text-2xl font-bold group-hover:text-[#04CFF9] transition-colors uppercase tracking-wide">
          {title}
        </span>
        <div
          className={`flex items-center justify-center w-10 h-10 rounded-full border-2 border-gray-900 shrink-0 ml-4 group-hover:bg-[#04CFF9]/10 transition-colors`}
        >
          <ChevronDown
            className={`w-5 h-5 text-gray-900 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          />
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[2000px] opacity-100 pb-8 px-6 md:px-8" : "max-h-0 opacity-0 px-6 md:px-8"}`}
      >
        <div className="text-gray-700 text-lg leading-relaxed pt-6 border-t border-gray-900">
          {content}
        </div>
      </div>
    </div>
  );
}

function FaqItem({
  title,
  content,
}: {
  title: string;
  content: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white hover:bg-[#FAFAFA] border-2 border-gray-900 mb-4 rounded-3xl overflow-hidden transition-all duration-300 shadow-[2px_2px_0_0_#111827]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 px-6 md:px-8 flex justify-between items-center text-left focus:outline-none group cursor-pointer"
      >
        <span className="text-lg md:text-xl font-bold group-hover:text-[#04CFF9] transition-colors">
          {title}
        </span>
        <div
          className={`flex items-center justify-center w-8 h-8 rounded-full border-2 border-gray-900 group-hover:bg-[#04CFF9]/10 transition-colors shrink-0 ml-4`}
        >
          <ChevronDown
            className={`w-4 h-4 text-gray-900 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          />
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[1000px] opacity-100 pb-6 px-6 md:px-8" : "max-h-0 opacity-0 px-6 md:px-8"}`}
      >
        <div className="text-gray-700 text-base leading-relaxed pt-4 border-t border-gray-900">
          {content}
        </div>
      </div>
    </div>
  );
}

function SectionDivider() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full h-32 relative flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
        <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_50%,transparent)]">
          <svg
            aria-hidden="true"
            className="absolute inset-0 h-full w-full stroke-black/5"
          >
            <defs>
              <pattern
                id="divider-grid"
                width="32"
                height="32"
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 32V.5H32" fill="none" />
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              strokeWidth="0"
              fill="url(#divider-grid)"
            />
          </svg>
        </div>
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-16 bg-[#04CFF9]/10 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-[#04CFF9]/50 to-transparent"></div>
    </motion.div>
  );
}

function GridBackground({
  className = "[mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]",
}: {
  className?: string;
}) {
  const patternId = useId();
  return (
    <svg
      aria-hidden="true"
      className={`absolute inset-0 -z-10 h-full w-full stroke-black/[0.05] ${className}`}
    >
      <defs>
        <pattern
          x="50%"
          y="0"
          id={patternId}
          width="200"
          height="200"
          patternUnits="userSpaceOnUse"
        >
          <path d="M.5 200V.5H200" fill="none" />
        </pattern>
      </defs>
      <svg x="50%" y="0" className="overflow-visible fill-black/[0.02]">
        <path
          d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
          strokeWidth="0"
        />
      </svg>
      <rect
        fill={`url(#${patternId})`}
        width="100%"
        height="100%"
        strokeWidth="0"
      />
    </svg>
  );
}
