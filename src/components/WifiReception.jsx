import { t } from '../i18n';

const HERO_IMAGE = 'https://res.cloudinary.com/dwb9x5s1j/image/upload/v1785128650/c064cf04-6c43-4c00-b570-433efb87ad50_yrtzwz.png';

const SERVICES = [
  { key: 'wifi.serviceTourInfo', icon: 'map' },
  { key: 'wifi.serviceTaxi', icon: 'local_taxi' },
  { key: 'wifi.serviceAirport', icon: 'flight_takeoff' },
  { key: 'wifi.serviceMotorbike', icon: 'moped' },
  { key: 'wifi.serviceLaundry', icon: 'dry_cleaning' },
  { key: 'wifi.serviceTourBooking', icon: 'confirmation_number' },
];

const IMAGES = [
  { labelKey: 'wifi.lobby', altKey: 'wifi.lobbyAlt', src: 'https://res.cloudinary.com/dwb9x5s1j/image/upload/v1782898003/6A8A1459_e7nm7o.png' },
  { labelKey: 'wifi.concierge', altKey: 'wifi.conciergeAlt', src: 'https://res.cloudinary.com/dwb9x5s1j/image/upload/v1782898184/6A8A1256_udxnxm.png' },
  { labelKey: 'wifi.connectivity', altKey: 'wifi.connectivityAlt', src: 'https://res.cloudinary.com/dwb9x5s1j/image/upload/v1782898270/6A8A1287_bzjafl.png' },
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
          <img alt={t('wifi.heroAlt', lang)} className="absolute inset-0 h-full w-full object-cover" decoding="async" loading="lazy" src={HERO_IMAGE} />
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
            <div className="mt-7 grid gap-3">
              <a className="flex items-center gap-3 rounded-2xl bg-white/[0.62] px-4 py-3 font-bold text-[#153b39] no-underline" href="tel:0855484444">
                <Icon className="text-[#9a442d]">call</Icon>
                <span>0855 484 444</span>
              </a>
              <a className="flex items-center gap-3 rounded-2xl bg-white/[0.62] px-4 py-3 font-bold text-[#153b39] no-underline" href="https://api.whatsapp.com/send?phone=%2B84855484444" rel="noreferrer" target="_blank">
                <Icon className="text-green-600">chat</Icon>
                <span>+84 855 484 444</span>
              </a>
            </div>
          </article>
        </section>

        <section>
          <h2 className="mb-5 font-serif text-[28px] font-semibold text-[#153b39]">{t('wifi.teamAssist', lang)}</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <article key={service.key} className="group rounded-[24px] border border-[#d8c6aa]/55 bg-[#fff8f4] p-5 shadow-[0_10px_28px_rgba(30,53,49,0.06)] transition-colors hover:border-[#9a442d]">
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-2xl bg-[#f0e7df] text-[#615e57] transition-colors group-hover:bg-[#f5efe6]">
                  <Icon>{service.icon}</Icon>
                </div>
                <h3 className="font-bold text-[#153b39]">{t(service.key, lang)}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {IMAGES.map((image) => (
            <figure key={image.labelKey} className="group relative h-64 overflow-hidden rounded-[24px] border border-[#d8c6aa]/55 bg-[#eae1da] shadow-[0_14px_34px_rgba(30,53,49,0.08)]">
                <img
                  alt={t(image.altKey, lang)}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  decoding="async"
                  loading="lazy"
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
