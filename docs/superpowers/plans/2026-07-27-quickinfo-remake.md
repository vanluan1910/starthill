# QuickInfo Remake Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remake the Quick Information slide into the approved image-led luxury coastal information page inspired by the second provided HTML reference.

**Architecture:** `QuickInfo.jsx` remains a single presentational slide component that receives `lang` and renders existing `quickInfo.*` translations. The redesign is contained in `QuickInfo.jsx`, with small optional additions to `i18n.js` for subtitle/section labels. The existing `App.jsx` slide deck and `SlideBackground.jsx` remain unchanged.

**Tech Stack:** React 19, Vite 8, Tailwind CSS 3, Material Symbols, oxlint

---

## File Structure

- `src/components/QuickInfo.jsx`: replace the current split mobile/desktop markup with one responsive luxury editorial layout.
- `src/i18n.js`: add concise `quickInfo.subtitle`, `quickInfo.staySchedule`, and `quickInfo.morningDining` keys if needed.

---

### Task 1: Add QuickInfo Copy Keys

**Files:**
- Modify: `src/i18n.js:24-42`

- [ ] **Step 1: Add subtitle and section labels**

Add these entries after `quickInfo.title`:

```js
  'quickInfo.subtitle': { en: 'Everything you need for a relaxing stay at Star Hill Resort.', vi: 'Mọi thông tin cần thiết cho kỳ nghỉ thư giãn tại Star Hill Resort.', zh: '您在 Star Hill Resort 轻松入住所需的一切信息。', ko: 'Star Hill Resort에서 편안한 투숙을 위해 필요한 모든 정보입니다.', ru: 'Вся необходимая информация для спокойного отдыха в Star Hill Resort.' },
  'quickInfo.staySchedule': { en: 'Stay Schedule', vi: 'Lịch lưu trú', zh: '住宿时间安排', ko: '투숙 일정', ru: 'График проживания' },
  'quickInfo.morningDining': { en: 'Morning Dining', vi: 'Bữa sáng', zh: '晨间餐饮', ko: '아침 식사', ru: 'Завтрак' },
```

- [ ] **Step 2: Run build to verify i18n syntax**

Run: `npm run build`

Expected: Vite build succeeds.

---

### Task 2: Rewrite QuickInfo Layout

**Files:**
- Modify: `src/components/QuickInfo.jsx`

- [ ] **Step 1: Replace `QuickInfo.jsx` with the new responsive layout**

Replace the complete file content with an implementation that follows this structure:

- top hero image card with overlay and localized title/subtitle
- desktop 12-column grid after the hero
- left column (`md:col-span-7`) with Stay Schedule and Breakfast cards
- right column (`md:col-span-5`) with dark Late Check-out policy card
- optional 3-card services strip using existing i18n keys only

Use this complete implementation:

```jsx
import { t } from '../i18n';

const HERO_IMAGE = 'https://images.unsplash.com/photo-1602002418082-a4443e081dd1?auto=format&fit=crop&w=1600&q=80';
const BREAKFAST_IMAGE = 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=900&q=80';

const LATE_CHECKOUT_RULES = [
  { labelKey: 'quickInfo.until3', rateKey: 'quickInfo.until3rate' },
  { labelKey: 'quickInfo.until6', rateKey: 'quickInfo.until6rate' },
  { labelKey: 'quickInfo.after6', rateKey: 'quickInfo.after6rate', accent: true },
];

function InfoIcon({ icon, className = '' }) {
  return (
    <span
      aria-hidden="true"
      className={`material-symbols-outlined text-[28px] text-[#c8913c] ${className}`}
    >
      {icon}
    </span>
  );
}

