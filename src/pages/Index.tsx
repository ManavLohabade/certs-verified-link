
import React from "react";
import Layout from "@/components/Layout";
import EmailForm from "@/components/EmailForm";

const Index: React.FC = () => {
  return (
    <Layout>
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Certificate Generator</h1>
        <p className="text-gray-600">
          Generate and verify certificates for events hosted by The Learners Den
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 border">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Get Your Certificate
        </h2>
        <EmailForm />
      </div>
      
      <div className="mt-8 bg-certificate-lightBlue rounded-lg p-6">
        <h3 className="text-lg font-medium text-certificate-darkBlue mb-2">
          How it works
        </h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>Enter your email address and select the event you attended</li>
          <li>Provide your feedback about the event (if required)</li>
          <li>
            Your certificate will be generated and emailed to you automatically
          </li>
          <li>
            Your certificate includes a QR code and verification link that can be
            used to verify authenticity
          </li>
        </ol>
      </div>
    </Layout>
  );
};

export default Index;
