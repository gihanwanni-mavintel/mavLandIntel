import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhySection from '@/components/WhySection';
import IntelligenceSection from '@/components/IntelligenceSection';
import ConfidentSection from '@/components/ConfidentSection';
import HowItWorks from '@/components/HowItWorks';
import OutcomesSection from '@/components/OutcomesSection';
import WhoWeWorkWith from '@/components/WhoWeWorkWith';
import CTASection from '@/components/CTASection';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="what-we-do">
        <WhySection />
        <IntelligenceSection />
        <ConfidentSection />
      </section>
      <section id="how-it-works">
        <HowItWorks />
      </section>
      <section id="sample-work">
        <OutcomesSection />
      </section>
      <section id="whos-it-for">
        <WhoWeWorkWith />
      </section>
      <CTASection />
      <section id="request-review">
        <ContactForm />
      </section>
      <Footer />
    </main>
  );
}
