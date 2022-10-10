class Graph {
  constructor(numberOfNodes) {
    this.maxSize = numberOfNodes;
    this.graphArray = Array.from(Array(numberOfNodes), () =>
      Array(numberOfNodes).fill(false)
    );
  }
}

Graph.prototype.setNodeConnection = function (start, dest) {
  if (start > this.maxSize || dest > this.maxSize) {
    return;
  }
  this.graphArray[start][dest] = true;
  this.graphArray[dest][start] = true;
};

export default Graph;

// const graph = new Graph(8);

// graph.setNodeConnection(1, 2);
// graph.setNodeConnection(1, 3);
// graph.setNodeConnection(2, 3);
// graph.setNodeConnection(2, 4);
// graph.setNodeConnection(2, 5);
// graph.setNodeConnection(4, 5);
// graph.setNodeConnection(3, 6);
// graph.setNodeConnection(3, 7);
// graph.setNodeConnection(6, 7);

// console.log(graph.graphArray);