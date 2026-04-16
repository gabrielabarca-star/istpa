import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Image from "next/image";
import ComplaintsBookSection from "@/components/sections/ComplaintsBookSection";




export default function NosotrosPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-neutral-textDark">
      <Header />
      <main className="flex-1">
       
        <ComplaintsBookSection/>

      </main>
      <Footer />
    </div>
  );
}
