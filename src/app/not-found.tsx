'use client';

import Link from 'next/link';
import { Power, AlertTriangle, ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 flex items-center justify-center px-4 py-20">
      <div className="max-w-2xl w-full text-center">
        {/* Technical Error Display */}
        <div className="relative mb-12">
          <div className="inline-flex items-center justify-center w-40 h-40 bg-gray-900 rounded-sm border-2 border-hv-red shadow-2xl shadow-hv-red/20 relative">
            <AlertTriangle className="text-hv-red animate-pulse" size={80} strokeWidth={1.5} />
            
            {/* Corner Markers */}
            <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-hv-yellow opacity-50"></div>
            <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-hv-yellow opacity-50"></div>
            <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-hv-yellow opacity-50"></div>
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-hv-yellow opacity-50"></div>
          </div>

          {/* Status Badge */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-hv-red text-black px-6 py-2 font-mono font-bold text-sm tracking-wider border border-black shadow-lg">
            ERROR 404
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Page Not Found
          </h1>
          <p className="text-gray-400 text-lg max-w-lg mx-auto leading-relaxed">
            The requested resource does not exist in our system. The URL may be incorrect or the page has been removed.
          </p>
        </div>

        {/* Technical Details */}
        <div className="bg-gray-900 border border-gray-800 rounded-sm p-6 mb-10 font-mono text-xs text-left">
          <div className="flex justify-between items-center mb-2 pb-2 border-b border-gray-800">
            <span className="text-gray-500 uppercase tracking-wider">System Status</span>
            <span className="flex items-center gap-2 text-hv-red">
              <div className="w-2 h-2 bg-hv-red rounded-full animate-pulse"></div>
              ERROR
            </span>
          </div>
          <div className="space-y-1 text-gray-400">
            <div className="flex justify-between">
              <span>Error Code:</span>
              <span className="text-hv-red font-bold">404</span>
            </div>
            <div className="flex justify-between">
              <span>Status:</span>
              <span>NOT_FOUND</span>
            </div>
            <div className="flex justify-between">
              <span>Module:</span>
              <span className="text-hv-yellow">ROUTING_ENGINE</span>
            </div>
          </div>
        </div>

        {/* Navigation Options */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="group inline-flex items-center gap-3 bg-hv-yellow text-black px-8 py-4 font-bold text-sm uppercase tracking-wider hover:bg-yellow-400 transition-all shadow-lg hover:shadow-hv-yellow/50 border-b-4 border-yellow-600 hover:border-yellow-700"
          >
            <Home size={20} />
            Return Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="group inline-flex items-center gap-3 bg-gray-800 text-gray-300 px-8 py-4 font-bold text-sm uppercase tracking-wider hover:bg-gray-700 hover:text-white transition-all border border-gray-700 hover:border-gray-600"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </div>

        {/* Quick Links */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <p className="text-gray-500 text-xs uppercase tracking-widest mb-4 font-bold">Quick Navigation</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/" className="text-gray-400 hover:text-hv-yellow transition-colors underline">
              Home
            </Link>
            <Link href="/programmable-high-voltage-dc-supply-600v-1000v" className="text-gray-400 hover:text-hv-yellow transition-colors underline">
              Selection Guide
            </Link>
            <Link href="/high-voltage-variable-dc-technology-safety" className="text-gray-400 hover:text-hv-yellow transition-colors underline">
              Tech & Safety
            </Link>
            <Link href="/hv-dc-power-supply-applications-capacitor-charging" className="text-gray-400 hover:text-hv-yellow transition-colors underline">
              Applications
            </Link>
          </div>
        </div>

        {/* Logo */}
        <div className="mt-12 flex items-center justify-center gap-3 opacity-50">
          <div className="w-8 h-8 bg-gray-900 flex items-center justify-center rounded-sm border border-gray-700">
            <Power className="text-gray-600" size={16} />
          </div>
          <span className="text-gray-600 font-black text-lg tracking-tighter uppercase font-mono">
            HighVolt<span className="text-gray-700">.SYS</span>
          </span>
        </div>
      </div>
    </div>
  );
}
