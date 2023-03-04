function partition(arr, left, right) {
  let x = arr[left];
  let countSmaller = 0;

  for (let i = left; i <= right; i++) {
    if (arr[i] < x) {
      countSmaller++;
    }
  }

  let partitionIdx = left + countSmaller;
  for (let i = left + 1; i <= p; i++) {
    let temp = arr[i];
    arr[i] = arr[i - 1];
    arr[i - 1] = temp;
  }

  let i = left,
    j = right;
  while (i != p && j != p) {
    if (arr[i] < x) {
      i++;
    }
    if (arr[j] >= x) {
      j--;
    } else if (arr[i] >= x && arr[j] <= x) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++;
      j--;
    }
  }
  return partitionIdx;
}

function quickSort(arr, left, right) {
  if (left >= right) return;

  let partitionIdx = partition(arr, left, right);
  quickSort(arr, left, partitionIdx - 1);
  quickSort(arr, partitionIdx + 1, right);
}
