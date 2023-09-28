const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const campaign = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      // required: true,
    },
    image: {
      type: String,
      // required: true,
    },
    place: { type: String },
    time: { type: String },
    data: { type: String },
    createdAt:{type:String},
    volunteers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        // required: true,
      },
    ],
  },
  { timestamps: true }
);
const campaignSchema = mongoose.model("campaignSchema", campaign);

module.exports = campaignSchema;
