// app/blog/[slug]/page.tsx

import Image from 'next/image';
import { getNews, Post } from '@/lib/news'; // <-- 1. IMPORTAR DIRECTAMENTE

// --- 2. CORRECCIÓN: Usar getNews() en lugar de fetch ---
async function getPost(slug: string): Promise<Post | undefined> {
    try {
        const posts: Post[] = await getNews();
        return posts.find(post => post.slug === slug);
    } catch (error) {
        console.error("Error al obtener el post:", error);
        return undefined;
    }
}

export default async function PostPage({ params }: { params: { slug: string } }) {
    const post = await getPost(params.slug);

    if (!post) {
        return <div className="text-center py-20">Noticia no encontrada.</div>;
    }

    return (
        <article className="max-w-4xl mx-auto py-16 px-4">
            <h1 className="text-4xl font-bold text-[#0A2540] mb-4">{post.title}</h1>
            <p className="text-slate-500 mb-8">{new Date(post.date).toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-8">
                <Image src={post.imageUrl} alt={post.title} layout="fill" objectFit="cover" />
            </div>
            {/* Usamos 'prose' de Tailwind para estilizar automáticamente el texto */}
            <div className="prose lg:prose-xl text-slate-700">
                <p>{post.description}</p>
            </div>
        </article>
    );
}