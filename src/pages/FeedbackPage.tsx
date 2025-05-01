
import React from "react";
import Layout from "../components/Layout";
import FeedbackForm from "../components/FeedbackForm";

const FeedbackPage: React.FC = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center py-8">
        <h1 className="text-3xl font-bold mb-6">Feedback</h1>
        <div className="w-full max-w-md">
          <FeedbackForm />
        </div>
      </div>
    </Layout>
  );
};

export default FeedbackPage;
