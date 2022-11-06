const insertion_sort = arr => {
  let j, temp;

  for (let i = 0; i < arr.length; i++) {
    j = i; 
    while (arr[j] > arr[j + 1]) {
      temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
      j--;
      console.log({j})
    }
  }

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
};

let array = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9]; 

insertion_sort(array);
