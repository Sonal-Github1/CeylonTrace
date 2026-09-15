// frontend/app/user/page.tsx

"use client";

import { useState } from 'react';
import Navbar from '../components/Navbar';
import { MapPin, Calendar, Compass, FileText, Route, Plus, ExternalLink } from 'lucide-react';

export default function UserDashboardPage() {
  const [activeTab, setActiveTab] = useState<'trips' | 'routes' | 'notes'>('trips');

  // Authenticated User Profile Data
  const user = {
    name: 'Kurukulasuriya Sonal Anjana Fernando',
    location: 'Negombo, Sri Lanka',
    joinDate: 'May 2026',
    avatarText: 'KS',
  };

  // Mock Data for User's Previous Trips, Routes, and Notes
  const previousTrips = [
    {
      id: 1,
      title: 'Cultural Triangle Expedition',
      date: 'August 2026',
      duration: '5 Days',
      route: 'Colombo → Sigiriya → Kandy → Anuradhapura',
      summary: 'Explored ancient rock fortresses, sacred temples, and historical ruins with friends.',
    },
    {
      id: 2,
      title: 'Southern Coastal Escape',
      date: 'June 2026',
      duration: '4 Days',
      route: 'Galle Fort → Mirissa → Yala National Park',
      summary: 'Enjoyed coastal sunset views, whale watching, and a thrilling safari tour.',
    },
  ];

  const savedRoutes = [
    {
      id: 1,
      name: 'Scenic Hill Country Train Route',
      waypoints: 'Kandy to Ella via Nuwara Eliya',
      distance: '160 km',
      estimatedTime: '6.5 Hours',
    },
    {
      id: 2,
      name: 'Western Province Coastal Cruise',
      waypoints: 'Negombo to Bentota via Colombo',
      distance: '95 km',
      estimatedTime: '2.5 Hours',
    },
  ];

  const travelNotes = [
    {
      id: 1,
      title: 'Sigiriya Climb Tips',
      date: 'Aug 14, 2026',
      snippet: 'Start early around 6:30 AM to beat the mid-day heat and large tour crowds. Carry at least 1.5L of water.',
    },
    {
      id: 2,
      title: 'Best Local Eateries in Kandy',
      date: 'Aug 10, 2026',
      snippet: 'Try the traditional rice and curry spots near the central market. Look for organic clay pot cooking.',
    },
  ];

  return (
    <main className="min-h-screen text-[#2A211C] relative bg-[#FBF9F5] flex flex-col">
      <Navbar />

      {/* Main Container with pt-44 to clear fixed navbar */}
      <div className="relative z-10 flex-1 max-w-5xl mx-auto w-full px-6 pt-44 pb-16">
        
        {/* Profile Banner Card */}
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-amber-900/10 mb-8 flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div className="w-24 h-24 rounded-full bg-[#1B3B2B] text-white flex items-center justify-center text-2xl font-serif font-bold shadow-md shrink-0">
            {user.avatarText}
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[#1B3B2B] mb-1">
              {user.name}
            </h1>
            <p className="text-sm text-gray-600 font-medium mb-3 flex items-center justify-center sm:justify-start gap-1.5">
              <MapPin className="w-4 h-4 text-[#C29B38]" /> {user.location}
            </p>
            <div className="flex items-center justify-center sm:justify-start gap-4 text-xs font-semibold text-gray-500">
              <span className="flex items-center gap-1 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-200">
                <Calendar className="w-3.5 h-3.5 text-[#C29B38]" /> Member since {user.joinDate}
              </span>
            </div>
          </div>
        </div>

        {/* Dashboard Navigation Tabs */}
        <div className="flex border-b border-amber-900/10 mb-8 space-x-8">
          <button
            onClick={() => setActiveTab('trips')}
            className={`pb-3 text-sm font-bold transition flex items-center gap-2 border-b-2 ${
              activeTab === 'trips'
                ? 'border-[#C29B38] text-[#1B3B2B]'
                : 'border-transparent text-gray-400 hover:text-gray-700'
            }`}
          >
            <Compass className="w-4 h-4" /> Previous Trips
          </button>
          <button
            onClick={() => setActiveTab('routes')}
            className={`pb-3 text-sm font-bold transition flex items-center gap-2 border-b-2 ${
              activeTab === 'routes'
                ? 'border-[#C29B38] text-[#1B3B2B]'
                : 'border-transparent text-gray-400 hover:text-gray-700'
            }`}
          >
            <Route className="w-4 h-4" /> Saved Routes
          </button>
          <button
            onClick={() => setActiveTab('notes')}
            className={`pb-3 text-sm font-bold transition flex items-center gap-2 border-b-2 ${
              activeTab === 'notes'
                ? 'border-[#C29B38] text-[#1B3B2B]'
                : 'border-transparent text-gray-400 hover:text-gray-700'
            }`}
          >
            <FileText className="w-4 h-4" /> Travel Notes
          </button>
        </div>

        {/* Tab Content Display */}
        <div className="space-y-4">
          
          {/* Previous Trips Tab */}
          {activeTab === 'trips' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-serif font-bold text-xl text-[#1B3B2B]">Travel History</h3>
                <button className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#C29B38] text-white text-xs font-semibold hover:bg-[#A9832A] transition shadow-sm">
                  <Plus className="w-3.5 h-3.5" /> Log New Trip
                </button>
              </div>

              {previousTrips.map((trip) => (
                <div key={trip.id} className="bg-white rounded-2xl p-6 shadow-md border border-amber-900/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <h4 className="font-serif font-bold text-base text-[#1B3B2B]">{trip.title}</h4>
                      <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-2.5 py-0.5 rounded-full">{trip.duration}</span>
                    </div>
                    <p className="text-xs text-[#C29B38] font-semibold flex items-center gap-1">
                      <Route className="w-3.5 h-3.5" /> {trip.route}
                    </p>
                    <p className="text-xs text-gray-600 font-medium">{trip.summary}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-xs text-gray-400 block mb-2">{trip.date}</span>
                    <button className="px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-200 text-gray-700 text-xs font-semibold hover:bg-gray-100 transition">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Saved Routes Tab */}
          {activeTab === 'routes' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-serif font-bold text-xl text-[#1B3B2B]">Saved Itinerary Routes</h3>
                <button className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#C29B38] text-white text-xs font-semibold hover:bg-[#A9832A] transition shadow-sm">
                  <Plus className="w-3.5 h-3.5" /> Add Route
                </button>
              </div>

              {savedRoutes.map((route) => (
                <div key={route.id} className="bg-white rounded-2xl p-6 shadow-md border border-amber-900/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="space-y-1">
                    <h4 className="font-serif font-bold text-base text-[#1B3B2B]">{route.name}</h4>
                    <p className="text-xs text-gray-600 font-medium flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#C29B38]" /> {route.waypoints}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <span className="text-xs font-bold text-[#1B3B2B] block">{route.distance}</span>
                      <span className="text-[11px] text-gray-400">{route.estimatedTime}</span>
                    </div>
                    <button className="p-2 rounded-xl bg-gray-50 border border-gray-200 text-gray-700 hover:bg-gray-100 transition">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Travel Notes Tab */}
          {activeTab === 'notes' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-serif font-bold text-xl text-[#1B3B2B]">Personal Journal & Notes</h3>
                <button className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#C29B38] text-white text-xs font-semibold hover:bg-[#A9832A] transition shadow-sm">
                  <Plus className="w-3.5 h-3.5" /> New Note
                </button>
              </div>

              {travelNotes.map((note) => (
                <div key={note.id} className="bg-white rounded-2xl p-6 shadow-md border border-amber-900/10 space-y-2">
                  <div className="flex justify-between items-center">
                    <h4 className="font-serif font-bold text-base text-[#1B3B2B]">{note.title}</h4>
                    <span className="text-xs text-gray-400 font-medium">{note.date}</span>
                  </div>
                  <p className="text-xs text-gray-600 font-medium leading-relaxed">{note.snippet}</p>
                </div>
              ))}
            </div>
          )}

        </div>

      </div>
    </main>
  );
}