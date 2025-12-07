import React from 'react';
import { Briefcase, Building2, Stethoscope } from 'lucide-react';

const HeroGameMap: React.FC = () => {
  return (
    <div className="relative w-full h-full bg-[#0f172a] overflow-hidden">
      {/* SVG Container */}
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0"
      >
        {/* Definitions */}
        <defs>
          {/* Grid Pattern */}
          <pattern
            id="grid-pattern"
            x="0"
            y="0"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 100 0 L 0 0 0 100"
              fill="none"
              stroke="#334155"
              strokeWidth="2"
              strokeDasharray="8 4"
            />
          </pattern>
          
          {/* Card Glow Filter */}
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Background Grid */}
        <rect width="100%" height="100%" fill="#0f172a" />
        <rect width="100%" height="100%" fill="url(#grid-pattern)" opacity="0.4" />

        {/* --- Cards --- */}

        {/* Card 1: ByteWorks (Top Left) */}
        <g transform="translate(100, 100)">
          {/* Card Body */}
          <rect
            x="0"
            y="0"
            width="180"
            height="120"
            rx="4"
            fill="#4f46e5" // Indigo/Blue
            stroke="#6366f1"
            strokeWidth="2"
            className="animate-pulse"
            style={{ animationDuration: '3s' }}
          />
          {/* Icon Circle */}
          <circle cx="90" cy="45" r="24" fill="rgba(255,255,255,0.2)" />
          {/* Icon (ForeignObject for Lucide) */}
          <foreignObject x="78" y="33" width="24" height="24">
            <div className="flex items-center justify-center h-full w-full text-white">
              <Briefcase size={24} />
            </div>
          </foreignObject>
          {/* Text */}
          <text x="90" y="85" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold" fontFamily="sans-serif">
            ByteWorks სტარტაპი
          </text>
          {/* Bottom Tab */}
          <rect x="70" y="110" width="40" height="20" fill="#1e1b4b" rx="2" />
        </g>

        {/* Card 2: Apex (Right Middle) */}
        <g transform="translate(550, 150)">
          <rect
            x="0"
            y="0"
            width="200"
            height="140"
            rx="4"
            fill="#10b981" // Emerald/Green
            stroke="#34d399"
            strokeWidth="2"
          />
          <circle cx="100" cy="55" r="24" fill="rgba(255,255,255,0.2)" />
          <foreignObject x="88" y="43" width="24" height="24">
            <div className="flex items-center justify-center h-full w-full text-white">
              <Building2 size={24} />
            </div>
          </foreignObject>
          <text x="100" y="95" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold" fontFamily="sans-serif">
            Apex არქიტექტორები
          </text>
          <rect x="80" y="130" width="40" height="20" fill="#064e3b" rx="2" />
        </g>

        {/* Card 3: Mercy (Bottom Center) */}
        <g transform="translate(280, 400)">
          <rect
            x="0"
            y="0"
            width="180"
            height="120"
            rx="4"
            fill="#ef4444" // Red
            stroke="#f87171"
            strokeWidth="2"
          />
          <circle cx="90" cy="45" r="24" fill="rgba(255,255,255,0.2)" />
          <foreignObject x="78" y="33" width="24" height="24">
            <div className="flex items-center justify-center h-full w-full text-white">
              <Stethoscope size={24} />
            </div>
          </foreignObject>
          <text x="90" y="85" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold" fontFamily="sans-serif">
            Mercy ცენტრალური
          </text>
          <text x="90" y="102" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold" fontFamily="sans-serif">
            კლინიკა
          </text>
          <rect x="70" y="110" width="40" height="20" fill="#7f1d1d" rx="2" />
        </g>

        {/* Player Cursor */}
        <g transform="translate(400, 300)">
          <circle cx="0" cy="0" r="12" fill="#3b82f6" stroke="white" strokeWidth="2" className="animate-bounce" />
          <circle cx="0" cy="0" r="4" fill="white" />
        </g>

      </svg>

      {/* Top Stats Bar Overlay */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex gap-2">
         {[
            { label: 'კრეატიულობა', val: 10, icon: '💡' },
            { label: 'ლოგიკა', val: 10, icon: '🧠' },
            { label: 'ემპათია', val: 10, icon: '❤️' },
            { label: 'ანალიზი', val: 10, icon: '📈' },
            { label: 'ლიდერობა', val: 10, icon: '👥' },
         ].map((stat, i) => (
             <div key={i} className="bg-[#1e293b]/90 border border-white/10 rounded-lg p-2 flex flex-col items-center w-16 backdrop-blur-sm">
                 <span className="text-lg">{stat.icon}</span>
                 <span className="text-white font-bold text-xs">{stat.val}</span>
                 <span className="text-[8px] text-gray-400 uppercase">{stat.label}</span>
             </div>
         ))}
      </div>
    </div>
  );
};

export default HeroGameMap;
