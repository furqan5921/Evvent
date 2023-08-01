

const Category = require("../models/categoryModel");

// Controller to create a new category
const createCategory = async (req, res) => {
    const { category } = req.body;
    try {
        const newCategory = await Category.create({ category });
        res.status(201).send(newCategory);
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
};

// Controller to get all categories 
const getAllCategories = async (req, res) => {
    try {
        const userCategories = await Category.find();
        res.status(200).send(userCategories);
    } catch (err) {
        res.status(500).send({ error: "Server error" });
    }
};

// Controller to get all categories for a specific user
const getAllCategoriesofUser = async (req, res) => {
    try {
        const userCategories = await Category.find({ user: req.user._id })
        res.status(200).send(userCategories);
    } catch (e) {
        res.status(500).send({ error: "Server error" });
    }
}
module.exports = { createCategory, getAllCategories, getAllCategoriesofUser };
