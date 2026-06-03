import PageBackdrop from './components/layout/PageBackdrop';
import SiteFooter from './components/layout/SiteFooter';
import SiteHeader from './components/layout/SiteHeader';
import ContactSection from './components/sections/ContactSection';
import DocumentsSection from './components/sections/DocumentsSection';
import FocusSection from './components/sections/FocusSection';
import HeroSection from './components/sections/HeroSection';
import PrinciplesSection from './components/sections/PrinciplesSection';
import ProjectsSection from './components/sections/ProjectsSection';

function App() {
  return (
    <div className="relative isolate overflow-hidden text-ink">
      <PageBackdrop />

      <main className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 pb-20 pt-6 sm:px-10 lg:px-12">
        <a
          href="#profile"
          className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>

        <SiteHeader />
        <HeroSection />
        <FocusSection />
        <ProjectsSection />
        <DocumentsSection />
        <PrinciplesSection />
        <ContactSection />
        <SiteFooter />
      </main>
    </div>
  );
}

export default App;
