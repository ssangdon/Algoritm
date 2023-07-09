function solution(maps) {
  let maps1 = maps.map(d => d.split(""));
  let maps2 = maps.map(d => d.split(""));
  let saero = maps.length;
  let garo = maps[0].length;
  let dx = [1, -1, 0, 0];
  let dy = [0, 0, -1, 1];
  let start = [];
  let lever = [];
  let goal = [];
  let renew = [];
  let queue2 = [];
  for (var i = 0; i < saero; i++) {
    for (var j = 0; j < garo; j++) {
      if (maps[i][j] === "S") start.push([i, j]);
      else if (maps[i][j] === "E") goal.push([i, j]);
      else if (maps[i][j] === "L") lever.push([i, j]);
    }
  }

  let a = calc(start, maps1, lever);
  let b = calc(lever, maps2, goal);
  if (a === -1 || b === -1) return -1;
  else return a + b;
}

const calc = (start, graph, end) => {
  let answer = 0;
  let queue = [];
  let maps = graph;
  let dx = [1, -1, 0, 0];
  let dy = [0, 0, 1, -1];
  let garo = maps[0].length;
  let saero = maps.length;
  queue.push([start[0][0], start[0][1]]);
  maps[start[0][0]][start[0][1]] = 1;
  while (queue.length > 0) {
    let size = queue.length;
    for (var i = 0; i < size; i++) {
      let [x, y] = queue.shift();
      for (var j = 0; j < 4; j++) {
        let nx = x + dx[j];
        let ny = y + dy[j];
        if (
          nx >= 0 &&
          nx < saero &&
          ny >= 0 &&
          ny < garo &&
          maps[nx][ny] !== 1 &&
          maps[nx][ny] !== "X"
        ) {
          queue.push([nx, ny]);
          maps[nx][ny] = 1;
        }
        if (nx === end[0][0] && ny === end[0][1]) {
          return answer + 1;
        }
      }
    }
    answer++;
  }
  return (answer = -1);
};
