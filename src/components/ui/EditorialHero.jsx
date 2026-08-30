import SafeImage from './SafeImage';

function EditorialHero({
  image,
  alt,
  kicker,
  title,
  description,
  overlayClassName = 'bg-gradient-to-t from-[#322214]/85 via-[#322214]/20 to-transparent',
}) {
  return (
    <section className="relative min-h-[360px] overflow-hidden rounded-[28px] border border-[#d2c4bb] bg-[#e4e2de] shadow-[0_22px_60px_rgba(50,34,20,0.14)] md:min-h-[430px]">
      <SafeImage alt={alt} className="absolute inset-0 h-full w-full object-cover" src={image} />
      <div className={`absolute inset-0 ${overlayClassName}`} />
      <div className="absolute bottom-0 left-0 max-w-2xl p-6 md:p-9">
        {kicker ? (
          <span className="mb-3 block text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#ffdbce]">
            {kicker}
          </span>
        ) : null}
        <h1 className="font-serif text-[42px] font-bold leading-tight tracking-[-0.045em] text-white text-shadow md:text-[64px]">
          {title}
        </h1>
        {description ? (
          <p className="mt-4 max-w-xl text-[16px] font-medium leading-[1.7] text-[#f2f0ed] md:text-[18px]">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}

export default EditorialHero;
