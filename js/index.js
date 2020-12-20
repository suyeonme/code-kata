/* Dec 16, 2020
Programmers 체육복
*/

const solution = (n, lost, reserve) => {
  let answer = 0;
  const trueLost = lost.filter((l, i) => l !== reserve[i]);
  const trueReserve = reserve.filter((l, i) => l !== lost[i]);
  let ans = [];

  for (let i = 0; i <= n; i++) {
    ans.push(1);
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < trueLost.length; j++) {
      if (i === lost[j]) ans[i] = 0;
    }
    for (let j = 0; j < trueReserve.length; j++) {
      if (i === reserve[j]) ans[i] += 1;
    }
  }

  for (let i = 1; i <= n; i++) {
    if (ans[i] === 0 && ans[i - 1] === 2) {
      ans[i - 1] = 1;
      ans[i] = 1;
    } else if (ans[i] === 0 && ans[i + 1] === 2) {
      ans[i + 1] = 1;
      ans[i] = 1;
    }
  }

  for (let i = 1; i <= n; i++) {
    if (ans[i] > 0) answer++;
  }

  console.log(answer);
  return answer;
};

const n = 5;
const lost = [2, 4];
const reserve = [1, 3, 5];
solution(n, lost, reserve);

// For loop (i)
