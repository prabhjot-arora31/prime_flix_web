"use client";

import { useState } from "react";
import { ScreenshotCarousel } from "./ScreenshotCarousel";

export default function Home() {
  const [waitlistStatus, setWaitlistStatus] = useState("idle");

  const handleExploreClick = () => {
    const el = document.getElementById("features");
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // 🔥 ONLY ONE DOWNLOAD ROUTE NOW
  const handleDownload = () => {
    window.location.href = "https://github.com/prabhjot-arora31/primeflix_releases/releases/download/v2.1.0/primeflix-v2.1.0.apk";
  };

  return (
    <main className="min-h-screen bg-[#05070f] text-white">

      {/* HERO */}
      <section className="px-6 pt-28 pb-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/10 to-transparent blur-3xl pointer-events-none" />
        
        <div className="inline-block border border-purple-500/30 bg-purple-500/10 text-purple-300 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide mb-6 uppercase">
          PrimeFlix V2.1 is Live 🚀
        </div>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl mx-auto">
          Everything you watch.
          <br />
          <span className="text-purple-400">One place. Zero friction.</span>
        </h1>

        <p className="mt-6 text-slate-400 max-w-xl mx-auto text-sm md:text-base">
          Powered by the all-new V2 Engine. Cloud-synced recommendations, 
          Netflix-style Surprise Roulette, seamless hot-swapping, and offline downloads.
        </p>

        {/* 🔥 SINGLE, MASSIVE CTA */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={handleDownload}
            className="bg-purple-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:shadow-[0_0_40px_rgba(168,85,247,0.7)]"
          >
            Download PrimeFlix
          </button>
        </div>
        
        <div className="mt-6">
          <button
            onClick={handleExploreClick}
            className="text-slate-400 hover:text-white text-sm transition underline underline-offset-4"
          >
            Explore V2 Features
          </button>
        </div>
      </section>

      {/* CAROUSEL */}
      <ScreenshotCarousel />

      {/* FEATURES GRID */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-16">
            Built for binge-watching. Not marketing.
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              ["🎲 Surprise Me Roulette", "Don't know what to watch? Let the cloud hand-pick a masterpiece."],
              ["🔄 Seamless Hot-Swap", "Switch between recommended movies instantly without leaving the player."],
              ["🧠 Smart Resume", "Jump exactly to the season, episode, and millisecond you left off."],
              ["🎧 Dynamic Multi-Audio", "Automatically detects and applies your preferred language dubs."],
              ["💬 Online Subtitles", "Search, download, and sync subtitles directly inside the player."],
              ["📥 Unlimited Downloads", "Download anything. Watch anytime perfectly offline."],
              ["☁️ Cloud-Synced APIs", "Get real-time updates, new recommendations, and UI changes instantly."],
              ["👆 Gesture Engine", "Swipe for precise seek, 200% volume boost, and brightness controls."],
              ["🛡️ Premium Ad-Block", "Enjoy your streams without native web pop-ups ruining the experience."],
              ["➕ Universal Watchlist", "Save titles from any network into one unified, instantly accessible local library."]
            ].map(([title, desc], i) => (
              <div
                key={i}
                className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur hover:bg-white/10 transition hover:border-purple-500/30 group"
              >
                <h3 className="font-semibold mb-2 text-purple-50 group-hover:text-purple-300 transition-colors">{title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔥 NEW: RELEASE HISTORY (CHANGELOG) */}
      <section className="py-24 px-6 border-t border-white/10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">Release History</h2>
          
          <div className="space-y-6">
            {/* V2.1.0 CARD */}
            <div className="p-8 bg-purple-900/10 border border-purple-500/30 rounded-2xl relative overflow-hidden">
              <div className="absolute top-6 right-6 px-3 py-1 bg-purple-600 text-white text-xs font-bold rounded-full tracking-wide">
                LATEST
              </div>
              <h3 className="text-2xl font-bold mb-1">Version 2.1.0</h3>
              <p className="text-purple-300 text-sm font-medium mb-4">The Binge Engine Update</p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>✨ Added "Surprise Me" Roulette driven by Cloud Config.</li>
                <li>✨ Re-engineered ExoPlayer for real-time video Hot-Swapping.</li>
                <li>✨ Implemented precise Smart Resume across TV Show episodes.</li>
                <li>✨ Added Dynamic Multi-Audio extraction and selection.</li>
                <li>✨ Enhanced UI with cinematic loaders and seamless transitions.</li>
                <li>✨ Added watchlist feature to watch later.</li>
              </ul>
            </div>

            {/* V1.1.0 CARD (DEPRECATED) */}
            <div className="p-8 bg-white/5 border border-white/10 rounded-2xl relative opacity-75">
              <div className="absolute top-6 right-6 px-3 py-1 bg-red-500/20 text-red-400 border border-red-500/30 text-xs font-bold rounded-full tracking-wide">
                DEPRECATED
              </div>
              <h3 className="text-2xl font-bold text-slate-300 mb-1">Version 1.1.0</h3>
              <p className="text-slate-500 text-sm font-medium mb-4">The Genesis Release</p>
              <p className="text-sm text-slate-400 leading-relaxed">
                The original release that started it all. Introduced seamless multi-platform switching and gesture controls. 
                <br /><br />
                <span className="text-red-400/80 font-medium">Notice:</span> This version has been permanently retired and locked via mandatory update to ensure platform stability and security. It is no longer available for download.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* FLOATING CTA */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <button
          onClick={handleDownload}
          className="bg-[#05070f]/80 backdrop-blur-xl border border-white/10 text-white px-2 py-2 rounded-full shadow-2xl flex items-center gap-4 hover:scale-105 transition"
        >
          <span className="bg-purple-600 px-6 py-2.5 rounded-full font-semibold text-sm shadow-[0_0_15px_rgba(168,85,247,0.5)]">
            Download V2 Free
          </span>
        </button>
      </div>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 pb-28 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} PrimeFlix. Powered by V2 Architecture.
      </footer>

    </main>
  );
}