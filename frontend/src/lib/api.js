
/**
 * Fetch all events
 */
export const fetchEvents = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL || "http://localhost:5000/api"}/events`);
  if (!response.ok) {
    throw new Error("Failed to fetch events");
  }
  return response.json();
};

/**
 * Validate a user for an event
 */
export const validateUser = async (email, eventId) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL || "http://localhost:5000/api"}/events/validate`, {
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
export const submitFeedback = async (email, eventId, feedbackText) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL || "http://localhost:5000/api"}/certificates/generate`, {
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
export const verifyCertificate = async (certId) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL || "http://localhost:5000/api"}/certificates/verify/${certId}`);

  if (!response.ok) {
    return { valid: false };
  }

  return response.json();
};

/**
 * Get certificate download URL
 */
export const getCertificateDownloadUrl = (certId) => {
  return `${import.meta.env.VITE_API_URL || "http://localhost:5000/api"}/certificates/download/${certId}`;
};
