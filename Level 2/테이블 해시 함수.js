function solution(data, col, row_begin, row_end) {
  let sorted = data.sort((a, b) => {
    if (a[col - 1] === b[col - 1]) {
      return b[0] > a[0] ? 1 : -1;
    } else {
      return a[col - 1] > b[col - 1] ? 1 : -1;
    }
  });
  let result = [];
  sorted.forEach((d, i) => {
    let val = d;
    if (i + 1 >= row_begin && i + 1 <= row_end) {
      let sum = 0;
      d.forEach((data, idx) => {
        sum += data % (i + 1);
      });
      result.push(sum);
    }
  });
  let a = result[0];
  for (var i = 1; i < result.length; i++) {
    a = a ^ result[i];
  }
  return a;
}
