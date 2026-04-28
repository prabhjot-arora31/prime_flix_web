"use client";

import { useState } from "react";
import { ScreenshotCarousel } from "./ScreenshotCarousel";

export default function Home() {
  const [waitlistStatus, setWaitlistStatus] = useState("idle");

  const handleWaitlistSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setWaitlistStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) setWaitlistStatus("success");
      else throw new Error();
    } catch {
      setWaitlistStatus("idle");
      alert("Something went wrong.");
    }
  };
  const handleExploreClick = () => {
  const el = document.getElementById("features");
  if (!el) return;

  el.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

const handleDownload = () => {
  // future: analytics / tracking / versioning
  window.location.href = "https://github.com/prabhjot-arora31/primeflix_releases/releases/download/v1.1.0/primeflix-v1.1.0.apk";
};

  return (
    <main className="min-h-screen bg-[#05070f] text-white">

      {/* HERO */}
      <section className="px-6 pt-28 pb-20 text-center relative overflow-hidden">
       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/10 to-transparent blur-3xl pointer-events-none" />
        <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl mx-auto">
          Everything you watch.
          <br />
          <span className="text-purple-400">One place. No friction.</span>
        </h1>

        <p className="mt-6 text-slate-400 max-w-xl mx-auto text-sm md:text-base">
          Multi-audio. Subtitles. Downloads. Smart playback.  
          Built for speed, not complexity.
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
         <button
  onClick={handleDownload}
  className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
>
  Download APK
</button>

<button
  onClick={handleExploreClick}
  className="border border-white/20 px-6 py-3 rounded-full text-sm hover:bg-white/10 transition"
>
  Explore Features
</button>
        </div>
      </section>

      {/* CAROUSEL */}
      <ScreenshotCarousel />

      {/* FEATURES GRID */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-semibold text-center mb-16">
            Built for real usage. Not marketing.
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

            {[
              ["🎧 Multi Audio", "Switch languages instantly while watching."],
              ["💬 Subtitles", "Online subtitles always synced automatically."],
              ["📥 Unlimited Downloads", "Download anything. Watch anytime offline."],
              ["▶ Continue Watching", "Resume exactly where you left off."],
              ["⚙ Smart Preferences", "Set default audio & quality once."],
              ["🎬 Trailers on Home", "Preview content instantly."],
              ["👆 Gesture Controls", "Swipe for seek, volume & brightness."],
              ["🎭 Cast & Discovery", "Explore actors and related content."],
              ["🔔 Notifications", "Stay updated with new releases."],
            ].map(([title, desc], i) => (
              <div
                key={i}
                className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur hover:bg-white/10 transition"
              >
                <h3 className="font-semibold mb-2">{title}</h3>
                <p className="text-sm text-slate-400">{desc}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* PLATFORM SWITCH */}
      <section className="py-24 px-6 border-t border-white/10 text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Switch platforms instantly
        </h2>

        <p className="text-slate-400 max-w-2xl mx-auto">
          Access Netflix, Prime Video, Disney+ and more  
          without leaving the app.
        </p>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="py-24 px-6 border-t border-white/10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">

          <div>
            <h2 className="text-3xl font-semibold mb-4">
              Built for comfort
            </h2>

            <p className="text-slate-400">
              No repeated settings. No unnecessary taps.  
              Everything adapts to how you watch.
            </p>
          </div>

          <ul className="space-y-3 text-sm text-slate-300">
            <li>• Auto audio selection</li>
            <li>• Auto quality selection</li>
            <li>• Seamless resume playback</li>
            <li>• Clean player UI</li>
            <li>• Zero clutter experience</li>
          </ul>

        </div>
      </section>

      {/* WAITLIST */}
      {/* <section className="px-6 py-24">
        <div className="max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-10 text-center backdrop-blur">

          <h2 className="text-2xl font-semibold mb-4">
            iOS version coming soon
          </h2>

          <p className="text-slate-400 mb-8 text-sm">
            Join early access waitlist
          </p>

          {waitlistStatus === "success" ? (
            <p className="text-green-400 text-sm">
              You're in.
            </p>
          ) : (
            <form
              action="https://assets.mailerlite.com/jsonp/2147671/forms/180559751191462957/subscribe"
              onSubmit={handleWaitlistSubmit}
              className="flex flex-col md:flex-row gap-3 justify-center"
            >
              <input
                type="email"
                name="fields[email]"
                required
                placeholder="Email address"
                className="bg-black/40 border border-white/20 px-4 py-3 rounded-md text-sm w-full md:w-64"
              />

              <button
                type="submit"
                className="bg-white text-black px-6 py-3 rounded-md text-sm font-semibold"
              >
                {waitlistStatus === "loading" ? "Joining..." : "Join"}
              </button>
            </form>
          )}
        </div>
      </section> */}

      {/* FLOATING CTA */}
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50">
        <a
          href="https://github.com/prabhjot-arora31/primeflix_releases/releases/download/v1.1.0/primeflix-v1.1.0.apk"
          className="bg-white text-black px-6 py-3 rounded-full shadow-xl font-semibold hover:scale-105 transition"
        >
          Download App
        </a>
      </div>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} PrimeFlix
      </footer>

    </main>
  );
}