const SLIDE_BACKGROUND_IMAGE = 'https://res.cloudinary.com/dwb9x5s1j/image/upload/v1784272310/611558c3-87dc-421e-83f5-164f5d78aa17_h4kekh.png';

function SlideBackground({ children, className = '' }) {
  return (
    <div
      className={`relative min-w-full h-full overflow-y-auto overscroll-y-contain touch-pan-y bg-[#f8f1e4] ${className}`}
    >
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_15%_10%,rgba(201,216,203,0.62),transparent_30%),radial-gradient(circle_at_85%_8%,rgba(200,145,60,0.16),transparent_26%),linear-gradient(135deg,#fffaf0_0%,#f4ead8_46%,#e8f0e7_100%)]" />
      <div className="absolute inset-x-0 top-0 h-28 pointer-events-none bg-gradient-to-b from-white/70 to-transparent" />
      <div className="relative z-[1] min-h-full">
        {children}
      </div>
    </div>
  );
}

export { SLIDE_BACKGROUND_IMAGE };
export default SlideBackground;
