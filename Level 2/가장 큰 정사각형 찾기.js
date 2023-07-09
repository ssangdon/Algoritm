function solution(board) {
  let answer = 0;
  let width = 0;
  if (board.length <= 1 || board[0].length <= 1) return 1;
  for (var i = 1; i < board.length; i++) {
    for (var k = 1; k < board[0].length; k++) {
      if (board[i][k] > 0) {
        let left = board[i][k - 1];
        let up = board[i - 1][k];
        let cross = board[i - 1][k - 1];
        let min = Math.min(left, up, cross);
        board[i][k] = min + 1;
        width = Math.max(width, min + 1);
      }
    }
  }
  return width ** 2;
}
