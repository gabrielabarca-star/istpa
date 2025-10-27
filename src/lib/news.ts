// src/lib/news.ts

import Papa from 'papaparse';

// Definimos el tipo de dato aquí para poder reutilizarlo
export interface Post {
    timestamp: string;
    category: 'Blog' | 'Noticias' | 'Eventos';
    title: string;
    description: string;
    date: string; // Seguiremos pasando un string, pero ahora en formato ISO
    imageUrl: string;
    slug: string;
}

// Esta es la función que obtiene y procesa los datos
export async function getNews(): Promise<Post[]> {
    // --- Esta es tu URL correcta ---
    const GOOGLE_SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS7P7rk67OFicX9-rEiv-fM_9zfKZ_4Z9iQ2T0GjJtlULY3_465EccJeidDHLCkLUMsGBYW7_oWJYZv/pub?output=csv';

    const response = await fetch(GOOGLE_SHEET_URL, {
        next: { revalidate: 60 }, // Revalidar cada 60 segundos
    });

    if (!response.ok) {
        throw new Error('Failed to fetch Google Sheet data');
    }

    const csvText = await response.text();

    const parsedData = Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
    });

    // Filtramos las filas que no tengan un título O que no tengan un imageUrl
    const validData = (parsedData.data as any[]).filter(item => 
        item.Titulo && item.Titulo.trim() !== '' &&
        item.imageUrl && item.imageUrl.trim() !== '' &&
        item.fecha // <-- Asegurarnos de que también tenga una fecha
        
    );

    const news = validData
        .map((item): Post => {
            const rawImageUrl = String(item.imageUrl).trim();
            const encodedImageUrl = encodeURIComponent(rawImageUrl);
            const postSlug = String(item.Titulo).toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

            // --- INICIO DE LA CORRECCIÓN DE FECHA ---
            // item.fecha es "DD/MM/YYYY" (ej: "20/10/2025")
            const dateParts = String(item.fecha).split('/'); // -> ["20", "10", "2025"]
            // Lo convertimos a formato ISO "YYYY-MM-DD" (ej: "2025-10-20")
            // Este formato SÍ lo entiende new Date()
            const isoDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`; 
            // --- FIN DE LA CORRECCIÓN DE FECHA ---

            return {
                timestamp: item["Marca temporal"],
                category: item.categoría,
                title: item.Titulo,
                description: item.descripción,
                date: isoDate, // <-- Usamos la fecha en formato ISO
                imageUrl: `/img/news/${encodedImageUrl}`, 
                slug: postSlug,
            };
        });

    // Ordenamos por fecha (ahora es más seguro hacerlo con el formato ISO)
    return news.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}