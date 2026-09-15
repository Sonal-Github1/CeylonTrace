import Link from 'next/link';
import Image from 'next/image';
import { Search, User } from 'lucide-react';

interface NavbarProps {
  onOpenSearch?: () => void;
}

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/25 backdrop-blur-md border-b border-white/20 py-4 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center -ml-6 space-x-1">
            <div className="w-[120px] h-[120px] relative flex items-center justify-center -mr-2">
              <Image 
                src="/images/logo.png" 
                alt="CeylonWise Logo" 
                width={150} 
                height={150} 
                className="object-contain w-full h-full"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-serif font-bold text-[#1F1714] tracking-tight leading-none">
                Ceylon<span className="text-[#C29B38]">Wise</span>
              </span>
              <span className="text-[10px] sm:text-xs tracking-[0.2em] text-[#1B3B2B] font-semibold uppercase mt-1">
                Explore • Experience • Sri Lanka
              </span>
            </div>
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-8 text-[#1F1714] font-medium text-sm lg:text-base">
          <Link href="/" className="text-[#C29B38] font-semibold border-b-2 border-[#C29B38] pb-1">Home</Link>
          <Link href="/destinations" className="hover:text-[#C29B38] transition">Destinations</Link>
          <Link href="/culture" className="hover:text-[#C29B38] transition">Culture</Link>
          <Link href="/travel-tips" className="hover:text-[#C29B38] transition">Travel Tips</Link>
          <Link href="/about" className="hover:text-[#C29B38] transition">About</Link>
          <button aria-label="Search" className="p-1 hover:text-[#C29B38] transition">
            <Search className="w-5 h-5 text-[#1F1714]" />
          </button>
          <Link href="/user" aria-label="User Profile" className="p-3.5 rounded-full bg-white/40 border border-white/40 hover:bg-sky-100 hover:text-sky-600 transition shadow-sm flex items-center justify-center">
              <User className="w-4 h-4 text-[#1F1714]" />
            </Link>
        </div>
      </div>
    </nav>
  );
}