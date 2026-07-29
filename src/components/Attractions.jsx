import { t } from '../i18n';
import EditorialHero from './ui/EditorialHero';
import Icon from './ui/Icon';
import { LinedSectionTitle } from './ui/SectionTitle';

const HERO_IMAGE = 'https://lh3.googleusercontent.com/aida/AP1WRLuh3WtjAN3fXt4neKiOdHW8qu9zntBJVNkmydMlEL60hYAB42uUfXCijkRvSLDOask0Vpx_exozjKluJJNjeb5Lq0tusFagv8UBQnloJCq6fks_bMsJ6aKiz_GBbrkzPaTOTqEsBR-73A-MGNbcmfgeksN7o0FHHf-4TREyuHqAWO_bpYWwRj_fZdX_fXoaRMNUfblGU0mzluKcFk9KZGR3GOOZOBLs8zcdck_iwBT9EybgsimXT4mCDtuD';

const ENTERTAINMENT = [
  {
    nameKey: 'attr.vinwonders',
    descKey: 'attr.vinwondersDesc',
    timeKey: 'attr.time3540',
    maps: 'https://maps.app.goo.gl/TEUqujT55kNfuPBU7',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdKt9tJ0OKSZ0i09NTj_qsMZd_h4y_DTWPp5Ooh4PCjgQ85xpbO_9CUwLPUOLg27ZG0knHq0hYemH6H6lzY4wQDlKXkWheZ_jXf3Gg0TErMMm9Rh6TDuenUkSmSZNtGQlGUyrC28woyCsfKgpBz47meGZgP8NdyFMSeiYkiGftokS3y1jilrYTky_qeh1zKd0FHDEXjiMom6h1WxKmmaRqnRVNBoYyqTUFdI9iZ85U9R23a1_nsgyLyg',
  },
  {
    nameKey: 'attr.safari',
    descKey: 'attr.safariDesc',
    timeKey: 'attr.time3540',
    maps: 'https://maps.app.goo.gl/yWXRLLzgDY3ZWrS5A',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCa0ZND3hS_okyW7fgyHkMqVvR3y3nVO9K87gcIe5uZGkQ5wLog4bLN-4vmol3pWirWoTLh-YIorPjavqqvytWEv9IhltOFtMS8Rfktl2PxwUfG2r6ag0U3_9aZ-giAoFcynEARitB95otJDr-7vW8P5OOw48YgrhBkfXV3ne5uO0ifuq_R_vDaXKgPGpGKfsSC5f1No-dFS4XQ8px5ZTFYwGh25KUDvZKQDbOMsPuOMtY9vGnWWEGWnA',
  },
  {
    nameKey: 'attr.kissBridge',
    descKey: 'attr.kissBridgeDesc',
    timeKey: 'attr.time2025',
    maps: 'https://maps.app.goo.gl/va5sNfcey29BddTS8',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLh_SI8E084tgnmfnhEyHwwfMnUrgO2dx9Eda2ddDuwTlKYotlXlZYM27zQm90isqclDbHsJ7_yCn55uVS6hol6FIKPZYv6W5ZOAf9H41MUyvoG65wfTG31Nfo7s2hm11g-FjbelvzPob1P8A-AE2TJ6c0Bpl0pL2-Cj-FRR_XWP0mFzriAhGAY9_4VCAtf6n7wXlEleXfSCcp5bKIkmoypimkQoQV7s104Ow9FPsjiCZ3McMSTUDGZA',
  },
];

const SIGHTSEEING = [
  {
    nameKey: 'attr.pagoda',
    descKey: 'attr.pagodaDesc',
    maps: 'https://maps.app.goo.gl/2MMgpsxQA92s4RQAA',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBflkxzSlgcqmzUvmtvGKcTHr1JQOaCmowb8PiXaJCqv5QRot6tZwrrPTuNyab6wtLH7h6CGAZZaX6Jh2DX5_beUTE2Wzoz8q5Q6QJRX4oN2SLK7l3b2ZqLwv1XpiwBYqgwbpXwW-CPJfAf6hph9I8z0HLI9K7hKXhBpy0dCoCiuG_VwutQwTjn6htxnm9Zio-5FdwWKy2Vss7ByrPQLpydbY17nhVkBB-Ge6zZcF1WSQbk-WrXcihcYw',
  },
  {
    nameKey: 'attr.prison',
    descKey: 'attr.prisonDesc',
    maps: 'https://maps.app.goo.gl/D4r9LKhuYXdgEzzEA',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9DQbAo3-LcDRRHgTe6OplAVb3pugSQHHABCKBl1u54iWZwrblOxu3f-wXQc368j-chvmC6d1f8SuJQJTCCwUz_G5Zo0J0PCUAd0kDX_cj0y7Fxou-KEe0elxerVOuRdkIDForwiMI4O4v24WXMh1tb1_BbSFAqfmMwucLjrqEDUZKdMUxIUd-d1JrhUHe9r9O7mTkIfAKHXob4d5rliC5u7P3k7k9KN_iijBrh97yWeUZ-ciSOmmn8A',
  },
  {
    nameKey: 'attr.sunsetTown',
    descKey: 'attr.sunsetTownDesc',
    maps: 'https://maps.app.goo.gl/nmC99ZSPtADYbHzr8',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVsNZZHrpp7we_m1tSNKiOZU0GyuUbGhj7Qpf8vu95HQve4QV1wRRyjeOFAoYiHtUZOK9dtRon5V9qDaNgBqOLLM0qfx3_Rn4cbGRa38kCfdy6bWt9BcFXBOiqXaNDXn0Vk6h0LY1Hb5uEhkBEaX0jike6PpPNoaqCaNyFbIzP8iF98a5RnEDwjuRFPw1_2djFe2WDzXezHQeA1S0aVxEbP8WeVc6m7GDVJW3FxCaslxwPceB-F9yqZw',
  },
];

