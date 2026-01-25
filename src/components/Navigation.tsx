'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, AlertTriangle, Power, ExternalLink } from 'lucide-react';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Selection Guide', path: '/programmable-high-voltage-dc-supply-600v-1000v' },
  { label: 'Tech & Safety', path: '/high-voltage-variable-dc-technology-safety' },
  { label: 'Applications', path: '/hv-dc-power-supply-applications-capacitor-charging' },
  { label: 'Cost Analysis', path: '/digital-high-voltage-power-supply-cost' },
];

export const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top Warning Banner */}
      <div className="bg-hv-yellow text-black font-mono font-bold text-xs uppercase tracking-widest text-center py-1 flex justify-center items-center gap-4 border-b-2 border-black">
        <div className="flex items-center gap-1">
          <AlertTriangle size={14} className="fill-black stroke-black" />
          <span>Caution: High Voltage &gt; 600V</span>
        </div>
        <span className="hidden sm:inline">|</span>
        <span className="hidden sm:inline">Auth Personnel Only</span>
      </div>

      {/* Navbar */}
      <nav className="bg-gray-950 border-b border-gray-800 sticky top-0 z-50 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo area */}
            <Link href="/" className="flex-shrink-0 flex items-center gap-3 group cursor-pointer">
              <div className="w-10 h-10 bg-gray-900 flex items-center justify-center rounded-sm border border-hv-yellow/30 group-hover:border-hv-yellow group-hover:bg-gray-800 transition-all">
                <Power className="text-hv-yellow" size={20} strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-black text-xl tracking-tighter uppercase font-mono">HighVolt<span className="text-hv-yellow">.SYS</span></span>
                <span className="text-[10px] text-gray-500 tracking-[0.2em] uppercase font-bold">Industrial Power</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-4">
              <div className="flex items-baseline space-x-1">
                {navItems.map((item) => {
                  const isActive = pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      href={item.path}
                      className={`px-4 py-2 rounded-sm text-sm font-bold uppercase tracking-wide transition-all border ${
                        isActive
                          ? 'bg-gray-800 text-hv-yellow border-hv-yellow shadow-[0_0_10px_rgba(250,204,21,0.1)]'
                          : 'text-gray-400 border-transparent hover:text-white hover:bg-gray-900 hover:border-gray-700'
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
              
              {/* CTA Button */}
              <a
                href="https://variabledcpowersupply.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 bg-hv-yellow text-black px-5 py-2.5 rounded-sm font-bold text-sm uppercase tracking-wide hover:bg-yellow-400 transition-all shadow-lg hover:shadow-hv-yellow/50 border-b-4 border-yellow-600 hover:border-yellow-700"
              >
                <span>Check Stock & Pricing</span>
                <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 border border-gray-700"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-950 border-b border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`block px-4 py-3 rounded-sm text-sm font-bold uppercase tracking-wide border-l-4 ${
                    pathname === item.path
                      ? 'bg-gray-900 text-hv-yellow border-hv-yellow'
                      : 'text-gray-400 border-transparent hover:bg-gray-900 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Mobile CTA Button */}
              <div className="pt-3 px-2">
                <a
                  href="https://variabledcpowersupply.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2 bg-hv-yellow text-black px-5 py-4 rounded-sm font-bold text-sm uppercase tracking-wide hover:bg-yellow-400 transition-all shadow-lg border-b-4 border-yellow-600"
                >
                  <span>Check Stock & Pricing</span>
                  <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
