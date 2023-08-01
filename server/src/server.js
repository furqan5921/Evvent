

// Load environment variables from .env file
require("dotenv").config();

// Import required modules
const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 8080;
const userRoute = require("./routes/userRoute");
const taskRoute = require("./routes/taskRoute");
const categoryRoute = require("./routes/categoryRoute")
const connection = require("./config/dbConnect");

// Create Express app
const app = express();

// Enable CORS middleware
app.use(cors());

// Enable JSON and URL-encoded body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// User Routes: Handles user-related routes
app.use("/users", userRoute);

// Task Routes: Handles task-related routes
app.use("/tasks", taskRoute);

//Category Routes: Handles category-related routes
app.use("/categories", categoryRoute);

// Connect to the MongoDB database
connection();

// Start the Express app and listen on the specified port
app.listen(PORT, () => {
    console.log("Listening on port " + PORT);
});
