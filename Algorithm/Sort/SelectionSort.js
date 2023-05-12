const SelectionSort = arr => {
  let arrs = arr;
  for (var i = 0; i < arrs.length; i++) {
    let min = 9999;
    let idx = 0;
    let tmp;
    for (var k = i; k < arrs.length; k++) {
      if (min > arrs[k]) {
        min = arrs[k];
        idx = k;
      }
    }

    tmp = arrs[i];
    arrs[i] = min;
    arrs[idx] = tmp;
  }
  console.log(arrs);
};

SelectionSort([1, 10, 5, 4, 19, 20, 25, 30, 20]);
