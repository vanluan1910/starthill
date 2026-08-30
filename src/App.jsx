import { lazy, Suspense, useState, useRef, useCallback, useEffect } from 'react';
import Header from './components/Header';
import SlideBackground from './components/SlideBackground';
import WelcomePage from './components/WelcomePage';

const QuickInfo = lazy(() => import('./components/QuickInfo'));
const WifiReception = lazy(() => import('./components/WifiReception'));
const HouseRules = lazy(() => import('./components/HouseRules'));
const MotorbikeRental = lazy(() => import('./components/MotorbikeRental'));
const ToursTickets = lazy(() => import('./components/ToursTickets'));
const ExplorePhuQuoc = lazy(() => import('./components/ExplorePhuQuoc'));
const LocalFood = lazy(() => import('./components/LocalFood'));
const Attractions = lazy(() => import('./components/Attractions'));
const TravelTips = lazy(() => import('./components/TravelTips'));

const TOTAL_SLIDES = 10;
const SLIDE_KEY = 'star-hill-slide';

const HASH_TO_SLIDE = {
  home: 0,
  info: 1,
  wifi: 2,
  rules: 3,
  services: 4,
  tours: 5,
  explore: 6,
  food: 7,
  attractions: 8,
  tips: 9,
};

function SlideFallback() {
  return (
    <SlideBackground className="flex items-center justify-center text-[#003333]">
      <div className="w-10 h-10 rounded-full border-2 border-[#D7A55A]/30 border-t-[#D7A55A] animate-spin" />
    </SlideBackground>
  );
}

function getHashSlide() {
  try {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    return HASH_TO_SLIDE[hash];
  } catch {
    return undefined;
  }
}

function getInitialSlide() {
  const fromHash = getHashSlide();
  if (fromHash !== undefined) return fromHash;
  return 0; // Always start on Home screen (slide 0) when scanning QR code
}

function App() {
  const [slide, setSlide] = useState(getInitialSlide);
  const [lang, setLang] = useState('en');
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  useEffect(() => {
    try {
      localStorage.removeItem(SLIDE_KEY);
    } catch { /* ignore */ }
  }, []);

  useEffect(() => {
    const markIcons = () => {
      document.querySelectorAll('.material-symbols-outlined').forEach((el) => {
        el.setAttribute('translate', 'no');
        el.classList.add('notranslate');
      });
    };
    markIcons();
    const observer = new MutationObserver(markIcons);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  const goTo = useCallback((index) => {
    setSlide(Math.max(0, Math.min(TOTAL_SLIDES - 1, index)));
  }, []);

  useEffect(() => {
    const onHashChange = () => {
      const fromHash = getHashSlide();
      if (fromHash !== undefined) goTo(fromHash);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, [goTo]);

  useEffect(() => {
    window.history.pushState(null, '', window.location.href);
    const handlePop = () => {
      window.history.pushState(null, '', window.location.href);
    };
    window.addEventListener('popstate', handlePop);
    return () => window.removeEventListener('popstate', handlePop);
  }, []);

  const handleTouchStart = useCallback((e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  }, []);

  const handleTouchEnd = useCallback(
    (e) => {
      const dx = touchStartX.current - e.changedTouches[0].clientX;
      const dy = touchStartY.current - e.changedTouches[0].clientY;
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) {
        goTo(slide + (dx > 0 ? 1 : -1));
      }
    },
    [slide, goTo]
  );

  return (
    <div className="bg-background antialiased" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <Header currentSlide={slide} onNavigate={goTo} lang={lang} onLangChange={setLang} />

      <div className="h-screen overflow-hidden" style={{ height: '100dvh' }}>
        <div
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${slide * 100}%)` }}
        >
          <div className="min-w-full h-full overflow-hidden">
            <WelcomePage lang={lang} onNavigate={goTo} />
          </div>

          <Suspense fallback={<SlideFallback />}>
            <SlideBackground>
              <QuickInfo lang={lang} />
            </SlideBackground>

            <SlideBackground>
              <WifiReception lang={lang} />
            </SlideBackground>

            <SlideBackground>
              <HouseRules lang={lang} />
            </SlideBackground>

            <SlideBackground>
              <MotorbikeRental lang={lang} />
            </SlideBackground>

            <SlideBackground>
              <ToursTickets lang={lang} />
            </SlideBackground>

            <SlideBackground>
              <ExplorePhuQuoc lang={lang} />
            </SlideBackground>

            <SlideBackground>
              <LocalFood lang={lang} />
            </SlideBackground>

            <SlideBackground>
              <Attractions lang={lang} />
            </SlideBackground>

            <SlideBackground>
              <TravelTips lang={lang} />
            </SlideBackground>
          </Suspense>
        </div>
      </div>

      <nav className="fixed bottom-4 left-0 right-0 flex justify-center z-50 pointer-events-none md:bottom-6">
        <div className="flex gap-2.5 rounded-full border border-[#d8c6aa]/70 bg-[#fffaf0]/82 px-4 py-2.5 shadow-[0_16px_40px_rgba(30,53,49,0.14)] backdrop-blur pointer-events-auto">
          {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={slide === i ? 'page' : undefined}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                slide === i ? 'w-7 bg-[#153b39]' : 'w-2.5 bg-[#c8b895] hover:bg-[#c8913c]'
              }`}
              onClick={() => goTo(i)}
              type="button"
            />
          ))}
        </div>
      </nav>
    </div>
  );
}

export default App;
