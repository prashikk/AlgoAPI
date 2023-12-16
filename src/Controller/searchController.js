// src/controllers/searchController.js
const searchModel = require('../Models/searchModels');

module.exports.linearSearch = (req, res) => {
  const { array, target } = req.body;
  const result = searchModel.linearSearch(array, target);
  res.json(result);
};

module.exports.binarySearch = (req, res) => {
  const { array, target } = req.body;
  const result = searchModel.binarySearch(array, target);
  res.json(result);
};
