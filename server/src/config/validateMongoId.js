const mongoose = require('mongoose');

const validateMongodbId = (id, res) => {
    const isValid = mongoose.Types.ObjectId.isValid(id)
    if (!isValid) res.status(400).send("this is not a valid id or not found")
}

module.exports = validateMongodbId