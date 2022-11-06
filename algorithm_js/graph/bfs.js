const Graph = require('../../data structure/graph');

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

let a = graph.graphArray; // 전체 그래프 노드
let c = Array(7).fill(false); // 방문한 노드

const bfs = start => {
  let queue = []; // 방문하지 않은 노드
  queue.push(start);
  c[start] = true;

  while (!!queue.length) {
    let x = queue[0];
    queue.shift();
    console.log(`node: ${x}`);

    for (let i = 0; i < a[x]?.length; i++) {
      if (graph.graphArray[x][i] === true && !c[i]) {
        queue.push(i);
        c[i] = true;
      }
    }
  }
};

bfs(1);

