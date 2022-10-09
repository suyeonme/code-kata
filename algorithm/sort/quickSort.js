const quick_sort = (arr, start, end) => {
  if (start >= end) {
    // 원소가 1개인 경우
    return;
  }
  let pivot = start;
  let i = start + 1; // 왼쪽 출발 지점
  let j = end; // 오른쪽 출발 지점
  let temp;

  while (i <= j) {
    // 엇갈릴 때까지 반복
    while (arr[i] <= arr[pivot]) {
      // 피벗보다 큰 값을 만날때까지
      i++;
    }
    while (arr[j] >= arr[pivot] && j > start) {
      // 피벗보다 작은 값을 만날때까지
      j--;
    }
    if (i > j) {
      // 엇갈렸다면 왼쪽 값과 피벗을 교체
      temp = arr[j];
      arr[j] = arr[pivot];
      arr[pivot] = temp;
    } else {
      // 엇갈리지 않았다면 큰값과 작은 값을 교체
      temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    }
  }

  quick_sort(arr, start, j - 1);
  quick_sort(arr, j + 1, end);
};

let array = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9];
quick_sort(array, 0, array.length - 1);

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
