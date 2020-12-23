/* 
Programmers 가운데 글자 가져오기


단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요.
단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

s: abcde	
return c

s: qwer
return we	
*/

function solution(s) {
  let index = Math.ceil(s.length / 2) - 1;
  const oddNum = s.length % 2 !== 0;

  return oddNum ? s.substr(index, 1) : s.substr(index, 2);
}

solution('abcde');

// substr(start, length)
