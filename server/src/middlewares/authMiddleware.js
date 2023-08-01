// middlewares/authMiddleware.js

const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const authMiddleware = async (req, res, next) => {
  try {
    let token;
    if (req?.headers?.authorization?.startsWith("Bearer")) {
      token = req.headers.authorization.split(" ")[1];
      if (token) {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded?.id);
        if (user) {
          req.user = user;
          next();
        } else {
          res.status(401).send({ message: "User not found" });
        }
      } else {
        res.status(401).send({ message: "Invalid token" });
      }
    } else {
      res.status(401).send({ message: "Invalid authorization" });
    }
  } catch (err) {
    if (err instanceof jwt.TokenExpiredError) {
      res.status(401).send({ message: "Token expired, please log in again" });
    } else {
      res.status(500).send({ message: "Internal Server Error" });
    }
  }
};

module.exports = authMiddleware;

