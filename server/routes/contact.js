const express = require("express");
const contactRouter = express.Router();
const contactController = require("../controller/contactController");

contactRouter.post("/contact", contactController.create);
