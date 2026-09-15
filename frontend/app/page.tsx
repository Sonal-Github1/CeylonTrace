"use client";

import { useState } from 'react';
import Navbar from './components/Navbar';

export default function Home() {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [itinerary, setItinerary] = useState<any>(null);

  const handleGenerate = async () => {
    if (!prompt) return;
    setLoading(true);
    try {
      const response = await fetch('http://localhost:8000/api/recommend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt, groupType: 'Friends & Group', budgetLevel: 3 }),
      });
      const data = await response.json();
      setItinerary(data.optimizedItinerary);
    } catch (error) {
      console.error('Failed to connect to Python backend:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#2A211C] relative overflow-hidden">
      <Navbar />
      
      <div 
  className="relative min-h-[92vh] flex flex-col justify-between pt-50 pb-8 px-6 sm:px-12 lg:px-20 bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: `url('/images/banner2.jpg')` }}
>
  <div className="max-w-4xl z-10 mt-4">
    <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[#1B3B2B] font-bold mb-2">
      DISCOVER THE TIMELESS BEAUTY OF
    </p>
    <h1 className="text-6xl sm:text-7xl lg:text-8xl font-serif text-[#1B3B2B] mb-3 tracking-tight font-normal">
      Sri Lanka
    </h1>
    <p className="text-base sm:text-lg text-white max-w-xl mb-6 font-medium leading-relaxed drop-shadow-md">
    Ancient heritage. Breathtaking landscapes. Unforgettable journeys.
    </p>
    
    {/* Pill Search Input */}
    <div className="flex items-center bg-white rounded-full p-2 shadow-xl max-w-xl border border-amber-900/10">
      <span className="pl-4 text-[#C29B38] text-lg">📍</span>
      <input 
        type="text" 
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Where do you want to go?" 
        className="w-full px-4 text-gray-900 focus:outline-none bg-transparent text-sm sm:text-base placeholder:text-gray-400 font-medium"
      />
      <button 
        onClick={handleGenerate}
        disabled={loading}
        className="bg-[#b47a1e] text-white w-12 h-12 rounded-full font-medium hover:bg-[#966316] transition shadow-md disabled:opacity-50 flex items-center justify-center text-lg"
      >
        {loading ? '...' : '→'}
      </button>
    </div>
  </div>

  {/* Bottom Feature Highlights Bar with Lighter Frosted Look */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-white/30 max-w-7xl mx-auto w-full mt-8 z-10">
  <div className="flex items-center space-x-3 p-4 rounded-2xl bg-white/40 backdrop-blur-md border border-white/40 shadow-md">
    <div className="text-2xl text-[#C29B38]">🏛️</div>
    <div>
      <h4 className="font-bold text-xs sm:text-sm text-[#1B3B2B]">Rich Culture</h4>
      <p className="text-[11px] text-gray-800 font-medium">& Heritage</p>
    </div>
  </div>
  <div className="flex items-center space-x-3 p-4 rounded-2xl bg-white/40 backdrop-blur-md border border-white/40 shadow-md">
    <div className="text-2xl text-[#C29B38]">🏔️</div>
    <div>
      <h4 className="font-bold text-xs sm:text-sm text-[#1B3B2B]">Stunning Landscapes</h4>
      <p className="text-[11px] text-gray-800 font-medium">& Nature</p>
    </div>
  </div>
  <div className="flex items-center space-x-3 p-4 rounded-2xl bg-white/40 backdrop-blur-md border border-white/40 shadow-md">
    <div className="text-2xl text-[#C29B38]">🧭</div>
    <div>
      <h4 className="font-bold text-xs sm:text-sm text-[#1B3B2B]">Curated Travel</h4>
      <p className="text-[11px] text-gray-800 font-medium">Guides</p>
    </div>
  </div>
  <div className="flex items-center space-x-3 p-4 rounded-2xl bg-white/40 backdrop-blur-md border border-white/40 shadow-md">
    <div className="text-2xl text-[#C29B38]">🌿</div>
    <div>
      <h4 className="font-bold text-xs sm:text-sm text-[#1B3B2B]">Local Insights</h4>
      <p className="text-[11px] text-gray-800 font-medium">& Tips</p>
    </div>
  </div>
</div>
</div>
{/* Future Content Section Placeholder */}
      <section className="py-20 px-6 sm:px-12 lg:px-20 bg-[#FBF9F5] min-h-[50vh]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-[#1B3B2B] mb-4">Explore Popular Destinations</h2>
          <p className="text-gray-600">More sections and curated content can be added right here below the hero view...</p>
        </div>
      </section>
    </main>
  );
}