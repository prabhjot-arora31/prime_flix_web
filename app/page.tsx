"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  // NEW: Add state to track the form
  const [waitlistStatus, setWaitlistStatus] = useState("idle"); // 'idle' | 'loading' | 'success'

  // NEW: The function that handles the silent submission
  const handleWaitlistSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Stops the page from redirecting
    setWaitlistStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setWaitlistStatus("success"); // Triggers the success UI
      } else {
        setWaitlistStatus("idle");
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      setWaitlistStatus("idle");
      alert("Network error. Please check your connection.");
    }
  };
  return (
    <main className="min-h-screen bg-[#0a0f1c] text-slate-50 selection:bg-blue-500/30 overflow-x-hidden">
      
      
      {/* 1. CINEMATIC VIDEO HERO SECTION */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover scale-105"
          src="/videos/hero-bg.mp4" /* Make sure this is in your public folder */
        />
        
        {/* Gradient Overlays for Readability and Blending into next section */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1c]/40 via-[#0a0f1c]/60 to-[#0a0f1c] z-10" />
        <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay z-10" />

        {/* Hero Content */}
        <div className="relative z-20 flex flex-col items-center text-center px-4 max-w-4xl mt-12">
          <div className="backdrop-blur-md bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-sm font-medium text-blue-400 mb-8 uppercase tracking-widest shadow-2xl">
            The New Standard in Streaming
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 drop-shadow-2xl">
            Stream <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Without Limits.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 font-light mb-12 max-w-2xl drop-shadow-lg">
            Crystal clear HLS & MP4 playback, immersive themes, and smart subtitles. The ultimate cinematic experience, right in your pocket.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 items-center">
            {/* Android Download - Primary */}
            <a 
              href="/primeflix-latest.apk" 
              download
              className="relative group overflow-hidden bg-blue-600 text-white font-bold py-4 px-10 rounded-full text-lg shadow-[0_0_40px_rgba(37,99,235,0.5)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_rgba(37,99,235,0.7)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-3">
                
                {/* CORRECTED SVG: Bold, Solid Download Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                </svg>

                Download for Android
              </span>
            </a>
          </div>
          <p className="mt-6 text-sm text-slate-500 font-medium tracking-wide">Version 1.0.0 • 100% Free • No Sign-Up Required</p>
        </div>
      </section>

      {/* 2. THE LANDSCAPE PLAYER SHOWCASE */}
      <section className="relative z-30 -mt-32 md:-mt-48 px-4 max-w-6xl mx-auto flex justify-center">
        <div className="w-full bg-slate-900 rounded-[2rem] md:rounded-[4rem] border border-slate-700/50 p-2 md:p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform hover:-translate-y-2 transition-transform duration-500">
          <div className="relative w-full h-[250px] md:h-[600px] rounded-[1.5rem] md:rounded-[3rem] overflow-hidden">
            <Image 
              src="/images/fourth.jpeg" 
              alt="PrimeFlix Video Player" 
              fill
              className="object-cover"
              priority
            />
            {/* Fake Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group cursor-pointer">
              <div className="w-20 h-20 rounded-full bg-blue-600/80 backdrop-blur-md flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.5)] border border-white/20">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 ml-1 text-white"><path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" /></svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ASYMMETRIC BENTO GRID FEATURES */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Engineered for <span className="text-blue-500">Binge-Watching.</span></h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">Every pixel and line of code is optimized to deliver a buffer-free, highly customizable viewing experience.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Bento Box 4: Portrait Gallery Mini-Showcase */}
          <div className="col-span-1 lg:col-span-2 bg-slate-900 border border-slate-700/50 p-6 rounded-3xl flex items-center justify-center gap-4 overflow-hidden">
             <div className="relative w-1/3 h-[300px] rounded-xl overflow-hidden transform rotate-[-5deg] scale-110 shadow-xl border-4 border-slate-800">
               <Image src="/images/first.jpeg" alt="UI Screen 1" fill className="object-cover" />
             </div>
             
             <div className="relative w-1/3 h-[350px] rounded-xl overflow-hidden shadow-2xl z-10 border-4 border-slate-800">
               <Image src="/images/second.jpeg" alt="UI Screen 2" fill className="object-cover" />
             </div>
             
             <div className="relative w-1/3 h-[300px] rounded-xl overflow-hidden transform rotate-[5deg] scale-110 shadow-xl border-4 border-slate-800">
               <Image src="/images/third.jpeg" alt="UI Screen 3" fill className="object-cover" />
             </div>
          </div>

          {/* Bento Box 2: Subtitles */}
          <div className="col-span-1 bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 p-10 rounded-3xl flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 text-blue-400">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" /></svg>
            </div>
            <h3 className="text-2xl font-bold mb-3">Smart Subtitles</h3>
            <p className="text-slate-400">Integrated multi-language subtitle support. Never miss a single line of dialogue.</p>
          </div>

          {/* Bento Box 3: Themes (Cut-off Bottom Left) */}
          <div className="col-span-1 bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 p-10 rounded-3xl rounded-bl-[5rem]">
            <h3 className="text-2xl font-bold mb-3">Your App. Your Look.</h3>
            <p className="text-slate-400">Switch it up with customizable dynamic themes. Match your mood or save your battery with true dark mode.</p>
          </div>

          {/* Bento Box 4: Portrait Gallery Mini-Showcase */}
          <div className="col-span-1 lg:col-span-2 bg-slate-900 border border-slate-700/50 p-6 rounded-3xl flex items-center justify-center gap-4 overflow-hidden">
             <div className="relative w-1/3 h-[300px] rounded-xl overflow-hidden transform rotate-[-5deg] scale-110 shadow-xl border-4 border-slate-800"><Image src="/images/fifth.jpeg" alt="UI" fill className="object-cover" /></div>
             <div className="relative w-1/3 h-[350px] rounded-xl overflow-hidden shadow-2xl z-10 border-4 border-slate-800"><Image src="/images/sixth.jpeg" alt="UI" fill className="object-cover" /></div>
             <div className="relative w-1/3 h-[300px] rounded-xl overflow-hidden transform rotate-[5deg] scale-110 shadow-xl border-4 border-slate-800"><Image src="/images/seventh.jpeg" alt="UI" fill className="object-cover" /></div>
          </div>
        </div>
      </section>
{/* 4. THE iOS "COMING SOON" & COMMUNITY SECTION */}
      <section className="py-24 relative overflow-hidden">
        {/* Sleek background split */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1c] to-slate-900" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[100px]" />
        
        {/* Main Glassmorphic Wrapper */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between bg-white/[0.02] border border-white/10 p-12 rounded-[3rem] backdrop-blur-2xl shadow-2xl">
          
          {/* LEFT SIDE: Text & Telegram Button */}
          <div className="text-left mb-10 md:mb-0 max-w-lg">
            <div className="flex items-center gap-3 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="w-10 h-10 fill-slate-200"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
              <span className="px-4 py-1.5 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider border border-white/10">Coming Soon</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">PrimeFlix for iOS.</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              The ultimate streaming experience is breaking free. We're finalizing the direct <span className="text-white font-mono bg-white/10 px-2 py-0.5 rounded">.ipa</span> release so you can bypass the restrictions and install straight to your device. 
            </p>
            
            {/* Telegram Button */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-sm text-slate-400 mb-4 uppercase tracking-widest font-semibold">Join the Community</p>
              <a 
                href="https://t.me/PrimeFlixStream" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#2AABEE]/10 border border-[#2AABEE]/30 hover:bg-[#2AABEE]/20 hover:border-[#2AABEE]/60 text-white px-6 py-3 rounded-xl transition-all duration-300 group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className="w-6 h-6 fill-[#2AABEE] group-hover:scale-110 transition-transform">
                  <path d="M248 8C111.033 8 0 119.033 0 256s111.033 248 248 248 248-111.033 248-248S384.967 8 248 8Zm114.952 168.66c-3.732 39.215-19.881 134.378-28.1 178.3-3.476 18.584-10.322 24.816-16.948 25.425-14.4 1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25 5.342-39.5 3.652-3.793 67.107-61.51 68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.84-5.106-.5q-3.283.746-104.608 69.142-14.845 10.194-26.894 9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7 18.45-13.7 108.446-47.248 144.628-62.3c68.872-28.647 83.183-33.623 92.511-33.789 2.052-.034 6.639.474 9.61 2.885a10.452 10.452 0 0 1 3.53 6.716 43.765 43.765 0 0 1 .417 9.769Z"/>
                </svg>
                <span className="font-semibold text-[#2AABEE]">Get Updates on Telegram</span>
              </a>
            </div>
          </div>
          
          {/* RIGHT SIDE: MailerLite Email Capture */}
          <div className="relative w-full md:w-auto flex justify-center mt-8 md:mt-0">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl text-center shadow-[0_0_40px_rgba(0,0,0,0.3)]">
              <p className="text-slate-300 font-medium mb-2">Get the .ipa the second it drops.</p>
              <p className="text-xs text-slate-500 mb-6">Join the VIP waitlist. No spam, ever.</p>
              
              {/* MAILERLITE FORM & SUCCESS STATE */}
              {waitlistStatus === "success" ? (
                // THE SUCCESS UI (What users see after clicking)
                <div className="bg-green-500/10 border border-green-500/30 p-6 rounded-2xl text-center animate-fade-in">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-green-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h4 className="text-white font-bold text-lg mb-1">You're on the list!</h4>
                  <p className="text-green-200/80 text-sm">We'll notify you the second the .ipa drops.</p>
                </div>
              ) : (
                // THE ACTUAL FORM (Notice the onSubmit instead of target="_blank")
                <form 
                  action="https://assets.mailerlite.com/jsonp/2147671/forms/180559751191462957/subscribe" 
                  onSubmit={handleWaitlistSubmit}
                  className="flex flex-col gap-3"
                >
                  <input type="hidden" name="ml-submit" value="1" />
                  <input type="hidden" name="anticsrf" value="true" />

                  <input 
                    type="email" 
                    name="fields[email]" 
                    required
                    placeholder="Enter your best email" 
                    className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors w-full md:w-72 disabled:opacity-50" 
                    disabled={waitlistStatus === "loading"}
                  />
                  <button 
                    type="submit" 
                    disabled={waitlistStatus === "loading"}
                    className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3 rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] cursor-pointer disabled:opacity-70 flex justify-center items-center"
                  >
                    {waitlistStatus === "loading" ? (
                      // A tiny loading spinner inside the button
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    ) : (
                      "Join Waitlist"
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>
          
        </div>
      </section>
      {/* FOOTER */}
      <footer className="w-full border-t border-slate-800 py-10 text-center text-slate-500">
        <p>© 2026 PrimeFlix. All rights reserved.</p>
        <div className="flex justify-center gap-6 mt-4 text-sm">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </footer>

    </main>
  );
}