import React from 'react';
import { HeroSection } from '@/components/HeroSection';
import { DollarSign, TrendingUp, ShieldCheck, CircuitBoard, Scale, AlertOctagon } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital High Voltage Power Supply Cost Analysis: 2026 Pricing Guide',
  description: 'Cost breakdown for 600V-1000V programmable DC power supplies. Comparing analog vs digital units, TCO analysis, and industrial pricing for high voltage equipment.',
  keywords: [
    'high voltage cost',
    'power supply pricing',
    'digital vs analog cost',
    'TCO analysis',
    'industrial pricing',
    'high voltage equipment cost',
    'programmable supply pricing'
  ],
  alternates: {
    canonical: 'https://exscite.net/digital-high-voltage-power-supply-cost',
  },
  openGraph: {
    title: 'Digital High Voltage Power Supply Cost Analysis: 2026 Pricing Guide',
    description: 'Cost breakdown and TCO analysis for 600V-1000V programmable DC power supplies. Digital vs analog comparison.',
    url: 'https://exscite.net/digital-high-voltage-power-supply-cost',
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
  headline: 'Digital High Voltage Power Supply Cost Analysis: 2026 Pricing Guide',
  description: 'Cost breakdown and TCO analysis for 600V-1000V programmable DC power supplies.',
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
  url: 'https://exscite.net/digital-high-voltage-power-supply-cost',
};

export default function CostGuide() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HeroSection 
        title="Cost Analysis: The Price of Precision in High Voltage DC Supplies"
        subtitle="There is a significant price disparity between 'hobbyist' high voltage modules and industrial programmable rack-mount systems. This section breaks down the engineering costs associated with 600V+ equipment."
        imageAlt="Industrial Cost Analysis"
        illustrationVariant="circuit"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20 font-sans text-gray-300 leading-relaxed">
        
        {/* Introduction */}
        <section className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-200 leading-8">
            There is a significant price disparity between &quot;hobbyist&quot; high voltage modules and industrial programmable rack-mount systems. This section breaks down the engineering costs associated with 600V+ equipment to justify the investment required for industrial reliability.
          </p>
        </section>

        {/* Section 2: The "Insulation Premium" */}
        <section>
          <div className="flex items-center gap-3 mb-6 border-b border-gray-800 pb-2">
            <CircuitBoard className="text-hv-yellow" size={24} />
            <h2 className="text-2xl font-bold text-white uppercase tracking-wide">The &quot;Insulation Premium&quot;</h2>
          </div>
          <p className="mb-6">
            As voltage increases, the cost of manufacturing does not scale linearly; it scales exponentially.
          </p>
          
          <div className="grid gap-6">
             <div className="bg-gray-900 border border-gray-800 p-6">
               <h3 className="text-white font-bold uppercase text-sm mb-2 flex items-center gap-2">
                 <span className="w-2 h-2 bg-hv-yellow rounded-full"></span>
                 PCB Layout
               </h3>
               <p className="text-sm text-gray-300">
                 High voltage requires wide creepage and clearance distances on the circuit board, increasing board size.
               </p>
             </div>
             
             <div className="bg-gray-900 border border-gray-800 p-6">
               <h3 className="text-white font-bold uppercase text-sm mb-2 flex items-center gap-2">
                 <span className="w-2 h-2 bg-hv-yellow rounded-full"></span>
                 Components
               </h3>
               <p className="text-sm text-gray-300">
                 1200V SiC (Silicon Carbide) MOSFETs cost significantly more than standard 60V silicon FETs.
               </p>
             </div>
             
             <div className="bg-gray-900 border border-gray-800 p-6">
               <h3 className="text-white font-bold uppercase text-sm mb-2 flex items-center gap-2">
                 <span className="w-2 h-2 bg-hv-yellow rounded-full"></span>
                 Potting
               </h3>
               <p className="text-sm text-gray-300">
                 To prevent arcing at high altitudes or humidity, critical high-voltage sections must be potted (encapsulated) in epoxy resin, a process that adds labor and material costs.
               </p>
             </div>
          </div>
        </section>

        {/* Section 3: Analog vs. Digital Control Costs */}
        <section>
          <div className="flex items-center gap-3 mb-6 border-b border-gray-800 pb-2">
            <Scale className="text-hv-yellow" size={24} />
            <h2 className="text-2xl font-bold text-white uppercase tracking-wide">Analog vs. Digital Control Costs</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="border-l-4 border-gray-700 pl-6 py-2">
              <strong className="block text-white mb-2 uppercase tracking-wider text-sm">Analog Units</strong>
              <p className="text-sm text-gray-400 mb-2">Lower cost. Uses a potentiometer to set a reference voltage. Prone to drift. No data logging.</p>
            </div>
            <div className="border-l-4 border-hv-yellow pl-6 py-2 bg-hv-yellow/5">
              <strong className="block text-white mb-2 uppercase tracking-wider text-sm">Digital Units</strong>
              <p className="text-sm text-gray-300 mb-2">Higher cost. Requires a DSP, ADCs (Analog-to-Digital Converters) with high bit resolution (16-bit or higher), and isolated communication interfaces.</p>
            </div>
          </div>
          
          <div className="bg-gray-800 p-4 border border-gray-700">
            <h3 className="text-white font-bold text-sm uppercase mb-1">Value Proposition</h3>
            <p className="text-gray-400 text-sm">
              For automated lines, the cost of a digital unit is offset by the elimination of manual logging and calibration downtime.
            </p>
          </div>
        </section>

        {/* Section 4: Total Cost of Ownership (TCO) */}
        <section>
          <div className="flex items-center gap-3 mb-6 border-b border-gray-800 pb-2">
            <TrendingUp className="text-hv-red" size={24} />
            <h2 className="text-2xl font-bold text-white uppercase tracking-wide">Total Cost of Ownership (TCO)</h2>
          </div>
          <p className="mb-6">
            Purchase price is only one factor.
          </p>
          <div className="space-y-6">
             <div className="bg-gray-900 p-6 border border-gray-800">
                <h3 className="text-white font-bold text-sm uppercase mb-2 flex items-center gap-2">
                    <AlertOctagon size={16} className="text-hv-red" />
                    Failure Rates
                </h3>
                <p className="text-gray-300 text-sm">
                   A cheap HV supply without proper arc protection will fail when a DUT shorts. Replacing a power supply stops the production line.
                </p>
             </div>
             
             <div className="bg-gray-900 p-6 border border-gray-800">
                <h3 className="text-white font-bold text-sm uppercase mb-2 flex items-center gap-2">
                    <ShieldCheck size={16} className="text-hv-yellow" />
                    Safety Liability
                </h3>
                <p className="text-gray-300 text-sm">
                   Equipment lacking active discharge circuits poses a safety risk to operators.
                </p>
             </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="bg-hv-yellow/10 border border-hv-yellow/30 p-8 rounded-sm">
          <h2 className="text-xl font-bold text-white uppercase tracking-wide mb-4">Conclusion</h2>
          <p className="mb-6 text-gray-300">
             In high voltage engineering, safety and stability drive the cost. The premium paid for a digital, isolated system is an insurance policy against equipment damage and operator injury.
          </p>
          <div className="inline-block">
             <ExternalLinkText href="https://variabledcpowersupply.com">Check Industrial High Voltage Prices</ExternalLinkText>
          </div>
        </section>

      </div>
    </div>
  );
}
