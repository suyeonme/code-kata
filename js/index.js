/* Sorting: Insertion Sort */

const insertionSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    let j;

    for (j = i - 1; j >= 0 && arr[j] > current; j--) {
      arr[j + 1] = arr[j]; // j == 0
    }

    arr[j + 1] = current; // j == -1
  }
  return arr;
};

insertionSort([2, 1, 4, 6, 0, 10]);
