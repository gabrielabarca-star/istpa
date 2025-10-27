import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Image from "next/image";
import NursingCareer from "@/components/sections/NursingCareer";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import WhyStudyNursing from "@/components/sections/WhyStudyNursing";
import GraduateProfileNursing from "@/components/sections/GraduateProfileNursing";
import CurriculumGridNursing from "@/components/sections/CurriculumGridNursing";
import JobMarketNursing from "@/components/sections/JobMarketNursing";
import DegreeAndTitleNursing from "@/components/sections/DegreeAndTitleNursing";
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
              Enfermeria
            </h1>
          </div>
        </section>

        <section>
          <NursingCareer />
        </section>
       <section>  
       <WhyChooseUs/>
       </section>
       <section>
       <WhyStudyNursing />
       </section>
       <section>
       <GraduateProfileNursing />
       </section>
       <section>
       <CurriculumGridNursing />
       </section>
       <section>
       <JobMarketNursing/>
       </section>
       <section>
       <DegreeAndTitleNursing />
       </section>
      </main>
      <Footer />
    </div>
  );
}
