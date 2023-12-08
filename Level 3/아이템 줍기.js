function solution(rectangle, characterX, characterY, itemX, itemY) {
  var answer = 0;
  let dx = [-1, 1, 0, 0];
  let dy = [0, 0, -1, 1];
  let board = Array.from(Array(101), () => Array(101).fill(0));
  let visited = Array.from(Array(101), () => Array(101).fill(0));
  rectangle.forEach(d => {
    let [x1, y1, x2, y2] = d;
    for (var i = y1 * 2; i <= y2 * 2; i++) {
      for (var k = x1 * 2; k <= x2 * 2; k++) {
        board[i][k] = 1;
      }
    }
  });

  rectangle.forEach(d => {
    let [x1, y1, x2, y2] = d;
    for (var i = y1 * 2 + 1; i <= y2 * 2 - 1; i++) {
      for (var k = x1 * 2 + 1; k <= x2 * 2 - 1; k++) {
        board[i][k] = 0;
      }
    }
  });
  let [startX, startY] = [characterY * 2, characterX * 2];
  let [endX, endY] = [itemY * 2, itemX * 2];
  let queue = [[startX, startY]];
  let times = 0;
  let ansArr = [];
  while (queue.length) {
    // console.log(queue)
    let [x, y] = queue.shift();
    if (x === endX && y === endY) {
      // console.log(times);
      ansArr.push(Math.ceil(times / 2));
      // queue.shift();
      // visited = Array.from(Array(101),()=>Array(101).fill(0));
      times = 0;
    } else {
      if (board[x][y] === 1) {
        times++;
        visited[x][y] = 1;
        for (var i = 0; i < 4; i++) {
          let lx = x + dx[i];
          let ly = y + dy[i];

          if (
            lx >= 1 &&
            ly >= 1 &&
            lx < 101 &&
            ly < 101 &&
            board[lx][ly] === 1 &&
            visited[lx][ly] === 0
          ) {
            queue.unshift([lx, ly]);
          }
        }
      }
    }
  }
  return Math.min(...ansArr);
}
