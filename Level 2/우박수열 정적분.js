const getWidth = (obj, x, y) => {
  let min = x;
  let max = y;
  let width = 0;
  if (min > max) {
    return -1;
  } else {
    for (var i = min; i < max; i++) {
      let a = obj[i];
      let b = obj[i + 1];
      width += (a + b) / 2;
    }
    return width;
  }
};

function solution(k, ranges) {
  var answer = [];
  let obj = {};
  let x = 0;
  while (k !== 1) {
    obj[x] = k;
    if (k % 2 == 0) {
      k = k / 2;
    } else {
      k = k * 3 + 1;
    }
    x++;
  }
  obj[x] = k;
  ranges.forEach((d, i) => {
    let [a, b] = d;
    answer.push(getWidth(obj, a, x + b));
  });
  return answer;
}
