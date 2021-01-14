/* 
Programmers 시저 암호

어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 
예를 들어 AB는 1만큼 밀면 BC가 되고, 3만큼 밀면 DE가 됩니다. z는 1만큼 밀면 a가 됩니다. 
문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

"AB" 1 -> 	"BC"
"z"	1	-> "a"
"a B z"	4	-> "e F d"
*/

// Return Undefined
// const solution = (s, n) => {
//   console.log(
//     s.replace(/[a-z]/gi, c => {
//       let ascii = c.charCodeAt() + n;
//       const isUpperCase = c.toUpperCase() === c;

//       return isUpperCase && ascii > 90
//         ? String.fromCharCode(ascii - 122 + 96)
//         : String.fromCharCode(ascii - 90 + 64);
//     })
//   );
// };

function solution(s, n) {
  return s
    .split('')
    .map(c => {
      const ascii = c.charCodeAt(0);
      if (' ' == c) return c;

      return c.toUpperCase().charCodeAt(0) + n > 90
        ? String.fromCharCode(ascii + n - 90 + 64)
        : String.fromCharCode(ascii + n);
    })
    .join('');
}

const str = 'AB';
solution(str, 1);

/* ASCII
  (1) /[a-z]/ig: a부터 z까지 모든 영문자를 대문자와 소문자를 구분하지않고 선택

  (2) Unicode:
  'A' 65
  'Z' 90
  'a' 97
  'z' 122

  (3) string.charCodeAt(): 문자열을 아스키코드 번호로 변환
  (4) String.fromCharCode(): 아스키코드번호를 문자열로 변환
*/
