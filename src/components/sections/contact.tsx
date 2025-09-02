import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  const mapSrc = "https://maps.google.com/maps?q=Jr.%20Lambayeque%20N%C2%B0%20416.%20Puno&t=&z=15&ie=UTF8&iwloc=&output=embed";

  return (
    <section id="contact" className="bg-card py-16 sm:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Ubícanos y Contáctanos
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Estamos aquí para resolver tus dudas. ¡Visítanos o ponte en contacto con nosotros!
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-primary">Nuestra Sede en Puno</CardTitle>
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
                  <p className="text-muted-foreground">(051) 123-456</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-8 w-8 flex-shrink-0 text-secondary" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-muted-foreground">info@carrion.edu.pe</p>
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
