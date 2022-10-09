const selection_sort = arr => {
  let min, index, temp;

  for (let i = 0; i < arr.length; i++) {
    min = 9999; // 모든 원소보다 큰 임의의 수
    for (let j = i; j < arr.length; j++) {
      if (min > arr[j]) {
        min = arr[j];
        index = j;
      }
    }

    temp = arr[i];
    arr[i] = arr[index];
    arr[index] = temp;
  }

  for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
  return 0;
};

let array = [6, 3, 2, 7, 1, 5, 4];
selection_sort(array);
