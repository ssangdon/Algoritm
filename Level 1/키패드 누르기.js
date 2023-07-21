function solution(numbers, hand) {
  var answer = "";
  let keyPad = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    "*": [3, 0],
    0: [3, 1],
    "#": [3, 2],
  };
  let left = keyPad["*"];
  let right = keyPad["#"];
  numbers.forEach((data, idx) => {
    if (data === 1 || data === 4 || data === 7) {
      answer += "L";
      left = keyPad[data];
    } else if (data === 3 || data === 6 || data === 9) {
      answer += "R";
      right = keyPad[data];
    } else {
      let lDistance = 0;
      let rDistance = 0;
      let val = keyPad[data];
      lDistance = Math.abs(left[0] - val[0]) + Math.abs(left[1] - val[1]);
      rDistance = Math.abs(right[0] - val[0]) + Math.abs(right[1] - val[1]);
      if (lDistance < rDistance) {
        answer += "L";
        left = val;
      } else if (lDistance > rDistance) {
        answer += "R";
        right = val;
      } else {
        if (hand === "left") {
          answer += "L";
          left = val;
        } else {
          answer += "R";
          right = val;
        }
      }
    }
  });
  return answer;
}
