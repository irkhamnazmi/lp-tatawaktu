
import React from 'react';

const LoginIllustration = () => {
  return (
    <div className="relative w-full h-64 mb-6 flex items-center justify-center">
      <svg
        width="200"
        height="160"
        viewBox="0 0 200 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-90"
      >
        {/* Background elements */}
        <circle cx="50" cy="40" r="20" fill="rgba(255,255,255,0.1)" />
        <circle cx="150" cy="30" r="15" fill="rgba(255,255,255,0.08)" />
        <circle cx="170" cy="80" r="10" fill="rgba(255,255,255,0.06)" />
        
        {/* Laptop/Device */}
        <rect x="60" y="70" width="80" height="50" rx="4" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
        <rect x="65" y="75" width="70" height="35" rx="2" fill="rgba(255,255,255,0.1)"/>
        
        {/* Screen content lines */}
        <rect x="70" y="80" width="30" height="2" rx="1" fill="rgba(255,255,255,0.4)"/>
        <rect x="70" y="85" width="40" height="2" rx="1" fill="rgba(255,255,255,0.3)"/>
        <rect x="70" y="90" width="25" height="2" rx="1" fill="rgba(255,255,255,0.3)"/>
        
        {/* Login form on screen */}
        <rect x="110" y="80" width="20" height="8" rx="2" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.3)"/>
        <rect x="110" y="90" width="20" height="8" rx="2" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.3)"/>
        <rect x="115" y="100" width="10" height="4" rx="2" fill="rgba(59,130,246,0.6)"/>
        
        {/* Laptop base */}
        <rect x="55" y="120" width="90" height="8" rx="4" fill="rgba(255,255,255,0.15)"/>
        
        {/* Floating elements */}
        <circle cx="40" cy="100" r="3" fill="rgba(255,255,255,0.3)">
          <animate attributeName="cy" values="100;95;100" dur="3s" repeatCount="indefinite"/>
        </circle>
        <circle cx="160" cy="110" r="2" fill="rgba(255,255,255,0.25)">
          <animate attributeName="cy" values="110;105;110" dur="2.5s" repeatCount="indefinite"/>
        </circle>
        <circle cx="30" cy="70" r="2.5" fill="rgba(255,255,255,0.2)">
          <animate attributeName="cy" values="70;65;70" dur="4s" repeatCount="indefinite"/>
        </circle>
        
        {/* Security shield icon */}
        <g transform="translate(85, 45)">
          <path
            d="M15 2L15 2C15 2 9 4 9 4C9 4 9 10 9 10C9 14 15 18 15 18C15 18 21 14 21 10C21 10 21 4 21 4C21 4 15 2 15 2Z"
            fill="rgba(34,197,94,0.3)"
            stroke="rgba(34,197,94,0.5)"
            strokeWidth="1"
          />
          <path
            d="M13 10L14.5 11.5L17 9"
            stroke="rgba(34,197,94,0.8)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        
        {/* Connection lines */}
        <path
          d="M100 45 Q120 35 140 45"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="1"
          fill="none"
          strokeDasharray="2,2"
        />
      </svg>
    </div>
  );
};

export default LoginIllustration;
