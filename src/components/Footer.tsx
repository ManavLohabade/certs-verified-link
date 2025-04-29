
import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "./ui/badge";
import { Award, Shield } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t mt-auto bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="flex items-center text-gray-700">
              <Award className="h-4 w-4 mr-2 text-certificate-blue" />
              © {new Date().getFullYear()} The Learners Den
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Empowering education through verified credentials
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/verify" className="text-sm text-certificate-blue hover:underline transition-colors">
              Verify Certificate
            </Link>
            <Badge variant="outline" className="flex items-center">
              <Shield className="h-3 w-3 mr-1 text-green-600" />
              <span className="text-xs">CertVerify Protected</span>
            </Badge>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
