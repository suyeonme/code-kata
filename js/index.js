/* 
Programmers 핸드폰 번호 가리기

프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

"01033334444" -> "*******4444"
"027778888" -> "*****8888"
*/

function solution1(str) {
  return '*'.repeat(str.length - 4) + str.slice(-4);
}

function solution2(str) {
  return str
    .split('')
    .map((s, i) => {
      if (i < str.length - 4) s = '*';
      return s;
    })
    .join('');
}

solution1('01033334444');

/*
  (1) slice()
  A negative index can be used, indicating an offset from the end of the sequence. 
*/
