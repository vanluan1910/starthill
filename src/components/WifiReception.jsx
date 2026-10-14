import { t } from '../i18n';
import SafeImage from './ui/SafeImage';

const HERO_IMAGE = 'https://res.cloudinary.com/dwb9x5s1j/image/upload/v1785128650/c064cf04-6c43-4c00-b570-433efb87ad50_yrtzwz.png';

const IMAGES = [
  { labelKey: 'wifi.lobby', altKey: 'wifi.lobbyAlt', src: 'https://res.cloudinary.com/dwb9x5s1j/image/upload/v1790098659/1784015817296_885263377326364022_g7328569027530867083_fbcff319b17e329729fd3250b4ce9fc2_wedcax.jpg' },
  { labelKey: 'wifi.concierge', altKey: 'wifi.conciergeAlt', src: 'https://res.cloudinary.com/dwb9x5s1j/image/upload/v1790098664/1784015817206_885263377326364022_g7328569027530867083_d1a2d8a2a3b5ef29505cef40d22693f2_qsk5qv.jpg' },
  { labelKey: 'wifi.connectivity', altKey: 'wifi.connectivityAlt', src: 'https://res.cloudinary.com/dwb9x5s1j/image/upload/v1790098678/1784015817228_885263377326364022_g7328569027530867083_1d3fe220d1eb437c93bdd91f2e76487e_qtvedn.jpg' },
];

const SAFE_STEPS = [
  {
    stepKey: 'wifi.safeStep1Badge',
    titleKey: 'wifi.safeStep1Title',
    descKey: 'wifi.safeStep1Desc',
    hintKey: 'wifi.safeStep1Hint',
    icon: 'touch_app',
    badgeColor: 'bg-red-500 text-white',
  },
  {
    stepKey: 'wifi.safeStep2Badge',
    titleKey: 'wifi.safeStep2Title',
    descKey: 'wifi.safeStep2Desc',
    exampleKey: 'wifi.safeStep2Example',
    icon: 'dialpad',
    badgeColor: 'bg-amber-500 text-white',
  },
  {
    stepKey: 'wifi.safeStep3Badge',
    titleKey: 'wifi.safeStep3Title',
    descKey: 'wifi.safeStep3Desc',
    hintKey: 'wifi.safeStep3Hint',
    icon: 'rotate_right',
    badgeColor: 'bg-emerald-600 text-white',
  },
  {
    stepKey: 'wifi.safeStep4Badge',
    titleKey: 'wifi.safeStep4Title',
    descKey: 'wifi.safeStep4Desc',
    hintKey: 'wifi.safeStep4Hint',
    icon: 'lock_open',
    badgeColor: 'bg-[#153b39] text-[#d6a252]',
  },
];

function Icon({ children, className = '' }) {
  return (
    <span aria-hidden="true" className={`material-symbols-outlined ${className}`}>
      {children}
    </span>
  );
}

