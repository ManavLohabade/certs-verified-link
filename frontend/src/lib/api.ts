
import { ValidationResponse, VerificationResponse } from "@/types/models";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

/**
 * Fetch all events
 */
export const fetchEvents = async () => {
  const response = await fetch(`${API_URL}/events`);
  if (!response.ok) {
    throw new Error("Failed to fetch events");
  }
  return response.json();
};

/**
 * Validate a user for an event
 */
export const validateUser = async (
  email: string,
  eventId: string
): Promise<ValidationResponse> => {
  const response = await fetch(`${API_URL}/events/validate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, eventId }),
  });

  if (!response.ok) {
    throw new Error("Failed to validate user");
  }

  return response.json();
};

/**
 * Submit feedback and generate certificate
 */
export const submitFeedback = async (
  email: string,
  eventId: string,
  feedbackText: string
): Promise<string> => {
  const response = await fetch(`${API_URL}/certificates/generate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, eventId, feedback: feedbackText }),
  });

  if (!response.ok) {
    throw new Error("Failed to submit feedback");
  }

  const data = await response.json();
  return data.certificateId;
};

/**
 * Verify a certificate
 */
export const verifyCertificate = async (
  certId: string
): Promise<VerificationResponse> => {
  const response = await fetch(`${API_URL}/certificates/verify/${certId}`);

  if (!response.ok) {
    return { valid: false };
  }

  return response.json();
};

/**
 * Get certificate download URL
 */
export const getCertificateDownloadUrl = (certId: string): string => {
  return `${API_URL}/certificates/download/${certId}`;
};