const CRAFTS = [
  {
    nameKey: 'attr.pepperFarm',
    descKey: 'attr.pepperFarmDesc',
    maps: 'https://maps.app.goo.gl/DneokAsKm5STDES66',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDeNhbwO4Q0VbWHF9zsb4krtvxerx6N4pTadzKrG_314yXJd4vdVhg3BIoHcNMCslM4883VWPKf2gacRO2gvpewmtylgnIJUPzsBHhK0Mg1g5mdrRhYAbRmxQVmTdeFn6iHmOeObrzeWEqCnAL0-5ZbRS-3ewUoHU2y8AnCHrn86YEvccspER7Cp8xtK2BVQCbKnyGANQirFLYkdvQRqKQ-aEfmjXgjrNUnyhWSmQW-gPE8UOXnbf5RWA',
  },
  {
    nameKey: 'attr.pearlFarm',
    descKey: 'attr.pearlFarmDesc',
    maps: 'https://maps.app.goo.gl/ULXWtshbNX8SsuG19',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByLIFBIQ5AAkW910RQef1DEmyacV4rz1-IS-WdaTOEOw0I9FDhFVR03kGsYpkW13Xd2gx7t_BrkcSTdKlyOWYb75eVAjNEuM4Vv0PBCoNi6qwPeMsIdNVaJcFI5m5V9NRcMlDVrX3AyhkcnLJvwWsQTifpBnVcZydN_EvaO1014-1gRonyADBaqo5asfeHwrTOWMjwKU3V909N5AaSEOviU7mRuKrn54K8intaMktPuFhYGnQAOlVsIw',
  },
  {
    nameKey: 'attr.fishSauce',
    descKey: 'attr.fishSauceDesc',
    maps: 'https://maps.app.goo.gl/ZbYkdG31qpEm1n4x5',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtLlpDz6Hv3z_cYC4eobkOEPE51bzvkRSiL1S9Ab5R6hG5pGbcRPO7vg0Eg2zlGmizoW-RiBrXDxjhAq3xm-SBdYWXo9LmxASKFtRudydwnxnd-mX2k1_yJJejGWqn9CsU2WaeQNkaZvdXpwzheg0F7EoHEJ3CDvF10jgU0-zu-ctsrCy241F2WA-0ewvIvPzssy9fKWBqOo0IgoVUaH3BdqOsorRTjNwnXguSOnwsMtFRzwHAkwxMVQ',
  },
];

function EntertainmentCard({ item, lang }) {
  return (
    <article className="group flex flex-col gap-5 rounded-[24px] border border-transparent p-2 transition-all duration-300 hover:-translate-y-1 hover:border-[#d2c4bb] hover:bg-[#fbf9f5] hover:shadow-[0_20px_48px_rgba(50,34,20,0.12)]">
      <div className="relative aspect-[16/10] overflow-hidden rounded-[20px]">
        <div className="absolute left-3 top-3 z-10 flex items-center gap-1 rounded-full bg-[#fbf9f5]/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#322214] backdrop-blur-sm">
          <Icon className="text-sm">schedule</Icon>
          {t(item.timeKey, lang)}
        </div>
        <img alt={t(item.nameKey, lang)} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" decoding="async" loading="lazy" src={item.img} />
      </div>
      <div className="px-2 pb-2">
        <h3 className="mb-3 font-serif text-[26px] font-bold text-[#322214]">{t(item.nameKey, lang)}</h3>
        <p className="mb-4 text-sm leading-[1.75] text-[#4e453e]">{t(item.descKey, lang)}</p>
        <a className="inline-flex items-center gap-2 border-b border-[#322214]/20 pb-1 text-sm font-bold text-[#322214] no-underline transition-all hover:border-[#322214] hover:gap-3" href={item.maps} rel="noreferrer" target="_blank">
          <Icon className="text-lg">explore</Icon>
          {t('attr.viewMaps', lang)}
        </a>
      </div>
    </article>
  );
}

