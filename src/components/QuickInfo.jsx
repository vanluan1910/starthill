import { t } from '../i18n';
import SafeImage from './ui/SafeImage';

const HERO_IMAGE = 'https://images.unsplash.com/photo-1602002418082-a4443e081dd1?auto=format&fit=crop&w=1600&q=80';
const BREAKFAST_IMAGE = 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=900&q=80';

const LATE_CHECKOUT_RULES = [
  { labelKey: 'quickInfo.until3', rateKey: 'quickInfo.until3rate' },
  { labelKey: 'quickInfo.until6', rateKey: 'quickInfo.until6rate' },
  { labelKey: 'quickInfo.after6', rateKey: 'quickInfo.after6rate' },
];

function InfoIcon({ icon, className = '' }) {
  return (
    <span
      aria-hidden="true"
      className={`material-symbols-outlined text-[28px] text-[#c8913c] ${className}`}
    >
      {icon}
    </span>
  );
}

function QuickInfo({ lang = 'en' }) {
  return (
    <main className="editorial-page min-h-full px-4 pb-24 pt-24 font-sans text-[#173331] md:px-10 md:pb-16 md:pt-28">
      <div className="mx-auto w-full max-w-5xl">
        <section className="relative mb-10 h-[330px] overflow-hidden rounded-[28px] border border-[#d8c6aa]/55 shadow-[0_22px_60px_rgba(30,53,49,0.14)] md:h-[400px]">
          <SafeImage alt="" className="absolute inset-0 h-full w-full object-cover" src={HERO_IMAGE} />
          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 max-w-2xl p-6 md:p-10">
            <span className="mb-3 block text-[11px] font-extrabold uppercase tracking-[0.24em] text-white/[0.82]">
              {t('quickInfo.staySchedule', lang)}
            </span>
            <h1 className="font-serif text-[42px] font-bold leading-tight tracking-[-0.045em] text-white text-shadow md:text-[64px]">
              {t('quickInfo.title', lang)}
            </h1>
            <p className="mt-4 max-w-xl text-[16px] leading-[1.7] text-white/90 md:text-[18px]">
              {t('quickInfo.subtitle', lang)}
            </p>
          </div>
        </section>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="space-y-8 md:col-span-7">
            <section className="rounded-[28px] border border-[#d8c6aa]/55 bg-[#fbf2eb] p-6 shadow-[0_16px_42px_rgba(30,53,49,0.08)] md:p-8">
              <div className="mb-6 flex items-center gap-3">
                <InfoIcon icon="schedule" />
                <h2 className="font-serif text-[26px] font-semibold text-[#153b39]">{t('quickInfo.staySchedule', lang)}</h2>
              </div>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <article className="rounded-2xl border border-[#d8c6aa]/35 bg-[#eae1da] p-5">
                  <InfoIcon icon="login" className="mb-3 block text-[24px]" />
                  <h3 className="font-bold text-[#153b39]">{t('quickInfo.checkin', lang)}</h3>
                  <p className="mt-2 text-[18px] text-[#49463f]">{t('quickInfo.checkinTime', lang)}</p>
                </article>
                <article className="rounded-2xl border border-[#d8c6aa]/35 bg-[#eae1da] p-5">
                  <InfoIcon icon="logout" className="mb-3 block text-[24px]" />
                  <h3 className="font-bold text-[#153b39]">{t('quickInfo.checkout', lang)}</h3>
                  <p className="mt-2 text-[18px] text-[#49463f]">{t('quickInfo.checkoutTime', lang)}</p>
                </article>
              </div>
            </section>

            <section className="overflow-hidden rounded-[28px] border border-[#d8c6aa]/55 bg-[#fbf2eb] p-6 shadow-[0_16px_42px_rgba(30,53,49,0.08)] md:p-8">
              <div className="flex flex-col gap-7 md:flex-row md:items-center">
                <div className="flex-1">
                  <div className="mb-4 flex items-center gap-3">
                    <InfoIcon icon="restaurant" />
                    <h2 className="font-serif text-[26px] font-semibold text-[#153b39]">{t('quickInfo.morningDining', lang)}</h2>
                  </div>
                  <p className="text-[16px] leading-[1.75] text-[#66736f]">{t('quickInfo.breakfastDesc', lang)}</p>
                  <div className="mt-5 w-fit rounded-2xl bg-[#ffece7] px-5 py-4">
                    <span className="block text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#9a442d]">{t('quickInfo.breakfastHours', lang)}</span>
                    <span className="mt-1 block text-[20px] font-bold text-[#153b39]">{t('quickInfo.breakfastTime', lang)}</span>
                  </div>
                  <div className="mt-4 flex items-start gap-2 text-sm italic leading-relaxed text-[#7c2e19]">
                    <InfoIcon icon="lightbulb" className="text-[18px]" />
                    <p>{t('quickInfo.breakfastRecommend', lang)}</p>
                  </div>
                </div>
                <div className="h-52 w-full shrink-0 overflow-hidden rounded-2xl md:h-48 md:w-48">
                  <SafeImage alt="" className="h-full w-full object-cover" src={BREAKFAST_IMAGE} />
                </div>
              </div>
            </section>
          </div>

          <aside className="md:col-span-5">
            <section className="flex h-full flex-col justify-between rounded-[28px] bg-[#153b39] p-6 text-white shadow-[0_20px_56px_rgba(21,59,57,0.18)] md:p-8">
              <div>
                <div className="mb-7 flex items-center gap-3">
                  <InfoIcon icon="info_i" className="text-[#ffdbd2]" />
                  <h2 className="font-serif text-[26px] font-semibold text-white">{t('quickInfo.lateCheckout', lang)}</h2>
                </div>
                <p className="mb-7 text-[16px] leading-[1.75] text-white/[0.78]">{t('quickInfo.lateCheckoutDesc', lang)}</p>
                <div className="space-y-1">
                  {LATE_CHECKOUT_RULES.map((rule) => (
                    <div key={rule.labelKey} className="flex items-center justify-between gap-4 border-b border-white/20 py-4 last:border-b-0">
                      <span className="text-white/[0.88]">{t(rule.labelKey, lang)}</span>
                      <span className="text-right font-bold text-[#ffdbd2]">{t(rule.rateKey, lang)}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8 rounded-2xl bg-white/10 p-5">
                <div className="flex items-start gap-4 mb-4">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#ffdbd2]">
                    <InfoIcon icon="call" className="text-[20px] text-[#9a442d]" />
                  </div>
                  <p className="text-sm leading-relaxed text-white/[0.76]">{t('quickInfo.lateCheckoutNote', lang)}</p>
                </div>
                <div className="grid grid-cols-1 gap-2 text-xs">
                  <a className="flex items-center justify-between rounded-xl bg-white/15 px-3.5 py-2.5 font-bold text-white no-underline transition-colors hover:bg-white/25" href="tel:+84855484444">
                    <span className="flex items-center gap-2">
                      <InfoIcon icon="call" className="text-[18px] text-[#ffdbd2]" />
                      <span>Call Hotline</span>
                    </span>
                    <span className="text-[#ffdbd2]">+84 855 484 444</span>
                  </a>
                  <a className="flex items-center justify-between rounded-xl bg-[#0068ff]/30 px-3.5 py-2.5 font-bold text-white no-underline transition-colors hover:bg-[#0068ff]/50" href="https://zalo.me/84855484444" rel="noreferrer" target="_blank">
                    <span className="flex items-center gap-2">
                      <InfoIcon icon="chat" className="text-[18px] text-[#ffdbd2]" />
                      <span>Zalo</span>
                    </span>
                    <span className="text-[#ffdbd2]">+84 855 484 444</span>
                  </a>
                  <a className="flex items-center justify-between rounded-xl bg-[#25d366]/30 px-3.5 py-2.5 font-bold text-white no-underline transition-colors hover:bg-[#25d366]/50" href="https://wa.me/84855484444" rel="noreferrer" target="_blank">
                    <span className="flex items-center gap-2">
                      <InfoIcon icon="chat_bubble" className="text-[18px] text-[#ffdbd2]" />
                      <span>WhatsApp</span>
                    </span>
                    <span className="text-[#ffdbd2]">+84 855 484 444</span>
                  </a>
                </div>
              </div>
            </section>
          </aside>
        </div>

      </div>
    </main>
  );
}

export default QuickInfo;
