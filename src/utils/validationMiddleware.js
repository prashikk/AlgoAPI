// src/utils/validationMiddleware.js
function validateInput(req, res, next) {
    const { array, target } = req.body;
    if (!array || !Array.isArray(array) || array.length === 0) {
      return res.status(400).json({ error: 'Invalid array input' });
    }
    // You can add more validation checks based on your requirements
    next();
  }
  
  module.exports = { validateInput };
  