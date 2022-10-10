import Graph from '../../data structure/graph';

const graph = new Graph(8);

graph.setNodeConnection(1, 2);
graph.setNodeConnection(1, 3);
graph.setNodeConnection(2, 3);
graph.setNodeConnection(2, 4);
graph.setNodeConnection(2, 5);
graph.setNodeConnection(4, 5);
graph.setNodeConnection(3, 6);
graph.setNodeConnection(3, 7);
graph.setNodeConnection(6, 7);

let c = Array(7).fill(false); // 방문이 완료된 노드
let a = graph.graphArray; // 그래프 노드

const dfs = x => {
  if (c[x]) return;
  c[x] = true;
  console.log(`node: ${x}`);

  for (let i = 0; i < a[x]?.length; i++) {
    if (graph.graphArray[x][i] === true) {
      dfs(i);
    }
  }
};

dfs(1);
