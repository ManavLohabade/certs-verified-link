
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-6 border-t mt-auto">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm text-gray-500">
          © {currentYear} The Learners Den. All rights reserved.
        </p>
        <div className="mt-2 flex justify-center space-x-6">
          <a 
            href="https://thelearnersden.com/privacy" 
            className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
          <a 
            href="https://thelearnersden.com/terms" 
            className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
