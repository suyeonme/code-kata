/* Binary Search
 * sorted array and value
 * linear search: O(n) vs binary search: O(log n)
 */

// My Solution
// const searchBinary = (arr, target) => {
//   if (!arr.length) return;

//   const sorted = arr.sort();
//   let start = 0;
//   let end = sorted.length - 1;
//   let middle = Math.floor(start + end) / 2;

//   if (sorted[middle] === target) {
//     return middle;
//   }

//   while (start <= end) {
//     if (sorted[middle] > target) {
//       end = middle - 1;
//       middle = Math.floor(start + end) / 2;
//     } else if (sorted[middle] < target) {
//       start = middle + 1;
//       middle = Math.floor(start + end) / 2;
//     } else if (sorted[middle] === target) {
//       break;
//     }
//   }
//   return middle;
// };

// Answer 1
const searchBinary = (arr, target) => {
  const sorted = arr.sort();
  let start = 0;
  let end = sorted.length - 1;
  let middle = Math.floor(start + end) / 2;

  while (sorted[middle] !== target && start <= end) {
    if (sorted[middle] > target) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor(start + end) / 2;
  }

  return sorted[middle] === target ? middle : -1;
};

searchBinary([1, 3, 2, 4, 5, 7, 6], 5);
