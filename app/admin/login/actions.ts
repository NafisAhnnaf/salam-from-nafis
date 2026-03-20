"use server";
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function loginAction(prevState: any, formData: FormData) {
    const password = formData.get("password");

    // Note: Since this is server-side, you can use ADMIN_SECRET (non-public)
    // but I've kept it as your variable name for consistency.
    const ADMIN_PASSWORD = process.env.ADMIN_SECRET;

    if (password === ADMIN_PASSWORD) {
        const cookieStore = await cookies();

        cookieStore.set('admin_session', 'true', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24, // 1 day
            path: '/',
        });

        // Redirecting inside a server action that is called via useActionState
        // is the standard way to handle successful auth.
        redirect('/admin/dashboard');
    }

    // Return the error object that the UI will catch
    return { error: "Invalid Credentials. Try again, Senior!" };
}