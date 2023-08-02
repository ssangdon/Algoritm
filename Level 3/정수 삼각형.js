function solution(triangle) {
  var answer = 0;
  triangle.forEach((data, height) => {
    if (height > 0) {
      let upVal = triangle[height - 1];
      let currentVal = data;
      for (var i = 0; i < currentVal.length; i++) {
        if (i === 0) {
          currentVal[0] += upVal[0];
        } else if (i === currentVal.length - 1) {
          currentVal[currentVal.length - 1] += upVal[upVal.length - 1];
        } else {
          let [forward, back] = [i - 1, i];
          if (upVal[forward] > upVal[back]) {
            currentVal[i] += upVal[forward];
          } else {
            currentVal[i] += upVal[back];
          }
        }
      }
    }
  });
  return Math.max(...triangle[triangle.length - 1]);
}
