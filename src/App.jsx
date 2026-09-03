import { lazy, Suspense, useState, useCallback, useEffect, useRef } from 'react';
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
  return 0; // Always start on Home screen (slide 0) when scanning any QR code or visiting site
}

function App() {
  const [slide, setSlide] = useState(getInitialSlide);
  const [lang, setLang] = useState('en');
  const touchStartRef = useRef({ x: 0, y: 0, time: 0 });

  useEffect(() => {
    try {
      localStorage.removeItem(SLIDE_KEY);
      if (window.location.hash) {
        window.history.replaceState(null, '', window.location.pathname);
      }
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

  const handleTouchStart = (e) => {
    if (e.touches.length !== 1) return;
    touchStartRef.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
      time: Date.now(),
    };
  };

  const handleTouchEnd = (e) => {
    if (!touchStartRef.current.time) return;
    const touchEnd = e.changedTouches[0];
    if (!touchEnd) return;

    const deltaX = touchEnd.clientX - touchStartRef.current.x;
    const deltaY = touchEnd.clientY - touchStartRef.current.y;
    const deltaTime = Date.now() - touchStartRef.current.time;

    touchStartRef.current.time = 0;

    // Minimum swipe threshold (px) and maximum time duration (ms)
    const SWIPE_THRESHOLD = 40;
    const MAX_SWIPE_TIME = 600;

    if (
      deltaTime <= MAX_SWIPE_TIME &&
      Math.abs(deltaX) >= SWIPE_THRESHOLD &&
      Math.abs(deltaX) > Math.abs(deltaY) * 1.3
    ) {
      if (deltaX < 0) {
        // Swiped Left -> Next Slide
        goTo(slide + 1);
      } else {
        // Swiped Right -> Previous Slide
        goTo(slide - 1);
      }
    }
  };

  return (
    <div className="bg-background antialiased">
      <Header currentSlide={slide} onNavigate={goTo} lang={lang} onLangChange={setLang} />

      <div
        className="h-screen overflow-hidden touch-pan-y"
        style={{ height: '100dvh' }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
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

      <nav className="fixed bottom-4 left-0 right-0 flex items-center justify-center gap-2 z-50 pointer-events-none md:bottom-6">
        {slide > 0 && (
          <button
            aria-label="Previous slide"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d8c6aa]/70 bg-[#fffaf0]/90 text-[#153b39] shadow-md backdrop-blur pointer-events-auto transition-all active:scale-90"
            onClick={() => goTo(slide - 1)}
            type="button"
          >
            <span className="material-symbols-outlined text-lg">chevron_left</span>
          </button>
        )}

        <div className="flex gap-2 rounded-full border border-[#d8c6aa]/70 bg-[#fffaf0]/82 px-3.5 py-2.5 shadow-[0_16px_40px_rgba(30,53,49,0.14)] backdrop-blur pointer-events-auto">
          {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={slide === i ? 'page' : undefined}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                slide === i ? 'w-6 bg-[#153b39]' : 'w-2.5 bg-[#c8b895] hover:bg-[#c8913c]'
              }`}
              onClick={() => goTo(i)}
              type="button"
            />
          ))}
        </div>

        {slide < TOTAL_SLIDES - 1 && (
          <button
            aria-label="Next slide"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d8c6aa]/70 bg-[#fffaf0]/90 text-[#153b39] shadow-md backdrop-blur pointer-events-auto transition-all active:scale-90"
            onClick={() => goTo(slide + 1)}
            type="button"
          >
            <span className="material-symbols-outlined text-lg">chevron_right</span>
          </button>
        )}
      </nav>
    </div>
  );
}

export default App;
