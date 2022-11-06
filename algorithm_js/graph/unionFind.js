// 부모노드를 찾음
const getParent = (parent, x) => {
  if (parent[x] === x) return x;
  return (parent[x] = getParent(parent, parent[x]));
};

// 두 부모노드를 함침
const unionParent = (parent, a, b) => {
  a = getParent(parent, a);
  b = getParent(parent, b);
  if (a < b) {
    parent[b] = a;
  } else {
    parent[a] = b;
  }
};

// 같은 부모를 가지는지 확인(같은 그래프에 속해있는지)
const findParent = (parent, a, b) => {
  a = getParent(parent, a);
  b = getParent(parent, b);
  if (a === b) {
    return 1;
  } else {
    return 0;
  }
};

// 1. 자기 자신이 부모로 초기화
let parent = [];
for (let i = 0; i <= 10; i++) {
  parent[i] = i;
}

// 2. 그래프 연결
unionParent(parent, 1, 2);
unionParent(parent, 2, 3);
unionParent(parent, 3, 4);
unionParent(parent, 5, 6);
unionParent(parent, 6, 7);
unionParent(parent, 7, 8);

// 3. 1과 5가 연결되어있는지 확인
console.log(findParent(parent, 1, 5));

module.exports = {
  getParent,
  unionParent,
  findParent,
};
