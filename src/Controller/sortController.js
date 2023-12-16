// src/controllers/sortController.js
const sortModel = require('../Models/sortModels');

exports.selectionSort = (req, res) => {
  const { array } = req.body;
  const result = sortModel.selectionSort(array);
  res.json(result);
};

exports.bubbleSort = (req, res) => {
  const { array } = req.body;
  const result = sortModel.bubbleSort(array);
  res.json(result);
};

exports.insertionSort = (req, res) => {
  const { array } = req.body;
  const result = sortModel.insertionSort(array);
  res.json(result);
};

exports.mergeSort = (req, res) => {
  const { array } = req.body;
  const result = sortModel.mergeSort(array);
  res.json(result);
};

exports.quickSort = (req, res) => {
  const { array } = req.body;
  const result = sortModel.quickSort(array);
  res.json(result);
};
