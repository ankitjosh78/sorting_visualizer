function bubbleSort(arr, left, right) {
  for (let i = 0; i <= right; i++) {
    let flag = false;
    for (let j = 0; j <= right - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        flag = true;
      }
    }
    if (flag == false) break;
  }
}
