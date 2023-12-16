// src/utils/performanceMetrics.js
const { performance } = require('perf_hooks');

function measureTime(callback) {
  const start = performance.now();
  const result = callback();
  const end = performance.now();
  const timeTaken = end - start;
  return { result, timeTaken };
}

module.exports = { measureTime };
