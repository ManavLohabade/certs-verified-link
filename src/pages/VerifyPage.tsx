
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { verifyCertificate } from "@/lib/api";
import Layout from "@/components/Layout";
import VerificationBadge from "@/components/VerificationBadge";
import { toast } from "sonner";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const VerifyPage: React.FC = () => {
  const { certId } = useParams<{ certId: string }>();
  const [isVerifying, setIsVerifying] = useState(true);
  const [isValid, setIsValid] = useState(false);
  const [certDetails, setDetails] = useState<{
    name?: string;
    event?: string;
    issuedAt?: string;
  }>({});
  const navigate = useNavigate();
  
  useEffect(() => {
    const verify = async () => {
      if (!certId) {
        toast.error("Invalid certificate ID");
        return;
      }
      
      try {
        setIsVerifying(true);
        const response = await verifyCertificate(certId);
        
        setIsValid(response.valid);
        setDetails({
          name: response.name,
          event: response.event,
          issuedAt: response.issuedAt,
        });
      } catch (error) {
        toast.error("Verification failed");
        setIsValid(false);
      } finally {
        setIsVerifying(false);
      }
    };
    
    verify();
  }, [certId]);
  
  const handleGoHome = () => {
    navigate("/");
  };
  
  if (isVerifying) {
    return (
      <Layout>
        <div className="text-center py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Verifying Certificate
          </h1>
          <div className="w-16 h-16 border-4 border-certificate-blue border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600">Checking certificate authenticity...</p>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Certificate Verification
        </h1>
        <p className="text-gray-600">
          Verification results for certificate ID: {certId}
        </p>
      </div>
      
      <Card className="max-w-md mx-auto">
        <CardHeader className="flex flex-row items-center justify-between">
          <h2 className="text-xl font-semibold">Verification Result</h2>
          <VerificationBadge isValid={isValid} />
        </CardHeader>
        
        <CardContent className="space-y-4">
          {isValid ? (
            <>
              <div>
                <p className="text-sm text-gray-500">Name</p>
                <p className="font-medium">{certDetails.name}</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-500">Event</p>
                <p className="font-medium">{certDetails.event}</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-500">Issued On</p>
                <p className="font-medium">{certDetails.issuedAt}</p>
              </div>
              
              <div className="pt-4">
                <p className="text-sm text-green-600">
                  ✓ This certificate has been verified as authentic
                </p>
              </div>
            </>
          ) : (
            <div className="py-4">
              <p className="text-red-600 mb-4">
                This certificate ID could not be verified.
              </p>
              <p className="text-gray-600">
                The certificate ID may be invalid or may have been revoked.
              </p>
            </div>
          )}
          
          <Button onClick={handleGoHome} variant="outline" className="w-full mt-4">
            Return to Home
          </Button>
        </CardContent>
      </Card>
    </Layout>
  );
};

export default VerifyPage;
