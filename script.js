


const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    const numBars = 100;
    const barWidth = canvas.width / numBars;
    const barHeightMax = canvas.height - 10;
    const delay = 5;

    // Generate random array of data
    /*let data = [];
    for (let i = 0; i < numBars; i++) {
      data.push(Math.floor(Math.random() * barHeightMax) + 1);
    }*/
    function generateArray() {
      // Generate random array of data
      data = [];
      for (let i = 0; i < numBars; i++) {
        data.push(Math.floor(Math.random() * barHeightMax) + 1);
      }
      drawBars();
    }
    
    // Add event listener to button
    const generateBtn = document.querySelector("button");
    generateBtn.addEventListener("click", generateArray);
    
    

    // Draw bars
    function drawBars() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < data.length; i++) {
        const x = i * barWidth;
        const y = canvas.height - data[i];
        ctx.fillStyle = "#22224d";
        ctx.fillRect(x, y, barWidth, data[i]);
      }
    }

    // Bubble sort algorithm
    async function bubbleSort() {
      for (let i = 0; i < data.length - 1; i++) {
        for (let j = 0; j < data.length - 1 - i; j++) {
          if (data[j] > data[j + 1]) {
            const temp = data[j];
            data[j] = data[j + 1];
            data[j + 1] = temp;
            drawBars();
            await sleep(delay);
          }
        }
      }
    }

   /* // Sleep function for animation delay
    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }*/

    // Sort and animate bars
    bubbleSort();
    
  // Selection sort algorithm
async function selectionSort() {
  for (let i = 0; i < data.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < data.length; j++) {
      if (data[j] < data[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      const temp = data[i];
      data[i] = data[minIndex];
      data[minIndex] = temp;
      drawBars();
      await sleep(delay);
    }
  }
}

// Call selectionSort and start animation
selectionSort();

// Insertion sort algorithm
async function insertionSort() {
  for (let i = 1; i < data.length; i++) {
    const key = data[i];
    let j = i - 1;
    while (j >= 0 && data[j] > key) {
      data[j + 1] = data[j];
      j--;
      drawBars();
      await sleep(delay);
    }
    data[j + 1] = key;
    drawBars();
    await sleep(delay);
  }
}

// Call insertionSort and start animation
insertionSort();

// Merge sort algorithm
async function mergeSort(arr, left, right) {
  if (left < right) {
    const mid = Math.floor((left + right) / 2);
    await mergeSort(arr, left, mid);
    await mergeSort(arr, mid + 1, right);
    await merge(arr, left, mid, right);
  }
}

// Merge helper function
async function merge(arr, left, mid, right) {
  const n1 = mid - left + 1;
  const n2 = right - mid;
  const L = new Array(n1);
  const R = new Array(n2);

  for (let i = 0; i < n1; i++) {
    L[i] = arr[left + i];
  }
  for (let j = 0; j < n2; j++) {
    R[j] = arr[mid + 1 + j];
  }

  let i = 0, j = 0, k = left;

  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    k++;
    drawBars();
    await sleep(delay);
  }

  while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
    drawBars();
    await sleep(delay);
  }

  while (j < n2) {
    arr[k] = R[j];
    j++;
    k++;
    drawBars();
    await sleep(delay);
  }
}
// Attach mergeSort() function to Merge Sort button
const mergeSortBtn = document.querySelectorAll("button")[4];
mergeSortBtn.addEventListener("click", async function() {
  await mergeSort(data, 0, data.length - 1);
  drawBars();
});


// Call mergeSort and start animation
mergeSort(data, 0, data.length - 1);

//quick sort algorithm

async function quickSort(arr, left, right) {
  if (left < right) {
    const pivotIndex = await partition(arr, left, right);
    await quickSort(arr, left, pivotIndex - 1);
    await quickSort(arr, pivotIndex + 1, right);
  }
}

async function partition(arr, left, right) {
  const pivotValue = arr[right];
  let pivotIndex = left;
  for (let i = left; i < right; i++) {
    if (arr[i] < pivotValue) {
      await swap(arr, i, pivotIndex);
      pivotIndex++;
    }
  }
  await swap(arr, right, pivotIndex);
  return pivotIndex;
}

async function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  drawBars();
  await sleep(delay);
}


// Attach quickSort() function to Quick Sort button
const quickSortBtn = document.querySelectorAll("button")[5];
quickSortBtn.addEventListener("click", async function() {
  await quickSort(0, data.length - 1);
  drawBars();
});

//call quick sort
quickSort(0, data.length - 1);


// Sleep function for animation delay
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}





 






