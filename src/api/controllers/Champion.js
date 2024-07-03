const Champion = require("../models/Champion");

const getChampions = async (req, res, next) => {
  try {
    const champions = await Champion.find();
    return res.status(200).json(champions);
  } catch (error) {
    return res.status(404).json("Error");
  }
};

const getChampionsById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const champion = await Champion.findById(id);
    return res.status(200).json(champion);
  } catch (error) {
    return res.status(404).json("Error");
  }
};

const getChampionsByRole = async (req, res, next) => {
  try {
    const { role } = req.params;
    const champions = await Champion.findById({ role });
    return res.status(200).json(champions);
  } catch (error) {
    return res.status(404).json("Error");
  }
};

const postChampions = async (req, res, next) => {
  try {
    const newChampion = new Champion(req.body);
    const championSaved = await newChampion.save();
    return res.status(201).json(championSaved);
  } catch (error) {
    return res.status(404).json("Error");
  }
};

const putChampions = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newChampion = new Champion(req.body);
    newChampion._id = id;
    const championUpdated = await Champion.findByIdAndUpdate(id, newChampion, {
      new: true,
    });
    return res.status(200).json(championUpdated);
  } catch (error) {
    return res.status(404).json("Error");
  }
};

const deleteChampions = async (req, res, next) => {
  try {
    const { id } = req.params;
    const championDeleted = await Champion.findByIdAndDelete(id);
    return res.status(200).json(championDeleted);
  } catch (error) {
    return res.status(404).json("Error");
  }
};

module.exports = {
  getChampions,
  getChampionsById,
  getChampionsByRole,
  postChampions,
  putChampions,
  deleteChampions,
};
