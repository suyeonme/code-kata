// Solution 1
function sameFrequency(num1, num2) {
  const strNum1 = num1.toString();
  const strNum2 = num2.toString();

  if (strNum1.length !== strNum2.length) {
    return false;
  }

  const obj1 = {};
  const obj2 = {};

  for (let key of strNum1) {
    obj1[key] = obj1[key] ? ++obj1[key] : 1;
  }
  for (let key of strNum2) {
    obj2[key] = obj2[key] ? ++obj2[key] : 1;
  }

  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}
