import Popup from "reactjs-popup";

type PopupRenderFn = (close: () => void) => React.ReactNode;

function ImprintPopup() {
  const renderContent: PopupRenderFn = (close) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/75 px-4 py-6 backdrop-blur-md">
      <div
        className="w-full max-w-md rounded-[2rem] border border-line bg-paper p-4 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 px-2 pb-4 pt-2">
          <div>
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-moss">
              Legal
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">
              Imprint
            </h2>
            <p className="mt-2 text-sm leading-7 text-ink/65">
              Mandatory disclosures pursuant to § 5 Digitale-Dienste-Gesetz
              (DDG)
            </p>
          </div>
          <button
            type="button"
            onClick={close}
            className="rounded-full border border-line bg-white/80 px-4 py-2 text-sm font-medium text-ink transition hover:border-moss/30 hover:bg-moss/10"
          >
            Close
          </button>
        </div>

        {/* Content */}
        <div className="overflow-hidden rounded-[1.5rem] border border-line bg-white p-3">
          <div className="rounded-[1.4rem] border border-line bg-paper/85 p-4 space-y-4">
            <div>
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-moss">
                Person responsible for content
              </p>
              <ul className="mt-3 space-y-1 text-sm leading-7 text-ink/70">
                <li>Michael Flaig</li>
                <li>Eidelstedter Dorfstraße 3c</li>
                <li>22527 Hamburg</li>
              </ul>
            </div>

            <div>
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-moss">
                Contact
              </p>
              <ul className="mt-3 space-y-1 text-sm leading-7 text-ink/70">
                <li>Email: flaig.m@gmx.de</li>
                <li>Mobile: +49 170 8968088</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Popup trigger={<button>Imprint</button>} modal nested>
      {renderContent as any}
    </Popup>
  );
}

function SiteFooter() {
  return (
    <footer className="mt-10 border-t border-line pt-8 text-sm text-ink/65">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p>
          ©2026 Michael Flaig. Built with React, TypeScript, and Tailwind CSS.
        </p>
        <ImprintPopup />
      </div>
    </footer>
  );
}

export default SiteFooter;
