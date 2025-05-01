
export async function verifyCertificate(certId: string) {
  try {
    // In a real application, this would be a fetch to your API
    // For demonstration, we're returning mock data
    return new Promise((resolve) => {
      setTimeout(() => {
        if (certId === "invalid") {
          resolve({
            valid: false
          });
        } else {
          resolve({
            valid: true,
            name: "John Doe",
            email: "john.doe@example.com",
            eventTitle: "Web Development Bootcamp",
            issueDate: "2025-04-15"
          });
        }
      }, 1000);
    });
  } catch (error) {
    console.error("Error verifying certificate:", error);
    throw error;
  }
}

/**
 * Fetch all events
 */
export const fetchEvents = async () => {
  // Mock implementation for demonstration
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: "evt-001",
          title: "Web Development Bootcamp",
          date: "2025-04-10"
        },
        {
          id: "evt-002",
          title: "React Advanced Workshop",
          date: "2025-05-20"
        },
        {
          id: "evt-003",
          title: "TypeScript Masterclass",
          date: "2025-06-15"
        }
      ]);
    }, 500);
  });
};

/**
 * Validate a user for an event
 */
export const validateUser = async (email: string, eventId: string) => {
  // Mock implementation for demonstration
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simulate a user who has already submitted feedback (has certificate)
      if (email.includes("existing")) {
        resolve({
          hasSubmitted: true,
          certificateUrl: "https://example.com/certificates/cert-123.pdf"
        });
      } else {
        // Simulate a new user who needs to submit feedback
        resolve({
          hasSubmitted: false
        });
      }
    }, 500);
  });
};

/**
 * Submit feedback and generate certificate
 */
export const submitFeedback = async (email: string, eventId: string, feedbackText: string) => {
  // Mock implementation for demonstration
  return new Promise((resolve) => {
    setTimeout(() => {
      // Return a mock certificate ID
      resolve("cert-" + Date.now());
    }, 1000);
  });
};

/**
 * Get certificate download URL
 */
export const getCertificateDownloadUrl = (certId: string) => {
  return `https://example.com/certificates/${certId}`;
};