function QuickInfo({ lang = 'en' }) {
  return (
    <main className="editorial-page min-h-full px-4 pb-24 pt-24 font-sans text-[#173331] md:px-10 md:pb-16 md:pt-28">
      <div className="mx-auto w-full max-w-5xl">
        <section className="relative mb-10 h-[330px] overflow-hidden rounded-[28px] border border-[#d8c6aa]/55 shadow-[0_22px_60px_rgba(30,53,49,0.14)] md:h-[400px]">
          <img alt="" className="absolute inset-0 h-full w-full object-cover" decoding="async" loading="lazy" src={HERO_IMAGE} />
          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 max-w-2xl p-6 md:p-10">
            <span className="mb-3 block text-[11px] font-extrabold uppercase tracking-[0.24em] text-white/82">
              {t('quickInfo.staySchedule', lang)}
            </span>
            <h1 className="font-serif text-[42px] font-bold leading-tight tracking-[-0.045em] text-white text-shadow md:text-[64px]">
              {t('quickInfo.title', lang)}
            </h1>
            <p className="mt-4 max-w-xl text-[16px] leading-[1.7] text-white/90 md:text-[18px]">
              {t('quickInfo.subtitle', lang)}
            </p>
          </div>
        </section>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="space-y-8 md:col-span-7">
            <section className="rounded-[28px] border border-[#d8c6aa]/55 bg-[#fbf2eb] p-6 shadow-[0_16px_42px_rgba(30,53,49,0.08)] md:p-8">
              <div className="mb-6 flex items-center gap-3">
                <InfoIcon icon="schedule" />
                <h2 className="font-serif text-[26px] font-semibold text-[#153b39]">{t('quickInfo.staySchedule', lang)}</h2>
              </div>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <article className="rounded-2xl border border-[#d8c6aa]/35 bg-[#eae1da] p-5">
                  <InfoIcon icon="login" className="mb-3 block text-[24px]" />
                  <h3 className="font-bold text-[#153b39]">{t('quickInfo.checkin', lang)}</h3>
                  <p className="mt-2 text-[18px] text-[#49463f]">{t('quickInfo.checkinTime', lang)}</p>
                </article>
                <article className="rounded-2xl border border-[#d8c6aa]/35 bg-[#eae1da] p-5">
                  <InfoIcon icon="logout" className="mb-3 block text-[24px]" />
                  <h3 className="font-bold text-[#153b39]">{t('quickInfo.checkout', lang)}</h3>
                  <p className="mt-2 text-[18px] text-[#49463f]">{t('quickInfo.checkoutTime', lang)}</p>
                </article>
              </div>
            </section>

            <section className="overflow-hidden rounded-[28px] border border-[#d8c6aa]/55 bg-[#fbf2eb] p-6 shadow-[0_16px_42px_rgba(30,53,49,0.08)] md:p-8">
              <div className="flex flex-col gap-7 md:flex-row md:items-center">
                <div className="flex-1">
                  <div className="mb-4 flex items-center gap-3">
                    <InfoIcon icon="restaurant" />
                    <h2 className="font-serif text-[26px] font-semibold text-[#153b39]">{t('quickInfo.morningDining', lang)}</h2>
                  </div>
                  <p className="text-[16px] leading-[1.75] text-[#66736f]">{t('quickInfo.breakfastDesc', lang)}</p>
                  <div className="mt-5 w-fit rounded-2xl bg-[#ffece7] px-5 py-4">
                    <span className="block text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#9a442d]">{t('quickInfo.breakfastHours', lang)}</span>
                    <span className="mt-1 block text-[20px] font-bold text-[#153b39]">{t('quickInfo.breakfastTime', lang)}</span>
                  </div>
                  <div className="mt-4 flex items-start gap-2 text-sm italic leading-relaxed text-[#7c2e19]">
                    <InfoIcon icon="lightbulb" className="text-[18px]" />
                    <p>{t('quickInfo.breakfastRecommend', lang)}</p>
                  </div>
                </div>
                <div className="h-52 w-full shrink-0 overflow-hidden rounded-2xl md:h-48 md:w-48">
                  <img alt="" className="h-full w-full object-cover" decoding="async" loading="lazy" src={BREAKFAST_IMAGE} />
                </div>
              </div>
            </section>
          </div>

          <aside className="md:col-span-5">
            <section className="flex h-full flex-col justify-between rounded-[28px] bg-[#153b39] p-6 text-white shadow-[0_20px_56px_rgba(21,59,57,0.18)] md:p-8">
              <div>
                <div className="mb-7 flex items-center gap-3">
                  <InfoIcon icon="info_i" className="text-[#ffdbd2]" />
                  <h2 className="font-serif text-[26px] font-semibold text-white">{t('quickInfo.lateCheckout', lang)}</h2>
                </div>
                <p className="mb-7 text-[16px] leading-[1.75] text-white/78">{t('quickInfo.lateCheckoutDesc', lang)}</p>
                <div className="space-y-1">
                  {LATE_CHECKOUT_RULES.map((rule) => (
                    <div key={rule.labelKey} className="flex items-center justify-between gap-4 border-b border-white/20 py-4 last:border-b-0">
                      <span className="text-white/88">{t(rule.labelKey, lang)}</span>
                      <span className="text-right font-bold text-[#ffdbd2]">{t(rule.rateKey, lang)}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8 rounded-2xl bg-white/10 p-5">
                <div className="flex items-start gap-4">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#ffdbd2]">
                    <InfoIcon icon="call" className="text-[20px] text-[#9a442d]" />
                  </div>
                  <p className="text-sm leading-relaxed text-white/76">{t('quickInfo.lateCheckoutNote', lang)}</p>
                </div>
              </div>
            </section>
          </aside>
        </div>

        <section className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
          <article className="rounded-[24px] border border-[#d8c6aa]/55 bg-[#f5ece5] p-6 text-center">
            <InfoIcon icon="wifi" className="mx-auto mb-3 block" />
            <h3 className="font-bold text-[#153b39]">{t('wifi.complimentary', lang)}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#66736f]">{t('wifi.free', lang)}</p>
          </article>
          <article className="rounded-[24px] border border-[#d8c6aa]/55 bg-[#f5ece5] p-6 text-center">
            <InfoIcon icon="pool" className="mx-auto mb-3 block" />
            <h3 className="font-bold text-[#153b39]">{t('services.poolTitle', lang)}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#66736f]">{t('services.poolDesc', lang)}</p>
          </article>
          <article className="rounded-[24px] border border-[#d8c6aa]/55 bg-[#f5ece5] p-6 text-center">
            <InfoIcon icon="support_agent" className="mx-auto mb-3 block" />
            <h3 className="font-bold text-[#153b39]">{t('services.needAssistance', lang)}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#66736f]">{t('services.help247', lang)}</p>
          </article>
        </section>
      </div>
    </main>
  );
}

export default QuickInfo;
```
                {t('quickInfo.title', lang)}
              </h1>
              <p className="mt-4 max-w-xl text-[16px] leading-[1.7] text-[#66736f] md:text-[18px]">
                {t('quickInfo.subtitle', lang)}
              </p>
            </div>
            <div className="rounded-[24px] border border-[#d8c6aa]/60 bg-white/58 px-5 py-4 text-sm font-bold text-[#153b39] shadow-[0_14px_34px_rgba(30,53,49,0.08)]">
              {t('quickInfo.breakfastHours', lang)} <span className="text-[#c8913c]">{t('quickInfo.breakfastTime', lang)}</span>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="px-1 pb-4 font-serif text-[26px] font-semibold tracking-[-0.02em] text-[#153b39]">
            {t('quickInfo.staySchedule', lang)}
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <article className="group rounded-[28px] border border-[#d8c6aa]/55 bg-white/68 p-6 shadow-[0_18px_48px_rgba(30,53,49,0.08)] backdrop-blur transition-transform duration-300 hover:-translate-y-1 md:p-8">
              <div className="mb-6 inline-flex rounded-2xl bg-[#bbdaff]/35 p-4">
                <InfoIcon icon="schedule" className="text-[34px]" />
              </div>
              <h3 className="font-serif text-[24px] font-semibold text-[#153b39]">{t('quickInfo.checkin', lang)}</h3>
              <p className="mt-2 text-[18px] font-semibold text-[#416181]">{t('quickInfo.checkinTime', lang)}</p>
            </article>

            <article className="group rounded-[28px] border border-[#d8c6aa]/55 bg-white/68 p-6 shadow-[0_18px_48px_rgba(30,53,49,0.08)] backdrop-blur transition-transform duration-300 hover:-translate-y-1 md:p-8">
              <div className="mb-6 inline-flex rounded-2xl bg-[#bbdaff]/35 p-4">
                <InfoIcon icon="key" className="text-[34px]" />
              </div>
              <h3 className="font-serif text-[24px] font-semibold text-[#153b39]">{t('quickInfo.checkout', lang)}</h3>
              <p className="mt-2 text-[18px] font-semibold text-[#416181]">{t('quickInfo.checkoutTime', lang)}</p>
            </article>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="px-1 pb-4 font-serif text-[26px] font-semibold tracking-[-0.02em] text-[#153b39]">
            {t('quickInfo.morningDining', lang)}
          </h2>
          <article className="overflow-hidden rounded-[32px] border border-[#d8c6aa]/55 bg-[#fffaf0]/84 shadow-[0_22px_60px_rgba(30,53,49,0.10)] backdrop-blur">
            <div className="grid grid-cols-1 md:grid-cols-[0.78fr_1fr]">
              <div className="relative min-h-[240px] overflow-hidden md:min-h-[360px]">
                <img alt="" className="absolute inset-0 h-full w-full object-cover" src={BREAKFAST_IMAGE} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#153b39]/42 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#fffaf0]/20" />
              </div>
              <div className="flex flex-col justify-center p-6 md:p-10">
                <div className="mb-5 flex items-center gap-3">
                  <InfoIcon icon="restaurant" />
                  <h3 className="font-serif text-[28px] font-semibold text-[#153b39]">{t('quickInfo.breakfast', lang)}</h3>
                </div>
                <p className="text-[16px] leading-[1.75] text-[#66736f] md:text-[18px]">
                  {t('quickInfo.breakfastDesc', lang)}
                </p>
                <div className="mt-6 grid gap-3">
                  <div className="flex items-center gap-3 rounded-2xl border border-[#d8c6aa]/55 bg-white/62 px-4 py-3 text-[#153b39]">
                    <InfoIcon icon="calendar_today" className="text-[22px]" />
                    <span className="font-semibold">{t('quickInfo.breakfastDesc', lang)}</span>
                  </div>
                  <div className="flex items-center gap-3 rounded-2xl border border-[#d8c6aa]/55 bg-white/62 px-4 py-3 text-[#153b39]">
                    <InfoIcon icon="history_toggle_off" className="text-[22px]" />
                    <span className="font-semibold">{t('quickInfo.breakfastHours', lang)} {t('quickInfo.breakfastTime', lang)}</span>
                  </div>
                </div>
                <div className="mt-6 rounded-2xl border border-[#c8913c]/24 bg-[#f5efe6]/80 p-4 text-sm font-semibold leading-relaxed text-[#706c65]">
                  {t('quickInfo.breakfastRecommend', lang)}
                </div>
              </div>
            </div>
          </article>
        </section>

        <section className="rounded-[32px] border border-[#d8c6aa]/55 bg-white/72 p-6 shadow-[0_22px_60px_rgba(30,53,49,0.10)] backdrop-blur md:p-10">
          <div className="mb-8 flex items-start gap-4">
            <div className="rounded-full bg-[#bbdaff]/35 p-3">
              <InfoIcon icon="info" />
            </div>
            <div>
              <h2 className="font-serif text-[28px] font-semibold text-[#153b39]">{t('quickInfo.lateCheckout', lang)}</h2>
              <p className="mt-2 text-[16px] leading-[1.7] text-[#66736f]">{t('quickInfo.lateCheckoutDesc', lang)}</p>
            </div>
          </div>
          <div className="mb-8 grid grid-cols-1 gap-5 md:grid-cols-3">
            {LATE_CHECKOUT_RULES.map((rule) => (
              <div key={rule.labelKey} className={`border-l-2 ${rule.accent ? 'border-[#ffb4a1]' : 'border-[#cbc6bd]'} py-2 pl-5`}>
                <p className="text-[12px] font-extrabold uppercase tracking-[0.16em] text-[#7b776e]">{t(rule.labelKey, lang)}</p>
                <p className="mt-2 font-serif text-[25px] font-semibold text-[#153b39]">{t(rule.rateKey, lang)}</p>
              </div>
            ))}
          </div>
          <div className="rounded-[24px] border border-[#d8c6aa]/55 bg-[#fffaf0]/82 p-5 text-[15px] font-semibold leading-relaxed text-[#66736f]">
            {t('quickInfo.lateCheckoutNote', lang)}
          </div>
        </section>
      </div>
    </main>
  );
}

export default QuickInfo;
```

- [ ] **Step 2: Run build**

Run: `npm run build`

Expected: Vite build succeeds.

---

### Task 3: Lint And Polish

**Files:**
- Modify: `src/components/QuickInfo.jsx` only if lint/build reports an issue

- [ ] **Step 1: Run lint**

Run: `npm run lint`

Expected: oxlint exits successfully.

- [ ] **Step 2: Fix any reported issues minimally**

If lint flags unused values or JSX issues, remove or adjust only the flagged code.

- [ ] **Step 3: Run build and lint again**

Run: `npm run build`

Expected: Vite build succeeds.

Run: `npm run lint`

Expected: oxlint exits successfully.

---

## Self-Review

- Spec coverage: plan covers responsive QuickInfo remake, existing slide wrapper preservation, i18n, section layout, mobile scroll/readability, and verification.
- Placeholder scan: no placeholders or open-ended implementation steps remain.
- Type consistency: `QuickInfo({ lang = 'en' })` remains unchanged; new i18n keys use the same object shape as existing keys.
