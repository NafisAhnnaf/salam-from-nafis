import prisma from "@/lib/prisma";
import { createSenior } from "./actions";

export default async function Dashboard() {
    const users = await prisma.user.findMany({
        include: { senior: true },
        orderBy: { name: 'asc' }
    });

    return (
        <div className="p-8 bg-[#020617] min-h-screen text-white">
            <h1 className="text-3xl font-bold mb-8 text-emerald-400">Senior Management</h1>

            <div className="grid md:grid-cols-2 gap-12">
                {/* Form Section */}
                <section className="bg-slate-900 p-6 rounded-xl border border-slate-800">
                    <h2 className="text-xl mb-4 font-semibold">Add New Junior</h2>
                    <form action={createSenior} className="space-y-4">
                        <input name="name" placeholder="Full Name" required className="w-full p-3 bg-slate-800 rounded border border-slate-700" />

                        <select name="gender" className="w-full p-3 bg-slate-800 rounded border border-slate-700">
                            <option value="MALE">Male (Bhai)</option>
                            <option value="FEMALE">Female (Apu)</option>
                        </select>

                        <textarea name="message" placeholder="Heartfelt text..." className="w-full p-3 bg-slate-800 rounded border border-slate-700 h-32" />

                        <button type="submit" className="w-full bg-emerald-600 p-3 rounded font-bold hover:bg-emerald-500 transition-all">
                            Generate Eid Card
                        </button>
                    </form>
                </section>

                {/* List Section */}
                <section>
                    <h2 className="text-xl mb-4 font-semibold">Active Cards</h2>
                    <div className="space-y-3">
                        {users.map((u) => (
                            <div key={u.id} className="p-4 bg-slate-900 border border-slate-800 rounded-lg flex justify-between items-center">
                                <div>
                                    <p className="font-bold text-emerald-200">{u.name}</p>
                                    <p className="text-xs text-slate-500">Slug: {u.slug}</p>
                                </div>
                                <a
                                    href={`/seniors/${u.id}`}
                                    target="_blank"
                                    className="text-xs bg-slate-800 px-3 py-1 rounded hover:text-emerald-400 border border-slate-700"
                                >
                                    View Link
                                </a>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}