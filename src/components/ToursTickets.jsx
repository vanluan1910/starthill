import { t } from '../i18n';
import EditorialHero from './ui/EditorialHero';
import Icon from './ui/Icon';
import SafeImage from './ui/SafeImage';
import SectionTitle from './ui/SectionTitle';

const HERO_IMAGE = 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1600&q=80';
const TAXI_IMAGE = 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80';

const FEATURED_TOURS = [
  {
    nameKey: 'tours.cableCar',
    descKey: 'tours.cableCarDesc',
    icon: 'tram',
    img: 'https://images.unsplash.com/photo-1508672019048-805479767384?auto=format&fit=crop&w=800&q=80',
  },
  {
    nameKey: 'tours.vinwonders',
    descKey: 'tours.vinwondersDesc',
    icon: 'sports_esports',
    img: 'https://images.unsplash.com/photo-1513889961551-628c1e5e2ee9?auto=format&fit=crop&w=800&q=80',
  },
  {
    nameKey: 'tours.safari',
    descKey: 'tours.safariDesc',
    icon: 'pets',
    img: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=800&q=80',
  },
  {
    nameKey: 'tours.kissShow',
    descKey: 'tours.kissShowDesc',
    icon: 'theater_comedy',
    img: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80',
  },
];

const ACTIVITY_TOURS = [
  { nameKey: 'tours.islandHopping', descKey: 'tours.islandHoppingDesc', icon: 'directions_boat' },
  { nameKey: 'tours.snorkeling', descKey: 'tours.snorkelingDesc', icon: 'scuba_diving' },
  { nameKey: 'tours.scubaDiving', descKey: 'tours.scubaDivingDesc', icon: 'water_lux' },
  { nameKey: 'tours.fishing', descKey: 'tours.fishingDesc', icon: 'anchor' },
];

function FeaturedTourCard({ tour, lang }) {
  return (
    <article className="group overflow-hidden rounded-[24px] border border-[#d2c4bb] bg-[#f5f3ef] shadow-[0_14px_34px_rgba(50,34,20,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(50,34,20,0.14)]">
      <div className="h-48 overflow-hidden">
        <SafeImage alt={t(tour.nameKey, lang)} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src={tour.img} />
      </div>
      <div className="p-5">
        <div className="mb-3 flex items-center gap-3">
          <Icon className="text-[#461501] [font-variation-settings:'FILL'_1]">{tour.icon}</Icon>
          <h4 className="text-lg font-bold text-[#322214]">{t(tour.nameKey, lang)}</h4>
        </div>
        <p className="text-sm leading-[1.7] text-[#4e453e]">{t(tour.descKey, lang)}</p>
      </div>
    </article>
  );
}

function ActivityCard({ activity, lang }) {
  return (
    <article className="flex flex-col items-center gap-2 text-center">
      <div className="mb-2 flex h-14 w-14 items-center justify-center rounded-full bg-[#4a3728] text-[#ffdbce]">
        <Icon className="text-3xl">{activity.icon}</Icon>
      </div>
      <h5 className="font-bold text-[#322214]">{t(activity.nameKey, lang)}</h5>
      <p className="text-sm leading-[1.65] text-[#4e453e]">{t(activity.descKey, lang)}</p>
    </article>
  );
}

function CheckItem({ children }) {
  return (
    <li className="flex items-center gap-3 font-medium text-[#322214]">
      <Icon className="text-[#461501] [font-variation-settings:'FILL'_1]">check_circle</Icon>
      <span>{children}</span>
    </li>
  );
}

