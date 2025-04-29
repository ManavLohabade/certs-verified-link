
import { Event } from "@/types/models";

// Mock events data
const mockEvents: Event[] = [
  {
    id: "evt-001",
    title: "NextGen Tech Conference",
    date: "2025-04-15",
    description: "A conference focusing on emerging technologies and innovation."
  },
  {
    id: "evt-002",
    title: "Web Development Workshop",
    date: "2025-05-20",
    description: "Hands-on workshop on modern web development techniques."
  },
  {
    id: "evt-003",
    title: "Data Science Bootcamp",
    date: "2025-06-10",
    description: "Intensive training on data analysis and machine learning."
  }
];

// Mock certificates data
const mockCertificates = {
  "cert123": {
    name: "John Doe",
    email: "john.doe@example.com",
    eventTitle: "NextGen Tech Conference",
    issueDate: "April 15, 2025",
    valid: true
  },
  "cert456": {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    eventTitle: "Web Development Workshop",
    issueDate: "May 20, 2025",
    valid: true
  }
};

// Simulated API calls with Promise-based responses

// Fetch all events
export const fetchEvents = async (): Promise<Event[]> => {
  // Simulate API call delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockEvents);
    }, 500);
  });
};

// Validate a user (check if they're registered for an event)
export const validateUser = async (email: string, eventId: string) => {
  // Simulate API call delay
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // For demo purposes, assume all emails with "test" are already submitted
      const hasSubmitted = email.includes("test");
      
      if (mockEvents.some(event => event.id === eventId)) {
        resolve({
          validated: true,
          hasSubmitted,
          certificateUrl: hasSubmitted ? `/certificates/cert123.pdf` : null
        });
      } else {
        reject(new Error("Event not found"));
      }
    }, 800);
  });
};

// Submit feedback and generate certificate
export const submitFeedback = async (email: string, eventId: string, feedback: string) => {
  // Simulate API call delay
  return new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      if (feedback && email && eventId) {
        // In a real app, this would create a certificate on the server
        // and return the certificate ID
        resolve("cert" + Math.random().toString(36).substr(2, 6));
      } else {
        reject(new Error("Missing required fields"));
      }
    }, 1500);
  });
};

// Verify certificate
export const verifyCertificate = async (certId: string) => {
  // Simulate API call delay
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Check if certificate exists in our mock data
      const certificate = mockCertificates[certId as keyof typeof mockCertificates];
      
      if (certificate) {
        resolve(certificate);
      } else {
        // For demo purposes, generate random data for any certificate ID
        // In a real app, this would reject for non-existent certificates
        const randomValid = Math.random() > 0.3; // 70% chance of being valid
        
        if (randomValid) {
          resolve({
            name: "Demo User",
            email: "demo@example.com",
            eventTitle: "Sample Event",
            issueDate: "April 29, 2025",
            valid: true
          });
        } else {
          reject(new Error("Certificate not found"));
        }
      }
    }, 1200);
  });
};
