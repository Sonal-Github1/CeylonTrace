// frontend/app/about/page.tsx

"use client";

import Navbar from '../components/Navbar';
import { Compass, Sparkles, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen text-[#2A211C] relative bg-[#FBF9F5] flex flex-col">
      <Navbar />

      {/* Main Container with pt-44 to clear fixed navbar */}
      <div className="relative z-10 flex-1 max-w-5xl mx-auto w-full px-6 pt-44 pb-16 space-y-12">
        
        {/* Header Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[#1B3B2B] font-bold">
            ABOUT CEYLONWISE
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#1B3B2B] tracking-tight">
            Discovering Sri Lanka, Authentically
          </h1>
          <p className="text-sm sm:text-base text-gray-600 font-medium leading-relaxed">
            CeylonWise is your intelligent travel companion, designed to craft bespoke itineraries that blend ancient heritage, breathtaking landscapes, and unforgettable modern journeys.
          </p>
        </div>

        {/* Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-amber-900/10 space-y-4 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#C29B38] flex items-center justify-center text-xl font-bold mb-4 shadow-sm border border-amber-100">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-xl text-[#1B3B2B] mb-2">Curated Routes</h3>
              <p className="text-xs text-gray-600 font-medium leading-relaxed">
                Smart recommendations tailored precisely to your group style, pace, and unique travel preferences across the island.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl border border-amber-900/10 space-y-4 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#C29B38] flex items-center justify-center text-xl font-bold mb-4 shadow-sm border border-amber-100">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-xl text-[#1B3B2B] mb-2">Local Insights</h3>
              <p className="text-xs text-gray-600 font-medium leading-relaxed">
                Uncover hidden culinary gems, scenic highland train routes, and timeless cultural landmarks recommended by locals.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl border border-amber-900/10 space-y-4 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#C29B38] flex items-center justify-center text-xl font-bold mb-4 shadow-sm border border-amber-100">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-xl text-[#1B3B2B] mb-2">Seamless Planning</h3>
              <p className="text-xs text-gray-600 font-medium leading-relaxed">
                Keep your past adventures, favorite waypoints, and personal journal notes structured neatly in your own travel dashboard.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Statement Box */}
        <div className="bg-[#1B3B2B] text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold">Ready to Start Your Journey?</h2>
            <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-medium">
              Whether you are planning a relaxing coastal escape or an adventurous expedition through the cultural triangle, CeylonWise brings your ideal trip to life.
            </p>
          </div>
          <a 
            href="/"
            className="px-6 py-3.5 rounded-xl bg-[#C29B38] text-white font-semibold text-xs uppercase tracking-wider hover:bg-[#A9832A] transition shadow-lg shrink-0"
          >
            Explore Itineraries
          </a>
        </div>

      </div>
    </main>
  );
}