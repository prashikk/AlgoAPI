// src/routes/sortRoutes.js
const express = require('express');
const sortController = require('../controller/sortController.js');
const validationMiddleware = require('../utils/validationMiddleware.js');

const router = express.Router();

router.post('/selection', validationMiddleware.validateInput, sortController.selectionSort);
router.post('/bubble', validationMiddleware.validateInput, sortController.bubbleSort);
router.post('/insertion', validationMiddleware.validateInput, sortController.insertionSort);
router.post('/merge',validationMiddleware.validateInput,sortController.mergeSort);
router.post('/quick', validationMiddleware.validateInput, sortController.quickSort);

module.exports = router;
