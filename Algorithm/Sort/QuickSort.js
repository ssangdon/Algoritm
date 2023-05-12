const QuickSort = arr => {
  let arrs = arr;
  if (arrs.length < 2) {
    return arrs;
  }
  let pivot = [arr[0]];
  let left = [];
  let right = [];
  for (var i = 1; i < arrs.length; i++) {
    if (arrs[i] > pivot) right.push(arrs[i]);
    else if (arrs[i] < pivot) left.push(arrs[i]);
    else pivot.push(arrs[i]);
  }
  return [...QuickSort(left), ...pivot, ...QuickSort(right)];
};

console.log(QuickSort([1, 4, 9, 9, 10, 54, 32, 45, 33, 7]));
