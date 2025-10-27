// app/api/news/route.ts

import { NextResponse } from 'next/server';
import { getNews } from '@/lib/news'; // Importamos la función desde nuestra librería

export async function GET() {
    try {
        const news = await getNews();
        return NextResponse.json(news);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Failed to fetch news data' }, { status: 500 });
    }
}