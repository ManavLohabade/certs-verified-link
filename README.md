
# Certificate Generator - The Learners Den

A web application for generating and verifying certificates for event attendees. This project includes both frontend and backend components.

## Project Structure

```
├── frontend/                # React frontend
│   ├── public/              # Static assets
│   └── src/                 # Source code
│       ├── components/      # React components
│       │   ├── Certificate/ # Certificate-related components
│       │   ├── common/      # Common UI components
│       │   ├── Forms/       # Form components
│       │   ├── Layout/      # Layout components
│       │   └── ui/          # UI components (shadcn/ui)
│       ├── lib/             # Utility functions
│       ├── pages/           # Page components
│       └── types/           # TypeScript types
├── backend/                 # Node.js backend
│   ├── certificates/        # Generated certificates storage
│   ├── routes/              # API routes
│   └── services/            # Business logic services
```

## Features

- User authentication via email
- Event selection and feedback submission
- Certificate generation with unique identifiers
- Certificate verification via QR code and unique URL
- Responsive design for all devices

## Tech Stack

### Frontend
- React with TypeScript
- React Router for navigation
- Tailwind CSS for styling
- shadcn/ui components
- React Query for data fetching

### Backend
- Node.js with Express
- Certificate generation with Canvas
- QR Code generation for verification

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/ManavLohabade/Certificate-Generator---TLD.git
cd Certificate-Generator---TLD
```

2. Install frontend dependencies
```bash
cd frontend
npm install
```

3. Install backend dependencies
```bash
cd ../backend
npm install
```

### Running the application

1. Start the backend server
```bash
cd backend
npm run dev
```

2. In a new terminal, start the frontend application
```bash
cd frontend
npm run dev
```

3. Open your browser and navigate to `http://localhost:8080`

## License

This project is licensed under the MIT License.
