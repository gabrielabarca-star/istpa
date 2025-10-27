import Link from 'next/link';
import Image from 'next/image'; // 1. IMPORTAR Image
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'; // 2. QUITAR GraduationCap

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto grid grid-cols-1 gap-12 px-4 py-16 md:grid-cols-4 md:px-6">
        <div className="flex flex-col gap-4">
          
          {/* --- INICIO DE LA CORRECCIÓN --- */}
          <Link href="/" className="flex items-center gap-2">
            {/* IMPORTANTE: 
              1. Cambia '/logo.png' por la ruta a tu logo (debe estar en la carpeta 'public').
                 Ejemplo: '/img/mi-logo.svg'
              2. Ajusta 'width' y 'height' a las dimensiones REALES de tu archivo de logo.
            */}
            <Image
              src="/img/logoblanco.png"    // <- CAMBIA ESTO
              alt="Logo ISTPA"    // <- CAMBIA ESTO (si es necesario)
              width={120}         // <- CAMBIA ESTO (ancho real de tu imagen)
              height={32}         // <- CAMBIA ESTO (alto real de tu imagen)
              className="h-8 w-auto" // Esto mantiene la altura de 32px (h-8)
            />
          </Link>
          {/* --- FIN DE LA CORRECCIÓN --- */}

          <p className="text-sm text-primary-foreground/80">
            Formando profesionales para un futuro brillante.
          </p>
          <div className="flex gap-4">
            <Link href="#" aria-label="Facebook"><Facebook className="h-6 w-6 hover:text-secondary" /></Link>
            <Link href="#" aria-label="Twitter"><Twitter className="h-6 w-6 hover:text-secondary" /></Link>
            <Link href="#" aria-label="Instagram"><Instagram className="h-6 w-6 hover:text-secondary" /></Link>
            <Link href="#" aria-label="LinkedIn"><Linkedin className="h-6 w-6 hover:text-secondary" /></Link>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold">Navegación</h3>
          <ul className="space-y-2">
            <li><Link href="/nosotros" className="text-sm hover:text-secondary">Nosotros</Link></li>
            <li><Link href="#careers" className="text-sm hover:text-secondary">Carreras</Link></li>
            <li><Link href="#news" className="text-sm hover:text-secondary">Noticias</Link></li>
            <li><Link href="#contact" className="text-sm hover:text-secondary">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold">Legal</h3>
          <ul className="space-y-2">
            <li><Link href="#" className="text-sm hover:text-secondary">Términos de Servicio</Link></li>
            <li><Link href="#" className="text-sm hover:text-secondary">Política de Privacidad</Link></li>
            <li><Link href="#" className="text-sm hover:text-secondary">Transparencia</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="mb-4 text-lg font-semibold">Contacto</h3>
          <address className="not-italic text-sm text-primary-foreground/80">
            <p>Jr. Lambayeque N° 416</p>
            <p>Puno, Puno, Perú</p>
            <p className="mt-2">Email: altiplano.puno@iest.edu.pe</p>
            <p>Teléfono: (051)357708</p>
          </address>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-6">
        <p className="text-center text-sm text-primary-foreground/60">
          © {new Date().getFullYear()} ISTPA. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}