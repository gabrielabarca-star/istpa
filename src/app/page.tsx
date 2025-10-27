import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import WhyUs from '@/components/sections/why-us';
import DegreeOptions from '@/components/sections/degree-options';
import Specializations from '@/components/sections/specializations';

import Contact from '@/components/sections/contact';
import CarruselN from '@/components/sections/CarruselN';
import  CareersN from '@/components/sections/CareersN'  
import TestimonialsCarouselGeneral from '@/components/sections/TestimonialsCarouselGeneral';
import AdmissionModalities from '@/components/sections/AdmissionModalities';
import ExperienceSection from '@/components/ExperienceSection';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-neutral-textDark">
      <Header />
      <main className="flex-1">
        <CarruselN/>
        <CareersN/>
        <WhyUs />
        <TestimonialsCarouselGeneral/>
        <AdmissionModalities />
        <ExperienceSection/>
        
        <Contact />
        
      </main>
      <Footer />
    </div>
  );
}
