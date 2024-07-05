const express = require("express");
const {
  getRegionById,
  getRegions,
  postRegion,
  putRegion,
  deleteRegion,
} = require("../controllers/Region");

// Aquí está el error corregido:
const regionsRouter = express.Router();

regionsRouter.get("/:id", getRegionById);
regionsRouter.get("/", getRegions);
regionsRouter.post("/", postRegion);
regionsRouter.put("/:id", putRegion);
regionsRouter.delete("/:id", deleteRegion);

module.exports = regionsRouter;
