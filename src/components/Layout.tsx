
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm py-4 px-6">
        <div className="container mx-auto">
          <h1 className="text-xl font-bold text-gray-800">Certificate Verification</h1>
        </div>
      </header>
      <main className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {children}
      </main>
      <footer className="bg-white shadow-sm py-4 px-6 mt-auto">
        <div className="container mx-auto text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Certificate Verification System
        </div>
      </footer>
    </div>
  );
};

export default Layout;
