
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { FileText, Download, QrCode } from "lucide-react";

interface CertificateDownloadProps {
  certId: string;
}

const CertificateDownload: React.FC<CertificateDownloadProps> = ({ certId }) => {
  const [isDownloading, setIsDownloading] = useState(false);
  
  const handleDownload = () => {
    setIsDownloading(true);
    
    // Simulate download process
    setTimeout(() => {
      toast.success("Certificate downloaded successfully!");
      setIsDownloading(false);
    }, 1500);
    
    // In a real app, this would trigger the actual download
    // window.open(`/api/certificates/${certId}/download`, '_blank');
  };

  const verificationUrl = `https://certs.thelearnersden.com/verify/${certId}`;

  return (
    <div className="bg-gray-50 border rounded-lg p-6 space-y-6">
      <div className="flex items-center space-x-3">
        <FileText className="w-6 h-6 text-certificate-blue" />
        <div>
          <h3 className="font-medium">Certificate ID</h3>
          <p className="text-sm text-gray-500">{certId}</p>
        </div>
      </div>
      
      <div className="flex items-center space-x-3">
        <QrCode className="w-6 h-6 text-certificate-blue" />
        <div>
          <h3 className="font-medium">Verification URL</h3>
          <a 
            href={verificationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-certificate-blue hover:underline"
          >
            {verificationUrl}
          </a>
        </div>
      </div>
      
      <Button 
        onClick={handleDownload}
        disabled={isDownloading}
        className="w-full flex items-center justify-center space-x-2"
      >
        <Download className="w-4 h-4" />
        <span>{isDownloading ? "Downloading..." : "Download Certificate"}</span>
      </Button>
      
      <p className="text-xs text-gray-500 text-center">
        A copy of this certificate has been emailed to you.
      </p>
    </div>
  );
};

export default CertificateDownload;
