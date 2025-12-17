'use client';
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-gray-200 h-16">
      <div className="relative h-full flex items-center">
        {/* Solid white background behind diagonal (prevents transparency) */}
        <div
          className="absolute left-0 top-0 h-full"
          style={{
            width: '120px',
            background: '#000000',
            zIndex: 5,
          }}
        />
        {/* Logo Section - White with diagonal cut */}
        <div
          className="h-full flex items-center pl-4 pr-4 bg-white z-10"
          style={{
            width: '120px', // fixed width for logo section
            clipPath: 'polygon(0 0, 100% 0, 70% 100%, 0% 100%)',
          }}
        >
          {/* Replace with your logo image */}
          <img src="/Assets/pro.png" alt="Logo" className="h-16 w-auto" />
        </div>
        {/* Menu Section - Black, fills the rest */}
        <div className="flex-1 h-full flex items-center justify-end md:justify-between px-6 bg-black relative">
          <div className="hidden md:flex gap-8">
            <a href="#about" className="text-white hover:text-blue-400 transition-colors">About</a>
            <a href="#services" className="text-white hover:text-blue-400 transition-colors">Services</a>
            <a href="#process" className="text-white hover:text-blue-400 transition-colors">Process</a>
            <a href="#testimonials" className="text-white hover:text-blue-400 transition-colors">Testimonials</a>
            <a href="#contact" className="text-white hover:text-blue-400 transition-colors">Contact</a>
          </div>
          <button className="px-6 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-[9px] transition-all hover:shadow-lg hover:shadow-blue-500/50 hidden md:block">
            Get Started
          </button>
          {/* Hamburger Icon */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open Menu"
          >
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          {/* Mobile Menu - positioned inside black section */}
          {menuOpen && (
            <div className="md:hidden bg-black/90 px-6 pb-4 pt-2 flex flex-col gap-4 absolute top-full right-0 z-50">
              <a href="#about" className="hover:text-blue-400 transition-colors" onClick={() => setMenuOpen(false)}>About</a>
              <a href="#services" className="hover:text-blue-400 transition-colors" onClick={() => setMenuOpen(false)}>Services</a>
              <a href="#process" className="hover:text-blue-400 transition-colors" onClick={() => setMenuOpen(false)}>Process</a>
              <a href="#testimonials" className="hover:text-blue-400 transition-colors" onClick={() => setMenuOpen(false)}>Testimonials</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors" onClick={() => setMenuOpen(false)}>Contact</a>
              <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-[9px] transition-all hover:shadow-lg hover:shadow-blue-500/50">
                Get Started
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}