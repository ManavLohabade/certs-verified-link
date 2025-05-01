
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { submitFeedback, fetchEvents } from "../../lib/api";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { toast } from "sonner";

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [event, setEvent] = useState(null);
  const navigate = useNavigate();
  
  // Get query parameters from URL
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get("email") || "";
  const eventId = queryParams.get("eventId") || "";

  useEffect(() => {
    if (!email || !eventId) {
      toast.error("Missing required information");
      navigate("/");
      return;
    }

    const getEventDetails = async () => {
      try {
        const events = await fetchEvents();
        const currentEvent = events.find(e => e.id === eventId);
        if (currentEvent) {
          setEvent(currentEvent);
        } else {
          toast.error("Event not found");
          navigate("/");
        }
      } catch (error) {
        toast.error("Failed to load event details");
        navigate("/");
      }
    };

    getEventDetails();
  }, [email, eventId, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!feedback.trim()) {
      toast.error("Please provide feedback");
      return;
    }

    setIsLoading(true);
    
    try {
      const certId = await submitFeedback(email, eventId, feedback);
      navigate(`/certificate?email=${encodeURIComponent(email)}&eventId=${eventId}&certId=${certId}`);
    } catch (error) {
      toast.error("Failed to submit feedback");
    } finally {
      setIsLoading(false);
    }
  };

  if (!event) {
    return <div className="text-center py-8">Loading event details...</div>;
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-800">Event Feedback</h2>
        <p className="text-gray-600 mt-1">
          Please share your feedback for <strong>{event.title}</strong>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="feedback" className="block text-sm font-medium text-gray-700">
            Your feedback
          </label>
          <Textarea
            id="feedback"
            placeholder="Please share your thoughts about the event..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="min-h-32"
            required
          />
        </div>

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Submitting..." : "Submit & Generate Certificate"}
        </Button>
      </form>
    </div>
  );
};

export default FeedbackForm;
