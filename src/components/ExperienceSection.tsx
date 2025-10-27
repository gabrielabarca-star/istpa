// src/components/ExperienceSection.tsx

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// --- INICIO DE LA CORRECCIÓN ---
// Quitamos 'src/' del path. El alias '@/' ya apunta a la carpeta 'src'.
import { getNews, Post } from '@/lib/news'; 
// --- FIN DE LA CORRECCIÓN ---

// --- Iconos ---
const CalendarIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 2V5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 2V5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3.5 9.08984H20.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 8.5V17C21 20 19.5 22 16.5 22H7.5C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 7.5 3.5H16.5C19.5 3.5 21 5.5 21 8.5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
const ArrowRightIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
);

// --- Componente NewsCard ---
const NewsCard = ({ post }: { post: Post }) => (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
        <div className="relative w-full aspect-[749/499]">
            <Image src={post.imageUrl} alt={post.title} layout="fill" objectFit="cover" />
            
            <span className="absolute top-4 left-4 bg-white/90 text-sm font-semibold text-[#002A5D] py-1 px-3 rounded-full z-10">
                {post.category}
            </span>

        </div>
        <div className="p-6 flex flex-col flex-grow">
            <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
                <CalendarIcon className="w-4 h-4" />
                <span>{new Date(post.date).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
            </div>
            <h3 className="text-lg font-bold text-[#0A2540] mb-4 flex-grow">{post.title}</h3>
            <Link href={`/blog/${post.slug}`}>
                <button className="group flex items-center justify-center gap-2 text-white font-semibold py-2 px-4 rounded-full bg-slate-400 hover:bg-slate-500 transition-colors w-fit">
                    Leer más
                    <span className="bg-slate-600 rounded-full w-6 h-6 flex items-center justify-center transition-transform group-hover:translate-x-1">
                        <ArrowRightIcon className="w-3 h-3" />
                    </span>
                </button>
            </Link>
        </div>
    </div>
);


export default async function ExperienceSection() {
    const colors = { primaryText: '#002A5D', accent: '#08D3C4' };
    
    let featuredPosts: Post[] = [];
    try {
        const allPosts = await getNews();
        featuredPosts = allPosts.slice(0, 3);
    } catch (error) {
        console.error("Error al cargar noticias en ExperienceSection:", error);
    }
    
    return (
        <section className="w-full bg-slate-50 py-16 sm:py-24">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="text-center">
                    <p className="font-semibold" style={{ color: colors.primaryText }}>Vive la</p>
                    <h2 className="text-4xl sm:text-5xl font-extrabold" style={{ color: colors.primaryText }}>
                        Experiencia Istpa
                    </h2>
                    <div className="w-16 h-1 mt-4 mx-auto" style={{ backgroundColor: colors.accent }}></div>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredPosts.length > 0 ? (
                        featuredPosts.map(post => <NewsCard key={post.slug} post={post} />)
                    ) : (
                        <p className="col-span-3 text-center text-slate-500">No hay noticias disponibles en este momento.</p>
                    )}
                </div>

                <div className="text-center mt-12">
                    <Link href="/blog">
                        <button className="group bg-[#002A5D] text-white font-semibold py-3 px-8 rounded-full flex items-center justify-center gap-3 mx-auto hover:bg-[#001F44] transition-colors">
                            Ver más publicaciones
                            <span className="bg-white/20 rounded-full w-7 h-7 flex items-center justify-center transition-transform group-hover:translate-x-1">
                                <ArrowRightIcon className="w-4 h-4" />
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}