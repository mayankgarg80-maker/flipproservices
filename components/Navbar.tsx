"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">FP</span>
            </div>
            <span className="font-bold text-xl text-gray-900">FlipPro</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="text-gray-600 hover:text-blue-600 transition">
              Services
            </Link>
            <Link href="#features" className="text-gray-600 hover:text-blue-600 transition">
              Features
            </Link>
            <Link href="#pricing" className="text-gray-600 hover:text-blue-600 transition">
              Pricing
            </Link>
            <Link href="/contact" className="btn-primary">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="#services" className="block text-gray-600 hover:text-blue-600 py-2">
              Services
            </Link>
            <Link href="#features" className="block text-gray-600 hover:text-blue-600 py-2">
              Features
            </Link>
            <Link href="#pricing" className="block text-gray-600 hover:text-blue-600 py-2">
              Pricing
            </Link>
            <Link href="/contact" className="block btn-primary text-center">
              Get Started
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
