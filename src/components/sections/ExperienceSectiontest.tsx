// components/ExperienceSection.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, ArrowUpRight, Newspaper, ChevronRight } from 'lucide-react';

interface Post {
  slug: string;
  category: string;
  title: string;
  date: string;
  imageUrl: string;
}

const colors = {
  primary: '#1B355C',
  accent: '#C8663E',
  soft: '#F1F5F9'
};

const NewsCard = ({ post, isFeatured = false }: { post: Post; isFeatured?: boolean }) => (
  <Link 
    href={`/blog/${post.slug}`}
    className={`group relative flex flex-col overflow-hidden rounded-[2.5rem] transition-all duration-500 hover:-translate-y-2 ${
      isFeatured ? 'lg:col-span-2 lg:flex-row' : 'bg-white'
    }`}
  >
    {/* Imagen con zoom dinámico */}
    <div className={`relative overflow-hidden ${isFeatured ? 'lg:w-3/5 aspect-video lg:aspect-auto' : 'aspect-[16/10]'}`}>
      <Image 
        src={post.imageUrl} 
        alt={post.title} 
        fill 
        className="object-cover transition-transform duration-1000 group-hover:scale-110" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1B355C]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
      
      {/* Badge de categoría dinámico */}
      <div className="absolute top-6 left-6">
        <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 px-4 py-2 rounded-2xl shadow-lg">
          <Newspaper size={14} className="text-white" />
          <span className="text-white text-[10px] font-black uppercase tracking-[0.2em]">
            {post.category || 'Actualidad'}
          </span>
        </div>
      </div>
    </div>

    {/* Contenido Editorial */}
    <div className={`p-8 flex flex-col justify-center bg-white ${isFeatured ? 'lg:w-2/5' : ''}`}>
      <div className="flex items-center gap-3 text-slate-400 mb-4">
        <Calendar size={14} style={{ color: colors.accent }} />
        <span className="text-[11px] font-bold uppercase tracking-widest leading-none">
          {new Date(post.date).toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' })}
        </span>
      </div>

      <h3 className={`font-black text-[#1B355C] leading-[1.1] mb-6 transition-colors group-hover:text-[#C8663E] ${
        isFeatured ? 'text-3xl md:text-4xl' : 'text-xl'
      }`}>
        {post.title}
      </h3>

      <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-100">
        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-[#1B355C] transition-colors">
          Seguir leyendo
        </span>
        <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-[#1B355C] group-hover:text-white transition-all duration-300">
          <ArrowUpRight size={18} className="transition-transform group-hover:rotate-12" />
        </div>
      </div>
    </div>
  </Link>
);

export default async function ExperienceSection() {
  let posts: Post[] = [];
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/news`, { cache: 'no-store' });
    posts = await res.json();
  } catch (e) { console.error(e); }

  const featuredPosts = posts.slice(0, 3);

  return (
    <section className="w-full bg-[#F8FAFC] py-24 relative overflow-hidden">
      {/* Elementos decorativos abstractos */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#C8663E]/5 rounded-full blur-[100px]" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#1B355C]/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Cabecera minimalista */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 border-b border-slate-200 pb-12">
          <div className="text-center md:text-left">
            <h2 className="text-5xl md:text-7xl font-black text-[#1B355C] tracking-tighter leading-none mb-4">
              EXPERIENCIA <br /> <span className="text-[#C8663E]">ISTPA</span>
            </h2>
            <p className="text-slate-500 font-medium max-w-md">
              Mantente al día con los últimos eventos, logros y noticias de nuestra comunidad académica.
            </p>
          </div>

          <Link href="/blog" className="mt-8 md:mt-0 group flex items-center gap-3 bg-[#1B355C] text-white px-8 py-4 rounded-full transition-all hover:bg-[#C8663E] hover:shadow-2xl">
            <span className="text-xs font-black uppercase tracking-widest">Explorar Blog</span>
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredPosts.length > 0 ? (
            featuredPosts.map((post, idx) => (
              <NewsCard 
                key={post.slug} 
                post={post} 
                isFeatured={idx === 0} // La primera noticia es más grande
              />
            ))
          ) : (
            [1, 2, 3].map(i => <div key={i} className="h-96 bg-white rounded-[2.5rem] animate-pulse" />)
          )}
        </div>
      </div>
    </section>
  );
}