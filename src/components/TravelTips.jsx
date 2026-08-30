import { useState } from 'react';
import { motion } from 'framer-motion';
import { t } from '../i18n';
import SafeImage from './ui/SafeImage';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const FAQS = [
  { icon: 'schedule', qKey: 'tips.faqCheckin', aKey: 'tips.faqCheckinA' },
  { icon: 'restaurant', qKey: 'tips.faqBreakfast', aKey: 'tips.faqBreakfastA' },
  { icon: 'wifi', qKey: 'tips.faqWifi', aKey: 'tips.faqWifiA' },
  { icon: 'moped', qKey: 'tips.faqMoto', aKey: 'tips.faqMotoA' },
  { icon: 'laundry', qKey: 'tips.faqLaundry', aKey: 'tips.faqLaundryA' },
  { icon: 'pool', qKey: 'tips.faqPool', aKey: 'tips.faqPoolA' },
];

const TOURS_LIST = [
  ['tours.cableCar'], ['tours.islandHopping'], ['tours.vinwonders'], ['tours.snorkeling'],
  ['tours.safari'], ['tours.scubaDiving'], ['tours.kissShow'], ['tours.fishing'],
];

const TRAVEL_TIMES = [
  { icon: 'waves', labelKey: 'tips.ongLang', timeKey: 'tips.ongLangTime' },
  { icon: 'forest', labelKey: 'tips.pepperFarm', timeKey: 'tips.pepperFarmTime' },
  { icon: 'storefront', labelKey: 'tips.nightMarket', timeKey: 'tips.nightMarketTime' },
  { icon: 'sailing', labelKey: 'tips.fishingVillage', timeKey: 'tips.fishingVillageTime' },
  { icon: 'attractions', labelKey: 'tips.vinwonders', timeKey: 'tips.vinwondersTime' },
  { icon: 'temple_buddhist', labelKey: 'tips.pagoda', timeKey: 'tips.pagodaTime' },
  { icon: 'flight', labelKey: 'tips.airport', timeKey: 'tips.airportTime' },
];

const GARDEN_IMG = 'https://res.cloudinary.com/dwb9x5s1j/image/upload/v1782898529/6A8A1289_cklcl8.png';
const COAST_IMG = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80';
const SUNSET_IMG = 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1600&q=80';
const SERVICE_IMG = 'https://res.cloudinary.com/dwb9x5s1j/image/upload/v1782898522/6A8A1248_rnsems.png';

function FAQItem({ item, lang }) {
  const [open, setOpen] = useState(false);
  const panelId = `faq-panel-${item.qKey.replace(/\./g, '-')}`;
  const buttonId = `faq-button-${item.qKey.replace(/\./g, '-')}`;

  return (
    <div>
      <button
        aria-controls={panelId}
        aria-expanded={open}
        className="editorial-card-soft w-full text-left p-4 flex items-center justify-between transition-colors"
        id={buttonId}
        onClick={() => setOpen(!open)}
        type="button"
      >
        <span className="flex items-center gap-3 font-semibold text-sm text-[#003333]">
          <span className="material-symbols-outlined text-[#003333]">{item.icon}</span>
          {t(item.qKey, lang)}
        </span>
        <span className={`material-symbols-outlined text-gray-400 transition-transform ${open ? 'rotate-180' : ''}`}>expand_more</span>
      </button>
      {open && (
        <div id={panelId} role="region" aria-labelledby={buttonId} className="px-8 py-4 text-gray-600 text-sm">{t(item.aKey, lang)}</div>
      )}
    </div>
  );
}

