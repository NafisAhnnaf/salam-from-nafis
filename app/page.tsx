"use client";

import { motion } from "framer-motion";
import { Facebook, Linkedin, Mail, ExternalLink } from "lucide-react";

export default function LandingPage() {
  const containerVars = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVars = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <main className="min-h-screen bg-[#020617] text-slate-100 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-900/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/20 blur-[120px] rounded-full" />

      <motion.div
        variants={containerVars}
        initial="initial"
        animate="animate"
        className="max-w-2xl w-full text-center z-10"
      >
        <motion.div variants={itemVars} className="mb-6 inline-block">
          <div className="px-4 py-1 border border-emerald-500/30 bg-emerald-500/10 rounded-full text-emerald-400 text-sm font-mono tracking-widest uppercase">
            A Random IUTian
          </div>
        </motion.div>

        <motion.h1
          variants={itemVars}
          className="text-5xl md:text-7xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500"
        >
          Nafis Ahnaf Jamil
        </motion.h1>

        <motion.p
          variants={itemVars}
          className="text-slate-400 text-lg md:text-xl mb-10 max-w-lg mx-auto leading-relaxed"
        >
          Building scalable relationships with fellow IUTians and enjoying IUT traditions.
          Currently busy collecting Salami from seniors. 🌙
        </motion.p>

        {/* Social Links Section */}
        <motion.div variants={itemVars} className="flex flex-wrap justify-center gap-4">
          <SocialLink
            href="https://www.facebook.com/nafisahnaf.jamil.5"
            icon={<Facebook size={20} />}
            label="Facebook"
            color="hover:text-blue-500"
          />
          <SocialLink
            href="https://www.linkedin.com/in/nafis-ahnaf-jamil-0b9212369/"
            icon={<Linkedin size={20} />}
            label="LinkedIn"
            color="hover:text-blue-400"
          />
          <SocialLink
            href="mailto:nafisahnaf@yahoo.com"
            icon={<Mail size={20} />}
            label="Email"
            color="hover:text-emerald-400"
          />
        </motion.div>

        <motion.footer variants={itemVars} className="mt-20 text-slate-600 text-sm font-mono">
          © {new Date().getFullYear()} • Built with Next.js & Neon DB
        </motion.footer>
      </motion.div>
    </main>
  );
}

function SocialLink({ href, icon, label, color }: { href: string, icon: React.ReactNode, label: string, color: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900/50 border border-slate-800 transition-all duration-300 group ${color} hover:border-current hover:bg-slate-900`}
    >
      {icon}
      <span className="font-medium">{label}</span>
      <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
    </a>
  );
}