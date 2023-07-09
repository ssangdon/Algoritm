function solution(maps) {
  var answer = [];
  let dx = [-1, 1, 0, 0];
  let dy = [0, 0, -1, 1];
  let road = Array.from(Array(maps.length), () =>
    Array(maps[0].length).fill(0)
  );
  maps.forEach((data, idx) => {
    data.split("").forEach((d, i) => {
      road[idx][i] = d;
    });
  });
  for (var i = 0; i < road.length; i++) {
    for (var k = 0; k < road[i].length; k++) {
      let count = 0;
      if (road[i][k] !== "X") {
        let needVisit = [[i, k]];
        while (needVisit.length) {
          let [x, y] = needVisit.pop();
          if (road[x][y] !== "X") {
            count += parseInt(road[x][y]);
            road[x][y] = "X";
          }
          for (var j = 0; j < 4; j++) {
            let lX = x + dx[j];
            let lY = y + dy[j];
            if (
              lX < maps.length &&
              lX >= 0 &&
              lY >= 0 &&
              lY < maps[0].length &&
              road[lX][lY] !== "X"
            ) {
              needVisit.push([lX, lY]);
            }
          }
        }
        answer.push(count);
      } else {
        continue;
      }
    }
  }
  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}
