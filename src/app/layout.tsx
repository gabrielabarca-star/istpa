import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: 'ISTPA',
  description: 'Instituto Superior Tecnologico del Altiplano',
};

// app/layout.tsx

import PageLoader from '@/components/PageLoader'; // Importa el loader

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <PageLoader /> {/* <-- Colócalo aquí, antes del children */}
        {children}
      </body>
    </html>
  )
}
