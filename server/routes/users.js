const express = require("express");
const router = express.Router();
const User = require("../models/user")

//create user
router.post("/users", async (req, res) => {
    const user = new User({
        name: req.body.name,
        username: req.body.username,
        avatarLink: req.body.avatarLink,
    })
    try {
        const newUser = await user.save()
        res.status(201).json(newUser)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//get all users
router.get("/users", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//get news by id
router.get("/users/:id", getUser, (req, res) => {
    try {
        res.json(res.user)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//delete one
router.delete("/users/:id", getUser, async (req, res) => {
    try {
        await res.user.remove()
        res.json({ message: "success" })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})


async function getUser(req, res, next) {
    let user
    try {
        user = await User.findById(req.params.id);
        if (user === null) {
            return res.status(404).json({ message: "Cannot find user" })
        }
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
    res.user = user
    next()
}

module.exports = router;