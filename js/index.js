/* 
Programmers 정수 제곱근 판별

임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

121 -> 144
3 -> -1

*/

function solution(n) {
  let x = Math.sqrt(n);
  return Number.isInteger(x) ? Math.pow(x + 1, 2) : -1;
}

solution(121);

/*
  (1) Math.sqrt(n): Returns the square root of a number.
  (2) Math.pow(base, exponent): Returns the base to the exponent power.
  (3) Number.isInteger(n): Determines whether the passed value is an integer.
*/
