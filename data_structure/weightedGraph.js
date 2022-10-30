class WeightedGraph {
  constructor(numberOfNodes) {
    this.maxSize = numberOfNodes;
    this.adjacencyMatrix = [];
    this.initAdjacencyMatrix();
  }

  initAdjacencyMatrix() {
    for (let i = 0; i < this.maxSize; i++) {
      this.adjacencyMatrix.push([]);
      for (let j = 0; j < this.maxSize; j++) {
        this.adjacencyMatrix[i][j] = 0;
      }
    }
  }

  addEdge(vertex1, vertex2, weight = 1) {
    // 간선 추가
    if (
      vertex1 > this.maxSize - 1 ||
      vertex2 > this.maxSize - 1 ||
      vertex1 === vertex2
    ) {
      return;
    }

    this.adjacencyMatrix[vertex1][vertex2] = weight;
    this.adjacencyMatrix[vertex2][vertex1] = weight;
  }

  removeEdge(vertex1, vertex2) {
    // 간선 제거
    if (
      vertex1 > this.maxSize - 1 ||
      vertex2 > this.maxSize - 1 ||
      vertex1 === vertex2
    ) {
      return;
    }
    this.adjacencyMatrix[vertex1][vertex2] = 0;
    this.adjacencyMatrix[vertex2][vertex1] = 0;
  }

  addVertex() {
    // 노드 추가
    // this.maxSize++;
    this.adjacencyMatrix.push([]);
    for (let i = 0; i < this.maxSize; i++) {
      this.adjacencyMatrix[i][this.maxSize - 1] = 0;
      this.adjacencyMatrix[this.maxSize - 1][i] = 0;
    }
  }

  removeVertex(vertex) {
    // 노드 제거
    if (vertex < 0 || vertex > this.maxSize - 1) {
      return;
    }

    while (vertex < this.maxSize - 1) {
      for (let i = 0; i < this.maxSize; i++) {
        this.adjacencyMatrix[i][vertex] = this.adjacencyMatrix[i][vertex + 1];
      }
      for (let i = 0; i < this.maxSize; i++) {
        this.adjacencyMatrix[vertex][i] = this.adjacencyMatrix[vertex + 1][i];
      }
      vertex++;
    }
    this.adjacencyMatrix.pop();
    this.maxSize--;
  }

  print() {
    for (let i = 0; i < this.maxSize; i++) {
      let row = "";
      for (let j = 0; j < this.maxSize; j++) {
        row += ` ${this.adjacencyMatrix[i][j]}`;
      }
      console.log(row);
    }
  }
}

const weightedGraph = new WeightedGraph(4);

weightedGraph.addVertex(0);
weightedGraph.addVertex(1);
weightedGraph.addVertex(2);
weightedGraph.addVertex(3);


weightedGraph.addEdge(0, 1, 1);
weightedGraph.addEdge(0, 2, 2);
weightedGraph.addEdge(2, 3, 3);

weightedGraph.print();

module.exports = {
  WeightedGraph,
};
