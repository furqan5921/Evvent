const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
    {
        category: { type: String, required: true, unique: true },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
