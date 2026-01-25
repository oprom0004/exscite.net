import React from 'react';
import Link from 'next/link';
import { Shield, Power } from 'lucide-react';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Selection Guide', path: '/programmable-high-voltage-dc-supply-600v-1000v' },
  { label: 'Tech & Safety', path: '/high-voltage-variable-dc-technology-safety' },
  { label: 'Applications', path: '/hv-dc-power-supply-applications-capacitor-charging' },
  { label: 'Cost Analysis', path: '/digital-high-voltage-power-supply-cost' },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 border-t-4 border-hv-yellow relative overflow-hidden">
      {/* Striped bar for industrial look */}
      <div className="absolute top-0 left-0 w-full h-2 hazard-stripe opacity-50"></div>
      
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 text-sm">
          
          {/* Left Column: Standards */}
          <div className="w-full md:w-1/2">
            <h3 className="text-white font-bold uppercase tracking-widest mb-6 border-b border-gray-800 pb-2 inline-flex items-center gap-2">
              <Shield size={16} className="text-hv-yellow" />
              System Compliance
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
              <div className="flex items-center gap-3 p-3 bg-gray-900 border border-gray-800 rounded-sm">
                <div className="w-2 h-2 bg-green-500 rounded-sm shadow-[0_0_5px_rgba(34,197,94,0.5)]"></div>
                <span className="text-gray-300">IEC 61010-1:2010</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-900 border border-gray-800 rounded-sm">
                <div className="w-2 h-2 bg-green-500 rounded-sm shadow-[0_0_5px_rgba(34,197,94,0.5)]"></div>
                <span className="text-gray-300">ISO 9001:2026 MFG</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-900 border border-gray-800 rounded-sm">
                <div className="w-2 h-2 bg-green-500 rounded-sm shadow-[0_0_5px_rgba(34,197,94,0.5)]"></div>
                <span className="text-gray-300">Low Voltage Directive</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-900 border border-gray-800 rounded-sm">
                <div className="w-2 h-2 bg-green-500 rounded-sm shadow-[0_0_5px_rgba(34,197,94,0.5)]"></div>
                <span className="text-gray-300">RoHS / CE Marked</span>
              </div>
            </div>
          </div>
          
          {/* Right Column: Site Map */}
          <div className="w-full md:w-1/2 md:text-right">
            <h3 className="text-white font-bold uppercase tracking-widest mb-6 border-b border-gray-800 pb-2 inline-block">
              Site Navigation
            </h3>
            <ul className="space-y-3 font-mono text-xs">
              {navItems.map(item => (
                <li key={item.path}>
                  <Link href={item.path} className="group inline-flex items-center gap-2 text-gray-500 hover:text-hv-yellow transition-colors">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-hv-red">&gt;</span>
                    <span className="uppercase tracking-wider">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-900 text-center flex flex-col items-center">
          <div className="opacity-30 mb-4 grayscale">
            <Power size={32} />
          </div>
          <p className="text-gray-700 text-[10px] font-mono uppercase tracking-widest leading-loose">
            &copy; 2026 HighVolt.SYS.<br/>
            Engineered for 600V-1000V DC Applications.<br/>
            <span className="text-hv-yellow/50">System Status: OPERATIONAL</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
