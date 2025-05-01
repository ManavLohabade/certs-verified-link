
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { verifyCertificate } from "../lib/api";
import Layout from "../components/Layout/Layout";
import VerificationBadge from "../components/Certificate/VerificationBadge";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { CheckCircle2, XCircle, Loader2 } from "lucide-react";

const VerifyPage = () => {
  const { certId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [certificate, setCertificate] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCertificateDetails = async () => {
      if (!certId) {
        setError("No certificate ID provided");
        setIsLoading(false);
        return;
      }

      try {
        const data = await verifyCertificate(certId);
        setCertificate(data);
      } catch (err) {
        setError("Certificate verification failed");
        toast.error("Could not verify certificate");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCertificateDetails();
  }, [certId]);

  if (isLoading) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center py-10">
          <Loader2 className="h-10 w-10 animate-spin text-certificate-blue mb-4" />
          <p className="text-gray-600">Verifying certificate...</p>
        </div>
      </Layout>
    );
  }

  if (error || !certificate) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center text-center py-10">
          <XCircle className="h-16 w-16 text-red-500 mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Verification Failed</h1>
          <p className="text-gray-600 mb-6">
            {error || "Could not verify certificate. It may not exist or has been revoked."}
          </p>
          <VerificationBadge isValid={false} className="mb-6" />
          <Button asChild>
            <Link to="/">Return to Homepage</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center text-center py-8">
        {certificate.valid ? (
          <CheckCircle2 className="h-16 w-16 text-green-500 mb-4" />
        ) : (
          <XCircle className="h-16 w-16 text-red-500 mb-4" />
        )}
        
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Certificate Verification</h1>
        <VerificationBadge isValid={certificate.valid} className="mb-8" />
        
        {certificate.valid && (
          <div className="bg-white border rounded-lg p-8 max-w-lg w-full text-left">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Certificate Details</h2>
            
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Recipient Name</p>
                <p className="font-medium">{certificate.name}</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-500">Email Address</p>
                <p className="font-medium">{certificate.email}</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-500">Event</p>
                <p className="font-medium">{certificate.eventTitle}</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-500">Issue Date</p>
                <p className="font-medium">{certificate.issueDate}</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-500">Certificate ID</p>
                <p className="font-medium font-mono">{certId}</p>
              </div>
            </div>
          </div>
        )}
        
        <div className="mt-8">
          <Button asChild>
            <Link to="/">Return to Homepage</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default VerifyPage;
