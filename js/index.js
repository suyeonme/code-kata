/* Programmers, 위장
  Hash Table
  서로 다른 옷의 조합의 수(모든 경우의 수)를 return
*/

const solution = clothes => {
  // 옷의 가짓수 세기
  const closet = clothes.reduce((a, c) => {
    a[c[1]] = a[c[1]] ? a[c[1]] + 1 : 1;
    return a;
  }, {});

  // 경우의 수 - 모든 의상을 안입는 경우(1)
  const cases = Object.values(closet).reduce((a, c) => (a *= c + 1), 1) - 1;
  return cases;
};

const clothes = [
  ['yellow_hat', 'headgear'],
  ['blue_sunglasses', 'eyewear'],
  ['green_turban', 'headgear'],
];

solution(clothes);
