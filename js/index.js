/* Dec 15, 2020
Programmers K번째 수 

배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.

예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면

array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
2에서 나온 배열의 3번째 숫자는 5입니다.
*/

const solution = (arr, com) => {
  return com.map(c => {
    return arr
      .slice(c[0] - 1, c[1])
      .sort((a, b) => a - b)
      .slice(c[2] - 1, c[2])[0];
  });
};

const array = [1, 5, 2, 6, 3, 7, 4];
const commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];

solution(array, commands);

/*
  (1) slice(start, end)
  const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
  animals.slice(2, 4); // ["camel", "duck"]

  (2) splice(start, count)
  const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
  animals.splice(2, 2); // ["camel", "duck"]
*/
