/* 
Programmers 나누어 떨어지는 숫자 배열

array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.
*/

function solution(arr, divisor) {
  let answer = [];
  answer = arr.filter(el => el % divisor === 0);
  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}

const arr = [2, 36, 1, 3];
const divisor = 1;
solution(arr, divisor);
