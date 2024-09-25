const mongoose = require("mongoose");

const CardSchema = new mongoose.Schema(
  {
    title : String,
    linkImage: String
  },
  {
    timestamps: true,
  }
);

const Card = mongoose.model("Cards", CardSchema, "cards");

module.exports = Card;