const BubbleSort = arr => {
  let arrs = arr;
  for (var i = 0; i < arrs.length; i++) {
    for (var k = i; k < arrs.length - 1; k++) {
      if (arrs[k] > arrs[k + 1]) {
        let tmp = arrs[k];
        arrs[k] = arrs[k + 1];
        arrs[k + 1] = tmp;
      }
    }
  }
  console.log(arrs);
};
BubbleSort([1, 9, 15, 32, 49, 30, 5959, 30]);
