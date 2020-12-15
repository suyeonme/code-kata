/* Dec 15, 2020
Programmers 모의고사

1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, ...
2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, ...
3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...
*/

function solution(answers) {
  const answer = []; // 가장 많은 문제를 맞힌 사람

  let count = [0, 0, 0];
  const p1 = [1, 2, 3, 4, 5];
  const p2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === p1[i % p1.length]) {
      count[0]++;
    }
    if (answers[i] === p2[i]) {
      count[1]++;
    }
    if (answers[i] === p3[i]) {
      count[2]++;
    }
  }

  for (let i = 0; i < count.length; i++) {
    let max = Math.max(...count);
    if (count[i] === max) {
      answer.push(i + 1);
    }
  }
  return answer;
}

const answerArr = [1, 3, 2, 4, 2, 1, 3, 2, 4, 2, 1, 3, 2, 4, 2];
solution(answerArr);

/*
(1): Modulus(Remainder)
    0 % 5 === 0
    1 % 5 === 1
    2 % 5 === 2
    4 % 2 === 0;

(2): Math.max
    Math.max(1, 3, 2)
    Math.max(...array1)

(3): p1[i % p1.length]
    수포자의 배열이 정답 배열보다 짧은 경우, 올바른 index값을 얻을 수 있음 !!
*/

// answers = [1,2,3,4,5]
// p1 = [1,2,3]
// answers[4] === p1[4 % p1.length] -> p1[1]
