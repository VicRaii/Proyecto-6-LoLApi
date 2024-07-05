const mongoose = require("mongoose");

const regionSchema = new mongoose.Schema(
  {
    img: { type: "String", required: true },
    name: { type: "String", required: true },
    champions: [
      { type: mongoose.Types.ObjectId, ref: "champions", required: false },
    ],
  },
  {
    timestamps: true,
    collection: "regions",
  }
);

const Region = mongoose.model("regions", regionSchema, "regions");
module.exports = Region;
