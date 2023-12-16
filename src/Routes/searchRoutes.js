// src/routes/searchRoutes.js
const express = require('express');
const searchController = require('../controller/searchController.js');
const validationMiddleware = require('../utils/validationMiddleware.js');

const router = express.Router();

router.post('/linear', validationMiddleware.validateInput, searchController.linearSearch);
router.post('/binary', validationMiddleware.validateInput, searchController.binarySearch);

module.exports = router;
