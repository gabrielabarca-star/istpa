// app/blog/[slug]/page.tsx
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Image from 'next/image';
import { getNews, Post } from '@/lib/news';

async function getPost(slug: string): Promise<Post | undefined> {
    try {
        const posts: Post[] = await getNews();
        return posts.find(post => post.slug === slug);
    } catch (error) {
        console.error("Error al obtener el post:", error);
        return undefined;
    }
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPost(slug);

    if (!post) {
        return (
            <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow flex items-center justify-center py-20">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-[#0A2540] mb-4">Noticia no encontrada.</h1>
                        <a href="/blog" className="text-blue-600 hover:underline">Volver al blog</a>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <article className="max-w-4xl mx-auto py-16 px-4">
                    <h1 className="text-4xl font-bold text-[#0A2540] mb-4">{post.title}</h1>
                    <p className="text-slate-500 mb-8">
                        {new Date(post.date).toLocaleDateString('es-ES', { 
                            weekday: 'long', 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                        })}
                    </p>
                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-8 shadow-lg">
                        <Image src={post.imageUrl} alt={post.title} fill className="object-cover" />
                    </div>
                    <div className="prose lg:prose-xl text-slate-700 max-w-none">
                        {post.description.split('\n').map((paragraph, index) => (
                            <p key={index} className="mb-4">{paragraph}</p>
                        ))}
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    );
}
