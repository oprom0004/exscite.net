import React from 'react';
import { HeroSection } from '@/components/HeroSection';
import { Cpu, Shield, Zap, DollarSign, Activity, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'High Voltage Variable DC Power Supply: The 2026 Industrial Guide',
  description: 'Operating above 600V introduces engineering challenges that do not exist in low-voltage circuits. This guide documents the shift to digital control for 600V, 800V, and 1000V+ programmable DC power systems.',
  alternates: {
    canonical: 'https://exscite.net',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'High Voltage Variable DC Power Supply: The 2026 Industrial Guide',
  description: 'Operating above 600V introduces engineering challenges that do not exist in low-voltage circuits. This guide documents the shift to digital control for 600V, 800V, and 1000V+ programmable DC power systems.',
  author: {
    '@type': 'Organization',
    name: 'HighVolt.SYS',
  },
  publisher: {
    '@type': 'Organization',
    name: 'HighVolt.SYS',
    logo: {
      '@type': 'ImageObject',
      url: 'https://exscite.net/logo.png',
    },
  },
  datePublished: '2026-01-01',
  dateModified: '2026-01-25',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://exscite.net',
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

const SectionLink: React.FC<{ to: string; text: string }> = ({ to, text }) => (
  <div className="mt-4">
    <Link href={to} className="inline-flex items-center text-hv-yellow hover:text-white font-mono text-sm uppercase tracking-wider border border-gray-700 hover:border-gray-500 bg-gray-900 px-4 py-2 transition-all group">
      {text} <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
    </Link>
  </div>
);

export default function Home() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HeroSection
        title="High Voltage Variable DC Power Supply: The 2026 Industrial Guide"
        subtitle="Operating above 600V introduces engineering challenges that do not exist in low-voltage circuits. This guide documents the shift to digital control."
        imageAlt="Industrial High Voltage Rack Mount Supply"
        useVideo={true}
        videoSrc="/etm-6050c.mp4"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20 font-sans text-gray-300 leading-relaxed">
        
        {/* Introduction */}
        <section className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-200 leading-8">
            Operating above 600V introduces engineering challenges that do not exist in low-voltage circuits. At these potentials, insulation breakdown, arcing, and capacitive discharge become primary concerns.
          </p>
          <p className="mt-6">
            For decades, high voltage power supplies were analog, controlled by physical potentiometers that suffered from thermal drift. In 2026, the industrial standard has shifted. The modern <ExternalLinkText href="https://variabledcpowersupply.com">high voltage variable DC power supply</ExternalLinkText> is digital, programmable, and integrated into safety-critical ATE (Automated Test Equipment) systems.
          </p>
          <p className="mt-6 border-l-2 border-gray-700 pl-4 italic text-gray-400">
            This site documents the technical requirements, safety protocols, and selection criteria for 600V, 800V, and 1000V+ programmable DC power systems.
          </p>
        </section>

        {/* Section 2: Shift to Digital */}
        <section>
          <div className="flex items-center gap-3 mb-6 border-b border-gray-800 pb-2">
            <Cpu className="text-hv-yellow" size={24} />
            <h2 className="text-2xl font-bold text-white uppercase tracking-wide">The Shift to Digital Control</h2>
          </div>
          <p className="mb-6">
            In high voltage applications, precision is not a luxury; it is a safety requirement.
          </p>
          <p className="mb-6">
            Legacy analog power supplies rely on variable resistors to set the voltage. Over time, mechanical wear and temperature changes cause the output to drift. If a 1000V supply drifts by just 1%, the output changes by 10V—enough to skew sensitive leakage current measurements or damage a DUT (Device Under Test).
          </p>
          
          <div className="bg-gray-900 border border-gray-800 p-6 rounded-sm">
            <h3 className="text-white font-bold mb-4 text-sm uppercase text-hv-yellow">Why Digital Architecture Matters</h3>
            <p className="mb-4 text-sm">
              Modern units, such as the industrial series used in semiconductor fabs, utilize DSP (Digital Signal Processing) control.
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="w-1 h-1 mt-2.5 bg-hv-red rounded-full flex-shrink-0"></span>
                <span><strong className="text-white">Repeatability:</strong> A digital command to output 800.0V will produce exactly 800.0V today, tomorrow, and next year.</span>
              </li>
              <li className="flex gap-3">
                <span className="w-1 h-1 mt-2.5 bg-hv-red rounded-full flex-shrink-0"></span>
                <span><strong className="text-white">Slew Rate Control:</strong> Digital control allows engineers to limit the voltage ramp-up speed (e.g., 50V/s) to prevent inrush current from damaging capacitors.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 3: Voltage Ranges */}
        <section>
          <div className="flex items-center gap-3 mb-6 border-b border-gray-800 pb-2">
            <Activity className="text-hv-yellow" size={24} />
            <h2 className="text-2xl font-bold text-white uppercase tracking-wide">Critical Voltage Ranges (600V - 1000V)</h2>
          </div>
          <p className="mb-6">
            Selecting the correct voltage headroom is critical for component testing. Different ranges require different internal isolation topologies.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-800 p-4 border-l-2 border-gray-600">
              <h4 className="text-white font-bold text-lg mb-1">600V Range</h4>
              <p className="text-xs text-gray-400">Primarily used for standard industrial motor drives and basic insulation testing.</p>
            </div>
            <div className="bg-gray-800 p-4 border-l-2 border-hv-yellow">
              <h4 className="text-white font-bold text-lg mb-1">800V Range</h4>
              <p className="text-xs text-gray-400">The new standard for EV (Electric Vehicle) battery architecture testing.</p>
            </div>
            <div className="bg-gray-800 p-4 border-l-2 border-hv-red">
              <h4 className="text-white font-bold text-lg mb-1">1000V - 1200V</h4>
              <p className="text-xs text-gray-400">Required for PV (Photovoltaic) inverter simulation and high-power IGBT/SiC device characterization.</p>
            </div>
          </div>
          <SectionLink to="/programmable-high-voltage-dc-supply-600v-1000v" text="Read the Technical Selection Guide" />
        </section>

        {/* Section 4: Safety */}
        <section>
          <div className="flex items-center gap-3 mb-6 border-b border-gray-800 pb-2">
            <Shield className="text-hv-red" size={24} />
            <h2 className="text-2xl font-bold text-white uppercase tracking-wide">Safety & Arc Protection Mechanisms</h2>
          </div>
          <p className="mb-6">
            High voltage supplies differ from low voltage units in one major aspect: stored energy.
            Even after the input power is cut, the output capacitors in a high voltage supply can retain a lethal charge. Professional-grade programmable supplies incorporate specific safety circuits:
          </p>
          <div className="space-y-4 mb-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="sm:w-32 flex-shrink-0 text-gray-500 text-sm font-mono pt-1">CIRCUIT_01</div>
              <div>
                <h4 className="text-white font-bold">Automatic Discharge Circuit</h4>
                <p className="text-sm text-gray-400">A bleed resistor network that actively drains the output capacitors when the output is toggled OFF.</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="sm:w-32 flex-shrink-0 text-gray-500 text-sm font-mono pt-1">CIRCUIT_02</div>
              <div>
                <h4 className="text-white font-bold">Arc Detection</h4>
                <p className="text-sm text-gray-400">The ability to detect micro-arcing (rapid impedance drops) and shut down the output within microseconds to prevent carbonization of the test fixture.</p>
              </div>
            </div>
          </div>
          <SectionLink to="/high-voltage-variable-dc-technology-safety" text="Deep Dive: HV Safety Technology & Isolation" />
        </section>

        {/* Section 5: Applications */}
        <section>
          <div className="flex items-center gap-3 mb-6 border-b border-gray-800 pb-2">
            <Zap className="text-hv-yellow" size={24} />
            <h2 className="text-2xl font-bold text-white uppercase tracking-wide">Applications in Industry</h2>
          </div>
          <p className="mb-6">
            High voltage programmable supplies are currently deployed in three main sectors:
          </p>
          <ul className="grid sm:grid-cols-3 gap-4 mb-6 text-sm">
            <li className="bg-gray-900 border border-gray-800 p-4">
              <strong className="block text-white mb-2">Capacitor Charging</strong>
              Requires a power supply that can operate in Constant Current (CC) mode at near-zero voltage and transition smoothly to Constant Voltage (CV) at the peak.
            </li>
            <li className="bg-gray-900 border border-gray-800 p-4">
              <strong className="block text-white mb-2">PV Simulation</strong>
              Simulating the I-V curve of a solar array to test inverters.
            </li>
            <li className="bg-gray-900 border border-gray-800 p-4">
              <strong className="block text-white mb-2">Insulation Testing</strong>
              Applying high voltage to measure leakage current in cables and connectors.
            </li>
          </ul>
          <SectionLink to="/hv-dc-power-supply-applications-capacitor-charging" text="Application Notes: Capacitor Charging & PV Testing" />
        </section>

        {/* Section 6: Sourcing */}
        <section>
          <div className="flex items-center gap-3 mb-6 border-b border-gray-800 pb-2">
            <DollarSign className="text-hv-yellow" size={24} />
            <h2 className="text-2xl font-bold text-white uppercase tracking-wide">Sourcing and Cost Considerations</h2>
          </div>
          <p className="mb-6">
            The cost of high voltage equipment is driven by the components required to handle the electrical stress: high-voltage MOSFETs, vacuum-impregnated transformers, and potting compounds.
          </p>
          <p className="mb-6">
            While generic analog supplies may appear cost-effective initially, they often lack the communication interfaces (SCPI/Modbus) and galvanic isolation required for modern automated lines. For industrial integration, sourcing from specialized partners ensures access to units with validated safety ratings and digital drivers.
          </p>
          <SectionLink to="/digital-high-voltage-power-supply-cost" text="2026 Cost Analysis: Digital vs. Analog" />
        </section>

        {/* Section 7: Summary */}
        <section className="bg-hv-yellow/5 border border-hv-yellow/20 p-8 rounded-sm">
          <h2 className="text-2xl font-bold text-white uppercase tracking-wide mb-4">Summary</h2>
          <p className="mb-6 text-gray-300">
            When dealing with high voltage, &quot;good enough&quot; is a risk.
            The transition to fully programmable, digital high voltage DC power supplies offers the control and data logging capabilities necessary for modern quality assurance.
          </p>
          <p className="text-sm text-gray-400">
            For technical specifications on industrial-grade 600V-1000V units, refer to the specialized catalog at <ExternalLinkText href="https://variabledcpowersupply.com">VariableDCPowerSupply.com</ExternalLinkText>.
          </p>
        </section>

      </div>
    </div>
  );
}
