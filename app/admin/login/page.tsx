"use client";

import { useActionState } from "react";
import { loginAction } from "./actions";
import { motion } from "framer-motion";

export default function LoginPage() {
    // state: the object returned from the action
    // formAction: the function passed to the form's 'action' prop
    // isPending: true while the server action is running
    const [state, formAction, isPending] = useActionState(loginAction, null);

    return (
        <div className="min-h-screen bg-[#020617] flex items-center justify-center p-4">
            <form
                action={formAction}
                className="p-8 bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-sm shadow-2xl transition-all"
            >
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-white mb-2 tracking-tight">Admin Access</h1>
                    <p className="text-slate-400 text-sm">Verify your identity to manage Salami cards.</p>
                </div>

                <div className="space-y-4">
                    <div className="space-y-2">
                        <input
                            name="password"
                            type="password"
                            placeholder="Secret Key"
                            required
                            className={`w-full p-4 rounded-xl bg-slate-800 text-white border outline-none transition-all ${state?.error ? 'border-red-500/50 focus:border-red-500' : 'border-slate-700 focus:border-emerald-500'
                                }`}
                        />

                        {/* Dynamic Error Message */}
                        {state?.error && (
                            <motion.p
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="text-red-400 text-xs italic ml-1"
                            >
                                {state.error}
                            </motion.p>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={isPending}
                        className="w-full bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-700 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl shadow-lg shadow-emerald-900/20 transition-all active:scale-[0.98]"
                    >
                        {isPending ? (
                            <span className="flex items-center justify-center gap-2">
                                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                Authenticating...
                            </span>
                        ) : (
                            "Login to Dashboard"
                        )}
                    </button>
                </div>

                <div className="mt-8 text-center">
                    <p className="text-[10px] text-slate-600 font-mono tracking-widest uppercase">
                        Nafis-Pay Security v1.0
                    </p>
                </div>
            </form>
        </div>
    );
}