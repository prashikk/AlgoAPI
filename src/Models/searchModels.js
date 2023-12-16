// src/models/searchModel.js
const { measureTime } = require('../utils/performanceMetrics');

function linearSearch(array, target) {
  return measureTime(() => {
    // Implement linear search logic
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
          return { index: i, value: array[i] };
        }
      }
      return { index: -1, value: null }; // Element not found
  });
}

function binarySearch(array, target) {
    return measureTime(() => {
      let left = 0;
      let right = array.length - 1;
  
      while (left <= right) {
        const mid = Math.floor((left + right) / 2);
  
        if (array[mid] === target) {
          return { index: mid, value: array[mid] };
        } else if (array[mid] < target) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
  
      return { index: -1, value: null }; // Element not found
    });
  }

module.exports = { linearSearch, binarySearch };
