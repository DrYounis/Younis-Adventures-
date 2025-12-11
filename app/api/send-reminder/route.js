import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(request) {
    return NextResponse.json({ message: 'Email service temporarily disabled for deployment debugging.' });
}
