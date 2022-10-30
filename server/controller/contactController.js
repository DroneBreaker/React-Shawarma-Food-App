const contact = require("../model/contactModel");

exports.create = async (req, res) => {
  try {
    const contact = await userModel.create(req.body);
    res.status(201).json({ contact });
  } catch (error) {
    res.json(error.errors);
  }
};
