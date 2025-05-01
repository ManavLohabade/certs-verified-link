
import React from "react";
import Logo from "../common/Logo";

const Header = () => {
  return (
    <header className="py-4 px-6 border-b">
      <div className="container mx-auto flex justify-between items-center">
        <Logo />
        <div>
          <a
            href="https://thelearnersden.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 hover:text-certificate-blue transition-colors"
          >
            Powered by The Learners Den
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
