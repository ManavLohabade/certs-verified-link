
import React from "react";
import Layout from "../components/Layout";

const FeedbackPage: React.FC = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center py-8">
        <h1 className="text-3xl font-bold mb-6">Feedback</h1>
        <p className="text-gray-600 mb-8">
          This feature is coming soon. Please check back later.
        </p>
      </div>
    </Layout>
  );
};

export default FeedbackPage;
