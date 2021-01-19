/* 
Programmers x만큼 간격이 있는 n개의 숫자

함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 
다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

2, 5 -> [2,4,6,8,10]
4, 3 ->	[4,8,12]
-4, 2 ->	[-4, -8]
*/

function solution1(num1, num2) {
  let answer = [];
  let temp = 0;

  for (let i = 0; i < num2; i++) {
    temp += num1;
    answer.push(temp);
  }
  return answer;
}

function solution2(num1, num2) {
  return Array(num2)
    .fill(num1)
    .map((n, i) => (i + 1) * n);
}

solution1(-4, 2);
solution2(-4, 2);
