import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Image from "next/image";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ProfessionalAccordion from "@/components/sections/ProfessionalAccordion";
import HealthCampaigns from "@/components/sections/HealthCampaigns";
import Testimonials2 from "@/components/sections/Testimonials2";
export default function NosotrosPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-neutral-textDark">
      <Header />
      <main className="flex-1">
        <section className="relative h-80 bg-primary">
          <Image
            src="https://picsum.photos/1600/400?random=28"
            alt="Campus del instituto"
            fill
            className="object-cover opacity-20"
            data-ai-hint="university campus"
          />
          <div className="relative flex h-full items-center justify-center">
            <h1 className="font-headline text-4xl font-bold text-primary-foreground md:text-6xl">
              Por que Istpa?
            </h1>
          </div>
        </section>

       
      
    <section>
    <WhyChooseUs />
    </section>
    <section>
    <ProfessionalAccordion/>
    </section>
    <section>
    <HealthCampaigns/>
    </section>
    <section>
    <Testimonials2/>
    </section>
      </main>
      <Footer />
    </div>
  );
}
