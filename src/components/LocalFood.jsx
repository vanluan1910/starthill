import { t } from '../i18n';

const HAM_NINH_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAyG73AHUWNsh5junMJcCbEDI2ypPo2zsUFDm_IzhdjFKC9Ndy59wDCwYc379pW-iVgRgWqkcVQCWZsMp87JoqMJo0spgaOXoikPQyF39kZxc9I7lNnj0DSZ7jzQpIHRnL2cEgIMFyZglmAw8xlggi4wCvHG3AvnuQ-g4M0cRdyRBLDMxe8NrXf0WBkW2KhPwvllsqAkRtuFbz5dlXvFBnIIyBXZVzG-Ro1MeNtJutWoG5R-SIx0BJXbA';
const NIGHT_MARKET_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwUMgKwWb1Pwjk-L19ChfUIV54NhQrsH-MYbzVtxgd0rIC8qjiDXgSfwrxw-AlCEsTwnQVnuZhMvISei5mc-jxlqaxuIcMnC14ESTWY9a23481UY69dgqxN4FVKWZKQEaLqDw8fZbg5qE72Cr5uF3z5CvknxtVR5jRVaJWEJgQ-hQhY4SW5yQFUaawRddnPIoYKeN_oKbHoQev_HEspE3M3SgvYUDq711Np8tByw-DhhE3xeFycCYoxA';

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
          <img alt={t('food.title', lang)} className="absolute inset-0 h-full w-full object-cover" decoding="async" loading="lazy" src={NIGHT_MARKET_IMG} />
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
                <img alt={t('food.hamNinh', lang)} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" decoding="async" loading="lazy" src={HAM_NINH_IMG} />
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
                <img alt={t('food.nightMarket', lang)} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" decoding="async" loading="lazy" src={NIGHT_MARKET_IMG} />
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

        <section className="rounded-[28px] bg-[#f5f3ef] p-8 text-center shadow-[0_14px_34px_rgba(50,34,20,0.08)] md:p-10">
          <span className="material-symbols-outlined mb-4 text-5xl text-[#322214]">restaurant</span>
          <h2 className="mb-4 font-serif text-[34px] font-bold text-[#322214] md:text-[42px]">{t('food.quoteTitle', lang)}</h2>
          <p className="mx-auto max-w-3xl text-[16px] italic leading-[1.75] text-[#4e453e] md:text-[18px]">{t('food.quote', lang)}</p>
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
