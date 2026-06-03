function PageBackdrop() {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(45,124,122,0.18),_transparent_30%),radial-gradient(circle_at_80%_20%,_rgba(180,93,69,0.16),_transparent_28%),linear-gradient(180deg,_#f8f3ea_0%,_#f2eadc_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-moss/15 blur-3xl animate-float"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-4rem] top-40 h-80 w-80 rounded-full bg-clay/15 blur-3xl animate-float"
      />
    </>
  );
}

export default PageBackdrop;
