
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Import routes
const certificateRoutes = require('./routes/certificateRoutes');
const eventRoutes = require('./routes/eventRoutes');

// Use routes
app.use('/api/certificates', certificateRoutes);
app.use('/api/events', eventRoutes);

// Serve certificate files
app.use('/certificates', express.static(path.join(__dirname, 'certificates')));

app.get('/', (req, res) => {
  res.send('Certificate Generator API is running');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
