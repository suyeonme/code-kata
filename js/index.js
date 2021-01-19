/* 
Programmers 행렬의 덧셈

행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 
2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.

[[1,2],[2,3]], [[3,4],[5,6]] --> [[4,6],[7,9]]
[[1],[2]], [[3],[4]] --> [[4],[6]]
*/

function solution1(arr1, arr2) {
  let answer = [];

  for (let i = 0; i < arr1.length; i++) {
    let temp = [];
    for (let j = 0; j < arr1[i].length; j++) {
      temp.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(temp);
  }
  return answer;
}

function solution2(arr1, arr2) {
  return arr1.map((_, i) => arr2[i].map((_, j) => arr1[i][j] + arr2[i][j]));
}

const arr1 = [
  [1, 2],
  [2, 3],
];
const arr2 = [
  [3, 4],
  [5, 6],
];
solution1(arr1, arr2);
solution2(arr1, arr2);

// [[4,6],[7,9]]
