import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4752.949090175178!2d-70.0305151!3d-15.838520700000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915d69ea45cb486b%3A0xb92f75c71c6a1581!2sIESTP%20DEL%20ALTIPLANO!5e1!3m2!1ses!2spe!4v1761580884313!5m2!1ses!2spe"; // Asegúrate de que esta URL sea la correcta

  return (
    <section id="contact" className="bg-card py-16 sm:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Ubícanos y Contáctanos
          </h2>
          <div className="w-16 h-1 mt-2 mx-auto" style={{ backgroundColor: '#09d3c5' }}></div>
          <p className="mt-4 text-lg text-muted-foreground">
            Estamos aquí para resolver tus dudas. ¡Visítanos o ponte en contacto con nosotros!
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-primary">Instituto del Altiplano Puno</CardTitle>
              
              {/* --- INICIO DE LA CORRECCIÓN --- */}
              {/* Línea decorativa añadida */}
              
              {/* --- FIN DE LA CORRECCIÓN --- */}

            </CardHeader>
            <CardContent className="space-y-6 text-lg">
              <div className="flex items-start gap-4">
                <MapPin className="h-8 w-8 flex-shrink-0 text-secondary" />
                <div>
                  <h3 className="font-semibold">Dirección</h3>
                  <p className="text-muted-foreground">Jr. Lambayeque N° 416, Puno, Perú</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-8 w-8 flex-shrink-0 text-secondary" />
                <div>
                  <h3 className="font-semibold">Teléfono</h3>
                  <p className="text-muted-foreground">(051)357708</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-8 w-8 flex-shrink-0 text-secondary" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-muted-foreground">altiplano.puno@iest.edu.pe</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <iframe
              src={mapSrc}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}