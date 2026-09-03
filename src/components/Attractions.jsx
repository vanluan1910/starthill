import { t } from '../i18n';
import EditorialHero from './ui/EditorialHero';
import Icon from './ui/Icon';
import SafeImage from './ui/SafeImage';
import { LinedSectionTitle } from './ui/SectionTitle';

const HERO_IMAGE = 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80';

const ENTERTAINMENT = [
  {
    nameKey: 'attr.vinwonders',
    descKey: 'attr.vinwondersDesc',
    timeKey: 'attr.time3540',
    maps: 'https://maps.app.goo.gl/TEUqujT55kNfuPBU7',
    img: 'https://images.unsplash.com/photo-1513889961551-628c1e5e2ee9?auto=format&fit=crop&w=800&q=80',
  },
  {
    nameKey: 'attr.safari',
    descKey: 'attr.safariDesc',
    timeKey: 'attr.time3540',
    maps: 'https://maps.app.goo.gl/yWXRLLzgDY3ZWrS5A',
    img: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=800&q=80',
  },
  {
    nameKey: 'attr.kissBridge',
    descKey: 'attr.kissBridgeDesc',
    timeKey: 'attr.time2025',
    maps: 'https://maps.app.goo.gl/va5sNfcey29BddTS8',
    img: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80',
  },
  {
    nameKey: 'attr.sunsetTown',
    descKey: 'attr.sunsetTownDesc',
    timeKey: 'attr.time2025',
    maps: 'https://maps.app.goo.gl/nmC99ZSPtADYbHzr8',
    img: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80',
  },
];

const SIGHTSEEING = [
  {
    nameKey: 'attr.dinhCau',
    descKey: 'attr.dinhCauDesc',
    distKey: 'attr.dinhCauDist',
    hoursKey: 'attr.dinhCauHours',
    maps: 'https://maps.app.goo.gl/UiPCYQ4PgMp7HFsn7',
    img: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
  },
  {
    nameKey: 'attr.pagoda',
    descKey: 'attr.pagodaDesc',
    maps: 'https://maps.app.goo.gl/2MMgpsxQA92s4RQAA',
    img: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=800&q=80',
  },
  {
    nameKey: 'attr.prison',
    descKey: 'attr.prisonDesc',
    maps: 'https://maps.app.goo.gl/D4r9LKhuYXdgEzzEA',
    img: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
  },
];

