# 23IT103_FSWD_External
College Event Management Module

college-event-management/
├── client/                     # Frontend React application
│   ├── public/                 # Public assets
│   ├── src/
│   │   ├── components/         # React components (Auth, Events, UI, etc.)
│   │   ├── context/            # React Context for state management
│   │   ├── utils/              # Utility functions for API calls and authentication
│   │   ├── App.js              # Main App component
│   │   ├── index.js            # Entry point
│   ├── package.json            # Client dependencies
│
├── server/                     # Backend Express application
│   ├── config/                 # Database connection and configuration
│   ├── controllers/            # Controllers for handling routes
│   ├── middleware/             # Middleware for authentication, file upload
│   ├── models/                 # Mongoose models (Event, User, etc.)
│   ├── routes/                 # Routes for event and authentication APIs
│   ├── uploads/                # Folder for event images
│   ├── app.js                  # Express app setup
│   ├── server.js               # Entry point for the backend
│   └── package.json            # Backend dependencies
└── package.json
