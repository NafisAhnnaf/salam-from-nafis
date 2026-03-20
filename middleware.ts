// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    // 1. Define which paths are protected
    const isDashboardPage = request.nextUrl.pathname.startsWith('/admin/dashboard');

    // 2. Check for your auth cookie
    const authCookie = request.cookies.get('admin_session');

    // 3. If they are trying to access dashboard without the cookie, redirect to login
    if (isDashboardPage && !authCookie) {
        return NextResponse.redirect(new URL('/admin/login', request.url));
    }

    return NextResponse.next();
}

// 4. Matcher tells Next.js to only run this code for admin routes
export const config = {
    matcher: '/admin/:path*',
};