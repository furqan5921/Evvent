const Category = require("../models/categoryModel");

const findCategoryById = async (req, res, next) => {
    const categoryId = req.body.category; 

    try {
        const category = await Category.findById(categoryId);
        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }
        req.category = category;
        next();
    } catch (err) {
        return res.status(500).json({ message: "Server error" });
    }
};

module.exports = findCategoryById;
