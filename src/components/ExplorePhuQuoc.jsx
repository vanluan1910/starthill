import { t } from '../i18n';
import EditorialHero from './ui/EditorialHero';
import SafeImage from './ui/SafeImage';
import SectionTitle from './ui/SectionTitle';

const BEACHES = [
  {
    nameKey: 'explore.baiTruong',
    distKey: 'explore.baiTruongDist',
    descKey: 'explore.baiTruongDesc',
    maps: 'https://maps.app.goo.gl/1uaj2VLmn5iVL59R6',
    img: '/images/bai-truong.jpg',
  },
  {
    nameKey: 'explore.ongLang',
    distKey: 'explore.ongLangDist',
    descKey: 'explore.ongLangDesc',
    maps: 'https://maps.google.com/?q=Ong+Lang+Beach+Phu+Quoc',
    img: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&w=800&q=80',
  },
  {
    nameKey: 'explore.sao',
    distKey: 'explore.saoDist',
    descKey: 'explore.saoDesc',
    maps: 'https://maps.app.goo.gl/9iW6Lw3dM4jJmL6V6',
    img: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800&q=80',
  },
  {
    nameKey: 'explore.khem',
    distKey: 'explore.khemDist',
    descKey: 'explore.khemDesc',
    maps: 'https://maps.app.goo.gl/Jv6o7cYj6eG2mX7r9',
    img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
  },
  {
    nameKey: 'explore.rachVem',
    distKey: 'explore.rachVemDist',
    descKey: 'explore.rachVemDesc',
    maps: 'https://maps.app.goo.gl/zSrRf6qTUcExinfo9',
    img: '/images/rach-vem.jpg',
  },
];

const HERO_IMG = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80';

function ExplorePhuQuoc({ lang = 'en' }) {
  return (
    <main className="editorial-page min-h-full px-4 pb-24 pt-24 font-sans text-[#1b1c1a] md:px-10 md:pb-16 md:pt-28">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <EditorialHero
          alt={t('explore.beach', lang)}
          description={t('explore.heroDesc', lang)}
          image={HERO_IMG}
          kicker={t('explore.heroKicker', lang)}
          overlayClassName="bg-gradient-to-t from-[#322214]/80 via-[#322214]/20 to-transparent"
          title={t('explore.title', lang)}
        />

        <section>
          <SectionTitle description={t('explore.sectionDesc', lang)} title={t('explore.beaches', lang)} />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {BEACHES.map((beach) => (
              <article key={beach.nameKey} className="group overflow-hidden rounded-[24px] border border-[#d2c4bb] bg-[#fbf9f5] shadow-[0_14px_34px_rgba(50,34,20,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(50,34,20,0.14)]">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <SafeImage alt={t(beach.nameKey, lang)} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" src={beach.img} />
                  <div className="absolute top-4 right-4 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-[#322214] shadow-sm backdrop-blur">
                    <span className="material-symbols-outlined text-sm text-[#622a11]">schedule</span>
                    {t('explore.open24h', lang)}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-3 font-serif text-[28px] font-semibold text-[#322214]">{t(beach.nameKey, lang)}</h3>
                  <p className="mb-4 text-sm font-medium text-[#461501]">{t(beach.distKey, lang)}</p>
                  <p className="mb-5 text-sm leading-[1.75] text-[#4e453e]">{t(beach.descKey, lang)}</p>
                  <a className="inline-flex items-center gap-2 text-sm font-bold text-[#461501] no-underline transition-all hover:gap-3 hover:underline" href={beach.maps} rel="noreferrer" target="_blank">
                    <span className="material-symbols-outlined text-base">location_on</span>
                    {t('explore.viewMaps', lang)}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden rounded-[28px] bg-[#4a3728] p-8 text-center text-[#ffdbce] shadow-[0_18px_46px_rgba(50,34,20,0.16)] md:p-10">
          <div aria-hidden="true" className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-white/10 blur-3xl" />
          <div aria-hidden="true" className="absolute -bottom-16 -left-16 h-32 w-32 rounded-full bg-white/10 blur-3xl" />
          <div className="relative">
            <h2 className="mb-4 font-serif text-[38px] font-bold text-white md:text-[48px]">{t('explore.ctaTitle', lang)}</h2>
            <p className="mx-auto mb-8 max-w-2xl text-[16px] leading-[1.75] text-white/80 md:text-[18px]">{t('explore.ctaDesc', lang)}</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-[#322214] no-underline transition-colors hover:bg-[#fbddc7]" href="tel:+84855484444">
                <span className="material-symbols-outlined text-lg">call</span>
                Call: +84 855 484 444
              </a>
              <a className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0068ff] px-6 py-3.5 font-bold text-white no-underline transition-all hover:bg-[#0052cc]" href="https://zalo.me/84855484444" rel="noreferrer" target="_blank">
                <span className="material-symbols-outlined text-lg">chat</span>
                Zalo: +84 855 484 444
              </a>
              <a className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25d366] px-6 py-3.5 font-bold text-white no-underline transition-all hover:bg-[#1da851]" href="https://wa.me/84855484444" rel="noreferrer" target="_blank">
                <span className="material-symbols-outlined text-lg">chat_bubble</span>
                WhatsApp: +84 855 484 444
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default ExplorePhuQuoc;
