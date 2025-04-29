
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-6 border-t mt-auto">
      <div className="container mx-auto px-6">
        <div className="text-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} The Learners Den. All rights reserved.
          </p>
          <p className="mt-1">
            Certificate verification system provided by CertVerify.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
