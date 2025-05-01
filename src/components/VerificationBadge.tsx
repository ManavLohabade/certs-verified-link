
import React from "react";
import { cn } from "@/lib/utils";

interface VerificationBadgeProps {
  isValid: boolean;
  className?: string;
}

const VerificationBadge: React.FC<VerificationBadgeProps> = ({ isValid, className }) => {
  const baseStyles = "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium";
  
  const styles = isValid
    ? "bg-green-100 text-green-800"
    : "bg-red-100 text-red-800";
    
  const icon = isValid ? (
    <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
    </svg>
  ) : (
    <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
    </svg>
  );
  
  const text = isValid ? "Verified" : "Not Found";
  
  return (
    <span className={cn(baseStyles, styles, className)}>
      {icon}
      {text}
    </span>
  );
};

export default VerificationBadge;
