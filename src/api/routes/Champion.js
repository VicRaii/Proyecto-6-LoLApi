const {
  getChampions,
  getChampionsById,
  getChampionsByRole,
  postChampions,
  putChampions,
  deleteChampions,
} = require("../controllers/Champion");

const championsRouter = require("express").Router();

championsRouter.get("/role/:role", getChampionsByRole);
championsRouter.get("/:id", getChampionsById);
championsRouter.get("/", getChampions);
championsRouter.post("/", postChampions);
championsRouter.put("/:id", putChampions);
championsRouter.delete("/:id", deleteChampions);

module.exports = championsRouter;