function ToursTickets({ lang = 'en' }) {
  return (
    <main className="editorial-page min-h-full px-4 pb-24 pt-24 font-sans text-[#1b1c1a] md:px-10 md:pb-16 md:pt-28">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <EditorialHero
          alt={t('tours.title', lang)}
          description={t('tours.heroDesc', lang)}
          image={HERO_IMAGE}
          kicker={t('tours.heroKicker', lang)}
          title={t('tours.title', lang)}
        />

        <section>
          <SectionTitle accentClassName="bg-[#461501]" description={t('tours.sectionDesc', lang)} title={t('tours.sectionTitle', lang)} />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURED_TOURS.map((tour) => (
              <FeaturedTourCard key={tour.nameKey} lang={lang} tour={tour} />
            ))}
          </div>
        </section>

        <section className="rounded-[28px] border border-[#d2c4bb] bg-[#eae8e4] p-6 shadow-[0_14px_34px_rgba(50,34,20,0.08)] md:p-8">
          <h3 className="mb-6 text-center font-serif text-[28px] font-semibold text-[#322214]">{t('tours.activitiesTitle', lang)}</h3>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {ACTIVITY_TOURS.map((activity) => (
              <ActivityCard key={activity.nameKey} activity={activity} lang={lang} />
            ))}
          </div>
        </section>

        <section className="rounded-[28px] bg-[#ebe1d4] p-6 shadow-[0_16px_42px_rgba(50,34,20,0.08)] md:p-8">
          <div className="flex flex-col items-center gap-10 lg:flex-row">
            <div className="flex-1">
              <span className="mb-4 block text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#461501]">
                {t('tours.taxiKicker', lang)}
              </span>
              <h3 className="mb-5 font-serif text-[38px] font-bold leading-tight text-[#322214]">{t('tours.taxiTitle', lang)}</h3>
              <p className="mb-7 text-[16px] leading-[1.75] text-[#4c463c]">{t('tours.taxiDesc', lang)}</p>
              <ul className="mb-8 space-y-4">
                <CheckItem>{t('tours.taxiBenefit247', lang)}</CheckItem>
                <CheckItem>{t('tours.taxiBenefitFast', lang)}</CheckItem>
                <CheckItem>{t('tours.taxiBenefitCars', lang)}</CheckItem>
              </ul>
            </div>
            <div className="relative w-full lg:w-1/2">
              <div className="overflow-hidden rounded-[24px] border-4 border-white shadow-2xl">
                <SafeImage alt={t('tours.taxiTitle', lang)} className="h-auto w-full object-cover" src={TAXI_IMAGE} />
              </div>
              <div className="absolute -bottom-5 left-5 hidden rounded-xl bg-white p-5 shadow-lg md:block">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-[#ffdbce] p-3 text-[#461501]">
                    <Icon className="text-2xl">schedule</Icon>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#80756d]">{t('tours.averageWait', lang)}</p>
                    <p className="font-serif text-xl font-semibold text-[#322214]">{t('tours.underFive', lang)}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden rounded-[28px] border border-[#d2c4bb] bg-[#fbf9f5] p-8 text-center shadow-[0_14px_34px_rgba(50,34,20,0.08)] md:p-10">
          <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-[#4a3728] text-[#ffdbce]">
            <Icon className="text-4xl">contact_support</Icon>
          </div>
          <h3 className="mb-4 font-serif text-[38px] font-bold text-[#322214]">{t('services.needAssistance', lang)}</h3>
          <p className="mx-auto mb-8 max-w-2xl text-[16px] leading-[1.75] text-[#4e453e]">{t('tours.recommend', lang)}</p>
          <div className="mx-auto max-w-xl rounded-[24px] border border-[#d2c4bb] bg-[#efeeea] p-7 shadow-sm">
            <p className="mb-2 text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#4e453e]">{t('tours.receptionHotline', lang)}</p>
            <div className="mb-4 font-serif text-[32px] font-bold text-[#461501] md:text-[42px]">
              +84 855 484 444
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a className="inline-flex items-center gap-2 rounded-xl bg-[#461501] px-5 py-2.5 text-sm font-bold text-white no-underline shadow-sm transition-all hover:bg-[#322214]" href="tel:+84855484444">
                <Icon className="text-base">call</Icon>
                Call
              </a>
              <a className="inline-flex items-center gap-2 rounded-xl bg-[#0068ff] px-5 py-2.5 text-sm font-bold text-white no-underline shadow-sm transition-all hover:bg-[#0052cc]" href="https://zalo.me/84855484444" rel="noreferrer" target="_blank">
                <Icon className="text-base">chat</Icon>
                Zalo
              </a>
              <a className="inline-flex items-center gap-2 rounded-xl bg-[#25d366] px-5 py-2.5 text-sm font-bold text-white no-underline shadow-sm transition-all hover:bg-[#1da851]" href="https://wa.me/84855484444" rel="noreferrer" target="_blank">
                <Icon className="text-base">chat_bubble</Icon>
                WhatsApp
              </a>
            </div>
          </div>
          <p className="mt-8 font-serif text-2xl italic text-[#322214]">{t('services.wishMsg', lang)}</p>
        </section>
      </div>
    </main>
  );
}

export default ToursTickets;
