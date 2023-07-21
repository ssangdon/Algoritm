function solution(board, moves) {
  var answer = 0;
  let len = board.length;
  let newArr = Array.from(Array(len), () => Array());
  for (var i = 0; i < len; i++) {
    for (var k = len - 1; k >= 0; k--) {
      if (board[k][i] !== 0) {
        newArr[i].push(board[k][i]);
      }
    }
  }

  let stack = [];
  moves.forEach((data, idx) => {
    let num = data - 1;
    let selected = newArr[num];
    let popped = selected.pop();
    if (popped !== undefined) {
      if (stack.length > 0 && stack.at(-1) === popped) {
        stack.pop();
        answer += 2;
      } else {
        stack.push(popped);
      }
    }
  });
  return answer;
}
