import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import PracticeAreas from '@/components/PracticeAreas';
import Differentials from '@/components/Differentials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0D1117] text-neutral-200 antialiased selection:bg-[#D4AF37]/30 selection:text-neutral-100">
      <Header />
      <main>
        <Hero />
        <About />
        <PracticeAreas />
        <Differentials />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
