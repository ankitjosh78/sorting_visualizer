function mergeTwoSortedArrays(arr, left, mid, right) {
  let leftStart = left;
  let leftEnd = mid;
  let rightStart = mid + 1;
  let rightEnd = right;
  let start = 0;
  // Creating a temporary array of size (right - left + 1)
  let auxialliaryArray = new Array(parseInt(right) - parseInt(left) + 1);

  // Merging the two sorted arrays
  while (leftStart <= leftEnd && rightStart <= rightEnd) {
    if (arr[leftStart] < arr[rightStart]) {
      auxialliaryArray[start++] = arr[leftStart++];
    } else {
      auxialliaryArray[start++] = arr[rightStart++];
    }
  }

  // When elements from any one of the array gets over, we can push all the elements remaining from the other array to our sorted array
  if (leftStart > leftEnd) {
    while (rightStart <= rightEnd) {
      auxialliaryArray[start++] = arr[rightStart++];
    }
  } else if (rightStart > rightEnd) {
    while (leftStart <= leftEnd) {
      auxialliaryArray[start++] = arr[leftStart++];
    }
  }

  start = 0;
  let i = left;
  while (i <= right) {
    arr[i++] = auxialliaryArray[start++];
  }
}

function mergeSort(arr, left, right) {
  if (left >= right) return;

  let mid = (left + right) / 2;
  mid = Math.floor(parseInt(mid));
  // Sorting the left and right halves recursively
  mergeSort(arr, left, mid);
  mergeSort(arr, mid + 1, right);
  // Merging the two sorted halves
  mergeTwoSortedArrays(arr, left, mid, right);
}
