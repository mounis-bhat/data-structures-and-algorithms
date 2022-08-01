class Graph {}

Graph.prototype.addVertex = function (vertex) {
  if (!this[vertex]) return (this[vertex] = []);
  throw "Vertex already exists";
};

Graph.prototype.addEdge = function (firstVertex, secondVertex) {
  if (this[firstVertex] && this[secondVertex]) {
    this[firstVertex].push(secondVertex);
    this[secondVertex].push(firstVertex);
  } else {
    throw "Invalid edges";
  }
};

//! Creates bi-directional edges

Graph.prototype.removeEdge = function (firstVertex, secondVertex) {
  if (this[firstVertex] && this[secondVertex]) {
    this[firstVertex] = this[firstVertex].filter(
      (item) => item !== secondVertex
    );

    this[secondVertex] = this[secondVertex].filter(
      (item) => item !== firstVertex
    );
  } else {
    throw "Invalid edges";
  }
};

//! Works only with graphs with bi-directional edges

Graph.prototype.removeVertex = function (vertex) {
  if (!this[vertex]) throw "Vertex does not exist";

  while (this[vertex].length) {
    let temp = this[vertex].pop();
    this.removeEdge(temp, vertex);
  }

  delete this[vertex];
};

module.exports = Graph;
