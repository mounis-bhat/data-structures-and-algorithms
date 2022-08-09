//* Depth first traversal in Graphs

const Graph = require("./graphs");
const { Stack } = require("./stackAndQueue");

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("C", "D");

const depthFirstPrint = (graph, sourceVertex) => {
  const stack = new Stack();
  stack.push(sourceVertex);

  while (stack.length > 0) {
    let current = stack.pop();

    console.log(current);

    for (let nieghbor of graph[current]) {
      stack.push(nieghbor);
    }
  }
};

//* Selection sort

const selectionSort = function (array) {
  let min;
  for (let i = 0; i < array.length - 1; i++) {
    min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) min = j;
    }
    if (i !== min) {
      let temp = array[i];
      array[i] = array[min];
      array[min] = temp;
    }
  }
  return array;
};

//* Insertion sort

const insertionSort = function (array) {
  let temp;
  let j;
  for (let i = 1; i < array.length; i++) {
    temp = array[i];
    for (j = i - 1; array[j] > temp && j > -1; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = temp;
  }
  return array;
};

//* Bubble sort

const bubbleSort = function (array) {
  for (let i = array.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
};

//* Merge sort: It leverages the concept of divide and conquer, in essence it's relatively simple to combine sorted arrays, so what we do is divide the whole array into to single item arrays, which are technically sorted, since they have single items. So what we do is merge those sorted arrays to get a single sorted array using recursion.

function merge(array1, array2) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) {
      result.push(array1[i]);
      i++;
    } else {
      result.push(array2[j]);
      j++;
    }
  }

  while (i < array1.length) {
    result.push(array1[i]);
    i++;
  }

  while (j < array2.length) {
    result.push(array2[j]);
    j++;
  }

  return result;
}

const mergeSort = function (array) {
  if (array.length === 1) return array;

  let mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
};

const result = testMergeSort([2, 4, 6, 1, 3, 5]);
console.log(result);
