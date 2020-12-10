/* Dec 10, 2020
How to reverse a number 
*/

const reverse = nums => {
  console.log(Number(nums.toString().split('').reverse().join('')));
};

reverse([12345]);
