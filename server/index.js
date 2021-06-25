import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import postRoutes from "./routes/posts.js";

// const express = require("express");

const app = express();

// dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// should be under cors
app.use("/posts", postRoutes);

// require("dotenv").config();

const CONNECTION_URL =
  "mongodb+srv://dbUser:Q4MweZuf1hPJ85lX@cluster0.auwzn.mongodb.net/memories?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.error("error mongoose", error.message));

mongoose.set("useFindAndModify", false);
