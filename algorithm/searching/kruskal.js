const { findParent, unionParent } = require('./unionFind');
class Edge {
  constructor(v1, v2, weight) {
    this.edge = [v1, v2];
    this.weight = weight;
  }
}

const matrix = [];

matrix.push(new Edge(1, 7, 12));
matrix.push(new Edge(1, 4, 28));
matrix.push(new Edge(1, 2, 67));
matrix.push(new Edge(1, 5, 17));
matrix.push(new Edge(2, 4, 24));
matrix.push(new Edge(2, 5, 62));
matrix.push(new Edge(3, 5, 20));
matrix.push(new Edge(3, 6, 37));
matrix.push(new Edge(4, 7, 13));
matrix.push(new Edge(5, 6, 45));
matrix.push(new Edge(5, 7, 73));

// 1. 간선의 가중치로 오름차순 정렬
matrix.sort((a, b) => a.weight - b.weight);

// 2. 각 정점이 포함된 그래프(부모)가 어디인지 저장
let parent = [];

// 3. 자기 자신을 가리키도록 초기화
for (let i = 0; i < 9; i++) {
  parent[i] = i;
}

// 4. 사이클이 발생하지 않는 경우 그래프에 포함
let sum = 0; // 거리의 합
for (let i = 0; i < matrix.length; i++) {
  if (!findParent(parent, matrix[i].edge[0], matrix[i].edge[1])) {
    sum += matrix[i].weight;
    unionParent(parent, matrix[i].edge[0], matrix[i].edge[1]);
  }
}

console.log(sum);
