/* 
Programmers 체육복
*/

function solution(n, lost, reserve) {
  let answer = 0;
  const ans = [];

  for (let i = 1; i <= n; i++) {
    ans.push(1);
  }

  lost.forEach(number => (ans[number] -= 1));
  reserve.forEach(number => (ans[number] += 1));

  for (let i = 1; i <= n; i++) {
    if (ans[i] === 2 && ans[i - 1] === 0) {
      ans[i - 1]++;
      ans[i]--;
    } else if (ans[i] === 2 && ans[i + 1] === 0) {
      ans[i + 1]++;
      ans[i]--;
    }
  }

  for (let i = 0; i <= n; i++) {
    if (ans[i] >= 1) answer++;
  }
  return answer;
}

const n = 5;
const lost = [2, 4];
const reserve = [1, 3, 5];
solution(n, lost, reserve);
