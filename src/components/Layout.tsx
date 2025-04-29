
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
  maxWidth?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, maxWidth = "max-w-4xl" }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-blue-50">
      <Header />
      <main className="flex-grow py-12 px-6">
        <div className={`container mx-auto ${maxWidth}`}>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
