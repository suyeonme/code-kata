// JavaScript program for implementation
// of Heap Sort

const heap_sort = arr => {
  const length = arr.length;

  // Build heap (rearrange array)
  for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
    heapify(arr, length, i);
  }

  // One by one extract an element from heap
  for (let i = length - 1; i > 0; i--) {
    // Move current root to end
    let temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;

    // call max heapify on the reduced heap
    heapify(arr, i, 0);
  }
};

// To heapify a subtree rooted with node i which is
// an index in arr[]. n is size of heap
const heapify = (arr, length, i) => {
  var largest = i; // Initialize largest as root
  var left = 2 * i + 1;
  var right = 2 * i + 2;

  // If left child is larger than root
  if (left < length && arr[left] > arr[largest]) {
    largest = left;
  }

  // If right child is larger than largest so far
  if (right < length && arr[right] > arr[largest]) {
    largest = right;
  }

  // If largest is not root
  if (largest !== i) {
    var swap = arr[i];
    arr[i] = arr[largest];
    arr[largest] = swap;

    // Recursively heapify the affected sub-tree
    heapify(arr, length, largest);
  }
};

const printArray = arr => {
  const N = arr.length;
  for (let i = 0; i < N; ++i) {
    console.log(arr[i] + ' ');
  }
};

const arr = [12, 11, 13, 5, 6, 7];
heap_sort(arr);
