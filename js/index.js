/* 
Programmers 기능개발
*/

function solution(progresses, speeds) {
  let answer = [];

  const leftDays = progresses.map((progress, index) =>
    Math.ceil((100 - progress) / speeds[index])
  );

  let prev = leftDays[0];
  let temp = 1;

  for (let i = 1; i < leftDays.length; i++) {
    if (prev >= leftDays[i]) {
      temp += 1;
    } else {
      answer.push(temp);
      prev = leftDays[i];
      temp = 1;
    }
  }
  answer.push(temp);
  return answer;
}

const progress = [93, 30, 55];
const speeds = [1, 30, 5];
solution(progress, speeds);

// [2, 1]
