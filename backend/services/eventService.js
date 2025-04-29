
// In-memory storage for events (would be a database in production)
const events = [
  {
    id: 'evt-001',
    title: 'NextGen Tech Conference',
    date: '2025-04-15',
    description: 'A conference focusing on emerging technologies and innovation.'
  },
  {
    id: 'evt-002',
    title: 'Web Development Workshop',
    date: '2025-05-20',
    description: 'Hands-on workshop on modern web development techniques.'
  },
  {
    id: 'evt-003',
    title: 'Data Science Bootcamp',
    date: '2025-06-10',
    description: 'Intensive training on data analysis and machine learning.'
  }
];

// In-memory storage for user submissions (would be a database in production)
const userSubmissions = {};

const getAllEvents = async () => {
  return events;
};

const getEventById = async (id) => {
  return events.find(event => event.id === id) || null;
};

const validateUser = async (email, eventId) => {
  // Check if user exists for this event
  const userKey = `${email}-${eventId}`;
  const hasSubmitted = userSubmissions[userKey] || false;
  
  // In production, this would check a database
  
  // For demo purposes, assume all valid events
  const eventExists = events.some(event => event.id === eventId);
  
  if (!eventExists) {
    throw new Error('Event not found');
  }
  
  return {
    validated: true,
    hasSubmitted,
    certificateUrl: hasSubmitted ? `/api/certificates/download/${userSubmissions[userKey]}` : null
  };
};

const recordSubmission = async (email, eventId, certId) => {
  const userKey = `${email}-${eventId}`;
  userSubmissions[userKey] = certId;
};

module.exports = {
  getAllEvents,
  getEventById,
  validateUser,
  recordSubmission
};
