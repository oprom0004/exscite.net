import React from 'react';
import { HeroSection } from '@/components/HeroSection';
import { Activity, Zap, Server, CheckCircle2, XCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Programmable High Voltage DC Supply: 600V-1000V Selection Guide',
  description: 'How to choose the right voltage range. Comparing 600V vs 1000V programmable DC power supplies for IGBT testing, motor drive simulation, and PV applications. Technical specifications and selection criteria.',
  keywords: [
    '600V power supply',
    '800V power supply',
    '1000V power supply',
    'programmable high voltage',
    'IGBT testing',
    'motor drive simulation',
    'PV inverter testing',
    'DC bus simulation',
    'high voltage selection guide'
  ],
  alternates: {
    canonical: 'https://exscite.net/programmable-high-voltage-dc-supply-600v-1000v',
  },
  openGraph: {
    title: 'Programmable High Voltage DC Supply: 600V-1000V Selection Guide',
    description: 'Technical selection criteria for 600V, 800V, and 1000V programmable DC power supplies. IGBT testing and motor drive applications.',
    url: 'https://exscite.net/programmable-high-voltage-dc-supply-600v-1000v',
    type: 'article',
  },
};

const ExternalLinkText: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-hv-yellow hover:text-white transition-colors font-bold"
  >
    {children}
  </a>
);

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: 'Programmable High Voltage DC Supply: 600V-1000V Selection Guide',
  description: 'Technical selection criteria for 600V, 800V, and 1000V programmable DC power supplies.',
  author: {
    '@type': 'Organization',
    name: 'HighVolt.SYS',
  },
  publisher: {
    '@type': 'Organization',
    name: 'HighVolt.SYS',
  },
  datePublished: '2026-01-01',
  dateModified: '2026-01-25',
  url: 'https://exscite.net/programmable-high-voltage-dc-supply-600v-1000v',
};

