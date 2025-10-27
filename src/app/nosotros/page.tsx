import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Image from "next/image";
import  HistoriaTimeline  from "@/components/sections/HistoriaTimeline";
import CompanyInfo from "@/components/sections/CompanyInfo";
import TeamCarousel from "@/components/sections/TeamCarousel";


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
              Sobre Nosotros
            </h1>
          </div>
        </section>
<section>
<HistoriaTimeline />
</section>
<section>
<CompanyInfo />
</section>
<section>
<TeamCarousel />
</section>
<section>

</section>
      </main>
      <Footer />
    </div>
  );
}
