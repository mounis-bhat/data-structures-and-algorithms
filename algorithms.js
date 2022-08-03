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

depthFirstPrint(graph, "A");
