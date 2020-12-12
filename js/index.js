/* Dec 12, 2020
숫자로 이루어진 배열인 nums를 인자로 전달합니다.
숫자중에서 과반수(majority, more than a half)가 넘은 숫자를 반환해주세요.

nums = [2,2,1,1,1,2,2]
return 2

nums 배열의 길이는 무조건 2개 이상입니다.
*/

const nums = [2, 2, 1, 1, 1, 2, 2];

const findMajority = arr => {
  for (let i = 0; i < arr.length; i++) {
    if (arr.filter(el => el === arr[i]).length > arr.length / 2) {
      return arr[i];
    }
  }
};

findMajority(nums);
