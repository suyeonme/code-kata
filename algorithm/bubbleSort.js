const bubble_sort = arr => {
  let temp;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};

let arr = [2, 1, 7, 4, 3, 6, 5];
bubble_sort(arr);
