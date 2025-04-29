
const express = require('express');
const router = express.Router();
const certificateService = require('../services/certificateService');

// Generate a new certificate
router.post('/generate', async (req, res) => {
  try {
    const { email, eventId, feedback } = req.body;
    
    if (!email || !eventId) {
      return res.status(400).json({ error: 'Email and event ID are required' });
    }
    
    const certificate = await certificateService.generateCertificate(email, eventId, feedback);
    res.json({ success: true, certificateId: certificate.id, url: certificate.url });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Verify a certificate
router.get('/verify/:certId', async (req, res) => {
  try {
    const { certId } = req.params;
    const certificate = await certificateService.verifyCertificate(certId);
    
    if (!certificate) {
      return res.status(404).json({ valid: false, message: 'Certificate not found' });
    }
    
    res.json({ valid: true, ...certificate });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Download a certificate
router.get('/download/:certId', async (req, res) => {
  try {
    const { certId } = req.params;
    const certificatePath = await certificateService.getCertificatePath(certId);
    
    if (!certificatePath) {
      return res.status(404).json({ error: 'Certificate not found' });
    }
    
    res.download(certificatePath);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
