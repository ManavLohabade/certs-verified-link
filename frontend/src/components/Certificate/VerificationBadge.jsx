
import React from "react";
import { cn } from "../../lib/utils";
import { CheckCircle, XCircle } from "lucide-react";

const VerificationBadge = ({ isValid, className }) => {
  return (
    <div 
      className={cn(
        "inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium", 
        isValid 
          ? "bg-green-100 text-green-800" 
          : "bg-red-100 text-red-800",
        className
      )}
    >
      {isValid ? (
        <>
          <CheckCircle className="w-4 h-4 mr-1.5" />
          Valid Certificate
        </>
      ) : (
        <>
          <XCircle className="w-4 h-4 mr-1.5" />
          Invalid Certificate
        </>
      )}
    </div>
  );
};

export default VerificationBadge;
