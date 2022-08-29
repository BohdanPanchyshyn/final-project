require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;

db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Database connected"));

app.use(express.json())

const userRouters = require("./routes/users")
const newsRouters = require("./routes/news")
app.use("/api", userRouters, newsRouters)


app.listen(3000, () => console.log("Server started"));