
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, maxWidth = "max-w-2xl" }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-8">
        <div className={`container mx-auto px-4 ${maxWidth}`}>{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
