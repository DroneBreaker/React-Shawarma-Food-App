const { default: mongoose } = require("mongoose");
const Schema = require("mongoose").Schema;

const ContactSchema = new Schema({
  name: String,
  subject: String,
  message: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Contact", ContactSchema);
