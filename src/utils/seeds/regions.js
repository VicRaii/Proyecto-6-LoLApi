const mongoose = require("mongoose");
const Region = require("../../api/models/Region");
const regions = require("../../data/regions");

const launchSeed = async () => {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(process.env.DB_URL);
    console.log("Connected to MongoDB");

    await Region.collection.drop();
    console.log("Regions collection dropped");

    await Region.insertMany(regions);
    console.log("Regions inserted");

    await mongoose.disconnect();
    console.log("Disconnected from database");
  } catch (error) {
    console.error("Error:", error);
  }
};

launchSeed();
