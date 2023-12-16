## AlgoHub API
Welcome to Algo API, a RESTful API for various sorting algorithms.

## Introduction
Algo API provides endpoints for different sorting algorithms, including Selection Sort, Bubble Sort, Insertion Sort, Merge Sort, and Quick Sort. It allows developers to perform sorting on arrays effortlessly.

##  Setup
Follow the steps below to set up the project on your local machine:

Prerequisites
Node.js installed
npm (Node Package Manager) installed

## Installation
Clone the repository:                       git clone https://github.com/your-username/algo-api.git
Navigate to the project directory:          cd algo-api
Install dependencies:                       npm install
Start the server:                           npm start

The server will run on http://localhost:8000.

## Usage in Postman
Algo API can be easily tested using Postman. Follow the steps below:

1. Open Postman.

2. Import the provided Postman collection (Algo_API.postman_collection.json) to access pre-configured requests.

3. Use the available endpoints for sorting algorithms (/sort/selectionSort, 
/sort/bubbleSort, 
/sort/insertionSort, 
/sort/mergeSort, 
/sort/quickSort,
/search/binary,
/search/linear ,

Example JSON request for /mergeSort:

{
  "array": [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
}

Example JSON request for /binary:

{
  "array": [5, 4, 3, 2, 1, 9, 12, 34],
  "target" : 12
}

Ensure to replace the array values as needed.



## API Documentation
## Sorting Endpoints  
    Selection Sort
    Endpoint: /api/sort/selection
    Method: POST
    Payload:
{
  "array": [4, 2, 7, 1, 5]
}

Response:

{
  "result": [1, 2, 4, 5, 7],
  "timeTaken": 0.123
}

(Repeat similar documentation for other sorting algorithms)

## Searching Endpoints
## Binary Search
Endpoint: /api/search/binary
Method: POST
Payload:

{
  "array": [1, 2, 4, 5, 7],
  "target": 4
}

Response:

{
  "result": 2,
  "timeTaken": 0.045
}
(Repeat similar documentation for other searching algorithms)

4. Execute the request, and view the sorted array in the response.

## Future Scope
The project has the potential for expansion and improvement. Future enhancements may include:

Additional sorting algorithms
Support for handling large datasets efficiently
Integration with databases
User authentication for enhanced security
Feel free to contribute and help shape the future of Algo API!