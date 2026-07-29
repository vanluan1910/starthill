import { t } from '../i18n';
import EditorialHero from './ui/EditorialHero';
import SectionTitle from './ui/SectionTitle';

const BEACHES = [
  {
    nameKey: 'explore.ongLang',
    distKey: 'explore.ongLangDist',
    descKey: 'explore.ongLangDesc',
    maps: 'https://maps.google.com/?q=Ong+Lang+Beach+Phu+Quoc',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZtghKn0CETYngoI7jZlZB1Ny4OSwHa5Un2eDnG7bokklyQo8zfXS3ReQ1ngdEnMVIfWdnXnwkV620hWZmFaRLnYuJ_q7N7FTvxaT8nU8vMhkKNjigSctJn5hO1x3eXhhOy734XYbMTUWSIEY3WHXg37xQRA9I2mOYHaHbsp1Jfwi-khy-x1nzilq_wjY2ZFbOqYsUPtubHJMRfwWZdl8SPPnw5bU_lG-APGLGTK8brBIlBW64DCEKHg',
  },
  {
    nameKey: 'explore.sao',
    distKey: 'explore.saoDist',
    descKey: 'explore.saoDesc',
    maps: 'https://maps.app.goo.gl/9iW6Lw3dM4jJmL6V6',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMwEQU1zSwQB-faEdu3XgKEPRlyrt-uaT2NjqwcxzBa0a6LghDg-Fwrtl59CYF8ZrMb-Y5rz1QA6m6EC6Q8RXj8aXruEft2-BJT7KRPUudfm3b8rF8kOJReFh2RjNsY0YpgKhEjgt6cpkgOMK13hLqjJDvVpa77dxF-72vhPN6XBAhmv--_0OOWsE-7AlrW-lvhi0-NLAA8QW2mIqAKmP5_WguKkMhxqStDkcmv8KvZ6CNs6hPXW0Q9A',
  },
  {
    nameKey: 'explore.khem',
    distKey: 'explore.khemDist',
    descKey: 'explore.khemDesc',
    maps: 'https://maps.app.goo.gl/Jv6o7cYj6eG2mX7r9',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRZSg3tu4IutMa-rtTJ7-YbLasXn-TwMi4_sHWTMhepOeqJH-oumIYxPVhne_XCMyv_OlK0xSCxo077M1ddAZVqfnHH4WaWETx__z2K5RXYI2JW8refkFTv3zKg-rRFFmanBaimKYVA1agZ_BIKj900w3vknoLJZ3yHnTlf5RbK7_AoGbzin9M2liPQFUzqjO0nWibyBoDlURh_i2jLwsJjjtZS4D1yA99CLFvr4K8vfoT-71Gjqudfg',
  },
];

const HERO_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxqEqZjBH2I8AXe-2Gl5nxI9Y0Zp56OqMiDgAYG92TX-DUYVS0lkCZ8Ydd4kKqvTsEFbJDPHIumvI-KY_bTUn5gLbbf3I5DlmiX3YGrS3Wpk4DTH8gK4e7TlPI_6uzF-BlngMTwscFXMNTUtJGL_iq9OA97HnjRWwmle1BL-DMJ5UfhclMJbMufVktGbZV6XbEqkkSkNWDm99lTXFt8CN32GYrdVBB7aWtkalAJLErDN3dUiLyIAorSg';

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
                  <img alt={t(beach.nameKey, lang)} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" decoding="async" loading="lazy" src={beach.img} />
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
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 font-bold text-[#322214] no-underline transition-colors hover:bg-[#fbddc7]" href="tel:0855484444">
                {t('explore.bookStay', lang)}
              </a>
              <a className="inline-flex items-center justify-center rounded-xl border-2 border-white/30 px-8 py-4 font-bold text-white no-underline transition-all hover:bg-white hover:text-[#322214]" href="tel:0855484444">
                {t('explore.contactExpert', lang)}
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default ExplorePhuQuoc;
