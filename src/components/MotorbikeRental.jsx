import { t } from '../i18n';
import EditorialHero from './ui/EditorialHero';
import Icon from './ui/Icon';
import SafeImage from './ui/SafeImage';
import SectionTitle from './ui/SectionTitle';

const HERO_IMAGE = 'https://res.cloudinary.com/dwb9x5s1j/image/upload/v1785294396/1784015817228_885263377326364022_g7328569027530867083_1d3fe220d1eb437c93bdd91f2e76487e_cjdvyw.jpg';

const SERVICE_IMAGES = {
  motorbike: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80',
  laundry: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=800&q=80',
  pool: 'https://res.cloudinary.com/dwb9x5s1j/image/upload/v1785128552/1784015817184_885263377326364022_g7328569027530867083_0d29ffc8f523b49dfbe0d4d55c286ec6_kidd9t.jpg',
  airport: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
};

function ServiceCard({ image, alt, title, price, description, icon, children }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-[28px] border border-[#d2c4bb] bg-[#fbf9f5] shadow-[0_16px_42px_rgba(50,34,20,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_54px_rgba(50,34,20,0.14)]">
      <SafeImage alt={alt} className="h-48 w-full object-cover" src={image} />
      <div className="flex grow flex-col p-6">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#e8ded1] text-[#4a3728]">
              <Icon className="text-[24px]">{icon}</Icon>
            </div>
            <h3 className="font-serif text-[24px] font-semibold leading-tight text-[#322214]">{title}</h3>
          </div>
          {price && (
            <span className="shrink-0 rounded-lg bg-[#622a11] px-3 py-1.5 text-right text-xs font-bold text-[#ffdbce]">
              {price}
            </span>
          )}
        </div>
        <p className="mb-6 grow text-sm leading-[1.75] text-[#645d53]">{description}</p>
        <div className="mb-6 grid gap-2">{children}</div>
      </div>
    </article>
  );
}

function DetailLine({ icon, children }) {
  return (
    <div className="flex items-start gap-2 text-sm leading-relaxed text-[#4e453e]">
      <Icon className="mt-0.5 text-[18px] text-[#705a49]">{icon}</Icon>
      <span>{children}</span>
    </div>
  );
}

