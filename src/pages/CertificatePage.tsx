
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchEvents } from "@/lib/api";
import { Event } from "@/types/models";
import Layout from "@/components/Layout";
import CertificatePreview from "@/components/CertificatePreview";
import CertificateDownload from "@/components/CertificateDownload";
import { toast } from "sonner";

const CertificatePage: React.FC = () => {
  const [event, setEvent] = useState<Event | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get query parameters
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get("email");
  const eventId = queryParams.get("eventId");
  const certId = queryParams.get("certId");
  
  // Format current date
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  
  useEffect(() => {
    if (!email || !eventId || !certId) {
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
      }
    };
    
    getEventDetails();
  }, [email, eventId, certId, navigate]);
  
  // Extract user's name from email for demo purposes
  const userName = email ? email.split('@')[0].split('.').map(name => 
    name.charAt(0).toUpperCase() + name.slice(1)
  ).join(' ') : '';
  
  if (!event) {
    return (
      <Layout>
        <div className="text-center py-8">Loading certificate details...</div>
      </Layout>
    );
  }
  
  return (
    <Layout maxWidth="max-w-4xl">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Certificate</h1>
        <p className="text-gray-600 mb-4">
          Congratulations on completing {event.title}!
        </p>
      </div>
      
      <CertificatePreview
        userName={userName}
        eventName={event.title}
        date={formattedDate}
        certId={certId}
      />
      
      <div className="max-w-lg mx-auto">
        <CertificateDownload certId={certId} />
      </div>
    </Layout>
  );
};

export default CertificatePage;
