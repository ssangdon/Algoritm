function solution(land) {
  var answer = 0;
  let dx = [-1, 1, 0, 0];
  let dy = [0, 0, -1, 1];
  let n = land.length;
  let m = land[0].length;
  let arr = new Array(m).fill(0);
  let visited = Array.from(Array(n), () => Array(m).fill(false));
  for (var i = 0; i < n; i++) {
    for (var k = 0; k < m; k++) {
      if (land[i][k] === 0) {
        continue;
      } else {
        if (!visited[i][k]) {
          let queue = [[i, k]];
          let sum = 0;
          // 해당하는 가로 인덱스를 담을 배열
          let garo = new Array(m).fill(false);
          while (queue.length) {
            let [x, y] = queue.pop();
            if (!visited[x][y]) {
              sum += 1;
              visited[x][y] = true;
              garo[y] = true;
              for (var j = 0; j < 4; j++) {
                let lx = x + dx[j];
                let ly = y + dy[j];
                if (
                  lx >= 0 &&
                  ly >= 0 &&
                  lx < n &&
                  ly < m &&
                  land[lx][ly] === 1 &&
                  !visited[lx][ly]
                ) {
                  queue.push([lx, ly]);
                }
              }
            }
          }
          garo.forEach((d, i) => {
            if (d === true) arr[i] += sum;
          });
        }
      }
    }
  }
  return Math.max(...arr);
}