const CRAFTS = [
  {
    nameKey: 'attr.pepperFarm',
    descKey: 'attr.pepperFarmDesc',
    maps: 'https://maps.app.goo.gl/DneokAsKm5STDES66',
    img: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=800&q=80',
  },
  {
    nameKey: 'attr.pearlFarm',
    descKey: 'attr.pearlFarmDesc',
    maps: 'https://maps.app.goo.gl/ULXWtshbNX8SsuG19',
    img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
  },
  {
    nameKey: 'attr.fishSauce',
    descKey: 'attr.fishSauceDesc',
    maps: 'https://maps.app.goo.gl/ZbYkdG31qpEm1n4x5',
    img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
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
        <SafeImage alt={t(item.nameKey, lang)} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" src={item.img} />
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
    <article className="group flex flex-col justify-between rounded-[24px] bg-[#fbf9f5] p-4 shadow-[0_14px_34px_rgba(50,34,20,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(50,34,20,0.14)]">
      <div>
        <div className="relative aspect-square overflow-hidden rounded-[18px]">
          {item.hoursKey && (
            <div className="absolute top-3 right-3 z-10 flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-xs font-bold text-[#322214] shadow-sm backdrop-blur">
              <Icon className="text-sm text-[#622a11]">schedule</Icon>
              {t(item.hoursKey, lang)}
            </div>
          )}
          <SafeImage alt={t(item.nameKey, lang)} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src={item.img} />
        </div>
        <h3 className="mt-5 font-serif text-xl font-bold text-[#322214]">{t(item.nameKey, lang)}</h3>
        {item.distKey && (
          <p className="mt-1 text-xs font-semibold text-[#622a11]">{t(item.distKey, lang)}</p>
        )}
        <p className="mt-2 text-sm leading-[1.7] text-[#4e453e]">{t(item.descKey, lang)}</p>
      </div>
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
        <SafeImage alt={t(item.nameKey, lang)} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src={item.img} />
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
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
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

          {/* Mass Schedule – Duong Dong Parish Church */}
          <div className="mt-6 overflow-hidden rounded-[24px] bg-[#fbf9f5] shadow-[0_14px_34px_rgba(50,34,20,0.08)] border border-[#e8dfd5]">
            <div className="flex flex-col lg:flex-row">
              {/* Church Image Banner */}
              <div className="relative aspect-[16/9] lg:aspect-auto lg:w-5/12 overflow-hidden shrink-0">
                <SafeImage
                  alt={t('attr.churchName', lang)}
                  className="h-full w-full object-cover"
                  src="https://images.unsplash.com/photo-1548625361-180a373b53c7?auto=format&fit=crop&w=800&q=80"
                />
                <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1 text-xs font-bold text-white backdrop-blur-md">
                  <Icon className="text-sm text-[#e8c39e]">church</Icon>
                  <span>{t('attr.churchName', lang)}</span>
                </div>
              </div>

              {/* Schedule Info */}
              <div className="flex flex-1 flex-col justify-between p-5 md:p-6">
                <div>
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-[#e8dfd5] pb-3 mb-4">
                    <h3 className="font-serif text-lg font-bold text-[#322214]">
                      {t('attr.churchTitle', lang)}
                    </h3>
                    <a
                      className="inline-flex items-center gap-1.5 self-start sm:self-auto rounded-full bg-[#322214] px-4 py-1.5 text-xs font-bold text-white no-underline transition-all hover:bg-[#622a11]"
                      href="https://maps.app.goo.gl/ctf1g9iH5J3baDzK7"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <Icon className="text-sm">explore</Icon>
                      {t('attr.viewMaps', lang)}
                    </a>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="rounded-[18px] bg-white/80 p-4 border border-[#eee6dc]">
                      <div className="mb-2 flex items-center gap-2 text-sm font-bold text-[#322214]">
                        <Icon className="text-base text-[#622a11]">calendar_today</Icon>
                        {t('attr.monSat', lang)}
                      </div>
                      <ul className="space-y-1.5 text-xs text-[#4e453e]">
                        <li className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#622a11]" />
                          {t('attr.morningMass', lang)}
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#622a11]" />
                          {t('attr.eveningMass', lang)}
                        </li>
                      </ul>
                    </div>

                    <div className="rounded-[18px] bg-white/80 p-4 border border-[#eee6dc]">
                      <div className="mb-2 flex items-center gap-2 text-sm font-bold text-[#322214]">
                        <Icon className="text-base text-[#622a11]">event</Icon>
                        {t('attr.sunday', lang)}
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs text-[#4e453e]">
                        <div className="flex items-center gap-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#622a11]" />
                          {t('attr.mass1', lang)}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#622a11]" />
                          {t('attr.mass2', lang)}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#622a11]" />
                          {t('attr.mass3', lang)}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#622a11]" />
                          {t('attr.mass4', lang)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-center font-serif text-xs italic text-[#622a11]/90">
                  "{t('attr.churchBlessing', lang)}"
                </p>
              </div>
            </div>
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
                <SafeImage alt={t(pepperFarm.nameKey, lang)} className="h-full w-full object-cover" src={pepperFarm.img} />
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
              <div className="flex flex-col gap-3 rounded-[20px] bg-[#4a3728] p-6 text-[#ffdbce] sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h4 className="font-bold text-white">{t('attr.bookTraditionalTour', lang)}</h4>
                  <p className="mt-1 text-xs text-white/75">{t('attr.bookTraditionalTourDesc', lang)}</p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <a className="inline-flex items-center gap-1.5 rounded-xl bg-[#fbddc7] px-3.5 py-2 text-xs font-bold text-[#28180b] no-underline transition-colors hover:bg-[#dec1ac]" href="tel:+84855484444">
                    <span className="material-symbols-outlined text-sm">call</span>
                    Call: +84 855 484 444
                  </a>
                  <a className="inline-flex items-center gap-1.5 rounded-xl bg-[#0068ff] px-3.5 py-2 text-xs font-bold text-white no-underline transition-colors hover:bg-[#0052cc]" href="https://zalo.me/84855484444" rel="noreferrer" target="_blank">
                    <span className="material-symbols-outlined text-sm">chat</span>
                    Zalo: +84 855 484 444
                  </a>
                  <a className="inline-flex items-center gap-1.5 rounded-xl bg-[#25d366] px-3.5 py-2 text-xs font-bold text-white no-underline transition-colors hover:bg-[#1da851]" href="https://wa.me/84855484444" rel="noreferrer" target="_blank">
                    <span className="material-symbols-outlined text-sm">chat_bubble</span>
                    WhatsApp: +84 855 484 444
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Attractions;
