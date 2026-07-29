import { t } from '../i18n';
import EditorialHero from './ui/EditorialHero';
import Icon from './ui/Icon';
import SectionTitle from './ui/SectionTitle';

const HERO_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBWAwATavi8-whkj3BO-LL8Lxs8pyAD9YLvsmNLWU0pB5dM8gMZyWh-6R2YHAGiXh7RpJSm6IWeq7XWG1iGiWD0DF77_5t5Oevr7T8D7f1tZlF9cbGp75EXS9PmXI6CeH7CwmK_xFjKLp8WgiihRDhQSr8MgPFCApWxsPgD1lGw-uQSwAEJE2aHaJdBLG9Yvb9Frh95jjE_cfzlsLZy6R2-r7WJSxsZXP6ENlDGpwmnMFXCAXH1MRhbA';

const SERVICE_IMAGES = {
  motorbike: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADenTxKtTwTgvGq4poeQXgB_SOt7kkNZoYL0o0Y1FD70LoN1RKSdZ0OYzluQv1KpeFIpKepuva6qZa2lom2Nhha5YkFoAacm13z991hrb8sZUUdVpkLNBEMfcMSL2OG82_TDHPKcBUfCyXh3NpteMp6S0f52LWKj-gAW9W1b7jG5YvtW_jF5fSc5kSaEAHC7QQzFSnmjJveJYGXP3Rk3gJcdTjJT3jEBZ4jHHr9KbXJGZ0kKXLRVgAUQ',
  laundry: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAix8m2KXKwmTRr9iNx_oLZ5PHZZSA3QKpVL8SDugqqVFGAL_XyWjr_lb9QroX0RLnYqtYhxhcD4YW2OA4lDPPhckfGlLf1Oav8jha7mJzgLtkGZavR4XmOyid7Ouzw7hZsFoZUAIfXSywAO5qSN1LihQ6sg-QWzXG10SyBEDwpnAgSqMKVxNFCWm9_uWZL1diJf5mxNhuWRhkM4xqELUQLd5ov7MOCdJl0Xcw0CWHXnRqy0kVMTJxA0w',
  pool: 'https://res.cloudinary.com/dwb9x5s1j/image/upload/v1785128552/1784015817184_885263377326364022_g7328569027530867083_0d29ffc8f523b49dfbe0d4d55c286ec6_kidd9t.jpg',
  airport: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVuBPGiHt8Np8uY4mb7qaephTinBUUrviH4rVeYg6X4bQrqIft0TiykYBaGKYQPvtTfx4nmLZ2l8FVaNIiYpwPVoF8f6ArfgLfoC6IheFpm79Z1x9ynrnDDrX3-NcKtGTfmkBuan3Au6pXeNY6ro-fmuY_w0C0eDdJ3OAYXuAjKoE230zQ3vx1IntHtYu1ylZHy10kd4ljYyfzuzJQbd5DFJffVhivk-rQXzZMgwXwqCPy6OK-FlEMRA',
};

function ServiceCard({ image, alt, title, price, description, icon, children }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-[28px] border border-[#d2c4bb] bg-[#fbf9f5] shadow-[0_16px_42px_rgba(50,34,20,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_54px_rgba(50,34,20,0.14)]">
      <img alt={alt} className="h-48 w-full object-cover" decoding="async" loading="lazy" src={image} />
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
            <img alt={t('services.poolTitle', lang)} className="h-64 w-full object-cover md:h-auto md:w-1/2" decoding="async" loading="lazy" src={SERVICE_IMAGES.pool} />
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
            <img alt={t('services.airportTitle', lang)} className="aspect-video w-full rounded-[24px] object-cover shadow-inner md:aspect-square md:w-1/3" decoding="async" loading="lazy" src={SERVICE_IMAGES.airport} />
          </div>
        </section>

        <section className="relative overflow-hidden rounded-[28px] bg-[#4a3728] p-8 text-center text-[#dec1ac] shadow-[0_18px_46px_rgba(50,34,20,0.16)]">
          <div aria-hidden="true" className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-white/10 blur-3xl" />
          <div aria-hidden="true" className="absolute -bottom-16 -left-16 h-32 w-32 rounded-full bg-white/10 blur-3xl" />
          <div className="relative">
            <h2 className="mb-4 font-serif text-[28px] font-semibold text-white">{t('services.needAssistance', lang)}</h2>
            <p className="mx-auto mb-8 max-w-lg leading-[1.75] text-white/80">{t('services.assistMsg', lang)}</p>
            <a className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3 font-bold text-[#322214] no-underline shadow-lg transition-colors hover:bg-[#fbddc7]" href="tel:0855484444">
              <Icon>phone_in_talk</Icon>
              0855 484 444
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

export default MotorbikeRental;
