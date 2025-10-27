// app/blog/page.tsx

import Link from 'next/link';
import Image from 'next/image';
// Asegúrate de que esta ruta sea la correcta para tu proyecto:
import { getNews, Post } from '@/lib/news'; 

// --- INICIO DE LA CORRECCIÓN: Función para formatear la fecha ---
const monthNames: { [key: string]: string } = {
    '01': 'enero', '02': 'febrero', '03': 'marzo', '04': 'abril',
    '05': 'mayo', '06': 'junio', '07': 'julio', '08': 'agosto',
    '09': 'septiembre', '10': 'octubre', '11': 'noviembre', '12': 'diciembre'
};

function formatDate(isoDate: string): string {
    // isoDate llega como "YYYY-MM-DD"
    const parts = isoDate.split('-');
    if (parts.length !== 3) {
        return isoDate; // Devuelve el original si no es el formato esperado
    }
    const [year, month, day] = parts;
    return `${day} de ${monthNames[month] || ''} de ${year}`;
}
// --- FIN DE LA CORRECCIÓN ---


// Componente de tarjeta pequeña (con la fecha corregida)
const NewsCardSmall = ({ post }: { post: Post }) => (
    <Link href={`/blog/${post.slug}`}>
        <div className="group bg-white rounded-2xl shadow-md overflow-hidden flex flex-col h-full">
            <div className="relative w-full aspect-video">
                <Image src={post.imageUrl} alt={post.title} layout="fill" objectFit="cover" className="transition-transform group-hover:scale-105 duration-300" />
                <span className="absolute top-4 left-4 bg-white/90 text-sm font-semibold text-[#002A5D] py-1 px-3 rounded-full">{post.category}</span>
            </div>
            <div className="p-4 flex flex-col flex-grow">
                {/* --- CORRECCIÓN DE FECHA AQUÍ --- */}
                <p className="text-xs text-slate-500 mb-2">
                    {formatDate(post.date)}
                </p>
                <h3 className="font-bold text-[#0A2540] flex-grow mb-2">{post.title}</h3>
                <p className="text-sm text-blue-600 font-semibold group-hover:underline">Leer más ›</p>
            </div>
        </div>
    </Link>
);

export default async function BlogIndexPage() {
    let allPosts: Post[] = [];
    try {
        allPosts = await getNews();
    } catch (error) {
        console.error("Error al cargar noticias para BlogIndexPage:", error);
    }

    // Filtramos de forma insensible a mayúsculas/minúsculas
    const blogPosts = allPosts.filter(p => p.category && p.category.toLowerCase() === 'blog');
    const newsPosts = allPosts.filter(p => p.category && p.category.toLowerCase() === 'noticias');
    const eventPosts = allPosts.filter(p => p.category && p.category.toLowerCase() === 'eventos');
    
    return (
        <div className="max-w-6xl mx-auto py-16 px-4 space-y-16">
            
            {/* Sección Blog */}
            {blogPosts.length > 0 && (
                <div>
                    <h2 className="text-3xl font-bold text-[#002A5D]">Blog</h2>
                    <div className="w-12 h-1 mt-2 bg-[#08D3C4]"></div>
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {blogPosts.map(post => <NewsCardSmall key={post.slug} post={post} />)}
                    </div>
                </div>
            )}

            {/* Sección Noticias */}
            {newsPosts.length > 0 && (
                <div>
                    <h2 className="text-3xl font-bold text-[#002A5D]">Noticias</h2>
                    <div className="w-12 h-1 mt-2 bg-[#08D3C4]"></div>
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {newsPosts.map(post => <NewsCardSmall key={post.slug} post={post} />)}
                    </div>
                </div>
            )}

            {/* Sección Eventos */}
            {eventPosts.length > 0 && (
                <div>
                    <h2 className="text-3xl font-bold text-[#002A5D]">Eventos</h2>
                    <div className="w-12 h-1 mt-2 bg-[#08D3C4]"></div>
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {eventPosts.map(post => <NewsCardSmall key={post.slug} post={post} />)}
                    </div>
                </div>
            )}

            {/* Mensaje si no hay NINGÚN post en absoluto */}
            {allPosts.length === 0 && (
                 <p className="text-center text-slate-500 py-10">No hay publicaciones disponibles en este momento.</p>
            )}
        </div>
    );
}