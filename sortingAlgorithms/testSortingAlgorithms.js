// Getting random number [min, max]
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Testing Sorting Algorithms
function testSortingAlgorithm() {
  for (let iterations = 1; iterations <= 1000; iterations++) {
    const sz = randomIntFromInterval(1, 1000);
    let arr = new Array(sz);
    for (let i = 0; i < sz; i++) {
      arr[i] = randomIntFromInterval(-1000, 1000);
    }

    const javascriptSortedArray = arr.slice();
    const algorithmSortedArray = arr.slice();

    javascriptSortedArray.sort((a, b) => a - b);
    //bubbleSort(algorithmSortedArray, 0, algorithmSortedArray.length - 1);
    quickSort(algorithmSortedArray, 0, algorithmSortedArray.length - 1);
    //mergeSort(algorithmSortedArray, 0, algorithmSortedArray.length - 1);

    console.log(sameArrays(javascriptSortedArray, algorithmSortedArray));
  }
}

// Checking if both arrays are same
function sameArrays(javascriptSortedArray, algorithmSortedArray) {
  if (javascriptSortedArray.length != algorithmSortedArray.length) {
    return false;
  }
  for (let i = 0; i < javascriptSortedArray.length; i++) {
    if (javascriptSortedArray[i] != algorithmSortedArray[i]) {
      return false;
    }
  }
  return true;
}

testSortingAlgorithm();
