import React from 'react';
import { HeroSection } from '@/components/HeroSection';
import { Battery, Sun, Zap, Activity, Layers, ArrowDownRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HV DC Power Supply Applications: Capacitor Charging & PV Testing',
  description: 'Using programmable HV DC supplies for capacitor bank charging, PV inverter simulation, laser diode driving, and EV component burn-in. Technical application notes for 600V-1000V systems.',
  keywords: [
    'capacitor charging',
    'PV inverter testing',
    'solar array simulation',
    'MPPT testing',
    'EV burn-in testing',
    'constant current charging',
    'high voltage applications',
    'DC bus testing'
  ],
  alternates: {
    canonical: 'https://exscite.net/hv-dc-power-supply-applications-capacitor-charging',
  },
  openGraph: {
    title: 'HV DC Power Supply Applications: Capacitor Charging & PV Testing',
    description: 'Application notes for capacitor charging, PV simulation, and EV component testing using 600V-1000V programmable DC supplies.',
    url: 'https://exscite.net/hv-dc-power-supply-applications-capacitor-charging',
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
  headline: 'HV DC Power Supply Applications: Capacitor Charging & PV Testing',
  description: 'Application notes for capacitor charging, PV simulation, and EV component testing.',
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
  url: 'https://exscite.net/hv-dc-power-supply-applications-capacitor-charging',
};

export default function Applications() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HeroSection 
        title="HV DC Power Supply Applications: Capacitor Charging & PV Inverter Testing"
        subtitle="Using programmable HV DC supplies for capacitor bank charging, PV inverter simulation, and laser diode driving. 2026 Application Notes."
        imageAlt="Capacitor Charging Application"
        illustrationVariant="application"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24 font-sans text-gray-300">
        
        {/* Intro */}
        <section className="max-w-3xl mx-auto text-center prose prose-invert">
          <p className="text-xl text-gray-200 font-light">
            High voltage programmable supplies are used primarily where standard fixed sources cannot provide the necessary control over current ramp-up or voltage curves.
          </p>
        </section>

        {/* Mode 1: Capacitor Charging */}
        <section className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-800 hidden md:block"></div>
          
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-gray-900 border border-gray-700 flex items-center justify-center z-10 text-hv-yellow font-bold text-2xl">
              01
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter">The Unique Demands of Capacitor Charging (Constant Current)</h2>
          </div>

          <div className="md:pl-20 grid md:grid-cols-2 gap-8">
             <div className="bg-gray-900 border-l-4 border-hv-red p-6">
               <h3 className="text-white font-bold mb-2 uppercase text-xs tracking-widest flex items-center gap-2">
                 The Challenge
               </h3>
               <p className="text-sm text-gray-400 leading-relaxed">
                 Testing high-voltage capacitor banks (used in pulsed power or UPS systems) presents a difficult load profile. An uncharged capacitor appears as a <strong>dead short circuit</strong>. A standard CV supply will immediately trigger OCP (Over Current Protection) and shut down.
               </p>
             </div>
             
             <div className="space-y-4">
               <div className="flex gap-4">
                 <ArrowDownRight className="text-hv-yellow flex-shrink-0" />
                 <div>
                   <strong className="text-white block mb-1">Constant Current (CC) Mode</strong>
                   <p className="text-sm text-gray-400">The supply must operate in Constant Current mode initially, pushing a fixed current into the load while voltage rises linearly.</p>
                 </div>
               </div>
               <div className="flex gap-4">
                 <ArrowDownRight className="text-green-500 flex-shrink-0" />
                 <div>
                   <strong className="text-white block mb-1">Seamless Transition</strong>
                   <p className="text-sm text-gray-400">Once the target voltage is reached, the supply must cross over seamlessly to Constant Voltage (CV) mode.</p>
                 </div>
               </div>
             </div>
          </div>
          <div className="md:pl-20 mt-6">
            <ExternalLinkText href="https://variabledcpowersupply.com">Power Supply for Capacitor Charging</ExternalLinkText>
          </div>
        </section>

        {/* Mode 2: PV Simulation */}
        <section className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-800 hidden md:block"></div>
          
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-gray-900 border border-gray-700 flex items-center justify-center z-10 text-hv-yellow font-bold text-2xl">
              02
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter">Simulating Solar Arrays (PV Curves) with Programmable Supplies</h2>
          </div>

          <div className="md:pl-20">
            <div className="bg-gray-950 border border-gray-800 p-8 relative overflow-hidden">
               <div className="flex flex-col md:flex-row gap-8 relative z-10">
                 <div className="md:w-1/2">
                   <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                     Solar inverters track the &quot;Maximum Power Point&quot; (MPPT) of a solar array. Testing them requires a power supply that mimics the behavior of a solar panel, not a battery.
                   </p>
                   <p className="text-gray-400 text-sm leading-relaxed">
                     A digital HV supply can be programmed with a specific I-V curve. As the inverter draws more current, the voltage drops according to the programmed mathematical model, simulating cloud cover or sunset conditions.
                   </p>
                 </div>
                 <div className="md:w-1/2">
                   {/* Abstract Curve Visualization */}
                   <div className="h-40 w-full bg-black border border-gray-700 relative overflow-hidden">
                      <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 gap-px bg-gray-900/50">
                        {Array.from({ length: 24 }).map((_, i) => (
                          <div key={i} className="border border-gray-800/20"></div>
                        ))}
                      </div>
                      <svg className="absolute inset-0 h-full w-full p-2" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M 0 10 Q 60 10 80 40 T 100 100" fill="none" stroke="#FACC15" strokeWidth="2" strokeDasharray="4,4" />
                        <text x="70" y="30" className="fill-hv-yellow text-[6px] font-mono">I-V CURVE</text>
                      </svg>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </section>

        {/* Mode 3: Burn In */}
        <section className="relative">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-gray-900 border border-gray-700 flex items-center justify-center z-10 text-hv-red font-bold text-2xl">
              03
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter">High Voltage Burn-in for EV Components</h2>
          </div>
          <div className="md:pl-20">
             <div className="bg-gray-900 border border-gray-800 p-6 flex flex-col md:flex-row items-center gap-6">
                <Battery className="text-hv-red w-12 h-12" />
                <div>
                  <p className="text-sm text-gray-300">
                    DC-DC converters and onboard chargers in Electric Vehicles require prolonged exposure to high voltages to identify early failures.
                    <br/><br/>
                    <strong>Requirement:</strong> 24/7 operation at 800V+. This requires rack-mount units with high-efficiency fan cooling to prevent thermal shutdown during continuous full-load operation.
                  </p>
                </div>
             </div>
          </div>
        </section>

      </div>
    </div>
  );
}
