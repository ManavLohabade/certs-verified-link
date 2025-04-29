
const path = require('path');
const fs = require('fs').promises;
const { createCanvas, loadImage } = require('canvas');
const QRCode = require('qrcode');
const { v4: uuidv4 } = require('uuid');

// In-memory storage for certificates (would be a database in production)
const certificates = {};

const generateCertificate = async (email, eventId, feedback = '') => {
  try {
    // Get user and event information (in production, this would fetch from a database)
    const eventName = await getEventName(eventId);
    const userName = getUserNameFromEmail(email);
    
    // Generate a unique certificate ID
    const certId = `cert-${uuidv4().substring(0, 8)}`;
    
    // Create certificate file path
    const certificatesDir = path.join(__dirname, '../certificates');
    await fs.mkdir(certificatesDir, { recursive: true });
    
    const certificatePath = path.join(certificatesDir, `${certId}.pdf`);
    
    // Generate certificate (simplified - in production, this would create a real PDF)
    await generateCertificateFile(certificatePath, {
      userName,
      email,
      eventName,
      certId
    });
    
    // Store certificate information
    const issueDate = new Date().toLocaleString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
    
    certificates[certId] = {
      name: userName,
      email,
      eventTitle: eventName,
      issueDate,
      valid: true,
      feedback
    };
    
    return {
      id: certId,
      url: `/certificates/${certId}.pdf`
    };
  } catch (error) {
    console.error('Error generating certificate:', error);
    throw new Error('Failed to generate certificate');
  }
};

const verifyCertificate = async (certId) => {
  // In production, this would query a database
  return certificates[certId] || null;
};

const getCertificatePath = async (certId) => {
  const certificatePath = path.join(__dirname, '../certificates', `${certId}.pdf`);
  
  try {
    await fs.access(certificatePath);
    return certificatePath;
  } catch (error) {
    return null;
  }
};

// Helper functions
const getEventName = async (eventId) => {
  // In production, this would fetch from a database
  const events = {
    'evt-001': 'NextGen Tech Conference',
    'evt-002': 'Web Development Workshop',
    'evt-003': 'Data Science Bootcamp'
  };
  
  return events[eventId] || 'The Learners Den Event';
};

const getUserNameFromEmail = (email) => {
  // Extract name from email (simple logic for demo)
  const namePart = email.split('@')[0];
  return namePart
    .split('.')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
};

const generateCertificateFile = async (filePath, data) => {
  // In a real implementation, this would generate a PDF
  // For this example, we'll just create a dummy file
  const content = `Certificate for ${data.userName} - Event: ${data.eventName} - ID: ${data.certId}`;
  await fs.writeFile(filePath, content);
};

module.exports = {
  generateCertificate,
  verifyCertificate,
  getCertificatePath
};
