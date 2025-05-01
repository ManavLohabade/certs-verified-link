
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchEvents, validateUser } from "../lib/api";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { toast } from "sonner";

interface Event {
  id: string;
  title: string;
  date: string;
}

const EmailForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [eventId, setEventId] = useState("");
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const eventsList = await fetchEvents();
        setEvents(eventsList as Event[]);
        if (eventsList.length > 0) {
          setEventId((eventsList as Event[])[0].id);
        }
      } catch (error) {
        toast.error("Failed to load events");
      }
    };

    loadEvents();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !eventId) {
      toast.error("Please fill in all fields");
      return;
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsLoading(true);
    
    try {
      const response = await validateUser(email, eventId);
      
      if (response.hasSubmitted) {
        // User already submitted feedback, go to certificate page
        navigate(`/certificate?email=${encodeURIComponent(email)}&eventId=${eventId}&certId=${response.certificateUrl?.split('/').pop()?.replace('.pdf', '')}`);
      } else {
        // User needs to submit feedback
        navigate(`/feedback?email=${encodeURIComponent(email)}&eventId=${eventId}`);
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email address
        </label>
        <Input
          id="email"
          type="email"
          placeholder="yourname@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full"
          required
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="event" className="block text-sm font-medium text-gray-700">
          Event
        </label>
        <Select value={eventId} onValueChange={setEventId} required>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select an event" />
          </SelectTrigger>
          <SelectContent>
            {events.map((event) => (
              <SelectItem key={event.id} value={event.id}>
                {event.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? "Processing..." : "Continue"}
      </Button>
    </form>
  );
};

export default EmailForm;
