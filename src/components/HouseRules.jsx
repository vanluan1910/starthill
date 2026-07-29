import { t } from '../i18n';
import EditorialHero from './ui/EditorialHero';
import Icon from './ui/Icon';
import SectionTitle from './ui/SectionTitle';

const HERO_IMAGE = 'https://res.cloudinary.com/dwb9x5s1j/image/upload/v1785142714/ChatGPT_Image_Jul_27_2026_03_58_31_PM_ry2yzb.png';

const RULE_CARDS = [
  { titleKey: 'rules.idTitle', textKey: 'rules.idTextDesktop', icon: 'badge', tone: 'primary' },
  { titleKey: 'rules.smokeTitle', textKey: 'rules.smokeTextDesktop', icon: 'smoke_free', tone: 'error' },
  { titleKey: 'rules.restrictedTitle', textKey: 'rules.restrictedTextDesktop', icon: 'block', tone: 'primary' },
  { titleKey: 'rules.quietTitle', textKey: 'rules.quietTextDesktop', icon: 'bedtime', tone: 'secondary' },
  { titleKey: 'rules.visitorTitle', textKey: 'rules.visitorTextDesktop', icon: 'group', tone: 'primary' },
  { titleKey: 'rules.poolTitle', textKey: 'rules.poolText', icon: 'pool', tone: 'secondary' },
  { titleKey: 'rules.valuablesTitle', textKey: 'rules.valuablesTextDesktop', icon: 'drive_file_rename_outline', tone: 'primary' },
  { titleKey: 'rules.checkoutTitle', textKey: 'rules.checkoutTextDesktop', icon: 'key', tone: 'primary' },
];

function getToneClasses(tone) {
  if (tone === 'error') return 'bg-[#ffdad6] text-[#ba1a1a]';
  if (tone === 'secondary') return 'bg-[#bbdaff] text-[#416181]';
  return 'bg-[#f5efe6] text-[#615e57]';
}

function RuleCard({ icon, title, children, tone }) {
  return (
    <article className="group rounded-xl border border-transparent bg-[#f5ece5] p-6 shadow-[0_12px_32px_rgba(97,94,87,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#cbc6bd] hover:shadow-[0_18px_42px_rgba(97,94,87,0.14)]">
      <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110 ${getToneClasses(tone)}`}>
        <Icon className="text-[28px] [font-variation-settings:'FILL'_1]">{icon}</Icon>
      </div>
      <h3 className="mb-3 font-serif text-xl font-bold text-[#1f1b17]">{title}</h3>
      <p className="text-sm leading-relaxed text-[#49463f]">{children}</p>
    </article>
  );
}

function HouseRules({ lang = 'en' }) {
  return (
    <main className="editorial-page min-h-full px-4 pb-24 pt-24 font-sans text-[#1f1b17] md:px-10 md:pb-16 md:pt-28">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <EditorialHero
          alt={t('rules.hotelSuite', lang)}
          description={t('rules.heroSubtitle', lang)}
          image={HERO_IMAGE}
          kicker={t('rules.heroKicker', lang)}
          overlayClassName="bg-gradient-to-t from-black/70 via-black/20 to-transparent"
          title={t('rules.title', lang)}
        />

        <section className="px-1">
          <SectionTitle accentClassName="bg-[#9a442d]" align="stack" description={t('rules.request', lang)} title={t('rules.categorySafety', lang)} />
        </section>

        <section>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {RULE_CARDS.map((rule) => (
              <RuleCard key={rule.titleKey} icon={rule.icon} title={t(rule.titleKey, lang)} tone={rule.tone}>
                {t(rule.textKey, lang)}
              </RuleCard>
            ))}
          </div>
        </section>

        <section className="rounded-[28px] border border-[#d8c6aa]/55 bg-[#f5efe6] p-6 shadow-[0_16px_42px_rgba(30,53,49,0.08)] md:p-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="text-center md:text-left">
              <p className="mb-2 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#615e57]">{t('rules.conciergeLabel', lang)}</p>
              <h2 className="font-serif text-[26px] font-semibold text-[#153b39]">{t('rules.clarification', lang)}</h2>
              <p className="mt-2 max-w-2xl text-[16px] leading-[1.75] text-[#494640]">{t('rules.clarificationDesc', lang)}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a className="inline-flex items-center justify-center rounded-full bg-[#615e57] px-8 py-3 text-sm font-bold text-white no-underline shadow-[0_12px_26px_rgba(97,94,87,0.2)] transition-all hover:-translate-y-0.5 hover:bg-[#49463f]" href="tel:0855484444">
                {t('rules.contactReception', lang)}
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default HouseRules;
