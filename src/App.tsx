
import React from "react";
import { Toaster } from "sonner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import FeedbackPage from "./pages/FeedbackPage";
import CertificatePage from "./pages/CertificatePage";
import VerifyPage from "./pages/VerifyPage";
import NotFound from "./pages/NotFound";

const App: React.FC = () => {
  return (
    <>
      <Toaster position="top-right" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/feedback" element={<FeedbackPage />} />
          <Route path="/certificate" element={<CertificatePage />} />
          <Route path="/verify/:certId" element={<VerifyPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
