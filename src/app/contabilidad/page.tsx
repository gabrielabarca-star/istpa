import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Telescope, Gem, Target } from "lucide-react";
import AccountingCareer from "@/components/sections/AccountingCareer";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import WhyStudyAccounting from "@/components/sections/WhyStudyAccounting";
import GraduateProfileAccounting from "@/components/sections/GraduateProfileAccounting";
import  CurriculumGridAccounting from "@/components/sections/CurriculumGridAccounting";
import JobMarketAccounting from "@/components/sections/JobMarketAccounting";
import DegreeAndTitleAccounting from "@/components/sections/DegreeAndTitleAccounting";



export default function NosotrosPage() {
  return (
   <div className="flex min-h-screen flex-col bg-background text-neutral-textDark">
         <Header />
         <main className="flex-1">
           <section className="relative h-80 bg-primary">
             <Image
               src="/img/banner_contabilidad.png"
               alt="Campus del instituto"
               fill
               className="object-cover object-[center_10%] opacity-20" 
               data-ai-hint="university campus"
             />
             <div className="relative flex h-full items-center justify-start container mx-auto px-4 md:px-6">
               <h1 className="font-headline text-4xl font-bold text-primary-foreground md:text-6xl">
                  Contabilidad
               </h1>
               </div>
        </section>
        <AccountingCareer/>
        <WhyChooseUs/>
        <WhyStudyAccounting/>
        <GraduateProfileAccounting/>
        <CurriculumGridAccounting/>
        <JobMarketAccounting/>
        <DegreeAndTitleAccounting/>
      </main>
      <Footer />
    </div>
  );
}
