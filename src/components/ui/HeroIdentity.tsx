import gitLogo from '../../../img/gitlogo.png';
import profilePhoto from '../../../img/1733990699641.jpeg';
import pythonLogo from '../../../img/pythonlogo.png';
import reactLogo from '../../../img/reactlogo.png';

const techItems = [
  { label: 'React', src: reactLogo },
  { label: 'Git', src: gitLogo },
  { label: 'Python', src: pythonLogo },
];

function HeroIdentity() {
  return (
    <div className="grid gap-5 rounded-[2rem] border border-line bg-white/60 p-5 shadow-soft backdrop-blur-xl lg:grid-cols-[auto,1fr] lg:items-center">
      <div className="relative h-28 w-28 shrink-0">
        <div className="absolute -inset-2 rounded-[1.85rem] bg-moss/10 blur-xl" />
        <img
          src={profilePhoto}
          alt="Portrait of Michael Flaig"
          className="relative h-full w-full rounded-[1.75rem] border border-line object-cover object-center shadow-soft"
        />
      </div>

      <div className="min-w-0">
        <div className="inline-flex items-center gap-3 rounded-full border border-line bg-white/75 px-4 py-2 shadow-insetGlow backdrop-blur">
          <span className="h-2.5 w-2.5 rounded-full bg-moss" />
          <span className="font-mono text-xs uppercase tracking-[0.32em] text-moss">
            document archive
          </span>
        </div>

        <p className="mt-4 text-sm uppercase tracking-[0.28em] text-ink/55">
          Michael Flaig, Hamburg
        </p>

        <div className="mt-4 flex flex-wrap gap-3">
          {techItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 rounded-2xl border border-line bg-white/80 px-3 py-3"
            >
              <img
                src={item.src}
                alt={`${item.label} logo`}
                className="h-9 w-9 rounded-xl object-contain"
              />
              <span className="text-sm font-medium text-ink">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeroIdentity;