export default function SelectionGuide() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HeroSection 
        title="Selecting Programmable High Voltage DC Supplies: 600V, 800V, and 1000V"
        subtitle="How to choose the right voltage range. Comparing 600V vs 1000V programmable DC power supplies for IGBT testing and motor drive simulation."
        imageAlt="Voltage Selection Dial"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20 font-sans text-gray-300">
        
        {/* Intro */}
        <section className="max-w-3xl mx-auto prose prose-invert">
          <p className="text-xl text-gray-200 leading-8 font-light">
            When specifying a power supply for high-voltage testing, the voltage rating is the primary constraint. This page breaks down the selection criteria for industrial applications.
          </p>
        </section>

        {/* Section 1: When do you need 600V vs 1000V? */}
        <section>
          <div className="flex items-center gap-3 mb-6 border-b border-gray-800 pb-2">
            <Zap className="text-hv-yellow" size={24} />
            <h2 className="text-2xl font-bold text-white uppercase tracking-wide">When do you need 600V vs 1000V? (Testing breakdown)</h2>
          </div>

          <div className="overflow-x-auto border border-gray-800 bg-gray-900 rounded-sm shadow-xl mb-8">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-black text-xs uppercase tracking-widest text-gray-500 font-mono border-b border-gray-800">
                  <th className="p-6">Parameter</th>
                  <th className="p-6 text-hv-yellow border-l border-gray-800">600V Standard</th>
                  <th className="p-6 text-hv-red border-l border-gray-800">1000V+ Standard</th>
                </tr>
              </thead>
              <tbody className="text-sm font-mono">
                <tr className="border-b border-gray-800 hover:bg-gray-800/50 transition-colors">
                  <td className="p-6 font-bold text-white">Target Application</td>
                  <td className="p-6 border-l border-gray-800 text-gray-400">Industrial Motors (VFD)</td>
                  <td className="p-6 border-l border-gray-800 text-gray-400">PV Inverters & EV Grid</td>
                </tr>
                <tr className="border-b border-gray-800 hover:bg-gray-800/50 transition-colors">
                  <td className="p-6 font-bold text-white">DC Bus Simulation</td>
                  <td className="p-6 border-l border-gray-800 text-gray-400">Up to 480V systems</td>
                  <td className="p-6 border-l border-gray-800 text-gray-400">800V Architectures</td>
                </tr>
                <tr className="hover:bg-gray-800/50 transition-colors">
                  <td className="p-6 font-bold text-white">IGBT Testing</td>
                  <td className="p-6 border-l border-gray-800 text-gray-400">600V Rated IGBTs</td>
                  <td className="p-6 border-l border-gray-800 text-gray-400">1200V / 1700V IGBTs</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-gray-900 border border-gray-800 p-6">
               <h3 className="text-white font-bold text-sm mb-2">Technical Note</h3>
               <p className="text-sm text-gray-400 leading-relaxed">
                 When testing a 480V AC system, the DC bus voltage is calculated as <span className="text-white font-mono">V_bus = 480V_rms × √2 ≈ 678 V</span>.
                 A 600V supply cannot simulate the full operating range, forcing engineers to step up to 800V or 1000V units for margin testing.
               </p>
          </div>
        </section>

        {/* Section 2: Importance of High Precision */}
        <section>
          <div className="flex items-center gap-3 mb-6 border-b border-gray-800 pb-2">
            <Activity className="text-hv-yellow" size={24} />
            <h2 className="text-2xl font-bold text-white uppercase tracking-wide">The Importance of High Precision in High Voltage</h2>
          </div>
          <div className="bg-black border border-gray-800 p-8 font-mono text-xs flex flex-col justify-center relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-hv-red"></div>
              <p className="text-gray-400 text-sm font-sans mb-6 leading-relaxed">
                In leakage current testing, a voltage drift of 1% at 1000V equals 10V. This fluctuation can cause significant noise in μA-level current measurements. Programmable supplies with high-bit ADCs/DACs ensure stability.
              </p>
              <div className="space-y-3 border-t border-gray-800 pt-6">
                <div className="flex justify-between border-b border-gray-800 pb-2">
                  <span className="text-blue-400">SET_VOLTAGE</span>
                  <span className="text-hv-yellow">1000.00 V</span>
                </div>
                <div className="flex justify-between border-b border-gray-800 pb-2">
                  <span className="text-blue-400">MEASURED_V</span>
                  <span className="text-white">1000.01 V</span>
                </div>
                <div className="flex justify-between pt-2">
                  <span className="text-gray-500">ACCURACY</span>
                  <span className="text-green-500">0.01%</span>
                </div>
              </div>
            </div>
        </section>

        {/* Section 3: eTommens Series Overview */}
        <section>
          <div className="flex items-center gap-3 mb-6 border-b border-gray-800 pb-2">
            <Server className="text-hv-yellow" size={24} />
            <h2 className="text-2xl font-bold text-white uppercase tracking-wide">eTommens Series Overview (Recommended Models)</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
             <div className="bg-gray-900 border border-gray-800 p-6">
               <h3 className="text-white font-bold uppercase text-lg mb-2">eTM-600 Series</h3>
               <ul className="text-gray-400 text-sm space-y-2 list-disc list-inside">
                 <li>Range: 0-600V DC</li>
                 <li>Power: 1kW - 15kW</li>
                 <li>Ideal for: 380V Motor Drives</li>
               </ul>
             </div>
             <div className="bg-gray-900 border border-gray-800 p-6 border-b-4 border-hv-yellow">
               <h3 className="text-white font-bold uppercase text-lg mb-2">eTM-1000 Series</h3>
               <ul className="text-gray-400 text-sm space-y-2 list-disc list-inside">
                 <li>Range: 0-1000V DC</li>
                 <li>Power: 1kW - 100kW+</li>
                 <li>Ideal for: PV Simulation, EV Batteries</li>
               </ul>
             </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-4">
             <ExternalLinkText href="https://variabledcpowersupply.com/600v-dc-power-supplies/">600V DC Power Supplies</ExternalLinkText>
             <ExternalLinkText href="https://variabledcpowersupply.com/800v-dc-power-supplies/">800V DC Power Supplies</ExternalLinkText>
          </div>
        </section>

      </div>
    </div>
  );
}
