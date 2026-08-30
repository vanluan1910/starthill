import { t } from '../i18n';
import SafeImage from './ui/SafeImage';

const HAM_NINH_IMG = 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80';
const NIGHT_MARKET_IMG = 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1600&q=80';

const WATERFRONT_IMG = 'https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?auto=format&fit=crop&w=800&q=80';
const NINH_KITCHEN_IMG = 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80';
const CHUON_CHUON_IMG = 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80';

const MARINA_RESTAURANTS = [
  {
    icon: '🍤',
    nameKey: 'food.waterfrontName',
    descKey: 'food.waterfrontDesc',
    maps: 'https://maps.app.goo.gl/7c1FnizDHevsYypJ9',
    img: WATERFRONT_IMG,
  },
  {
    icon: '🍽️',
    nameKey: 'food.ninhKitchenName',
    descKey: 'food.ninhKitchenDesc',
    maps: 'https://maps.app.goo.gl/Qz2wCufU4jcjwc1c6',
    img: NINH_KITCHEN_IMG,
  },
  {
    icon: '🥩',
    nameKey: 'food.chuonChuonName',
    descKey: 'food.chuonChuonDesc',
    maps: 'https://maps.app.goo.gl/oEXJ5JVYHLdSGXvu6',
    img: CHUON_CHUON_IMG,
  },
];

