
import React from "react";
import QRCode from "qrcode.react";

const CertificatePreview = ({
  userName = "Manav Lohabade",
  eventName = "NextGen Hackathon",
  date = "April 29, 2025",
  certId = "abc123xyz",
}) => {
  const verificationUrl = `https://certs.thelearnersden.com/verify/${certId}`;

  return (
    <div className="certificate-container rounded-lg p-1 shadow-lg max-w-3xl mx-auto mb-8">
      <div className="bg-white rounded-lg border certificate-border p-8 relative">
        <div className="certificate-header rounded-t-lg absolute top-0 left-0 right-0 h-20"></div>
        
        <div className="text-center mt-16 mb-8 relative">
          <div className="inline-block bg-certificate-gold text-white px-3 py-1 rounded-full text-xs mb-2">
            OFFICIAL CERTIFICATE
          </div>
          <h1 className="text-3xl font-bold mb-1">Certificate of Completion</h1>
          <p className="text-gray-500">This certificate is awarded to</p>
        </div>
        
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold text-certificate-darkBlue mb-2">{userName}</h2>
          <p className="text-lg text-gray-700">
            for successfully completing the <strong>{eventName}</strong>
          </p>
        </div>
        
        <div className="text-center mb-12">
          <p className="text-gray-600">Issued on {date}</p>
        </div>
        
        <div className="flex justify-between items-end">
          <div className="signature">
            <div className="w-40 border-b border-gray-400 mb-2"></div>
            <p className="text-sm text-gray-600">Program Director</p>
          </div>
          
          <div className="text-right">
            <div className="flex flex-col items-end">
              <QRCode value={verificationUrl} size={80} />
              <p className="text-xs text-gray-500 mt-2">
                Verify: certs.thelearnersden.com/verify/{certId}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificatePreview;
