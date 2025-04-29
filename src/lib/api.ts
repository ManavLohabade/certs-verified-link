
import { toast } from "sonner";
import { Event, ValidationResponse, VerificationResponse } from "@/types/models";

// Mock API endpoints - these would connect to your backend in production
const API_BASE = "/api";

// Mock events data
const MOCK_EVENTS: Event[] = [
  {
    id: "1",
    title: "NextGen Hackathon",
    feedbackRequired: true,
    certificateTemplatePath: "/templates/hackathon.png"
  },
  {
    id: "2",
    title: "React Workshop 2025",
    feedbackRequired: true,
    certificateTemplatePath: "/templates/workshop.png"
  },
  {
    id: "3",
    title: "AI Summit",
    feedbackRequired: true,
    certificateTemplatePath: "/templates/summit.png"
  }
];

// Mock certificates data
const MOCK_CERTIFICATES = new Map([
  ["abc123xyz", {
    valid: true,
    name: "Manav Lohabade",
    event: "NextGen Hackathon",
    issuedAt: "2025-04-29"
  }],
  ["def456uvw", {
    valid: true,
    name: "John Doe",
    event: "React Workshop 2025",
    issuedAt: "2025-04-28"
  }]
]);

export async function fetchEvents(): Promise<Event[]> {
  // In production, this would hit your backend API
  return new Promise((resolve) => {
    setTimeout(() => resolve(MOCK_EVENTS), 500);
  });
}

export async function validateUser(email: string, eventId: string): Promise<ValidationResponse> {
  try {
    // Mock API call - in production this would be a real fetch
    return new Promise((resolve) => {
      setTimeout(() => {
        // Simulate a user who's already submitted feedback for event 1
        if (email === "test@example.com" && eventId === "1") {
          resolve({
            hasSubmitted: true,
            certificateUrl: "/certs/abc123xyz.pdf"
          });
        } else {
          resolve({ hasSubmitted: false });
        }
      }, 800);
    });
  } catch (error) {
    toast.error("Failed to validate user");
    throw error;
  }
}

export async function submitFeedback(email: string, eventId: string, feedbackText: string): Promise<string> {
  try {
    // Mock API call - in production this would be a real fetch
    return new Promise((resolve) => {
      setTimeout(() => {
        // Generate a mock certificate ID
        const certId = Math.random().toString(36).substring(2, 10);
        toast.success("🎉 Certificate mailed to your address!");
        resolve(certId);
      }, 1500);
    });
  } catch (error) {
    toast.error("Failed to submit feedback");
    throw error;
  }
}

export async function verifyCertificate(certId: string): Promise<VerificationResponse> {
  try {
    // Mock API call - in production this would be a real fetch
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const certData = MOCK_CERTIFICATES.get(certId);
        if (certData) {
          resolve({
            valid: true,
            ...certData
          });
        } else {
          resolve({ valid: false });
        }
      }, 800);
    });
  } catch (error) {
    toast.error("Failed to verify certificate");
    throw error;
  }
}

export async function generateCertificate(email: string, eventId: string): Promise<string> {
  try {
    // Mock API call - in production this would be a real fetch
    return new Promise((resolve) => {
      setTimeout(() => {
        // Generate a mock certificate ID
        const certId = Math.random().toString(36).substring(2, 10);
        toast.success("Certificate generated successfully!");
        resolve(certId);
      }, 1500);
    });
  } catch (error) {
    toast.error("Failed to generate certificate");
    throw error;
  }
}