function TravelTips({ lang = 'en' }) {
  return (
    <div className="editorial-page min-h-screen bg-transparent pt-20 font-sans text-[#173331] md:pt-24">
      <div className="md:hidden">
        <main className="mx-auto w-full max-w-6xl px-4 py-6 md:px-8 md:py-8 space-y-8">
          <motion.section className="text-center space-y-3" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h1 className="editorial-title text-3xl font-semibold">{t('tips.title', lang)}</h1>
            <div className="w-20 h-0.5 bg-[#D7A55A] mx-auto rounded-full" />
          </motion.section>

          <motion.div className="space-y-4" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
            <motion.div variants={fadeUp} className="editorial-card-soft p-4 md:p-5 border-l-4 border-l-[#D7A55A]">
              <div className="flex items-center gap-3 mb-3">
                <div className="editorial-icon shrink-0">
                  <span className="material-symbols-outlined text-xl">lightbulb</span>
                </div>
                <h2 className="text-xl font-bold text-[#003333]">{t('tips.tip', lang)}</h2>
              </div>
              <p className="text-gray-600 text-sm mb-4">{t('tips.tipDesc', lang)}</p>
              <div className="bg-gray-50 p-4 rounded-lg flex items-start gap-3">
                <span className="material-symbols-outlined text-[#003333]">support_agent</span>
                <p className="text-xs text-gray-600">{t('tips.contactReception', lang)}</p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="editorial-card-soft p-4 md:p-5 border-l-4 border-l-[#003333]">
              <div className="flex items-center gap-3 mb-3">
                <div className="editorial-icon shrink-0">
                  <span className="material-symbols-outlined text-xl">favorite</span>
                </div>
                <h2 className="text-xl font-bold text-[#003333]">{t('tips.whyStay', lang)}</h2>
              </div>
              <p className="text-gray-600 text-sm">{t('tips.whyStayDesc', lang)}</p>
            </motion.div>
          </motion.div>

          <motion.div className="space-y-4" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
            <motion.div variants={fadeUp} className="editorial-card-soft overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <SafeImage alt={t('tips.peaceful', lang)} className="w-full h-full object-cover" src={GARDEN_IMG} />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-[#003333]">nature_people</span>
                  <h3 className="text-lg font-bold text-[#003333]">{t('tips.peaceful', lang)}</h3>
                </div>
                <p className="text-sm text-gray-600">{t('tips.peacefulDesc', lang)}</p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="editorial-card-soft p-4 md:p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-[#003333]">location_on</span>
                <h3 className="text-lg font-bold text-[#003333]">{t('tips.convenient', lang)}</h3>
              </div>
              <p className="text-xs text-gray-500 italic mb-4">{t('tips.convenientDesc', lang)}</p>
              <h4 className="font-semibold text-xs text-[#003333] uppercase tracking-wider mb-3">{t('tips.travelTimes', lang)}</h4>
              <div className="space-y-2">
                {TRAVEL_TIMES.map((tt) => (
                  <div key={tt.labelKey} className="flex items-center justify-between border-b border-gray-100 pb-2">
                    <span className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="material-symbols-outlined text-[#D7A55A] text-base">{tt.icon}</span>
                      {t(tt.labelKey, lang)}
                    </span>
                    <span className="font-semibold text-sm text-[#003333]">{t(tt.timeKey, lang)}</span>
                  </div>
                ))}
              </div>
              <div className="h-32 rounded-lg overflow-hidden mt-4">
                <SafeImage alt={t('explore.coastline', lang)} className="w-full h-full object-cover" src={COAST_IMG} />
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="editorial-card-soft overflow-hidden">
              <div className="relative h-44 overflow-hidden">
                <SafeImage alt={t('tips.bestOfPQ', lang)} className="w-full h-full object-cover" src={SUNSET_IMG} />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-[#003333]">sunny</span>
                  <h3 className="text-lg font-bold text-[#003333]">{t('tips.bestOfPQ', lang)}</h3>
                </div>
                <p className="text-sm text-gray-600">{t('tips.bestOfPQDesc', lang)}</p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="editorial-card-soft overflow-hidden">
              <div className="relative h-44 overflow-hidden">
                <SafeImage alt={t('tips.friendlyService', lang)} className="w-full h-full object-cover" src={SERVICE_IMG} />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-[#003333]">favorite</span>
                  <h3 className="text-lg font-bold text-[#003333]">{t('tips.friendlyService', lang)}</h3>
                </div>
                <p className="text-sm text-gray-600">{t('tips.friendlyServiceDesc', lang)}</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.section className="space-y-4" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="flex items-center gap-3">
              <div className="editorial-icon shrink-0">
                <span className="material-symbols-outlined text-xl">help</span>
              </div>
              <h2 className="text-2xl font-bold text-[#003333]">{t('tips.faq', lang)}</h2>
            </div>
            <motion.div className="space-y-2" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
              {FAQS.map((faq) => (
                <motion.div key={faq.qKey} variants={fadeUp}>
                  <FAQItem item={faq} lang={lang} />
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="editorial-card-soft p-4 md:p-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#D7A55A]">star_rate</span>
              <h3 className="text-lg font-bold text-[#003333]">{t('tips.bookTours', lang)}</h3>
            </div>
            <p className="text-sm font-semibold text-gray-700">{t('tips.bookToursA', lang)}</p>
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
              {TOURS_LIST.map((tour) => (
                <div key={tour[0]} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#D7A55A] rounded-full shrink-0" />
                  {t(tour[0], lang)}
                </div>
              ))}
            </div>
            <p className="text-xs italic text-gray-500 pt-2 border-t border-[#D7A55A]/20">{t('tips.bookToursNote', lang)}</p>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-3">
            <div className="editorial-card-soft p-4 space-y-2">
              <h4 className="font-semibold text-sm text-[#003333] flex items-center gap-2">
                <span className="material-symbols-outlined text-[#D7A55A]">work</span>
                {t('tips.luggage', lang)}
              </h4>
              <p className="text-sm text-gray-600">{t('tips.luggageA', lang)}</p>
            </div>
            <div className="editorial-card-soft p-4">
              <h4 className="font-semibold text-sm text-[#003333] flex items-center gap-2">
                <span className="material-symbols-outlined text-[#D7A55A]">local_taxi</span>
                {t('tips.bookTaxi', lang)}
              </h4>
            </div>
            <div className="editorial-card-soft p-4 space-y-3">
              <h4 className="font-semibold text-sm text-[#003333] flex items-center gap-2 border-b border-[#D7A55A]/20 pb-2">
                <span className="material-symbols-outlined text-[#D7A55A]">support_agent</span>
                {t('tips.needMoreHelp', lang)}
              </h4>
              <div className="grid grid-cols-1 gap-2 pt-1 text-xs">
                <a href="tel:+84855484444" className="flex items-center justify-between rounded-xl bg-white/90 p-3 font-bold text-[#003333] no-underline shadow-sm transition-all hover:bg-[#D7A55A]/20">
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-base text-[#003333]">call</span>
                    <span>Call Hotline</span>
                  </span>
                  <span>+84 855 484 444</span>
                </a>
                <a href="https://zalo.me/84855484444" target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-xl bg-blue-50/90 p-3 font-bold text-blue-700 no-underline shadow-sm transition-all hover:bg-blue-100">
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-base">chat</span>
                    <span>Zalo Chat</span>
                  </span>
                  <span>+84 855 484 444</span>
                </a>
                <a href="https://wa.me/84855484444" target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-xl bg-emerald-50/90 p-3 font-bold text-emerald-700 no-underline shadow-sm transition-all hover:bg-emerald-100">
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-base">chat_bubble</span>
                    <span>WhatsApp</span>
                  </span>
                  <span>+84 855 484 444</span>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="editorial-card p-8 text-center space-y-4 relative overflow-hidden">
            <span className="material-symbols-outlined text-[#D7A55A] text-4xl">favorite</span>
            <h2 className="text-2xl font-bold text-[#003333]">{t('tips.thankYou', lang)}</h2>
            <p className="text-sm text-gray-600">{t('tips.thankYouMsg', lang)}</p>
            <p className="text-xs text-gray-500">{t('tips.thankYouAssist', lang)}</p>
            <div className="pt-4">
              <span className="text-[#153b39] font-semibold tracking-wide">{t('tips.happyHoliday', lang)}</span>
            </div>
          </motion.section>
        </main>
      </div>

      <div className="hidden md:block">
        <main className="mx-auto w-full max-w-6xl px-4 py-6 md:px-8 md:py-8 space-y-12">
          <motion.section className="text-center space-y-4" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h1 className="editorial-title text-3xl font-semibold md:text-5xl">{t('tips.titleDesktop', lang)}</h1>
            <div className="w-24 h-0.5 bg-[#D7A55A] mx-auto rounded-full" />
          </motion.section>

          <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-6" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
            <motion.div variants={fadeUp} className="editorial-card-soft p-4 md:p-5 border-l-4 border-l-[#D7A55A] flex gap-6">
              <div className="editorial-icon shrink-0">
                <span className="material-symbols-outlined text-xl">lightbulb</span>
              </div>
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-[#003333]">{t('tips.tip', lang)}</h2>
                <p className="text-gray-600 text-sm leading-relaxed">{t('tips.tipDesc', lang)}</p>
                <div className="bg-gray-50 p-4 rounded-lg flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#003333]">support_agent</span>
                  <p className="text-sm text-gray-600">{t('tips.contactReception', lang)}</p>
                </div>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="editorial-card-soft p-4 md:p-5 border-l-4 border-l-[#003333] flex gap-6">
              <div className="editorial-icon shrink-0">
                <span className="material-symbols-outlined text-xl">favorite</span>
              </div>
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-[#003333]">{t('tips.whyStay', lang)}</h2>
                <p className="text-gray-600 text-sm leading-relaxed">{t('tips.whyStayDesc', lang)}</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-12 gap-6" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
            <motion.div variants={fadeUp} className="editorial-card-soft md:col-span-7 overflow-hidden flex flex-col md:flex-row">
              <div className="p-6 flex-1 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#003333]">nature_people</span>
                  <h3 className="text-xl font-bold text-[#003333]">{t('tips.peaceful', lang)}</h3>
                </div>
                <p className="text-gray-600 text-sm">{t('tips.peacefulDesc', lang)}</p>
              </div>
              <div className="w-full md:w-1/2 overflow-hidden h-48 md:h-auto">
                <SafeImage alt={t('tips.peaceful', lang)} className="w-full h-full object-cover" src={GARDEN_IMG} />
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="editorial-card-soft md:col-span-5 md:row-span-2 p-4 md:p-5 space-y-6">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#003333]">location_on</span>
                <h3 className="text-xl font-bold text-[#003333]">{t('tips.convenient', lang)}</h3>
              </div>
              <p className="text-sm text-gray-500 italic">{t('tips.convenientDescDesktop', lang)}</p>
              <div>
                <h4 className="font-semibold text-xs text-[#003333] uppercase tracking-wider mb-3">{t('tips.travelTimes', lang)}</h4>
                <div className="space-y-3">
                  {TRAVEL_TIMES.map((tt) => (
                    <div key={tt.labelKey} className="flex items-center justify-between border-b border-gray-100 pb-2">
                      <span className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="material-symbols-outlined text-[#D7A55A]">{tt.icon}</span>
                        {t(tt.labelKey, lang)}
                      </span>
                      <span className="font-semibold text-sm text-[#003333]">{t(tt.timeKey, lang)}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="h-40 rounded-lg overflow-hidden">
                <SafeImage alt={t('explore.coastline', lang)} className="w-full h-full object-cover" src={COAST_IMG} />
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="editorial-card-soft md:col-span-4 overflow-hidden">
              <div className="h-48 overflow-hidden">
                <SafeImage alt={t('tips.bestOfPQ', lang)} className="w-full h-full object-cover" src={SUNSET_IMG} />
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#003333]">sunny</span>
                  <h3 className="text-xl font-bold text-[#003333]">{t('tips.bestOfPQ', lang)}</h3>
                </div>
                <p className="text-gray-600 text-sm">{t('tips.bestOfPQDesc', lang)}</p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="editorial-card-soft md:col-span-3 overflow-hidden">
              <div className="h-48 overflow-hidden">
                <SafeImage alt={t('tips.friendlyService', lang)} className="w-full h-full object-cover" src={SERVICE_IMG} />
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#003333]">favorite</span>
                  <h3 className="text-xl font-bold text-[#003333]">{t('tips.friendlyService', lang)}</h3>
                </div>
                <p className="text-gray-600 text-sm">{t('tips.friendlyServiceDesc', lang)}</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.section className="space-y-8" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="flex items-center gap-4">
              <div className="editorial-icon shrink-0">
                <span className="material-symbols-outlined text-xl">help</span>
              </div>
              <h2 className="text-2xl font-bold text-[#003333]">{t('tips.faqDesktop', lang)}</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              <div className="lg:col-span-7 space-y-2">
                {FAQS.map((faq) => (
                  <FAQItem key={faq.qKey} item={faq} lang={lang} />
                ))}
              </div>
              <div className="lg:col-span-5 space-y-6">
                <div className="editorial-card-soft p-4 md:p-5 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#D7A55A]">star_rate</span>
                    <h3 className="text-xl font-bold text-[#003333]">{t('tips.bookTours', lang)}</h3>
                  </div>
                  <p className="font-semibold text-sm text-gray-700">{t('tips.bookToursA', lang)}</p>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-600">
                    {TOURS_LIST.map((tour) => (
                      <div key={tour[0]} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#D7A55A] rounded-full shrink-0" />
                        {t(tour[0], lang)}
                      </div>
                    ))}
                  </div>
                  <p className="text-xs italic text-gray-400 pt-2 border-t border-[#D7A55A]/20">{t('tips.bookToursNote', lang)}</p>
                </div>
                <div className="space-y-3">
                  <div className="editorial-card-soft p-4 space-y-2">
                    <h4 className="font-semibold text-sm text-[#003333] flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#D7A55A]">work</span>
                      {t('tips.luggage', lang)}
                    </h4>
                    <p className="text-sm text-gray-600">{t('tips.luggageA', lang)}</p>
                  </div>
                  <div className="editorial-card-soft p-4">
                    <h4 className="font-semibold text-sm text-[#003333] flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#D7A55A]">local_taxi</span>
                      {t('tips.bookTaxi', lang)}
                    </h4>
                  </div>
                  <div className="editorial-card-soft p-4 space-y-3">
                    <h4 className="font-semibold text-sm text-[#003333] flex items-center gap-2 border-b border-[#D7A55A]/20 pb-2">
                      <span className="material-symbols-outlined text-[#D7A55A]">support_agent</span>
                      {t('tips.needMoreHelp', lang)}
                    </h4>
                    <div className="grid grid-cols-1 gap-2 pt-1 text-xs">
                      <a href="tel:+84855484444" className="flex items-center justify-between rounded-xl bg-white/90 p-3 font-bold text-[#003333] no-underline shadow-sm transition-all hover:bg-[#D7A55A]/20">
                        <span className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-base text-[#003333]">call</span>
                          <span>Call Hotline</span>
                        </span>
                        <span>+84 855 484 444</span>
                      </a>
                      <a href="https://zalo.me/84855484444" target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-xl bg-blue-50/90 p-3 font-bold text-blue-700 no-underline shadow-sm transition-all hover:bg-blue-100">
                        <span className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-base">chat</span>
                          <span>Zalo Chat</span>
                        </span>
                        <span>+84 855 484 444</span>
                      </a>
                      <a href="https://wa.me/84855484444" target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-xl bg-emerald-50/90 p-3 font-bold text-emerald-700 no-underline shadow-sm transition-all hover:bg-emerald-100">
                        <span className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-base">chat_bubble</span>
                          <span>WhatsApp</span>
                        </span>
                        <span>+84 855 484 444</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="editorial-card p-12 text-center space-y-6 relative overflow-hidden">
            <span className="material-symbols-outlined text-[#D7A55A] text-5xl">favorite</span>
            <h2 className="text-3xl font-bold tracking-tight text-[#003333]">{t('tips.thankYou', lang)}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t('tips.thankYouMsg', lang)}</p>
            <p className="text-sm text-gray-500 max-w-xl mx-auto">{t('tips.thankYouAssist', lang)}</p>
            <div className="pt-4">
              <span className="text-[#153b39] font-semibold text-xl tracking-wide">{t('tips.happyHoliday', lang)}</span>
            </div>
          </motion.section>
        </main>
      </div>
    </div>
  );
}

export default TravelTips;
