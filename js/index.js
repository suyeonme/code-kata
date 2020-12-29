/* 
Programmers 문자열 내 마음대로 정렬하기

문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다. 
예를 들어 strings가 [sun, bed, car]이고 n이 1이면 각 단어의 인덱스 1의 문자 u, e, a로 strings를 정렬합니다.

  strings: [sun, bed, car]
  n: 1
  return: [car, bed, sun]
*/

function solution(strings, n) {
  return strings.sort((a, b) => {
    if (a[n] > b[n]) return 1;
    if (a[n] < b[n]) return -1;
    if (a[n] === b[n]) return a.localeCompare(b);
  });
}

const strArr = ['sun', 'bed', 'car'];
const index = 1;
solution(strArr, index);

/*
(1) Descending order: arr.sort().reverse()
(2) sort()
(3) str.localeCompare(compareStr)
*/