function LocalFood({ lang = 'en' }) {
  const TIPS = [
    { icon: 'payments', titleKey: 'food.cashKing', textKey: 'food.cashKingDesc' },
    { icon: 'security', titleKey: 'food.staySafe', textKey: 'food.staySafeDesc' },
    { icon: 'translate', titleKey: 'food.etiquette', textKey: 'food.etiquetteDesc' },
  ];

  return (
    <main className="editorial-page min-h-full px-4 pb-24 pt-24 font-sans text-[#1b1c1a] md:px-10 md:pb-16 md:pt-28">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <section className="relative min-h-[360px] overflow-hidden rounded-[28px] border border-[#d2c4bb] bg-[#e4e2de] shadow-[0_22px_60px_rgba(50,34,20,0.14)] md:min-h-[430px]">
          <SafeImage alt={t('food.title', lang)} className="absolute inset-0 h-full w-full object-cover" src={NIGHT_MARKET_IMG} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#322214]/85 via-[#322214]/20 to-transparent" />
          <div className="absolute bottom-0 left-0 max-w-2xl p-6 md:p-9">
            <span className="mb-3 block text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#ebe1d4]">
              {t('food.heroKicker', lang)}
            </span>
            <h1 className="font-serif text-[42px] font-bold leading-tight tracking-[-0.045em] text-white text-shadow md:text-[64px]">
              {t('food.title', lang)}
            </h1>
            <p className="mt-4 max-w-xl text-[16px] font-medium leading-[1.7] text-[#f2f0ed] md:text-[18px]">
              {t('food.heroDesc', lang)}
            </p>
          </div>
        </section>

        <section>
          <div className="mb-10 border-l-4 border-[#4a3728] pl-6">
            <h2 className="font-serif text-[38px] font-bold leading-tight tracking-[-0.04em] text-[#322214] md:text-[48px]">
              {t('food.sectionTitle', lang)}
            </h2>
            <p className="mt-4 max-w-3xl text-[16px] leading-[1.75] text-[#4e453e] md:text-[18px]">
              {t('food.desc', lang)}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <article className="group flex flex-col overflow-hidden rounded-[24px] border border-[#d2c4bb] bg-[#fbf9f5] shadow-[0_14px_34px_rgba(50,34,20,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(50,34,20,0.14)]">
              <div className="relative aspect-video overflow-hidden">
                <SafeImage alt={t('food.hamNinh', lang)} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" src={HAM_NINH_IMG} />
                <div className="absolute top-4 left-4 rounded-full bg-[#322214]/90 px-4 py-1.5 text-xs font-bold text-[#ebe1d4] backdrop-blur">
                  {t('food.hamNinhDist', lang)}
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6 md:p-8">
                <h3 className="mb-4 font-serif text-[28px] font-semibold text-[#322214]">{t('food.hamNinh', lang)}</h3>
                <p className="mb-6 flex-1 text-sm leading-[1.75] text-[#4e453e]">{t('food.hamNinhDesc', lang)}</p>
                <div className="mb-5 rounded-xl border border-[#d2c4bb] bg-[#f5f3ef] p-4">
                  <div className="mb-1 text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#80756d]">{t('food.hoursLabel', lang)}</div>
                  <div className="text-sm font-semibold text-[#322214]">{t('food.hamNinhHours', lang)}</div>
                </div>
                <a className="inline-flex items-center gap-2 text-sm font-bold text-[#461501] no-underline transition-all hover:gap-3 hover:underline" href="https://maps.app.goo.gl/e7cN4Jm8J4eE3rZX9" rel="noreferrer" target="_blank">
                  <span className="material-symbols-outlined text-base">location_on</span>
                  {t('food.viewMaps', lang)}
                </a>
              </div>
            </article>

            <article className="group flex flex-col overflow-hidden rounded-[24px] border border-[#d2c4bb] bg-[#fbf9f5] shadow-[0_14px_34px_rgba(50,34,20,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(50,34,20,0.14)]">
              <div className="relative aspect-video overflow-hidden">
                <SafeImage alt={t('food.nightMarket', lang)} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" src={NIGHT_MARKET_IMG} />
                <div className="absolute top-4 left-4 rounded-full bg-[#4a3728]/90 px-4 py-1.5 text-xs font-bold text-[#ffdbce] backdrop-blur">
                  {t('food.nightMarketDist', lang)}
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6 md:p-8">
                <h3 className="mb-4 font-serif text-[28px] font-semibold text-[#322214]">{t('food.nightMarket', lang)}</h3>
                <p className="mb-6 flex-1 text-sm leading-[1.75] text-[#4e453e]">{t('food.nightMarketDesc', lang)}</p>
                <div className="mb-5 rounded-xl border border-[#d2c4bb] bg-[#f5f3ef] p-4">
                  <div className="mb-1 text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#80756d]">{t('food.hoursLabel', lang)}</div>
                  <div className="text-sm font-semibold text-[#322214]">{t('food.nightMarketHours', lang)}</div>
                  <p className="mt-2 text-xs leading-[1.6] text-[#4e453e]">{t('food.nightMarketPeak', lang)}</p>
                </div>
                <a className="inline-flex items-center gap-2 text-sm font-bold text-[#461501] no-underline transition-all hover:gap-3 hover:underline" href="https://maps.app.goo.gl/VJ4fG5w3V4yWv8J79" rel="noreferrer" target="_blank">
                  <span className="material-symbols-outlined text-base">location_on</span>
                  {t('food.viewMaps', lang)}
                </a>
              </div>
            </article>
          </div>
        </section>

        <section className="rounded-[28px] border border-[#d2c4bb] bg-[#fbf9f5] p-6 shadow-[0_16px_42px_rgba(50,34,20,0.08)] md:p-8">
          <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-2xl text-[#461501]">sailing</span>
                <span className="rounded-full bg-[#322214]/90 px-3.5 py-1 text-xs font-bold text-[#ebe1d4]">
                  {t('food.marinaDist', lang)}
                </span>
              </div>
              <h2 className="font-serif text-[32px] font-bold text-[#322214] md:text-[40px]">
                {t('food.marinaTitle', lang)}
              </h2>
            </div>
            <div className="flex items-center gap-1.5 rounded-xl border border-[#d2c4bb] bg-[#f5f3ef] px-4 py-2 text-xs font-semibold text-[#4e453e]">
              <span className="material-symbols-outlined text-base text-[#622a11]">schedule</span>
              {t('food.marinaHours', lang)}
            </div>
          </div>

          <p className="mb-8 text-[15px] leading-[1.75] text-[#4e453e] md:text-[17px]">
            {t('food.marinaDesc', lang)}
          </p>

          <div>
            <h3 className="mb-5 font-serif text-[22px] font-bold text-[#322214]">
              {t('food.recRestaurants', lang)}
            </h3>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {MARINA_RESTAURANTS.map((rest) => (
                <article key={rest.nameKey} className="group flex flex-col overflow-hidden rounded-[20px] border border-[#d2c4bb] bg-[#f5f3ef] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <SafeImage alt={t(rest.nameKey, lang)} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src={rest.img} />
                    <div className="absolute top-3 left-3 text-xl">{rest.icon}</div>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h4 className="mb-2 font-serif text-xl font-bold text-[#322214]">{t(rest.nameKey, lang)}</h4>
                    <p className="mb-4 flex-1 text-xs leading-[1.7] text-[#4e453e]">{t(rest.descKey, lang)}</p>
                    <a className="inline-flex items-center gap-1.5 text-xs font-bold text-[#461501] no-underline transition-all hover:gap-2 hover:underline" href={rest.maps} rel="noreferrer" target="_blank">
                      <span className="material-symbols-outlined text-sm">location_on</span>
                      {t('food.viewMaps', lang)}
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {TIPS.map((tip) => (
            <article key={tip.icon} className="flex items-start gap-4 rounded-[24px] border border-[#d2c4bb] bg-[#fbf9f5] p-5 shadow-[0_10px_28px_rgba(50,34,20,0.06)]">
              <span className="material-symbols-outlined shrink-0 text-2xl text-[#461501]">{tip.icon}</span>
              <div>
                <h4 className="mb-1 font-bold text-[#322214]">{t(tip.titleKey, lang)}</h4>
                <p className="text-sm leading-[1.7] text-[#4e453e]">{t(tip.textKey, lang)}</p>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}

export default LocalFood;
