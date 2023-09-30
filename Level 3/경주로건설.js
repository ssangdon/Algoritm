const reverseDir = idx => {
  if (idx === 0 || idx === 2) {
    return [1, 3];
  } else {
    return [0, 2];
  }
};

function solution(board) {
  var answer = 0;
  let len = board.length;
  let result = [];
  // 상 우 하 좌
  let dir = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  let q = [[0, 0, null, 0]];
  while (q.length) {
    let [x, y, direction, cost] = q.shift();
    if (board[x][y] < cost && board[x][y] > 0) continue;
    board[x][y] = cost;
    if (x === len - 1 && y === len - 1) result.push(cost);

    dir.forEach(([dx, dy], idx) => {
      let lx = x + dx;
      let ly = y + dy;

      if (lx >= 0 && ly >= 0 && lx < len && ly < len && board[lx][ly] !== 1) {
        if (direction === null) {
          q.push([lx, ly, idx, cost + 100]);
        } else {
          let [d1, d2] = reverseDir(direction);

          if (idx === d1 || idx === d2) {
            q.push([lx, ly, idx, cost + 600]);
          } else {
            q.push([lx, ly, idx, cost + 100]);
          }
        }
      }
    });
  }
}