function SquareCard({ item, lang }) {
  return (
    <article className="rounded-[24px] bg-[#fbf9f5] p-4 shadow-[0_14px_34px_rgba(50,34,20,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(50,34,20,0.14)]">
      <div className="aspect-square overflow-hidden rounded-[18px]">
        <img alt={t(item.nameKey, lang)} className="h-full w-full object-cover" decoding="async" loading="lazy" src={item.img} />
      </div>
      <h3 className="mt-5 font-serif text-xl font-bold text-[#322214]">{t(item.nameKey, lang)}</h3>
      <p className="mt-2 text-sm leading-[1.7] text-[#4e453e]">{t(item.descKey, lang)}</p>
      <a className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-[#322214] no-underline transition-all hover:gap-2" href={item.maps} rel="noreferrer" target="_blank">
        {t('attr.viewMaps', lang)}
        <Icon className="text-sm">arrow_forward</Icon>
      </a>
    </article>
  );
}

function CompactCraftCard({ item, lang }) {
  return (
    <article className="group flex gap-4 rounded-[20px] border border-[#d2c4bb] p-4 transition-all hover:border-[#322214]">
      <div className="h-24 w-24 shrink-0 overflow-hidden rounded-[16px]">
        <img alt={t(item.nameKey, lang)} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" decoding="async" loading="lazy" src={item.img} />
      </div>
      <div className="flex flex-col justify-center">
        <h4 className="font-bold text-[#322214]">{t(item.nameKey, lang)}</h4>
        <p className="mt-1 text-xs leading-[1.6] text-[#4e453e]">{t(item.descKey, lang)}</p>
        <a className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-[#322214] no-underline transition-all group-hover:gap-2" href={item.maps} rel="noreferrer" target="_blank">
          {t('attr.viewDetails', lang)}
          <Icon className="text-[14px]">arrow_forward</Icon>
        </a>
      </div>
    </article>
  );
}

function Attractions({ lang = 'en' }) {
  const [pepperFarm, ...smallCrafts] = CRAFTS;

  return (
    <main className="editorial-page min-h-full px-4 pb-24 pt-24 font-sans text-[#1b1c1a] md:px-10 md:pb-16 md:pt-28">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <EditorialHero
          alt={t('attr.title', lang)}
          description={t('attr.heroDesc', lang)}
          image={HERO_IMAGE}
          kicker={t('attr.heroKicker', lang)}
          overlayClassName="bg-black/45"
          title={t('attr.heroTitle', lang)}
        />

        <section>
          <LinedSectionTitle>{t('attr.entertainment', lang)}</LinedSectionTitle>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {ENTERTAINMENT.map((item) => (
              <EntertainmentCard key={item.nameKey} item={item} lang={lang} />
            ))}
          </div>
        </section>

        <section className="rounded-[28px] bg-[#f5f3ef] p-6 md:p-8">
          <LinedSectionTitle>{t('attr.sightseeingHeritage', lang)}</LinedSectionTitle>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {SIGHTSEEING.map((item) => (
              <SquareCard key={item.nameKey} item={item} lang={lang} />
            ))}
          </div>
        </section>

        <section>
          <div className="mb-8 flex flex-col gap-2">
            <LinedSectionTitle>{t('attr.traditionalCrafts', lang)}</LinedSectionTitle>
            <p className="max-w-2xl text-sm leading-[1.75] text-[#4e453e]">{t('attr.traditionalCraftsDesc', lang)}</p>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <article className="flex flex-col items-center gap-6 rounded-[28px] bg-[#efeeea] p-6 md:flex-row">
              <div className="aspect-square w-full overflow-hidden rounded-[24px] shadow-md md:w-1/2">
                <img alt={t(pepperFarm.nameKey, lang)} className="h-full w-full object-cover" decoding="async" loading="lazy" src={pepperFarm.img} />
              </div>
              <div className="w-full md:w-1/2">
                <span className="mb-3 inline-block rounded-full bg-[#ffdbce] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#622a11]">
                  {t('attr.mustVisit', lang)}
                </span>
                <h3 className="font-serif text-[28px] font-bold text-[#322214]">{t(pepperFarm.nameKey, lang)}</h3>
                <p className="mt-3 text-sm leading-[1.75] text-[#4e453e]">{t(pepperFarm.descKey, lang)}</p>
                <a className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#322214] no-underline hover:underline" href={pepperFarm.maps} rel="noreferrer" target="_blank">
                  <Icon>location_on</Icon>
                  {t('attr.viewMaps', lang)}
                </a>
              </div>
            </article>

            <div className="flex flex-col gap-4">
              {smallCrafts.map((item) => (
                <CompactCraftCard key={item.nameKey} item={item} lang={lang} />
              ))}
              <div className="flex items-center justify-between rounded-[20px] bg-[#4a3728] p-6 text-[#ffdbce]">
                <div>
                  <h4 className="font-bold text-white">{t('attr.bookTraditionalTour', lang)}</h4>
                  <p className="mt-1 text-xs text-white/75">{t('attr.bookTraditionalTourDesc', lang)}</p>
                </div>
                <a className="rounded-xl bg-[#fbddc7] px-4 py-2 text-xs font-bold text-[#28180b] no-underline transition-colors hover:bg-[#dec1ac]" href="tel:0855484444">
                  {t('attr.bookNow', lang)}
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Attractions;
