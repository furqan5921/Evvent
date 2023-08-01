const User = require("../models/userModel")
const argon2 = require("argon2")
const jwt = require("jsonwebtoken");
const { generateToken, generateRefreshToken } = require("../config/generateToken");
const validateMongodbId = require("../config/validateMongoId");
//create a new user
const createUser = async (req, res) => {
    const { email, name, password } = req.body;

    const user = await User.findOne({ email })
    if (!user) {
        try {
            const hash = await argon2.hash(password);
            // console.log(hash)
            const newUser = await User.create({ email, name, password: hash });
            return res.status(201).send({
                msg: "User Created successfully",
                success: true
            })
        } catch (e) {
            return res.status(500).send({
                msg: e.message,
                success: false
            })
        }
    }
    else {
        res.status(409).send({ msg: "User already exists", success: false });
    }
}

// login a user
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            res.status(404).send("User Not Found")
        }
        const validatePassword = await argon2.verify(user.password, password);
        if (validatePassword) {
            const { _id, email } = user;

            return res.status(200).send({
                message: "Login success",
                token: generateToken(_id, email),
                refreshToken: generateRefreshToken(_id)
            });
        }
        else {
            res.status(404).send("Password is Not Mathching")
        }
    } catch (err) {
        res.status(400).send(err.message)
    }

    return res.status(400).send("Invalid login");
}

//get a single user 
const getaUser = async (req, res) => {
    const { id } = req.params;
    validateMongodbId(id, res);
    try {
      const user = await User.findById(id);
      if (user) {
        res.status(200).send(user);
      } else {
        res.status(404).send("User Not Found"); 
      }
    } catch (err) {
      res.status(500).send(err.message); 
    }
  };

module.exports = { createUser, loginUser, getaUser }