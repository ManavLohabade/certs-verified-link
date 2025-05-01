
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
