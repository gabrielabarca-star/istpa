import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto grid grid-cols-1 gap-12 px-4 py-16 md:grid-cols-5 md:px-6"> {/* Cambiado a 5 columnas para acomodar el Libro */}
        
        {/* Columna 1: Logo y Redes */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2">
            {/* Contenedor relativo para el logo */}
            <div className="relative w-auto h-12"> {/* Ajusta h-12 según necesites */}
                <Image
                  src="/img/logotipo-altiplano.png"
                  alt="Logo ISTPA"
                  width={500} // Dimensiones originales de la imagen (aproximadas o exactas)
                  height={500}
                  className="h-full w-auto object-contain" // h-full llena el contenedor padre, w-auto mantiene proporción
                  priority // Opcional: para cargar el logo más rápido
                />
            </div>
          </Link>
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

        {/* Columna 2: Navegación */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Navegación</h3>
          <ul className="space-y-2">
            <li><Link href="/nosotros" className="text-sm hover:text-secondary">Nosotros</Link></li>
            <li><Link href="#careers" className="text-sm hover:text-secondary">Carreras</Link></li>
            <li><Link href="#news" className="text-sm hover:text-secondary">Noticias</Link></li>
            <li><Link href="#contact" className="text-sm hover:text-secondary">Contacto</Link></li>
          </ul>
        </div>

        {/* Columna 3: Legal */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Legal</h3>
          <ul className="space-y-2">
            <li><Link href="#" className="text-sm hover:text-secondary">Términos de Servicio</Link></li>
            <li><Link href="#" className="text-sm hover:text-secondary">Política de Privacidad</Link></li>
            <li><Link href="/transparencia" className="text-sm hover:text-secondary">Transparencia</Link></li>
          </ul>
        </div>
        
        {/* Columna 4: Contacto */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Contacto</h3>
          <address className="not-italic text-sm text-primary-foreground/80">
            <p>Jr. Lambayeque N° 416</p>
            <p>Puno, Puno, Perú</p>
            <p className="mt-2">Email: altiplano.puno@iest.edu.pe</p>
            <p>Teléfono: (051)357708</p>
          </address>
        </div>

        {/* --- NUEVO: Columna 5: Libro de Reclamaciones --- */}
        <div className="flex flex-col items-start justify-start">
            <Link href="/libro_reclamaciones" className="group">
                <div className="relative w-32 h-auto hover:opacity-90 transition-opacity">
                    {/* Asegúrate de tener esta imagen en tu carpeta public */}
                    <Image
                        src="/img/libro_reclamaciones.png" 
                        alt="Libro de Reclamaciones"
                        width={150}
                        height={80}
                        className="object-contain"
                    />
                </div>
                <p className="text-xs mt-2 text-primary-foreground/70 group-hover:text-secondary transition-colors">
                    Libro de Reclamaciones Virtual
                </p>
            </Link>
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