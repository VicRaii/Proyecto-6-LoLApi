const Region = require("../models/Region");

const getRegions = async (req, res, next) => {
  try {
    const regions = await Region.find().populate("champions");
    return res.status(200).json(regions);
  } catch (error) {
    return res.status(404).json("Error getting regions");
  }
};

const getRegionById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const region = await Region.findById(id).populate("champions");
    return res.status(200).json(region);
  } catch (error) {
    return res.status(404).json("Error getting by ID");
  }
};

const postRegion = async (req, res, next) => {
  try {
    req.body.champions = [...new Set(req.body.champions)];

    const newRegion = new Region(req.body);
    const regionSaved = await newRegion.save();
    return res.status(201).json(regionSaved);
  } catch (error) {
    return res.status(404).json("Error posting");
  }
};

const putRegion = async (req, res, next) => {
  try {
    const { id } = req.params;
    const oldRegion = await Region.findById(id);

    const allChampions = [
      ...new Set([...oldRegion.champions, ...req.body.champions]),
    ];

    const newRegion = new Region(req.body);
    newRegion._id = id;
    newRegion.champions = allChampions;

    const regionUpdated = await Region.findByIdAndUpdate(id, newRegion, {
      new: true,
    });
    return res.status(200).json(regionUpdated);
  } catch (error) {
    return res.status(404).json("Error updating region");
  }
};

const deleteRegion = async (req, res, next) => {
  try {
    const { id } = req.params;
    const regionDeleted = await Region.findByIdAndDelete(id);
    return res.status(200).json(regionDeleted);
  } catch (error) {
    return res.status(404).json("Error deleting region");
  }
};

module.exports = {
  getRegions,
  getRegionById,
  postRegion,
  putRegion,
  deleteRegion,
};
