"use client";

import { useState } from 'react';
import Navbar from '../components/Navbar';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';

export default function ProfilePage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(isLogin ? { email, password } : { name, email, password });
  };

  return (
    <main className="min-h-screen text-[#2A211C] relative bg-[#FBF9F5] flex flex-col">
      <Navbar />

      {/* Main Auth Container with pt-44 to clear fixed navbar */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-6 pt-44 pb-16">
        <div className="w-full max-w-md bg-white p-8 sm:p-10 rounded-3xl shadow-xl border border-amber-900/10">
          
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#1B3B2B] mb-2">
              {isLogin ? 'Welcome Back' : 'Join CeylonWise'}
            </h1>
            <p className="text-xs sm:text-sm text-gray-600 font-medium">
              {isLogin ? 'Sign in to access your saved itineraries' : 'Create an account to start planning your journey'}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1B3B2B] mb-1">Full Name</label>
                <div className="flex items-center bg-white/60 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/50 shadow-inner">
                  <User className="w-5 h-5 text-[#C29B38] mr-3" />
                  <input 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Sonal Fernando"
                    required
                    className="w-full bg-transparent text-gray-900 focus:outline-none text-sm font-medium placeholder:text-gray-400"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#1B3B2B] mb-1">Email Address</label>
              <div className="flex items-center bg-white/60 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/50 shadow-inner">
                <Mail className="w-5 h-5 text-[#C29B38] mr-3" />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  required
                  className="w-full bg-transparent text-gray-900 focus:outline-none text-sm font-medium placeholder:text-gray-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#1B3B2B] mb-1">Password</label>
              <div className="flex items-center bg-white/60 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/50 shadow-inner">
                <Lock className="w-5 h-5 text-[#C29B38] mr-3" />
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full bg-transparent text-gray-900 focus:outline-none text-sm font-medium placeholder:text-gray-400"
                />
              </div>
            </div>

            <button 
              type="submit"
              className="w-full mt-2 bg-[#C29B38] text-white py-3.5 rounded-xl font-semibold hover:bg-[#A9832A] transition shadow-lg flex items-center justify-center space-x-2"
            >
              <span>{isLogin ? 'Sign In' : 'Create Account'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Toggle Mode */}
          <div className="text-center mt-6 pt-4 border-t border-white/30">
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="text-xs sm:text-sm font-medium text-[#1B3B2B] hover:text-[#C29B38] transition"
            >
              {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
            </button>
          </div>
          {/* Social Login Separator */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-3 py-0.5 rounded-full text-gray-500 font-medium tracking-wider">
                Or continue with
              </span>
            </div>
          </div>

          {/* Social Buttons with Icons */}
          <div className="grid grid-cols-3 gap-3">
            {/* Google */}
            <button 
              type="button"
              className="flex items-center justify-center py-2.5 px-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition shadow-sm text-xs font-semibold text-gray-700 space-x-2"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
                <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.13 0-5.78-2.11-6.73-4.96H1.18v3.15C3.15 21.32 7.22 24 12 24z"/>
                <path fill="#FBBC05" d="M5.27 14.24c-.25-.72-.38-1.49-.38-2.24s.13-1.52.38-2.24V6.6H1.18C.43 8.13 0 9.87 0 11.7s.43 3.57 1.18 5.1l4.09-2.56z"/>
                <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.22 0 3.15 2.68 1.18 6.6l4.09 3.15c.95-2.85 3.6-4.96 6.73-4.96z"/>
              </svg>
              <span>Google</span>
            </button>

            {/* Facebook */}
            <button 
              type="button"
              className="flex items-center justify-center py-2.5 px-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition shadow-sm text-xs font-semibold text-gray-700 space-x-2"
            >
              <svg className="w-4 h-4 fill-[#1877F2]" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>Facebook</span>
            </button>

            {/* Apple */}
            <button 
              type="button"
              className="flex items-center justify-center py-2.5 px-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition shadow-sm text-xs font-semibold text-gray-700 space-x-2"
            >
              <svg className="w-4 h-4 fill-black" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.78c.64-.78 1.08-1.86.96-2.94-1.01.04-2.23.68-2.94 1.46-.6.64-1.13 1.72-1 2.76 1.13.09 2.29-.55 2.98-1.28z"/>
              </svg>
              <span>Apple</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}