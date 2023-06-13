function maximumSubarray(A, start, end) {
  if (start == end) return A[start];
  else {
    let middle = (start + end) / 2;
    middle = Math.floor(middle);

    const sumLeft = maximumSubarray(A, start, middle);
    const sumRight = maximumSubarray(A, middle + 1, end);
    const sumMiddle = crossMiddle(A, start, middle, end);

    if (sumLeft > sumRight && sumLeft > sumMiddle) return sumLeft;
    else if (sumRight > sumLeft && sumRight > sumMiddle) return sumRight;
    else if (sumMiddle > sumLeft && sumMiddle > sumRight) return sumMiddle;
  }
}

function crossMiddle(A, start, middle, end) {
  let sumLeft = -9999999999;
  let sumRight = -9999999999;
  let sum;

  sum = 0;
  for (let i = middle; i >= start; i--) {
    sum = sum + A[i];
    if (sum > sumLeft) sumLeft = sum;
  }

  sum = 0;
  for (let i = middle + 1; i <= end; i++) {
    sum = sum + A[i];
    if (sum > sumRight) sumRight = sum;
  }

  return sumLeft + sumRight;
}

// Arrays from test
const array = [18, 20, -7, 12, -5, -22, 14, 3];
// const array = [13, -3, -25, 20, -3, -16, -23, 18, 20, -7, 12, -5, -22, 15, -4, 7];
// const array = [10, 5, -17, 20, 50, -1, 3, -30, 10];

// Execution
const maxValue = maximumSubarray(array, 0, array.length - 1);
console.log("maxValue: " + maxValue);
