const check = (board, depth) => {
  for (var i = 0; i < depth; i++) {
    if (board[depth] === board[i]) return false;
    if (Math.abs(board[depth] - board[i]) === Math.abs(depth - i)) return false;
  }
  return true;
};

function solution(n) {
  var answer = 0;
  const re = (board, depth) => {
    if (depth === n - 1) answer++;
    else {
      for (var i = 0; i < n; i++) {
        let next = depth + 1;
        board[next] = i;
        if (check(board, next)) {
          re(board, next);
        }
      }
    }
  };
  for (var i = 0; i < n; i++) {
    let board = new Array(n).fill("X");
    board[0] = i;
    re(board, 0);
  }
  return answer;
}
