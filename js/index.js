/**
 * 백준 2839번
 * 설탕 배달
 * 입력: 첫째 줄에 N이 주어진다. (3 ≤ N ≤ 5000)
 * 출력: 상근이가 배달하는 봉지의 최소 개수를 출력한다. 만약, 정확하게 N킬로그램을 만들 수 없다면 -1을 출력한다.
 *
 * 문제 유형: DP
 */

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();
let N = Number(input);

// 풀이 1: 큰수부터 제거
// let five = Math.floor(n / 5);
// while (five >= 0) {
//   if (n / five === 0) {
//     console.log(five);
//     break;
//   }

//   let remainder = n - five * 5;
//   if (remainder >= 0 && remainder % 3 === 0) {
//     console.log(five + remainder / 3);
//     break;
//   }
//   five -= 1;
// }

// 풀이 2: 작은수부터 제거
let five = 0;
let three = 0;

while (true) {
  if (N % 5 === 0) {
    five = N / 5;
    console.log(five + three);
    break;
  }
  if (N < 0) {
    console.log(-1);
    break;
  }
  N = N - 3;
  three++;
}

console.log(getMinimumSugarPack(11));
