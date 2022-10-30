const express = require("express");
const router = express.Router();
const path = require("path");
const contactRouter = require("./contact");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/ ../src/App.tsx"));
});

router.use(contactRouter);

router.all("/*", (req, res) => {
  res.send("Page Not Found");
});
