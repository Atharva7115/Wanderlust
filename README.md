# 🌍 Wanderlust

Wanderlust is a full-stack web application inspired by Airbnb, designed to allow users to list and explore rental properties. It includes user authentication, property listings, image uploads, and a review system. Built using Node.js, Express, EJS templating, MongoDB, and various backend tools, Wanderlust provides a simple yet powerful experience for both travelers and hosts.

🚀 **Live Demo**: [https://wanderlust-0opy.onrender.com](https://wanderlust-0opy.onrender.com)

## 🛠️ Tech Stack

- Frontend: HTML, CSS, JavaScript, EJS
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: Passport.js (Local Strategy)
- File Uploads: Multer & Cloudinary
- Validation: Joi
- Flash Messages: connect-flash
- Session Management: express-session
- Environment Config: dotenv

## ✨ Features

- 🔐 User Registration & Login (Authentication with Passport.js)
- 🏘️ Add, Edit, View, and Delete Property Listings
- 🖼️ Upload Property Images using Cloudinary
- 📝 Leave Reviews and Ratings on Properties
- 🗂️ View All Listings on the Home Page
- ✅ Server-side Input Validation using Joi
- 💬 Flash Messages for Feedback (e.g., login success, errors)
- 🌐 RESTful Routing with EJS Templates

## 📁 Project Structure
wanderlust/
├── controllers/             # Controller logic for routes (handlers)
├── init/                    # Initialization files (e.g., DB connection or seeding)
├── models/                  # Mongoose models (User, Listing, Review, etc.)
├── node_modules/            # Installed packages
├── public/                  # Static assets (CSS, JS)
│   ├── css/
│   └── js/
├── routes/                  # Express routes (listing, users, reviews, etc.)
├── uploads/                 # Uploaded image files (optional if using Cloudinary)
├── utils/                   # Utility functions (Cloudinary config, error handlers)
├── views/                   # EJS templates
│   ├── includes/            # Common partials like header, footer
│   ├── layouts/             # Main layout file
│   ├── listings/            # Views related to listings (index, new, edit, show)
│   └── users/               # Views related to user auth (login, signup)
│   └── error.ejs            # Error page template
├── .env                     # Environment variables
├── .gitignore               # Git ignore file
├── app.js                   # Main application file
├── cloudConfig.js           # Cloudinary configuration
├── middleware.js            # Custom middleware (isLoggedIn, validate, etc.)
├── schema.js                # Joi validation schemas
├── package.json             # Project dependencies and scripts
└── package-lock.json        # Dependency lock file

👩‍💻 Author
Atharva Chandurkar

GitHub: @Atharva7115

Deployed App: Wanderlust on Render



🧠 Future Improvements
Google OAuth Integration
Advanced Search and Filters
Property Booking and Calendar
Map Integration with Location Pins
Responsive UI Enhancements

