
import React from "react";
import Layout from "@/components/Layout";
import FeedbackForm from "@/components/FeedbackForm";
import { Star, BarChart2, Award } from "lucide-react";

const FeedbackPage: React.FC = () => {
  return (
    <Layout>
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Event Feedback</h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Share your thoughts about the event you attended and receive your personalized certificate
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
        <FeedbackForm />
      </div>
      
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-50 rounded-lg p-6 flex flex-col items-center text-center">
          <Star className="h-8 w-8 text-certificate-blue mb-3" />
          <h3 className="text-lg font-medium text-gray-800 mb-2">
            Rate Your Experience
          </h3>
          <p className="text-gray-600 text-sm">
            Your feedback helps us improve future events
          </p>
        </div>
        
        <div className="bg-green-50 rounded-lg p-6 flex flex-col items-center text-center">
          <Award className="h-8 w-8 text-green-600 mb-3" />
          <h3 className="text-lg font-medium text-gray-800 mb-2">
            Receive Certificate
          </h3>
          <p className="text-gray-600 text-sm">
            Get your personalized certificate after submitting feedback
          </p>
        </div>
        
        <div className="bg-amber-50 rounded-lg p-6 flex flex-col items-center text-center">
          <BarChart2 className="h-8 w-8 text-amber-600 mb-3" />
          <h3 className="text-lg font-medium text-gray-800 mb-2">
            Impact Metrics
          </h3>
          <p className="text-gray-600 text-sm">
            Your input contributes to our continuous improvement
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default FeedbackPage;