function MotorbikeRental({ lang = 'en' }) {
  return (
    <main className="editorial-page min-h-full px-4 pb-24 pt-24 font-sans text-[#1b1c1a] md:px-10 md:pb-16 md:pt-28">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <EditorialHero
          alt={t('services.title', lang)}
          description={t('services.assistMsg', lang)}
          image={HERO_IMAGE}
          kicker={t('services.heroKicker', lang)}
          title={t('services.title', lang)}
        />

        <section className="px-1">
          <SectionTitle
            accentClassName="bg-[#71361c]"
            align="stack"
            description={t('services.wishMsg', lang)}
            title={t('services.title', lang)}
          />
        </section>

        <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <ServiceCard
            alt={t('services.motoTitle', lang)}
            description={t('services.motoDesc', lang)}
            icon="moped"
            image={SERVICE_IMAGES.motorbike}
            price={t('services.motoPrice', lang)}
            title={t('services.motoTitle', lang)}
          >
            <DetailLine icon="check_circle">Honda Air Blade, Vision</DetailLine>
            <DetailLine icon="info">{t('services.motoReserve', lang)}</DetailLine>
          </ServiceCard>

          <ServiceCard
            alt={t('services.laundryTitle', lang)}
            description={t('services.laundryDesc', lang)}
            icon="local_laundry_service"
            image={SERVICE_IMAGES.laundry}
            price={t('services.laundryPrice', lang)}
            title={t('services.laundryTitle', lang)}
          >
            <DetailLine icon="priority_high">{t('services.laundryNote', lang)}</DetailLine>
            <DetailLine icon="support_agent">{t('services.laundryContact', lang)}</DetailLine>
          </ServiceCard>
        </section>

        <section className="overflow-hidden rounded-[28px] border border-[#d2c4bb] bg-[#fbf9f5] shadow-[0_16px_42px_rgba(50,34,20,0.08)]">
          <div className="flex flex-col md:flex-row">
            <SafeImage alt={t('services.poolTitle', lang)} className="h-64 w-full object-cover md:h-auto md:w-1/2" src={SERVICE_IMAGES.pool} />
            <div className="flex flex-col justify-center p-6 md:w-1/2 md:p-8">
              <div className="mb-4 flex items-start justify-between gap-4">
                <h3 className="font-serif text-[28px] font-semibold text-[#322214]">{t('services.poolTitle', lang)}</h3>
                <span className="flex shrink-0 items-center gap-1 font-medium text-[#705a49]">
                  <Icon>schedule</Icon>
                  {t('services.poolHours', lang)}
                </span>
              </div>
              <p className="mb-6 leading-[1.75] text-[#645d53]">{t('services.poolDesc', lang)}</p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-[#d2c4bb] bg-[#f5f3ef] p-4">
                  <p className="mb-1 text-xs font-bold uppercase tracking-[0.12em] text-[#80756d]">{t('services.safetyLabel', lang)}</p>
                  <p className="text-sm leading-relaxed text-[#1b1c1a]">{t('services.poolSafety', lang)}</p>
                </div>
                <div className="rounded-xl border border-[#d2c4bb] bg-[#f5f3ef] p-4">
                  <p className="mb-1 text-xs font-bold uppercase tracking-[0.12em] text-[#80756d]">{t('services.hoursLabel', lang)}</p>
                  <p className="text-sm leading-relaxed text-[#1b1c1a]">{t('services.poolHours', lang)}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="overflow-hidden rounded-[28px] border border-[#d2c4bb] bg-[#fbf9f5] p-6 shadow-[0_16px_42px_rgba(50,34,20,0.08)] md:p-8">
          <div className="flex flex-col items-center gap-8 md:flex-row">
            <div className="flex-1">
              <div className="mb-4 flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-[#4a3728] text-[#fbddc7]">
                  <Icon>flight_takeoff</Icon>
                </div>
                <h3 className="font-serif text-[28px] font-semibold text-[#322214]">{t('services.airportTitle', lang)}</h3>
              </div>
              <p className="mb-6 leading-[1.75] text-[#645d53]">{t('services.airportDesc', lang)}</p>
              <div className="divide-y divide-[#d2c4bb]">
                <div className="flex items-center justify-between gap-4 py-3">
                  <span className="text-[#4e453e]">{t('services.airportFee', lang)}</span>
                  <span className="text-right font-bold text-[#322214]">{t('services.airportPrice', lang)}</span>
                </div>
                <div className="flex items-center justify-between gap-4 py-3">
                  <span className="text-[#4e453e]">{t('services.paymentLabel', lang)}</span>
                  <span className="text-right text-sm text-[#1b1c1a]">{t('services.airportPayment', lang)}</span>
                </div>
                <div className="flex items-center justify-between gap-4 py-3">
                  <span className="text-[#4e453e]">{t('services.noteLabel', lang)}</span>
                  <span className="text-right text-sm text-[#1b1c1a]">{t('services.airportNotify', lang)}</span>
                </div>
              </div>
            </div>
            <SafeImage alt={t('services.airportTitle', lang)} className="aspect-video w-full rounded-[24px] object-cover shadow-inner md:aspect-square md:w-1/3" src={SERVICE_IMAGES.airport} />
          </div>
        </section>

        <section className="relative overflow-hidden rounded-[28px] bg-[#4a3728] p-8 text-center text-[#dec1ac] shadow-[0_18px_46px_rgba(50,34,20,0.16)]">
          <div aria-hidden="true" className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-white/10 blur-3xl" />
          <div aria-hidden="true" className="absolute -bottom-16 -left-16 h-32 w-32 rounded-full bg-white/10 blur-3xl" />
          <div className="relative">
            <h2 className="mb-4 font-serif text-[28px] font-semibold text-white">{t('services.needAssistance', lang)}</h2>
            <p className="mx-auto mb-8 max-w-lg leading-[1.75] text-white/80">{t('services.assistMsg', lang)}</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-[#322214] no-underline shadow-lg transition-colors hover:bg-[#fbddc7]" href="tel:+84855484444">
                <Icon className="text-lg">phone_in_talk</Icon>
                Call: +84 855 484 444
              </a>
              <a className="inline-flex items-center gap-2 rounded-xl bg-[#0068ff] px-6 py-3 font-bold text-white no-underline shadow-lg transition-all hover:bg-[#0052cc]" href="https://zalo.me/84855484444" rel="noreferrer" target="_blank">
                <Icon className="text-lg">chat</Icon>
                Zalo: +84 855 484 444
              </a>
              <a className="inline-flex items-center gap-2 rounded-xl bg-[#25d366] px-6 py-3 font-bold text-white no-underline shadow-lg transition-all hover:bg-[#1da851]" href="https://wa.me/84855484444" rel="noreferrer" target="_blank">
                <Icon className="text-lg">chat_bubble</Icon>
                WhatsApp: +84 855 484 444
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default MotorbikeRental;
