const express = require("express");
const router = express.Router();
const News = require("../models/newsSchema")

//create news
router.post("/news", async (req, res) => {
  const newNews = new News({
    title: req.body.title,
    text: req.body.text,
    image: req.body.image,
  })
  try {
    const news = await newNews.save()
    res.status(201).json(news)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

//get all news
router.get("/news", async (req, res) => {
  try {
    const news = await News.find();
    res.json(news)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

//get news by id
router.get("/news/:id", getOneNews, (req, res) => {
  // try {
  res.json(res.item)
  // } catch (error) {
  //   res.status(400).json({ message: error.message })
  // }
})

//update one
router.patch("/news/:id", getOneNews, async (req, res) => {
  if (req.body.title !== null) res.item.title = req.body.title
  if (req.body.text !== null) res.item.text = req.body.text
  if (req.body.image !== null) res.item.image = req.body.image

  try {
    const updatedNews = await res.item.save()
    res.json(updatedNews)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

//delete one
router.delete("/news/:id", getOneNews, async (req, res) => {
  try {
    await res.item.remove()
    res.json({ message: "success" })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

async function getOneNews(req, res, next) {
  let item
  try {
    item = await News.findById(req.params.id);
    if (item === null) {
      return res.status(404).json({ message: "Cannot find news" })
    }
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
  res.item = item
  next()
}

module.exports = router;