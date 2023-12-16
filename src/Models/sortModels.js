// src/models/sortModel.js
const { measureTime } = require('../utils/performanceMetrics');

function selectionSort(array) {
    return measureTime(() => {
      const n = array.length;
  
      for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
  
        // Find the index of the minimum element in the unsorted part
        for (let j = i + 1; j < n; j++) {
          if (array[j] < array[minIndex]) {
            minIndex = j;
          }
        }
  
        // Swap the found minimum element with the first element
        if (minIndex !== i) {
          const temp = array[i];
          array[i] = array[minIndex];
          array[minIndex] = temp;
        }
      }
  
      return array;
    });
  }

  function bubbleSort(array) {
    return measureTime(() => {
      const n = array.length;
  
      for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
          // Compare adjacent elements and swap if they are in the wrong order
          if (array[j] > array[j + 1]) {
            const temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
          }
        }
      }
  
      return array;
    });
  }

  function insertionSort(array) {
    return measureTime(() => {
      const n = array.length;
  
      for (let i = 1; i < n; i++) {
        const key = array[i];
        let j = i - 1;
  
        // Move elements that are greater than key to one position ahead of their current position
        while (j >= 0 && array[j] > key) {
          array[j + 1] = array[j];
          j--;
        }
  
        // Place key at its correct position in the sorted part
        array[j + 1] = key;
      }
  
      return array;
    });
  }

// Merge function to combine two sorted arrays
function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Debugging logs
  //console.log('Left:', left);
  //console.log('Right:', right);

  // Concatenate the remaining elements from both arrays (if any)
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
  
  
  // MergeSort function
  function mergeSort(array) {
    return measureTime(() => {
      // Base case: If the array has one or zero elements, it is already sorted
      if (array.length <= 1) {
        return array;
      }
  
      // Split the array into two halves
      const middle = Math.floor(array.length / 2);
      const left = array.slice(0, middle);
      const right = array.slice(middle);
  
      // Recursively sort the two halves
      const leftSorted = mergeSort(left);
      const rightSorted = mergeSort(right);
  
      // Debugging logs
      //console.log('leftSorted:', leftSorted);
     // console.log('rightSorted:', rightSorted);
  
      // Extract the sorted arrays from the objects
      const leftArray = leftSorted.result;
      const rightArray = rightSorted.result;
  
      // Debugging logs
      //console.log('Left Array:', leftArray);
      //console.log('Right Array:', rightArray);
  
      // Merge the sorted halves
      return merge(leftArray, rightArray);
    });
  }
  

  function quickSort(array) {
    return measureTime(() => {
      // Partition function to rearrange the elements in the array
      function partition(arr, low, high) {
        const pivot = arr[high];
        let i = low - 1;
  
        for (let j = low; j < high; j++) {
          if (arr[j] <= pivot) {
            i++;
            // Swap arr[i] and arr[j]
            [arr[i], arr[j]] = [arr[j], arr[i]];
          }
        }
  
        // Swap arr[i + 1] and arr[high] (place the pivot at its correct position)
        [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  
        return i + 1; // Return the partition index
      }
  
      // Recursive function to perform quicksort
      function quickSortRecursive(arr, low, high) {
        if (low < high) {
          // Find partition index (pivot is now at its correct position)
          const pi = partition(arr, low, high);
  
          // Recursively sort the sub-arrays before and after the partition
          quickSortRecursive(arr, low, pi - 1);
          quickSortRecursive(arr, pi + 1, high);
        }
      }
  
      // Initial call to quickSortRecursive
      quickSortRecursive(array, 0, array.length - 1);
  
      return array;
    });
  }

module.exports = { selectionSort, bubbleSort, insertionSort, mergeSort, quickSort };
