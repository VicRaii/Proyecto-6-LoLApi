const mongoose = require("mongoose");
const Champion = require("../../api/models/Champion");
const champions = require("../../data/champions");

const launchSeed = async () => {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(
      "mongodb+srv://VMRP:Pcd59YrVJwhHSoe1@cluster0.pqrrosp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Connected to MongoDB");

    await Champion.collection.drop();
    console.log("Champions collection dropped");

    await Champion.insertMany(champions.bandleCity);
    console.log("Champions inserted");

    await mongoose.disconnect();
    console.log("Disconnected from database");
  } catch (error) {
    console.error("Error:", error);
  }
};

launchSeed();
