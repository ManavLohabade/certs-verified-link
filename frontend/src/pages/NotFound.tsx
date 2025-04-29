
import React from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

const NotFound: React.FC = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center text-center py-10">
        <AlertCircle className="h-20 w-20 text-red-500 mb-6" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
        <p className="text-gray-600 max-w-md mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <Button asChild>
          <Link to="/">Return to Homepage</Link>
        </Button>
      </div>
    </Layout>
  );
};

export default NotFound;
