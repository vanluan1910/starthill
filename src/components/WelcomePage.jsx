import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { t } from '../i18n';

const HERO_IMAGE = 'https://res.cloudinary.com/dwb9x5s1j/image/upload/v1785128650/c064cf04-6c43-4c00-b570-433efb87ad50_yrtzwz.png';

const SERVICES_SLIDE = 4;
const RECEPTION_SLIDE = 2;
const QUICK_INFO_SLIDE = 1;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.18 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

function getPhuQuocTime() {
  return new Date().toLocaleTimeString('en-US', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Asia/Ho_Chi_Minh',
  });
}

function WelcomePage({ lang = 'en', onNavigate }) {
  const [localTime, setLocalTime] = useState(getPhuQuocTime);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setLocalTime(getPhuQuocTime());
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section className="relative h-full w-full overflow-hidden bg-[#021816] text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 hero-zoom bg-cover bg-center md:bg-[center_top]"
        style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
      />
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,17,16,0.82)_0%,rgba(0,17,16,0.58)_42%,rgba(0,17,16,0.18)_72%,rgba(0,17,16,0.08)_100%)]" />
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.18)_0%,rgba(0,0,0,0.05)_45%,rgba(0,0,0,0.48)_100%)]" />

      <div className="relative z-10 mx-auto flex h-full min-h-full w-full max-w-[1280px] flex-col overflow-x-hidden overflow-y-auto px-5 pb-24 pt-20 md:grid md:grid-cols-[minmax(0,0.95fr)_minmax(360px,0.75fr)] md:items-center md:gap-12 md:px-16 md:pb-20 md:pt-24 lg:gap-20">
        <motion.div
          className="flex min-h-0 flex-1 flex-col justify-center text-center md:text-left"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div className="mb-5 flex items-center justify-center gap-4 md:justify-start" variants={itemVariants}>
            <span className="h-px w-12 bg-[#d6a252]" />
            <span className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#f0c975]">
              {t('welcome.heroLabel', lang)}
            </span>
          </motion.div>

          <motion.h1
            className="font-serif text-[32px] font-bold leading-[1.12] tracking-[-0.035em] text-white text-shadow xs:text-[38px] sm:text-[52px] md:max-w-[720px] md:text-[66px] lg:text-[80px]"
            variants={itemVariants}
          >
            {lang === 'ko' ? (
              <>
                <span className="block whitespace-nowrap text-[#f0c975]">Star Hill Resort</span>
                <span className="block text-white/90 text-[26px] sm:text-[40px] md:text-[52px] lg:text-[64px]">에 오신 것을 환영합니다</span>
              </>
            ) : (
              <>
                <span className="block text-white/90">{t('welcome.greeting', lang)}</span>
                <span className="block whitespace-nowrap text-[#f0c975]">Star Hill Resort</span>
              </>
            )}
          </motion.h1>

          <motion.p
            className="mx-auto mt-5 max-w-[520px] font-serif text-[22px] italic leading-tight text-white/90 md:mx-0 md:text-[28px]"
            variants={itemVariants}
          >
            {t('welcome.guest', lang)}
          </motion.p>

          <motion.div className="mx-auto mt-6 max-w-[620px] space-y-4 md:mx-0" variants={itemVariants}>
            <p className="text-[16px] leading-[1.75] text-white/[0.82] md:text-[18px]">
              {t('welcome.para1', lang)}
            </p>
            <p className="border-l-2 border-[#d6a252]/[0.55] pl-5 text-left text-[14px] italic leading-[1.7] text-white/[0.68] md:text-[16px]">
              {t('welcome.para2', lang)}
            </p>
          </motion.div>

          <motion.div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row md:justify-start" variants={itemVariants}>
            <button
              className="group inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-[#d6a252] px-7 py-4 text-sm font-extrabold uppercase tracking-[0.08em] text-[#092522] shadow-[0_18px_36px_rgba(214,162,82,0.22)] transition-all hover:-translate-y-0.5 hover:bg-[#f0c975] active:scale-95"
              onClick={() => onNavigate?.(SERVICES_SLIDE)}
              type="button"
            >
              {t('services.title', lang)}
              <span aria-hidden="true" className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1" style={{ color: '#092522' }}>
                arrow_forward
              </span>
            </button>
            <button
              className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-4 text-sm font-extrabold uppercase tracking-[0.08em] text-white backdrop-blur-md transition-all hover:bg-white/[0.18] active:scale-95"
              onClick={() => onNavigate?.(RECEPTION_SLIDE)}
              type="button"
            >
              <span aria-hidden="true" className="material-symbols-outlined text-[18px]" style={{ color: '#f0c975' }}>
                support_agent
              </span>
              {t('services.needAssistance', lang)}
            </button>
          </motion.div>
        </motion.div>

        <motion.aside
          className="mt-7 hidden justify-self-end md:block md:w-full md:max-w-[380px]"
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.28 }}
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 rounded-[28px] border border-white/[0.14] bg-white/[0.12] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.22)] backdrop-blur-xl">
              <div className="flex items-center justify-between gap-5">
                <div className="flex items-center gap-4">
                  <span aria-hidden="true" className="material-symbols-outlined text-[42px]" style={{ color: '#f0c975' }}>
                    wb_sunny
                  </span>
                  <div>
                    <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-white/[0.72]">Phu Quoc, VN</p>
                    <p className="mt-1 font-serif text-[30px] font-semibold leading-none text-white">29°C</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-serif text-[28px] font-semibold leading-none text-white">{localTime}</p>
                  <p className="mt-2 text-[10px] font-extrabold uppercase tracking-[0.18em] text-white/[0.52]">{t('welcome.localTime', lang)}</p>
                </div>
              </div>
            </div>

            <button
              className="group rounded-[24px] border border-white/[0.14] bg-white/10 p-5 text-left shadow-[0_18px_44px_rgba(0,0,0,0.16)] backdrop-blur-lg transition-all hover:-translate-y-1 hover:bg-white/[0.16]"
              onClick={() => onNavigate?.(QUICK_INFO_SLIDE)}
              type="button"
            >
              <span aria-hidden="true" className="material-symbols-outlined text-[30px] transition-transform group-hover:scale-110" style={{ color: '#f0c975' }}>
                restaurant
              </span>
              <span className="mt-5 block text-[11px] font-extrabold uppercase tracking-[0.2em] text-white">{t('quickInfo.breakfast', lang)}</span>
              <span className="mt-2 block text-xs leading-relaxed text-white/[0.58]">{t('quickInfo.breakfastDesc', lang)}</span>
            </button>

            <button
              className="group rounded-[24px] border border-white/[0.14] bg-white/10 p-5 text-left shadow-[0_18px_44px_rgba(0,0,0,0.16)] backdrop-blur-lg transition-all hover:-translate-y-1 hover:bg-white/[0.16]"
              onClick={() => onNavigate?.(SERVICES_SLIDE)}
              type="button"
            >
              <span aria-hidden="true" className="material-symbols-outlined text-[30px] transition-transform group-hover:scale-110" style={{ color: '#f0c975' }}>
                spa
              </span>
              <span className="mt-5 block text-[11px] font-extrabold uppercase tracking-[0.2em] text-white">{t('services.poolTitle', lang)}</span>
              <span className="mt-2 block text-xs leading-relaxed text-white/[0.58]">{t('services.poolDesc', lang)}</span>
            </button>
          </div>
        </motion.aside>

        <motion.div
          className="mt-5 grid grid-cols-2 gap-3 md:hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.42 }}
        >
          <button
            className="rounded-[22px] border border-white/[0.16] bg-white/10 px-4 py-4 text-left backdrop-blur-md"
            onClick={() => onNavigate?.(QUICK_INFO_SLIDE)}
            type="button"
          >
            <span aria-hidden="true" className="material-symbols-outlined text-[24px]" style={{ color: '#f0c975' }}>restaurant</span>
            <span className="mt-2 block text-[11px] font-extrabold uppercase tracking-[0.16em] text-white">{t('quickInfo.breakfast', lang)}</span>
          </button>
          <button
            className="rounded-[22px] border border-white/[0.16] bg-white/10 px-4 py-4 text-left backdrop-blur-md"
            onClick={() => onNavigate?.(SERVICES_SLIDE)}
            type="button"
          >
            <span aria-hidden="true" className="material-symbols-outlined text-[24px]" style={{ color: '#f0c975' }}>spa</span>
            <span className="mt-2 block text-[11px] font-extrabold uppercase tracking-[0.16em] text-white">{t('services.poolTitle', lang)}</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default WelcomePage;
