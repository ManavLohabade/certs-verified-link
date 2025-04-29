
import React from "react";
import Layout from "@/components/Layout";
import FeedbackForm from "@/components/FeedbackForm";

const FeedbackPage: React.FC = () => {
  return (
    <Layout>
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Event Feedback</h1>
        <p className="text-gray-600">
          Share your thoughts and receive your certificate
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 border">
        <FeedbackForm />
      </div>
    </Layout>
  );
};

export default FeedbackPage;
