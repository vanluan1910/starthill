import { useEffect, useId, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const MENU_ITEMS = [
  { label: { en: 'Home', vi: 'Trang chủ', zh: '首页', ko: '홈', ru: 'Главная' }, slide: 0 },
  { label: { en: 'Quick Information', vi: 'Thông tin nhanh', zh: '快速信息', ko: '빠른 정보', ru: 'Быстрая информация' }, slide: 1 },
  { label: { en: 'Wi-Fi & Reception', vi: 'Wi-Fi & Lễ tân', zh: 'Wi-Fi与前台', ko: 'Wi-Fi 및 리셉션', ru: 'Wi-Fi и ресепшн' }, slide: 2 },
  { label: { en: 'House Rules', vi: 'Nội quy', zh: '住宿规定', ko: '숙소 규칙', ru: 'Правила проживания' }, slide: 3 },
  { label: { en: 'Resort Services', vi: 'Dịch vụ resort', zh: '度假村服务', ko: '리조트 서비스', ru: 'Услуги курорта' }, slide: 4 },
  { label: { en: 'Tours & Tickets', vi: 'Tour & Vé', zh: '旅游与门票', ko: '투어 및 티켓', ru: 'Туры и билеты' }, slide: 5 },
  { label: { en: 'Explore Phu Quoc', vi: 'Khám phá Phú Quốc', zh: '探索富国岛', ko: '푸꾸옥 탐험', ru: 'Исследуйте Фукуок' }, slide: 6 },
  { label: { en: 'Local Food', vi: 'Ẩm thực', zh: '当地美食', ko: '현지 음식', ru: 'Местная кухня' }, slide: 7 },
  { label: { en: 'Attractions', vi: 'Điểm tham quan', zh: '景点', ko: '명소', ru: 'Достопримечательности' }, slide: 8 },
  { label: { en: 'Travel Tips', vi: 'Mẹo du lịch', zh: '旅行贴士', ko: '여행 팁', ru: 'Советы путешественникам' }, slide: 9 },
];

const LANGUAGES = [
  { code: 'en', flagImg: '/flags/en.png', name: 'English' },
  { code: 'vi', flagImg: '/flags/vi.png', name: 'Tiếng Việt' },
  { code: 'zh', flagImg: '/flags/zh.png', name: '中文' },
  { code: 'ko', flagImg: '/flags/ko.png', name: '한국어' },
  { code: 'ru', flagImg: '/flags/ru.png', name: 'Русский' },
];

function Header({ currentSlide = 0, onNavigate, lang = 'en', onLangChange }) {
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const items = MENU_ITEMS;
  const isHomeSlide = currentSlide === 0;
  const drawerId = 'mobile-navigation-drawer';
  const desktopLanguageSelectId = useId();
  const mobileLanguageSelectId = useId();
  const activeLanguage = LANGUAGES.find((language) => language.code === lang) || LANGUAGES[0];

  useEffect(() => {
    if (!open && !langOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
        setLangOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, langOpen]);

  const handleNavigate = (slide) => {
    onNavigate?.(slide);
    setOpen(false);
    setLangOpen(false);
  };

  const handleOpenMenu = () => {
    setLangOpen(false);
    setOpen(true);
  };

  const handleToggleLanguage = () => {
    setLangOpen((prev) => {
      const nextOpen = !prev;
      if (nextOpen) setOpen(false);
      return nextOpen;
    });
  };

  const handleSelectLanguage = (nextLang) => {
    onLangChange?.(nextLang);
    setLangOpen(false);
  };

  return (
    <>
      {/* ===== DESKTOP HEADER ===== */}
      <header
        className="hidden md:flex fixed top-0 left-0 right-0 z-50 justify-center border-b border-[#d8c6aa]/45 bg-[#fffaf0]/88 px-4 lg:px-8 py-2.5 backdrop-blur-xl"
      >
        <nav
          className={`flex w-full max-w-[1400px] items-center justify-between gap-3 lg:gap-6 ${
            isHomeSlide ? 'text-white' : 'text-[#2f5551]'
          }`}
          aria-label="Primary navigation"
        >
          <div className="flex flex-1 items-center justify-center gap-2.5 md:gap-3 lg:gap-5 xl:gap-6">
            {items.map((item) => (
              <button
                key={item.slide}
                aria-current={currentSlide === item.slide ? 'page' : undefined}
                className={`whitespace-nowrap border-b-2 px-1 py-1.5 text-xs font-bold transition-all duration-200 lg:text-sm ${
                  currentSlide === item.slide
                    ? isHomeSlide
                      ? 'border-white text-white'
                      : 'border-[#153b39] text-[#153b39]'
                    : isHomeSlide
                      ? 'border-transparent text-white/85 hover:border-white/40 hover:text-white'
                      : 'border-transparent text-[#2f5551] hover:border-[#c8b895] hover:text-[#153b39]'
                }`}
                onClick={() => handleNavigate(item.slide)}
                type="button"
              >
                {item.label[lang] || item.label.en}
              </button>
            ))}
          </div>
          <div className="relative shrink-0">
            <button
              aria-controls={desktopLanguageSelectId}
              aria-expanded={langOpen}
              className={`flex items-center gap-2 rounded-md border px-3 py-1.5 text-xs lg:text-sm font-semibold shadow-sm transition-colors ${
                isHomeSlide
                  ? 'border-white/30 bg-black/25 text-white hover:bg-black/35'
                  : 'border-[#d8c6aa]/70 bg-[#fffdf8] text-[#2f5551] hover:border-[#c8b895] hover:bg-white'
              }`}
              onClick={handleToggleLanguage}
              type="button"
            >
              <span className="material-symbols-outlined text-[18px] opacity-80">language</span>
              <span className="flex min-w-0 flex-1 items-center gap-2 truncate text-left">
                <img alt="" className="h-auto w-5 shrink-0 inline-block" src={activeLanguage.flagImg} />
                <span className="truncate">{activeLanguage.name}</span>
              </span>
              <span className="material-symbols-outlined text-[18px] opacity-70">expand_more</span>
            </button>
            <AnimatePresence>
              {langOpen && (
                <>
                  <motion.div className="fixed inset-0 z-40" onClick={() => setLangOpen(false)} />
                  <motion.div
                    id={desktopLanguageSelectId}
                    aria-label="Language options"
                    className="absolute right-0 z-50 mt-2 min-w-[190px] overflow-hidden rounded-[20px] border border-[#d8c6aa]/70 bg-[#fffdf8] py-2 shadow-[0_18px_38px_rgba(50,34,20,0.18)]"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                  >
                    {LANGUAGES.map((language) => (
                      <button
                        key={language.code}
                        className={`flex w-full items-center gap-3 px-3.5 py-2.5 text-left text-sm font-semibold transition-colors ${
                          language.code === lang
                            ? 'bg-[#efe4d6] text-[#322214]'
                            : 'text-[#2f5551] hover:bg-[#f5efe6] hover:text-[#153b39]'
                        }`}
                        onClick={() => handleSelectLanguage(language.code)}
                        type="button"
                      >
                        <img alt="" className="h-auto w-5 shrink-0 inline-block" src={language.flagImg} />
                        <span className="truncate flex-1">{language.name}</span>
                        {language.code === lang ? <span className="material-symbols-outlined text-[18px] text-[#9a442d]">check</span> : null}
                      </button>
                    ))}
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </nav>
      </header>

      {/* ===== MOBILE: floating hamburger (left) + language dropdown (right) ===== */}
      <div className="md:hidden">
        <button
          aria-controls={drawerId}
          aria-expanded={open}
          aria-label="Menu"
          className={`fixed left-3 top-3 z-50 flex h-11 w-11 items-center justify-center rounded-2xl border shadow-[0_14px_30px_rgba(50,34,20,0.16)] backdrop-blur-xl transition-all duration-200 ${
            currentSlide === 0
              ? 'border-white/30 bg-black/35 text-white hover:bg-black/45'
              : 'border-[#d8c6aa]/70 bg-[#fffdf8]/95 text-[#153b39] hover:bg-white'
          } group`}
          onClick={handleOpenMenu}
          type="button"
        >
          <span className="material-symbols-outlined text-[26px] leading-none transition-transform group-hover:scale-110">
            menu
          </span>
        </button>

        <div className="fixed right-3 top-3 z-50 w-[168px]">
          <div className="relative">
            <button
              aria-controls={mobileLanguageSelectId}
              aria-expanded={langOpen}
              className={`flex h-11 w-full items-center gap-2 rounded-2xl border px-3.5 text-sm font-semibold shadow-[0_14px_30px_rgba(50,34,20,0.16)] backdrop-blur-xl transition-all duration-200 ${
                currentSlide === 0
                  ? 'border-white/30 bg-black/35 text-white hover:bg-black/45'
                  : 'border-[#d8c6aa]/70 bg-[#fffdf8]/95 text-[#153b39] hover:bg-white'
              }`}
              onClick={handleToggleLanguage}
              type="button"
            >
              <span className="material-symbols-outlined text-[18px] opacity-80">language</span>
              <span className="flex min-w-0 flex-1 items-center gap-2 truncate text-left">
                <img alt="" className="h-auto w-4 shrink-0 inline-block" src={activeLanguage.flagImg} />
                <span className="truncate text-sm font-semibold tracking-[0.01em]">{activeLanguage.name}</span>
              </span>
              <span className="material-symbols-outlined text-[18px] opacity-70">expand_more</span>
            </button>
            <AnimatePresence>
              {langOpen && (
                <>
                  <motion.div className="fixed inset-0 z-40" onClick={() => setLangOpen(false)} />
                  <motion.div
                    id={mobileLanguageSelectId}
                    aria-label="Language options"
                    className="absolute right-0 z-50 mt-2 w-full min-w-[180px] overflow-hidden rounded-[22px] border border-[#d8c6aa]/70 bg-[#fffdf8] py-2 shadow-[0_22px_42px_rgba(50,34,20,0.22)]"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                  >
                    {LANGUAGES.map((language) => (
                      <button
                        key={language.code}
                        className={`flex w-full items-center gap-3 px-3.5 py-3 text-left text-sm font-semibold transition-colors ${
                          language.code === lang
                            ? 'bg-[#efe4d6] text-[#322214]'
                            : 'text-[#2f5551] hover:bg-[#f5efe6] hover:text-[#153b39]'
                        }`}
                        onClick={() => handleSelectLanguage(language.code)}
                        type="button"
                      >
                        <img alt="" className="h-auto w-4 shrink-0 inline-block" src={language.flagImg} />
                        <span className="truncate flex-1">{language.name}</span>
                        {language.code === lang ? <span className="material-symbols-outlined text-[18px] text-[#9a442d]">check</span> : null}
                      </button>
                    ))}
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <>
              <motion.div
                className="fixed inset-0 bg-black/40 z-[60]"
                aria-hidden="true"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setOpen(false)}
              />
              <motion.aside
                id={drawerId}
                aria-labelledby="mobile-navigation-title"
                className="fixed left-0 top-0 h-full w-72 bg-[#fffaf0] shadow-2xl z-[70] py-6 overflow-y-auto border-r border-[#d8c6aa]/70"
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'tween', duration: 0.3 }}
              >
                <div className="flex items-center justify-between px-4 mb-6">
                  <span id="mobile-navigation-title" className="font-serif text-xl font-semibold tracking-tight text-[#153b39]">Star Hill</span>
                  <button
                    aria-label="Close menu"
                    className="rounded-full p-2 text-[#2f5551] transition-colors hover:bg-white/70 hover:text-[#153b39]"
                    onClick={() => setOpen(false)}
                    type="button"
                  >
                    <span className="material-symbols-outlined text-2xl">close</span>
                  </button>
                </div>
                <nav className="space-y-1 px-3" aria-label="Mobile navigation">
                  {items.map((item) => (
                    <button
                      key={item.slide}
                      aria-current={currentSlide === item.slide ? 'page' : undefined}
                      className={`w-full rounded-2xl px-4 py-3 text-left text-sm font-bold transition-all duration-200 ${
                        currentSlide === item.slide
                          ? 'bg-[#153b39] text-[#fffaf0] shadow-[0_12px_26px_rgba(21,59,57,0.16)]'
                          : 'text-[#2f5551] hover:bg-white/70 hover:text-[#153b39]'
                      }`}
                      onClick={() => handleNavigate(item.slide)}
                      type="button"
                    >
                      {item.label[lang] || item.label.en}
                    </button>
                  ))}
                </nav>
              </motion.aside>
            </>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default Header;
