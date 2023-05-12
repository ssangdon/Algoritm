const SelectionSort = arr => {
  let arrs = arr;
  for (var i = 0; i < arrs.length; i++) {
    for (var k = i + 1; k < arrs.length; k++) {
      if (arrs[i] > arrs[k]) {
        let tmp = arrs[k];
        arrs[k] = arrs[i];
        arrs[i] = tmp;
      }
    }
  }
  console.log(arrs);
};

SelectionSort([1, 10, 5, 4, 19, 20, 25, 30, 20]);
