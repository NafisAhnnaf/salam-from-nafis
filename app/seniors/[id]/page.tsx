import prisma from '@/lib/prisma';
import { notFound } from 'next/navigation';
import EidCard from '@/components/EidCard';

export default async function Page({
    params
}: {
    params: Promise<{ id: string }> // Changed back to id
}) {
    const { id } = await params;

    // Use findUnique with the ID directly
    const person = await prisma.senior.findUnique({
        where: { user_id: id }, // Searching by the UUID primary key
        include: {
            user: true,
        },
    });

    // Handle missing user or missing senior metadata
    if (!person) {
        notFound();
    }

    const greeting = person.user.gender === 'MALE' ? 'bhai' : 'apu';


    return <EidCard person={person} greeting={greeting} />;
}