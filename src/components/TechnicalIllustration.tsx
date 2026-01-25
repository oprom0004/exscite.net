import React from 'react';

interface TechnicalIllustrationProps {
  variant?: 'power-supply' | 'safety' | 'application' | 'circuit';
  className?: string;
}

export const TechnicalIllustration: React.FC<TechnicalIllustrationProps> = ({ 
  variant = 'power-supply',
  className = '' 
}) => {
  
  // 高压电源设备插图
  const PowerSupplyIllustration = () => (
    <svg viewBox="0 0 800 600" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* 背景网格 */}
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>
        </pattern>
        <linearGradient id="bg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0A0A0A" />
          <stop offset="100%" stopColor="#1A1A1A" />
        </linearGradient>
      </defs>
      
      <rect width="800" height="600" fill="url(#bg-gradient)"/>
      <rect width="800" height="600" fill="url(#grid)"/>
      
      {/* 机架式电源主体 */}
      <g id="rack-mount-unit">
        {/* 外壳 */}
        <rect x="150" y="150" width="500" height="300" 
              fill="#1A1A1A" stroke="#374151" strokeWidth="2" rx="4"/>
        
        {/* 前面板 */}
        <rect x="160" y="160" width="480" height="280" 
              fill="#0A0A0A" stroke="#4B5563" strokeWidth="1"/>
        
        {/* 散热孔 */}
        {Array.from({ length: 8 }).map((_, i) => (
          <g key={`vent-${i}`}>
            {Array.from({ length: 20 }).map((_, j) => (
              <circle
                key={`vent-${i}-${j}`}
                cx={180 + j * 22}
                cy={180 + i * 30}
                r="2"
                fill="#374151"
              />
            ))}
          </g>
        ))}
        
        {/* LED 指示灯 */}
        <circle cx="200" cy="400" r="8" fill="#EF4444" opacity="0.8">
          <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite"/>
        </circle>
        <text x="220" y="405" fill="#9CA3AF" fontSize="12" fontFamily="monospace">PWR</text>
        
        <circle cx="280" cy="400" r="8" fill="#FACC15" opacity="0.9">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite"/>
        </circle>
        <text x="300" y="405" fill="#9CA3AF" fontSize="12" fontFamily="monospace">READY</text>
        
        <circle cx="380" cy="400" r="8" fill="#10B981" opacity="0.7"/>
        <text x="400" y="405" fill="#9CA3AF" fontSize="12" fontFamily="monospace">OUT</text>
        
        {/* 显示屏 */}
        <rect x="420" y="180" width="200" height="80" 
              fill="#000000" stroke="#FACC15" strokeWidth="2"/>
        <text x="440" y="210" fill="#FACC15" fontSize="24" fontFamily="monospace" fontWeight="bold">
          1000.0V
        </text>
        <text x="440" y="240" fill="#10B981" fontSize="18" fontFamily="monospace">
          15.50A
        </text>
        
        {/* 控制旋钮 */}
        <circle cx="220" cy="320" r="25" fill="#1F2937" stroke="#4B5563" strokeWidth="2"/>
        <line x1="220" y1="300" x2="220" y2="310" stroke="#FACC15" strokeWidth="3" strokeLinecap="round"/>
        <text x="180" y="365" fill="#9CA3AF" fontSize="10" fontFamily="monospace">VOLTAGE</text>
        
        <circle cx="320" cy="320" r="25" fill="#1F2937" stroke="#4B5563" strokeWidth="2"/>
        <line x1="310" y1="310" x2="315" y2="315" stroke="#FACC15" strokeWidth="3" strokeLinecap="round"/>
        <text x="280" y="365" fill="#9CA3AF" fontSize="10" fontFamily="monospace">CURRENT</text>
        
        {/* 输出端子 */}
        <rect x="450" y="300" width="60" height="40" 
              fill="#DC2626" stroke="#991B1B" strokeWidth="2" rx="2"/>
        <text x="465" y="325" fill="#FFFFFF" fontSize="16" fontFamily="monospace" fontWeight="bold">+</text>
        
        <rect x="540" y="300" width="60" height="40" 
              fill="#1E293B" stroke="#334155" strokeWidth="2" rx="2"/>
        <text x="560" y="325" fill="#FFFFFF" fontSize="16" fontFamily="monospace" fontWeight="bold">-</text>
        
        <text x="460" y="355" fill="#9CA3AF" fontSize="10" fontFamily="monospace">HV OUTPUT</text>
      </g>
      
      {/* 警告标识 */}
      <g id="warning-label">
        <rect x="50" y="480" width="150" height="80" 
              fill="#DC2626" stroke="#991B1B" strokeWidth="2" opacity="0.9"/>
        <path d="M 125 500 L 145 530 L 105 530 Z" 
              fill="#FEE2E2" stroke="#DC2626" strokeWidth="2"/>
        <text x="120" y="523" fill="#DC2626" fontSize="20" fontWeight="bold">!</text>
        <text x="70" y="550" fill="#FFFFFF" fontSize="12" fontFamily="monospace" fontWeight="bold">
          HIGH VOLTAGE
        </text>
      </g>
      
      {/* 技术参数标注 */}
      <g id="specs">
        <text x="680" y="180" fill="#FACC15" fontSize="11" fontFamily="monospace">
          V_MAX: 1000V
        </text>
        <text x="680" y="200" fill="#10B981" fontSize="11" fontFamily="monospace">
          I_MAX: 20A
        </text>
        <text x="680" y="220" fill="#9CA3AF" fontSize="11" fontFamily="monospace">
          P_OUT: 20kW
        </text>
        <text x="680" y="240" fill="#9CA3AF" fontSize="11" fontFamily="monospace">
          RIPPLE: &lt;0.01%
        </text>
      </g>
      
      {/* 电压波形示意 */}
      <g id="waveform" opacity="0.3">
        <path d="M 50 80 Q 100 80 100 60 T 200 60 T 300 60 T 400 60 T 500 60 T 600 60 T 700 60"
              stroke="#FACC15" strokeWidth="2" fill="none">
          <animate attributeName="d" 
                   values="M 50 80 Q 100 80 100 60 T 200 60 T 300 60 T 400 60 T 500 60 T 600 60 T 700 60;
                           M 50 80 Q 100 80 100 55 T 200 55 T 300 55 T 400 55 T 500 55 T 600 55 T 700 55;
                           M 50 80 Q 100 80 100 60 T 200 60 T 300 60 T 400 60 T 500 60 T 600 60 T 700 60"
                   dur="3s" repeatCount="indefinite"/>
        </path>
      </g>
    </svg>
  );
  
  // 安全电路插图
  const SafetyIllustration = () => (
    <svg viewBox="0 0 800 600" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid-safety" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>
        </pattern>
        <linearGradient id="shield-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#DC2626" />
          <stop offset="100%" stopColor="#991B1B" />
        </linearGradient>
      </defs>
      
      <rect width="800" height="600" fill="#0A0A0A"/>
      <rect width="800" height="600" fill="url(#grid-safety)"/>
      
      {/* 中心安全盾牌 */}
      <path d="M 400 150 L 500 200 L 500 350 Q 500 450 400 500 Q 300 450 300 350 L 300 200 Z"
            fill="url(#shield-gradient)" stroke="#FACC15" strokeWidth="3" opacity="0.9"/>
      
      {/* 盾牌内部图案 */}
      <text x="365" y="330" fill="#FFFFFF" fontSize="80" fontWeight="bold">⚡</text>
      
      {/* 围绕盾牌的安全功能标注 */}
      <g id="safety-features">
        {/* 电弧检测 */}
        <circle cx="250" cy="250" r="60" fill="#1F2937" stroke="#FACC15" strokeWidth="2"/>
        <text x="230" y="245" fill="#FACC15" fontSize="24">⚡</text>
        <text x="220" y="265" fill="#9CA3AF" fontSize="10" fontFamily="monospace">ARC</text>
        <text x="210" y="280" fill="#9CA3AF" fontSize="10" fontFamily="monospace">DETECT</text>
        
        {/* 过流保护 */}
        <circle cx="550" cy="250" r="60" fill="#1F2937" stroke="#EF4444" strokeWidth="2"/>
        <text x="535" y="245" fill="#EF4444" fontSize="24">⊗</text>
        <text x="520" y="265" fill="#9CA3AF" fontSize="10" fontFamily="monospace">OVER</text>
        <text x="515" y="280" fill="#9CA3AF" fontSize="10" fontFamily="monospace">CURRENT</text>
        
        {/* 隔离保护 */}
        <circle cx="250" cy="450" r="60" fill="#1F2937" stroke="#10B981" strokeWidth="2"/>
        <text x="235" y="450" fill="#10B981" fontSize="24">⊜</text>
        <text x="215" y="470" fill="#9CA3AF" fontSize="10" fontFamily="monospace">ISOLATION</text>
        
        {/* 放电电路 */}
        <circle cx="550" cy="450" r="60" fill="#1F2937" stroke="#3B82F6" strokeWidth="2"/>
        <text x="535" y="450" fill="#3B82F6" fontSize="24">↯</text>
        <text x="515" y="470" fill="#9CA3AF" fontSize="10" fontFamily="monospace">DISCHARGE</text>
      </g>
      
      {/* 连接线 */}
      <line x1="310" y1="250" x2="340" y2="270" stroke="#FACC15" strokeWidth="1" strokeDasharray="5,5" opacity="0.5"/>
      <line x1="490" y1="250" x2="460" y2="270" stroke="#EF4444" strokeWidth="1" strokeDasharray="5,5" opacity="0.5"/>
      <line x1="310" y1="450" x2="340" y2="430" stroke="#10B981" strokeWidth="1" strokeDasharray="5,5" opacity="0.5"/>
      <line x1="490" y1="450" x2="460" y2="430" stroke="#3B82F6" strokeWidth="1" strokeDasharray="5,5" opacity="0.5"/>
    </svg>
  );
  
  // 应用场景插图
  const ApplicationIllustration = () => (
    <svg viewBox="0 0 800 600" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="600" fill="#0A0A0A"/>
      
      {/* 电容充电曲线 */}
      <g id="capacitor-charging">
        <path d="M 100 500 Q 250 500 350 300 T 700 150"
              stroke="#FACC15" strokeWidth="3" fill="none"/>
        <text x="100" y="530" fill="#9CA3AF" fontSize="12" fontFamily="monospace">t=0</text>
        <text x="650" y="140" fill="#FACC15" fontSize="14" fontFamily="monospace">V_max</text>
        
        {/* 坐标轴 */}
        <line x1="80" y1="500" x2="750" y2="500" stroke="#4B5563" strokeWidth="2"/>
        <line x1="80" y1="500" x2="80" y2="100" stroke="#4B5563" strokeWidth="2"/>
        <text x="750" y="530" fill="#9CA3AF" fontSize="12" fontFamily="monospace">Time</text>
        <text x="30" y="110" fill="#9CA3AF" fontSize="12" fontFamily="monospace">Voltage</text>
      </g>
      
      {/* 电容符号 */}
      <g id="capacitor-symbol" transform="translate(400, 250)">
        <line x1="-30" y1="-40" x2="-30" y2="40" stroke="#10B981" strokeWidth="4"/>
        <line x1="30" y1="-40" x2="30" y2="40" stroke="#10B981" strokeWidth="4"/>
        <text x="-20" y="70" fill="#10B981" fontSize="16" fontFamily="monospace">C</text>
      </g>
    </svg>
  );
  
  // 电路示意图
  const CircuitIllustration = () => (
    <svg viewBox="0 0 800 600" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="600" fill="#0A0A0A"/>
      
      {/* 简化电路图 */}
      <g id="circuit" stroke="#9CA3AF" strokeWidth="2" fill="none">
        {/* 输入 */}
        <circle cx="150" cy="300" r="30" fill="#1F2937"/>
        <text x="135" y="310" fill="#FACC15" fontSize="16" fontFamily="monospace">AC</text>
        
        {/* 连线 */}
        <line x1="180" y1="300" x2="250" y2="300"/>
        
        {/* 整流桥 */}
        <rect x="250" y="270" width="80" height="60" fill="#1F2937" stroke="#FACC15"/>
        <text x="265" y="305" fill="#FACC15" fontSize="12" fontFamily="monospace">RECT</text>
        
        {/* 连线 */}
        <line x1="330" y1="300" x2="400" y2="300"/>
        
        {/* 变压器 */}
        <circle cx="450" cy="300" r="50" fill="#1F2937" stroke="#EF4444" strokeWidth="3"/>
        <text x="435" y="310" fill="#EF4444" fontSize="14" fontFamily="monospace">TX</text>
        
        {/* 连线 */}
        <line x1="500" y1="300" x2="570" y2="300"/>
        
        {/* 输出 */}
        <rect x="570" y="270" width="80" height="60" fill="#DC2626" stroke="#FFFFFF" strokeWidth="3"/>
        <text x="585" y="295" fill="#FFFFFF" fontSize="14" fontFamily="monospace" fontWeight="bold">HV</text>
        <text x="580" y="315" fill="#FFFFFF" fontSize="12" fontFamily="monospace">1000V</text>
      </g>
      
      {/* 地线符号 */}
      <g id="ground" transform="translate(450, 380)">
        <line x1="0" y1="0" x2="0" y2="30" stroke="#9CA3AF" strokeWidth="2"/>
        <line x1="-30" y1="30" x2="30" y2="30" stroke="#9CA3AF" strokeWidth="3"/>
        <line x1="-20" y1="40" x2="20" y2="40" stroke="#9CA3AF" strokeWidth="2"/>
        <line x1="-10" y1="50" x2="10" y2="50" stroke="#9CA3AF" strokeWidth="1"/>
      </g>
    </svg>
  );
  
  switch (variant) {
    case 'safety':
      return <SafetyIllustration />;
    case 'application':
      return <ApplicationIllustration />;
    case 'circuit':
      return <CircuitIllustration />;
    default:
      return <PowerSupplyIllustration />;
  }
};
