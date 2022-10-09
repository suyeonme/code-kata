let array = [7, 6, 5, 8, 3, 9, 1];
let sortedBuff = Array(array.length).fill(undefined);

const merge = (arr, start, middle, end) => {
  let i = start;
  let j = middle + 1;
  let k = start;
  // 작은 순서대로 정렬 배열에 삽입
  while (i <= middle && j <= end) {
    if (arr[i] <= arr[j]) {
      sortedBuff[k] = arr[i];
      i++;
    } else {
      sortedBuff[k] = arr[j];
      j++;
    }
    k++;
  }
  // 남은 데이터를 정렬 배열에 삽입
  if (i > middle) {
    for (let t = j; t <= end; t++) {
      sortedBuff[k] = arr[t];
      k++;
    }
  } else {
    for (let t = i; t <= middle; t++) {
      sortedBuff[k] = arr[t];
      k++;
    }
  }

  // 정렬된 배열을 실제 배열에 삽입
  for (let t = start; t <= end; t++) {
    arr[t] = sortedBuff[t];
  }
};

const merge_sort = (arr, start, end) => {
  if (start < end) {
    const middle = Math.floor((start + end) / 2);
    merge_sort(arr, start, middle);
    merge_sort(arr, middle + 1, end);
    merge(arr, start, middle, end);
  }
};

merge_sort(array, 0, array.length - 1);
