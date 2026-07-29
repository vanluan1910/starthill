function SectionTitle({ title, description, accentClassName = 'bg-[#622a11]', children, align = 'between' }) {
  const containerClass = align === 'stack'
    ? 'mb-10'
    : 'mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end';

  return (
    <div className={containerClass}>
      <div>
        <h2 className="font-serif text-[38px] font-bold leading-tight tracking-[-0.04em] text-[#322214] md:text-[48px]">
          {title}
        </h2>
        <div className={`mt-3 h-1 w-24 rounded-full ${accentClassName}`} />
      </div>
      {description ? (
        <p className="max-w-md text-sm leading-[1.75] text-[#4e453e] md:text-base">{description}</p>
      ) : null}
      {children}
    </div>
  );
}

export default SectionTitle;

export function LinedSectionTitle({ children }) {
  return (
    <div className="mb-8 flex items-center gap-3">
      <span className="h-px w-12 bg-[#322214]" />
      <h2 className="font-serif text-[30px] font-bold tracking-tight text-[#322214] md:text-[36px]">{children}</h2>
    </div>
  );
}
