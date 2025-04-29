
const express = require('express');
const router = express.Router();
const eventService = require('../services/eventService');

// Get all events
router.get('/', async (req, res) => {
  try {
    const events = await eventService.getAllEvents();
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get event by ID
router.get('/:id', async (req, res) => {
  try {
    const event = await eventService.getEventById(req.params.id);
    
    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }
    
    res.json(event);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Validate a user for an event
router.post('/validate', async (req, res) => {
  try {
    const { email, eventId } = req.body;
    
    if (!email || !eventId) {
      return res.status(400).json({ error: 'Email and event ID are required' });
    }
    
    const validation = await eventService.validateUser(email, eventId);
    res.json(validation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
