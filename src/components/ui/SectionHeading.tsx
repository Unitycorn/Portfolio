type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'right';
};

function SectionHeading({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  return (
    <div className={align === 'right' ? 'text-right' : ''}>
      <p className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-moss">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">{title}</h2>
      {description ? (
        <p
          className={`mt-4 text-sm leading-7 text-ink/70 ${align === 'right' ? 'sm:ml-auto sm:max-w-xl' : 'max-w-xl'}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default SectionHeading;
