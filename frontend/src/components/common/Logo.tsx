
import React from "react";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="bg-certificate-blue p-2 rounded-lg mr-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="18" height="14" x="3" y="7" rx="2" />
          <path d="M3 7v-2a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2" />
          <path d="M6 10h.01" />
          <path d="M6 14h.01" />
          <path d="M12 10h6" />
          <path d="M12 14h6" />
        </svg>
      </div>
      <span className="font-bold text-xl text-certificate-darkBlue">CertVerify</span>
    </div>
  );
};

export default Logo;
