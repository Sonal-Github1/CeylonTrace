// frontend/app/destinations/page.tsx

"use client";

import Navbar from '../components/Navbar';
import { MapPin, Compass, ArrowRight } from 'lucide-react';

export default function DestinationsPage() {
  const destinations = [
    {
      id: 1,
      name: 'Sigiriya & The Cultural Triangle',
      category: 'Ancient Heritage',
      region: 'Central Province',
      description: 'Home to the iconic ancient rock fortress, magnificent frescoes, and sweeping panoramic views of surrounding lush jungles.',
      highlights: ['Lion Rock', 'Pidurangala', 'Ancient Frescoes'],
    },
    {
      id: 2,
      name: 'Ella & The Hill Country',
      category: 'Nature & Highlands',
      region: 'Uva Province',
      description: 'A misty mountain village surrounded by emerald tea plantations, cascading waterfalls, and the legendary Nine Arch Bridge.',
      highlights: ['Nine Arch Bridge', 'Little Adam’s Peak', 'Ravana Falls'],
    },
    {
      id: 3,
      name: 'Galle Fort & The Southern Coast',
      category: 'Coastal & History',
      region: 'Southern Province',
      description: 'A 17th-century UNESCO World Heritage Dutch colonial fort filled with boutique cafes, artisan shops, and stunning ocean ramparts.',
      highlights: ['Dutch Fort Ramparts', 'Mirissa Whale Watching', 'Unawatuna Beach'],
    },
    {
      id: 4,
      name: 'Kandy & The Sacred City',
      category: 'Culture & Spirituality',
      region: 'Central Province',
      description: 'The cultural capital nestled around a serene lake, famous for housing the sacred Temple of the Tooth Relic.',
      highlights: ['Temple of the Tooth', 'Kandy Lake', 'Royal Botanical Gardens'],
    },
  ];

  return (
    <main className="min-h-screen text-[#2A211C] relative bg-[#FBF9F5] flex flex-col">
      <Navbar />

      {/* Main Container with pt-44 to clear fixed navbar */}
      <div className="relative z-10 flex-1 max-w-6xl mx-auto w-full px-6 pt-44 pb-16 space-y-10">
        
        {/* Header Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[#1B3B2B] font-bold">
            CEYLONWISE DESTINATIONS
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#1B3B2B] tracking-tight">
            Explore Iconic Sri Lankan Wonders
          </h1>
          <p className="text-sm sm:text-base text-gray-600 font-medium leading-relaxed">
            From misty highland mountains to ancient historical fortresses and sun-kissed coastlines, discover the island’s most breathtaking locations.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          {destinations.map((dest) => (
            <div 
              key={dest.id} 
              className="bg-white rounded-3xl p-8 shadow-xl border border-amber-900/10 flex flex-col justify-between space-y-6 hover:shadow-2xl transition"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-[11px] font-bold bg-amber-50 text-[#C29B38] px-3 py-1 rounded-full border border-amber-100 uppercase tracking-wider">
                    {dest.category}
                  </span>
                  <span className="text-xs text-gray-400 font-medium flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#C29B38]" /> {dest.region}
                  </span>
                </div>

                <h3 className="text-2xl font-serif font-bold text-[#1B3B2B]">
                  {dest.name}
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 font-medium leading-relaxed">
                  {dest.description}
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-gray-100">
                <div className="flex flex-wrap gap-2">
                  {dest.highlights.map((highlight, index) => (
                    <span 
                      key={index} 
                      className="text-[11px] bg-gray-50 text-gray-700 font-semibold px-2.5 py-1 rounded-lg border border-gray-200"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#1B3B2B] text-white text-xs font-semibold hover:bg-[#132a1e] transition shadow-sm">
                  <span>View Itinerary Routes</span>
                  <ArrowRight className="w-4 h-4 text-[#C29B38]" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}