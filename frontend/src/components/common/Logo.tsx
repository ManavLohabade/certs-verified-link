
import React from "react";
import { Link } from "react-router-dom";

const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center">
      <div className="text-certificate-blue font-bold text-xl flex items-center">
        <span className="bg-certificate-blue text-white px-2 py-1 rounded mr-1">TLD</span>
        Certificate Generator
      </div>
    </Link>
  );
};

export default Logo;
