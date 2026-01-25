import React from 'react';

interface IndustrialCardProps {
  title: string;
  description: string;
  specs?: Array<{ label: string; value: string }>;
  className?: string;
}

export const IndustrialCard: React.FC<IndustrialCardProps> = ({ title, description, specs, className = '' }) => {
  return (
    <div className={`bg-gray-900 border border-gray-800 p-6 rounded-sm hover:border-gray-700 transition-colors ${className}`}>
      <h3 className="text-white font-bold text-lg mb-3 uppercase tracking-wide">{title}</h3>
      <p className="text-gray-400 text-sm mb-4">{description}</p>
      {specs && (
        <div className="space-y-2 mt-4 pt-4 border-t border-gray-800">
          {specs.map((spec, idx) => (
            <div key={idx} className="flex justify-between text-xs font-mono">
              <span className="text-gray-500">{spec.label}</span>
              <span className="text-hv-yellow">{spec.value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
