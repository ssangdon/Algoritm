function solution(rows, columns, queries) {
  var answer = [];
  let num = 1;
  let board = Array.from(Array(rows), () =>
    Array(columns)
      .fill()
      .map((_, i) => num++)
  );
  queries.forEach(d => {
    let [x1, y1, x2, y2] = d;
    let arr = [];
    x1--;
    y1--;
    x2--;
    y2--;
    // 오른쪽
    let dummy = board[x1][y2];
    arr.push(dummy);
    for (var i = y2; i > y1; i--) {
      board[x1][i] = board[x1][i - 1];
      arr.push(board[x1][i]);
    }
    // 아래
    let dummy2 = board[x2][y2];
    arr.push(dummy2);
    for (var k = x2; k > x1 + 1; k--) {
      board[k][y2] = board[k - 1][y2];
      arr.push(board[k][y2]);
    }
    board[x1 + 1][y2] = dummy;
    // 왼쪽
    let dummy3 = board[x2][y1];
    arr.push(dummy3);
    for (var j = y1; j < y2 - 1; j++) {
      board[x2][j] = board[x2][j + 1];
      arr.push(board[x2][j]);
    }
    board[x2][y2 - 1] = dummy2;
    // 위
    for (var q = x1; q < x2 - 1; q++) {
      board[q][y1] = board[q + 1][y1];
      arr.push(board[q][y1]);
    }
    board[x2 - 1][y1] = dummy3;
    answer.push(Math.min(...arr));
  });
  return answer;
}
