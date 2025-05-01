
import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { Button } from "../components/ui/button";

const Index: React.FC = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Certificate Verification</h1>
        <p className="text-gray-600 max-w-md mb-8">
          Welcome to the certificate verification portal. You can verify a certificate or generate a new one.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Button asChild>
            <Link to="/certificate">Generate Certificate</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/verify/example-cert-id">Verify Certificate</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
