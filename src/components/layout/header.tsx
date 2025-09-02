"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, GraduationCap } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinkClasses = "transition-colors hover:text-secondary";

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-primary/95 shadow-lg backdrop-blur-sm" : "bg-primary"
      }`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 text-primary-foreground">
          <GraduationCap className="h-8 w-8" />
          <span className="text-xl font-bold">Carrión Digital</span>
        </Link>
        <nav className="hidden items-center gap-6 text-lg font-medium text-primary-foreground md:flex">
          <Link href="/nosotros" className={navLinkClasses}>
            Nosotros
          </Link>
          <Link href="#why-us" className={navLinkClasses}>
            ¿Por qué Carrión?
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className={`text-lg font-medium text-primary-foreground ${navLinkClasses}`}>
                Carreras
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <Link href="#">Técnico en Farmacia</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="#">Técnico en Enfermería</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="#">Contabilidad</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Abrir menú</span>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>
                <Link href="/" className="flex items-center gap-2 text-primary">
                  <GraduationCap className="h-8 w-8" />
                  <span className="text-xl font-bold">Carrión Digital</span>
                </Link>
              </SheetTitle>
            </SheetHeader>
            <div className="mt-8 flex flex-col gap-6 text-lg">
              <h3 className="font-semibold text-xl">Menú Principal</h3>
              <Link href="/nosotros" className="hover:text-secondary">Nosotros</Link>
              <Link href="#why-us" className="hover:text-secondary">¿Por qué Carrión?</Link>
              <h3 className="font-semibold text-xl mt-4">Carreras</h3>
              <Link href="#" className="hover:text-secondary pl-4">Técnico en Farmacia</Link>
              <Link href="#" className="hover:text-secondary pl-4">Técnico en Enfermería</Link>
              <Link href="#" className="hover:text-secondary pl-4">Contabilidad</Link>
              <h3 className="font-semibold text-xl mt-4">Más Opciones</h3>
              <Link href="#" className="hover:text-secondary pl-4">Transparencia</Link>
              <Link href="#" className="hover:text-secondary pl-4">Intranet</Link>
              <Link href="#" className="hover:text-secondary pl-4">Servicios</Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
