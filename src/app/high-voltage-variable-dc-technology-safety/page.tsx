import React from 'react';
import { HeroSection } from '@/components/HeroSection';
import { AlertTriangle, Lock, Activity, Zap, Timer, ShieldAlert } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'High Voltage DC Safety: Arc Protection & Discharge Circuits',
  description: 'Technical safety mechanisms for 600V-1000V programmable DC supplies. Arc detection, automatic discharge circuits, galvanic isolation, and high voltage protection protocols.',
  keywords: [
    'high voltage safety',
    'arc protection',
    'discharge circuit',
    'galvanic isolation',
    'high voltage protection',
    'arc detection',
    'bleed resistor',
    'crowbar circuit',
    'HV safety protocols'
  ],
  alternates: {
    canonical: 'https://exscite.net/high-voltage-variable-dc-technology-safety',
  },
  openGraph: {
    title: 'High Voltage DC Safety: Arc Protection & Discharge Circuits',
    description: 'Safety mechanisms for 600V-1000V programmable DC supplies: arc detection, discharge circuits, and isolation protocols.',
    url: 'https://exscite.net/high-voltage-variable-dc-technology-safety',
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
  headline: 'High Voltage DC Safety: Arc Protection & Discharge Circuits',
  description: 'Technical safety mechanisms for 600V-1000V programmable DC supplies.',
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
  url: 'https://exscite.net/high-voltage-variable-dc-technology-safety',
};

export default function TechSafety() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HeroSection 
        title="High Voltage Variable DC Technology: Safety Mechanisms & Arc Protection"
        subtitle="In low voltage applications (>600V), a short circuit results in an arc flash, and contact can be fatal. Consequently, the architecture differs fundamentally from standard bench supplies."
        imageAlt="High Voltage Warning Label"
        illustrationVariant="safety"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20 font-sans text-gray-300 leading-relaxed">
        
        {/* Introduction */}
        <section className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-200 leading-8">
            In low voltage applications (e.g., 30V), accidental contact causes a minor short circuit. In high voltage applications (&gt;600V), a short circuit results in an arc flash, and contact can be fatal. Consequently, the architecture of high voltage programmable supplies differs fundamentally from standard bench power supplies.
          </p>
        </section>

        {/* Section 2: Output Discharge Circuits */}
        <section>
          <div className="flex items-center gap-3 mb-6 border-b border-gray-800 pb-2">
            <Timer className="text-hv-yellow" size={24} />
            <h2 className="text-2xl font-bold text-white uppercase tracking-wide">Output Discharge Circuits (Bleeders)</h2>
          </div>
          <p className="mb-6">
            A high voltage power supply is essentially a capacitor charging engine. Even when the AC input is removed, the output capacitors retain charge.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-900 border border-gray-800 p-6">
              <strong className="block text-white mb-2 text-sm uppercase text-hv-yellow">Mechanism</strong>
              <p className="text-sm text-gray-400">
                Industrial units utilize an active discharge circuit (or &quot;crowbar&quot; circuit). When the output logic goes to &quot;OFF,&quot; a relay engages a power resistor across the output terminals.
              </p>
            </div>
            <div className="bg-gray-900 border border-gray-800 p-6">
              <strong className="block text-white mb-2 text-sm uppercase text-hv-red">Time Constant</strong>
              <p className="text-sm text-gray-400">
                The discharge time must be calculated to bring the voltage to safe levels (&lt;50V) within a specified timeframe (typically &lt;10 seconds for rack units).
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Arc Detection */}
        <section>
          <div className="flex items-center gap-3 mb-6 border-b border-gray-800 pb-2">
            <Zap className="text-hv-red" size={24} />
            <h2 className="text-2xl font-bold text-white uppercase tracking-wide">Arc Detection and Protection</h2>
          </div>
          <p className="mb-6">
            During insulation testing or capacitor manufacturing, the dielectric material may fail, causing an arc.
          </p>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-gray-800 flex items-center justify-center rounded-sm border border-gray-700 flex-shrink-0">
                <AlertTriangle className="text-hv-yellow" size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">The Risk</h3>
                <p className="text-gray-400 text-sm">
                  A sustained arc generates intense heat, carbonizing the test fixture and potentially damaging the power supply&apos;s output stage.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-gray-800 flex items-center justify-center rounded-sm border border-gray-700 flex-shrink-0">
                <Activity className="text-hv-red" size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">The Technology</h3>
                <p className="text-gray-400 text-sm">
                  Digital HV supplies monitor the rate of change in current (<span className="font-mono text-hv-yellow">di/dt</span>). A sudden, non-commanded spike indicates an arc. The DSP (Digital Signal Processor) immediately inhibits the PWM drive signal, shutting down the output in microseconds—faster than any thermal fuse can react.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Galvanic Isolation */}
        <section>
          <div className="flex items-center gap-3 mb-6 border-b border-gray-800 pb-2">
            <Lock className="text-hv-yellow" size={24} />
            <h2 className="text-2xl font-bold text-white uppercase tracking-wide">Galvanic Isolation</h2>
          </div>
          <p className="mb-6">
            Connecting a 1000V power supply to a PC via USB creates a path for high voltage to enter the computer&apos;s logic board if a ground fault occurs.
          </p>
          <div className="bg-gray-800 p-6 border-l-4 border-blue-500">
            <h3 className="text-white font-bold mb-2">Requirement</h3>
            <p className="text-gray-300 text-sm">
              Professional programmable supplies use optical or magnetic isolation on all communication ports (RS485, LAN, USB). This ensures the high-voltage ground is floating or strictly separated from the logic ground.
            </p>
          </div>
        </section>

        {/* Conclusion */}
        <section className="bg-gray-900 border border-gray-700 p-8 text-center">
          <ShieldAlert className="text-hv-red mx-auto mb-4" size={32} />
          <h2 className="text-xl font-bold text-white uppercase tracking-wide mb-4">Safety features are not optional</h2>
          <p className="mb-6 text-gray-400 max-w-2xl mx-auto">
             When evaluating equipment, verify the existence of active discharge and isolation specs.
          </p>
          <div className="inline-block">
             <ExternalLinkText href="https://variabledcpowersupply.com">View Safe High Voltage Solutions</ExternalLinkText>
          </div>
        </section>

      </div>
    </div>
  );
}
