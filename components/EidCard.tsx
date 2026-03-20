"use client";

import { motion } from 'framer-motion';
import { Moon, Star, Sparkles, Copy, Check, Lamp } from 'lucide-react';
import confetti from 'canvas-confetti'; // Import the confetti library
import { useEffect, useState } from 'react';

export default function EidCard({ person, greeting }: { person: any, greeting: string }) {
    const [copied, setCopied] = useState(false);
    const bkashNumber = process.env.NEXT_PUBLIC_BKASH;

    const copyToClipboard = () => {
        navigator.clipboard.writeText(bkashNumber);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };
    // Add this useEffect to trigger confetti on mount!
    useEffect(() => {
        // Trigger a simple burst on load
        confetti({
            particleCount: 150,
            spread: 120,
            origin: { y: 0.6 },
            colors: ['#065f46', '#fbbf24', '#ffffff', '#db2777'], // Match your theme!
        });

        // Optional: Trigger a second, wider burst for extra celebration
        setTimeout(() => {
            confetti({
                particleCount: 100,
                spread: 160,
                origin: { y: 0.5 },
                colors: ['#065f46', '#fbbf24'],
            });
        }, 500);
    }, []);
    return (
        <div className="flex p-5 items-center justify-center min-h-screen bg-[#010409] p-4 overflow-hidden relative">

            {/* 1. Animated Background Decorative Elements */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute top-[-15%] right-[-5%] text-emerald-950"
            >
                <Moon size={350} fill="currentColor" />
            </motion.div>

            <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute bottom-10 left-10 text-yellow-500/20"
            >
                <Star size={60} fill="currentColor" />
            </motion.div>

            <motion.div
                animate={{ y: [0, 10, 0], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-0 left-[15%] text-yellow-500/30 hidden md:block"
            >
                <div className="w-px h-24 bg-gradient-to-b from-transparent to-yellow-500/50 mx-auto" />
                <Lamp size={40} />
            </motion.div>

            {/* 2. Main Card Wrapper */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "backOut" }}
                className="relative z-10 card-emerald max-w-lg w-full rounded-[3rem] p-10 text-center border border-white/5 shadow-[0_0_50px_-12px_rgba(16,185,129,0.3)] overflow-hidden"
            >

                {/* 3. The Grand "Eid Mubarak" Header */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="mb-8"
                >
                    <div className="flex justify-center gap-2 mb-2">
                        <Star size={12} className="text-yellow-400 animate-pulse" fill="currentColor" />
                        <Star size={12} className="text-yellow-400 animate-pulse delay-75" fill="currentColor" />
                    </div>

                    <h2 className="text-5xl md:text-6xl font-serif font-black tracking-tight bg-gradient-to-b from-yellow-100 via-yellow-400 to-yellow-700 bg-clip-text text-transparent italic drop-shadow-sm">
                        Eid Mubarak
                    </h2>

                    <div className="h-px w-32 bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent mx-auto mt-4" />
                </motion.div>

                {/* 4. Personalized Greetings */}
                <div className="mb-10 text-center">
                    <p className="text-emerald-400 font-mono text-[10px] tracking-[0.4em] uppercase mb-3">
                        To
                    </p>
                    <h3 className="text-3xl font-bold text-white leading-tight italic font-serif">
                        {person.user.name} {greeting}
                    </h3>
                    <p className="text-emerald-200/50 text-sm mt-1 italic">Assalamualikum {greeting}</p>
                </div>

                {/* 5. Heartfelt Message (REVERTED: Wraps in Large Translucent Quotes) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="relative px-6 py-8 mb-12"
                >
                    <span className="absolute top-0 left-0 text-6xl text-emerald-500/20 font-serif leading-none">“</span>
                    <p className="text-xl md:text-2xl font-light leading-relaxed text-slate-100 font-serif italic relative z-10 px-2">
                        {person.message || "Eid is better when the bank account feels lighter... for you, and heavier for me!"}
                    </p>
                    <span className="absolute bottom-0 right-0 text-6xl text-emerald-500/20 font-serif translate-y-4 leading-none">”</span>
                </motion.div>

                {/* 6. Salami Receiving Box (Interactive UI) */}
                <div className="space-y-4 bg-emerald-950/20 p-6 rounded-[2.5rem] border border-white/5 group transition-all">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-yellow-500/70 mb-4 font-bold">
                        Salami Receiving Terminal 🌙
                    </p>

                    <div className="flex flex-col items-center gap-4">
                        <motion.div
                            onClick={copyToClipboard}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="cursor-pointer group flex items-center gap-3 bg-black/40 px-6 py-3 rounded-2xl border border-emerald-500/30 hover:border-emerald-400 transition-all shadow-inner"
                        >
                            <span className="text-2xl font-mono font-bold tracking-widest text-white">
                                {bkashNumber}
                            </span>
                            {copied ? <Check size={20} className="text-emerald-400" /> : <Copy size={18} className="text-emerald-500/50 group-hover:text-emerald-400" />}
                        </motion.div>

                        <img
                            src="/bkash4.svg"
                            alt="bKash"
                            className="h-8 w-auto opacity-90 group-hover:opacity-100 transition-opacity brightness-110"
                        />
                    </div>
                </div>

                <footer className="mt-12 opacity-30 text-[9px] font-mono tracking-tighter uppercase">
                    SYSTEM: SECURE_SALAMI_TRANSFER_INITIATED // v1.0 • Generated by Nafis
                </footer>
            </motion.div>
        </div>
    );
}