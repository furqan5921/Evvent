const { Router } = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const { createCategory, getAllCategories, getAllCategoriesofUser } = require("../controller/categoryCtrl");

const app = Router();
app.get("/", authMiddleware, getAllCategories)
app.post("/post", authMiddleware, createCategory)
app.post("/user", authMiddleware, getAllCategoriesofUser)


module.exports = app