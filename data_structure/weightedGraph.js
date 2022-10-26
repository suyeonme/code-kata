class WeightedGraph {
  constructor() {
    this.adjacenyList = {}; // 인접 리스트
  }

  // 노드 추가
  addVertex(vertex) {
    if (!this.adjacenyList[vertex]) {
      this.adjacenyList[vertex] = [];
    }
  }

  // 간선 추가
  addEdge(vertex1, vertex2, weight) {
    this.adjacenyList[vertex1].push({ node: vertex2, weight });
    this.adjacenyList[vertex2].push({ node: vertex1, weight });
  }

  removeEdge(vertex1, vertex2) {
    this.adjacenyList[vertex1] = this.adjacenyList[vertex1].filter(
      v => v !== vertex2
    );
    this.adjacenyList[vertex2] = this.adjacenyList[vertex2].filter(
      v => v !== vertex1
    );
  }

  removeVertex(vertex) {
    const edges = this.adjacenyList[vertex];
    edges.forEach(e => this.removeEdge(e, vertex));
    delete this.adjacenyList[vertex];
  }
}

let weightedGraph = new WeightedGraph();

weightedGraph.addVertex('A');
weightedGraph.addVertex('B');
weightedGraph.addVertex('C');

weightedGraph.addEdge('A', 'B', 9);
weightedGraph.addEdge('A', 'C', 5);

console.log(weightedGraph);

module.exports = {
  WeightedGraph,
};