function WifiReception({ lang = 'en' }) {
  return (
    <main className="editorial-page min-h-full px-4 pb-24 pt-24 font-sans text-[#1f1b17] md:px-10 md:pb-16 md:pt-28">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <section className="relative min-h-[360px] overflow-hidden rounded-[28px] border border-[#d8c6aa]/55 bg-[#eae1da] shadow-[0_22px_60px_rgba(30,53,49,0.14)] md:min-h-[430px]">
          <SafeImage alt={t('wifi.heroAlt', lang)} className="absolute inset-0 h-full w-full object-cover" src={HERO_IMAGE} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 max-w-2xl p-6 md:p-9">
            <span className="mb-3 block text-[11px] font-extrabold uppercase tracking-[0.24em] text-white/[0.84]">
              {t('wifi.reception', lang)}
            </span>
            <h1 className="font-serif text-[42px] font-bold leading-tight tracking-[-0.045em] text-white text-shadow md:text-[64px]">
              {t('wifi.title', lang)}
            </h1>
            <p className="mt-4 max-w-xl text-[16px] font-medium leading-[1.7] text-white/90 md:text-[18px]">
              {t('wifi.subtitle', lang)}
            </p>
          </div>
        </section>

        <section className="px-1">
          <h2 className="font-serif text-[38px] font-bold leading-tight tracking-[-0.04em] text-[#153b39] md:text-[48px]">
            {t('wifi.pageTitle', lang)}
          </h2>
          <div className="mt-3 h-1 w-24 rounded-full bg-[#9a442d]" />
        </section>

        <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <article className="flex min-h-[300px] flex-col justify-between rounded-[28px] border border-[#d8c6aa]/55 bg-[#fbf2eb] p-6 shadow-[0_16px_42px_rgba(30,53,49,0.08)] md:p-8">
            <div className="space-y-4">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-[#f5efe6] text-[#615e57]">
                <Icon className="text-[30px]">wifi</Icon>
              </div>
              <div>
                <h3 className="font-serif text-[26px] font-semibold text-[#153b39]">{t('wifi.complimentary', lang)}</h3>
                <p className="mt-2 text-[16px] leading-[1.7] text-[#66736f]">{t('wifi.free', lang)}</p>
              </div>
            </div>
            <div className="mt-7 rounded-[24px] bg-[#153b39] p-5 text-[#fffaf0] shadow-[0_18px_42px_rgba(21,59,57,0.18)]">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-white/[0.76]">{t('wifi.ssid', lang)}</p>
                  <p className="mt-1 text-sm text-white/[0.76]">{t('wifi.passwordLabel', lang)}</p>
                  <p className="mt-1 text-[28px] font-bold tracking-widest text-white">{t('wifi.passwordValue', lang)}</p>
                </div>
                <Icon className="text-[42px] text-[#d6a252]">wifi_password</Icon>
              </div>
            </div>
          </article>

          <article className="flex min-h-[300px] flex-col justify-between rounded-[28px] border border-[#ffb4a1]/45 bg-[#ffece7] p-6 shadow-[0_16px_42px_rgba(30,53,49,0.08)] md:p-8">
            <div className="space-y-4">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-[#9a442d] text-white">
                <Icon className="text-[30px]">support_agent</Icon>
              </div>
              <div>
                <h3 className="font-serif text-[26px] font-semibold text-[#153b39]">{t('wifi.reception', lang)}</h3>
                <p className="mt-2 text-[16px] leading-[1.7] text-[#66736f]">{t('wifi.receptionSub', lang)}</p>
              </div>
            </div>
            <div className="mt-7 grid gap-2.5">
              <a className="flex items-center gap-3 rounded-2xl bg-white/[0.62] px-4 py-3 font-bold text-[#153b39] no-underline hover:bg-white" href="tel:+84855484444">
                <Icon className="text-[#9a442d]">call</Icon>
                <span>Call: 0855 484 444</span>
              </a>
              <a className="flex items-center gap-3 rounded-2xl bg-white/[0.62] px-4 py-3 font-bold text-[#153b39] no-underline hover:bg-white" href="tel:+84789120791">
                <Icon className="text-[#9a442d]">call</Icon>
                <span>Call: 0789 120 791</span>
              </a>
              <div className="grid grid-cols-2 gap-2">
                <a className="flex items-center justify-center gap-2 rounded-2xl bg-blue-50/80 px-3 py-2.5 font-bold text-blue-700 no-underline hover:bg-blue-100" href="https://zalo.me/84855484444" rel="noreferrer" target="_blank">
                  <Icon className="text-blue-600 text-[20px]">chat</Icon>
                  <span>Zalo</span>
                </a>
                <a className="flex items-center justify-center gap-2 rounded-2xl bg-emerald-50/80 px-3 py-2.5 font-bold text-emerald-700 no-underline hover:bg-emerald-100" href="https://wa.me/84855484444" rel="noreferrer" target="_blank">
                  <Icon className="text-emerald-600 text-[20px]">chat_bubble</Icon>
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </article>
        </section>

        {/* SAFE INSTRUCTIONS SECTION */}
        <section className="space-y-6">
          <div className="flex flex-col gap-2 px-1">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#153b39] text-[#d6a252] shadow-md">
                <Icon className="text-[26px]">lock</Icon>
              </div>
              <h2 className="font-serif text-[32px] font-bold leading-tight tracking-[-0.035em] text-[#153b39] md:text-[42px]">
                {t('wifi.safeSectionTitle', lang)}
              </h2>
            </div>
            <p className="max-w-2xl text-[15px] leading-relaxed text-[#66736f] md:text-[16px]">
              {t('wifi.safeSectionDesc', lang)}
            </p>
            <div className="h-1 w-24 rounded-full bg-[#9a442d]" />
          </div>

          {/* 4 Step Cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SAFE_STEPS.map((step, idx) => (
              <article
                key={step.stepKey}
                className="group relative flex flex-col justify-between rounded-[24px] border border-[#d8c6aa]/50 bg-[#fdf8f3] p-5 shadow-[0_12px_32px_rgba(30,53,49,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#153b39]/30 hover:shadow-[0_18px_36px_rgba(30,53,49,0.12)] md:p-6"
              >
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${step.badgeColor} shadow-sm`}>
                      {t(step.stepKey, lang)}
                    </span>
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-white text-[#153b39] shadow-sm transition-transform duration-300 group-hover:scale-110">
                      <Icon className="text-[22px]">{step.icon}</Icon>
                    </div>
                  </div>

                  <h3 className="font-serif text-[19px] font-bold leading-snug text-[#153b39] md:text-[20px]">
                    {t(step.titleKey, lang)}
                  </h3>

                  <p className="mt-2.5 text-[14px] leading-relaxed text-[#5a574f]">
                    {t(step.descKey, lang)}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#d8c6aa]/40">
                  {step.hintKey && idx === 0 && (
                    <div className="inline-flex items-center gap-1.5 rounded-lg bg-red-100/90 px-2.5 py-1 text-xs font-semibold text-red-800">
                      <span className="h-2 w-2 rounded-full bg-red-600 animate-pulse" />
                      <span>{t(step.hintKey, lang)}</span>
                    </div>
                  )}

                  {step.exampleKey && idx === 1 && (
                    <div className="inline-flex items-center gap-1.5 rounded-lg bg-amber-100/90 px-2.5 py-1 text-xs font-semibold text-amber-900">
                      <span className="h-2 w-2 rounded-full bg-amber-500" />
                      <span>{t(step.exampleKey, lang)}</span>
                    </div>
                  )}

                  {idx === 2 && (
                    <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-bold">
                      <span className="rounded-md bg-red-100 px-2 py-0.5 text-red-700">🔴 LOW BATTERY</span>
                      <span className="rounded-md bg-emerald-100 px-2 py-0.5 text-emerald-800">🟢 READY</span>
                    </div>
                  )}

                  {step.hintKey && idx === 3 && (
                    <div className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-100/90 px-2.5 py-1 text-xs font-bold text-emerald-800">
                      <Icon className="text-[16px]">check_circle</Icon>
                      <span>{t(step.hintKey, lang)}</span>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>

          {/* Important Notice & Reception Hotline */}
          <article className="rounded-[28px] border border-[#ffb4a1]/50 bg-[#fff5f2] p-6 shadow-[0_14px_36px_rgba(154,68,45,0.08)] md:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="space-y-3 lg:max-w-3xl">
                <div className="flex items-center gap-2.5 text-[#9a442d]">
                  <div className="grid h-8 w-8 place-items-center rounded-full bg-[#9a442d] text-white">
                    <Icon className="text-[20px]">security</Icon>
                  </div>
                  <h3 className="font-serif text-[20px] font-bold text-[#153b39] md:text-[22px]">
                    {t('wifi.safeNoteTitle', lang)}
                  </h3>
                </div>
                <div className="space-y-2 text-[14px] leading-relaxed text-[#49463f] md:text-[15px]">
                  <p className="flex items-start gap-2">
                    <span className="font-bold text-[#9a442d] mt-0.5">•</span>
                    <span>{t('wifi.safeNoteStaff', lang)}</span>
                  </p>
                  <p className="flex items-start gap-2 font-medium text-[#9a442d]">
                    <span className="font-bold text-[#9a442d] mt-0.5">•</span>
                    <span>{t('wifi.safeNoteFee', lang)}</span>
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 sm:items-stretch lg:min-w-[240px]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#9a442d]">
                  {t('wifi.safeContactReception', lang)}
                </span>
                <a
                  className="flex items-center justify-center gap-2 rounded-2xl bg-[#153b39] px-4 py-3 font-bold text-[#fffaf0] no-underline shadow-sm transition hover:bg-[#1a4a47]"
                  href="tel:+84855484444"
                >
                  <Icon className="text-[20px] text-[#d6a252]">call</Icon>
                  <span>0855 484 444</span>
                </a>
                <a
                  className="flex items-center justify-center gap-2 rounded-2xl border border-[#153b39]/20 bg-white px-4 py-3 font-bold text-[#153b39] no-underline shadow-sm transition hover:bg-neutral-50"
                  href="tel:+84789120791"
                >
                  <Icon className="text-[20px] text-[#9a442d]">call</Icon>
                  <span>0789 120 791</span>
                </a>
              </div>
            </div>
          </article>
        </section>

        <section className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {IMAGES.map((image) => (
            <figure key={image.labelKey} className="group relative h-64 overflow-hidden rounded-[24px] border border-[#d8c6aa]/55 bg-[#eae1da] shadow-[0_14px_34px_rgba(30,53_49,0.08)]">
                <SafeImage
                  alt={t(image.altKey, lang)}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={image.src}
                />
              <div className="absolute inset-0 bg-gradient-to-t from-[#153b39]/70 to-transparent" />
              <figcaption className="absolute bottom-4 left-4 font-serif text-[22px] font-semibold text-white">
                {t(image.labelKey, lang)}
              </figcaption>
            </figure>
          ))}
        </section>
      </div>
    </main>
  );
}

export default WifiReception;
