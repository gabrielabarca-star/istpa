import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import Careers from '@/components/sections/careers';
import WhyUs from '@/components/sections/why-us';
import Testimonials from '@/components/sections/testimonials';
import DegreeOptions from '@/components/sections/degree-options';
import Specializations from '@/components/sections/specializations';
import News from '@/components/sections/news';
import Contact from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-neutral-textDark">
      <Header />
      <main className="flex-1">
        <Hero />
        <Careers />
        <WhyUs />
        <Testimonials />
        <DegreeOptions />
        <Specializations />
        <News />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
