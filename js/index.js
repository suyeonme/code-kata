/* 
Programmers 두 정수 사이의 합

두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
*/

function solution(a, b) {
  let answer = 0;

  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) answer += i;
  return answer;
}

// function solution(a, b) {
//   let answer = 0;

//   if (a == b) {
//     answer = a;
//   } else if (a < b) {
//     for (let i = a; i <= b; i++) {
//       answer += i;
//     }
//   } else if (a > b) {
//     for (let i = b; i <= a; i++) {
//       answer += i;
//     }
//   }

//   console.log(answer);
//   return answer;
// }

solution(3, 5);
