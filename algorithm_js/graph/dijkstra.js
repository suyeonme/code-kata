const { Edge } = require('../utils/edge');

const V = 4; // 정점의 개수
const matrix = [];
const START = 1; // 출발 노드

// 1. 그래프에 값 추가
matrix.push(new Edge(1, 2, 3));
matrix.push(new Edge(1, 3, 6));
matrix.push(new Edge(1, 4, 7));
matrix.push(new Edge(2, 3, 1));
matrix.push(new Edge(3, 4, 1));

// 2. 최소 거리를 저장할 테이블 초기화
let visited = []; // 노드의 방문 여부 테이블
let dist = []; // 시작 노드에서 도착 노드까지의 최소 거리를 저장할 테이블

for (let i = 0; i < V + 1; i++) {
  dist[i] = Number.MAX_VALUE;
}

dist[START] = 0;

console.log({ matrix, dist });

// 3. 다익스트라 알고리즘 수행
for (let i = 0; i < V; i++) {
  let nodeValue = Number.MAX_VALUE;
  let nodeIdx = 0;

  for (let j = 1; j < V + 1; j++) {
    // 3.1 방문하지 않은 노드이고 현재 저장된 거리중 최솟값을 탐색
    if (!visited[j] && dist[j] < nodeValue) {
      nodeValue = dist[j];
      nodeIdx = j;
    }
  }

  // 3.2 선택한 노드를 방문처리
  visited[nodeIdx] = true;

  // 3.3 선택한 노드의 인접 노드의 최소 거리 값을 갱신
  for (let j = 0; j < matrix[nodeIdx].length; j++) {
    const adjNode = matrix[nodeIdx][j]; // 인접 노드 선택
    // "인접 노드의 최소 비용"과 "선택한 노드의 비용 + 선택한 노드에서 인접노드로 가는 비용"을 비교한 뒤 더 작은 값으로 갱신\
    if (dist[adjNode.dest] > dist[nodeIdx] + adjNode.cost) {
      dist[adjNode.dest] = dist[nodeIdx] + adjNode.cost;
    }
  }
}

// 4. 결과 출력
for (let i = 1; i < V + 1; i++) {
  if (dist[i] === Number.MAX_VALUE) {
    console.log('INF');
  } else {
    console.log(dist[i]);
  }
}
