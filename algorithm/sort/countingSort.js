const counting_sort = arr => {
  let count = Array(5).fill(0);

  for (let i = 0; i < arr.length; i++) {
    count[arr[i] - 1]++;
  }

  for (let i = 0; i < count.length; i++) {
    if (count[i] !== 0) {
      for (let j = 0; j < count[i]; j++) {
        console.log(i + 1);
      }
    }
  }
};

const array = [3, 1, 2, 2, 1, 4, 5, 1, 3, 4];
counting_sort(array);
