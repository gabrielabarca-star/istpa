import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Image from "next/image";
import PharmacyCareer from "@/components/sections/PharmacyCareer";
import WhyStudyPharmacy from "@/components/sections/WhyStudyPharmacy";
import GraduateProfilePharmacy from "@/components/sections/GraduateProfilePharmacy";
import CurriculumGridPharmacy from "@/components/sections/CurriculumGridPharmacy";
import JobMarketPharmacy from "@/components/sections/JobMarketPharmacy";
import DegreeAndTitlePharmacy from "@/components/sections/DegreeAndTitlePharmacy";

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
              Farmacia
            </h1>
          </div>
        </section>
        <section>

        </section>
        
        <PharmacyCareer/>
      <section>
      <WhyStudyPharmacy/>
      </section>
      <section>
      <GraduateProfilePharmacy/>
      </section>
      <section>
      <CurriculumGridPharmacy/>
      </section>
      <section>
      <JobMarketPharmacy/>
      </section>
      <section>
      <DegreeAndTitlePharmacy/>
      </section>
      </main>
      <Footer />
    </div>
  );
}
