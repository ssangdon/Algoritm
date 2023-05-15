// 경우의 수를 나누어서 풀자
// 게임이 끝난 경우
// 'O'승 -> 'O'의 개수가 'X'의 개수보다 1개 많아야함.
// 'X'승 -> 'O'의 개수와 'X'의 개수가 같아야함.
// 게임이 안끝난 경우 ->'X'의 개수는 'O'의 개수보다 적거나 같아야한다.

const checkFinish = arr => {
  let oIdx = [];
  let xIdx = [];
  let finish = false;

  let line = false;
  let whoWin = "";
  arr.forEach((data, idx) => {
    if (data[0] !== "." && data[0] === data[1] && data[1] === data[2]) {
      finish = true;
      if (data[0] === "X") line = true;
      if (whoWin !== "O") {
        whoWin = data[0];
      }
    }
    data.forEach((d, i) => {
      if (d === "O") oIdx.push([idx, i]);
      else if (d === "X") xIdx.push([idx, i]);
    });
  });
  for (var k = 0; k < 3; k++) {
    if (
      arr[0][k] !== "." &&
      arr[0][k] === arr[1][k] &&
      arr[1][k] === arr[2][k]
    ) {
      finish = true;
      if (arr[0][k] === "X") line = true;
      if (whoWin !== "O") {
        whoWin = arr[0][k];
      }
    }
  }
  if (arr[0][0] !== "." && arr[0][0] === arr[1][1] && arr[1][1] === arr[2][2]) {
    finish = true;
    if (whoWin !== "O") {
      whoWin = arr[0][0];
    }
  }
  if (arr[2][0] !== "." && arr[2][0] === arr[1][1] && arr[1][1] === arr[0][2]) {
    finish = true;
    if (whoWin !== "O") {
      whoWin = arr[2][0];
    }
  }
  console.log([finish, whoWin]);
  if (finish) {
    if (whoWin === "O") {
      if (oIdx.length == xIdx.length + 1) {
        if (line && xIdx.length >= 3) {
          return 0;
        } else {
          return 1;
        }
      } else {
        return 0;
      }
    } else {
      if (oIdx.length == xIdx.length) {
        return 1;
      } else {
        return 0;
      }
    }
  } else {
    if (xIdx.length === oIdx.length || xIdx.length + 1 === oIdx.length) {
      return 1;
    } else {
      return 0;
    }
  }
};

function solution(board) {
  var answer = -1;
  board = board.map(d => d.split(""));
  return checkFinish(board);
}
