/**
 * 백준 1712번
 * 손익분기점
 * 입력: 첫째 줄에 A, B, C가 빈 칸을 사이에 두고 순서대로 주어진다. A, B, C는 21억 이하의 자연수이다.
 * 출력: 첫 번째 줄에 손익분기점 즉 최초로 이익이 발생하는 판매량을 출력한다. 손익분기점이 존재하지 않으면 -1을 출력한다.
 * 
 * 해결:
 * 손익분기점 = 고정비용 / (제품 가격 - 가변 비용)
 * C-B가 0 이하면 손익분기점은 없음
 */

const getBreakEvenPoint = price => {
  [A, B, C] = price.split(' ').map(p => +p);
  const margin = Math.floor(A / (C - B)) + 1;
  return margin < 0 ? -1 : margin;
};

console.log(getBreakEvenPoint('3 2 1'));

