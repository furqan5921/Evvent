const { Router } = require("express")
const { createUser, loginUser, getaUser } = require("../controller/userCtrl")

const app = Router()
// Route to create a new user (signup)
app.post("/signup", createUser)

// Route to login a user
app.post("/login", loginUser)

// Route to get a specific user by ID
app.get("/:id", getaUser)


module.exports = app