
import React from "react";
import { useLocation } from "react-router-dom";
import Layout from "../components/Layout";

const CertificatePage: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get("email");
  const eventId = queryParams.get("eventId");
  const certId = queryParams.get("certId");

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center py-8">
        <h1 className="text-3xl font-bold mb-6">Certificate</h1>
        {certId ? (
          <div className="text-center">
            <p className="text-green-600 text-lg mb-4">
              Your certificate has been successfully generated!
            </p>
            <p className="text-gray-600 mb-2">Certificate ID: {certId}</p>
            {email && <p className="text-gray-600 mb-2">Email: {email}</p>}
            <p className="text-gray-600 mb-8">
              You can download your certificate or share the verification link with others.
            </p>
          </div>
        ) : (
          <p className="text-gray-600 mb-8">
            No certificate information found. Please generate a certificate first.
          </p>
        )}
      </div>
    </Layout>
  );
};

export default CertificatePage;
