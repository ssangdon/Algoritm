function solution(m, n, puddles) {
  var answer = 0;
  let arr = Array.from(Array(n + 1), () => Array(m + 1).fill(0));
  for (var i = 1; i < n + 1; i++) {
    arr[i][1] = 1;
  }
  for (var j = 1; j < m + 1; j++) {
    arr[1][j] = 1;
  }
  puddles.forEach(data => {
    let [y, x] = data;
    if (x === 1) {
      for (var a = y; a < m + 1; a++) {
        arr[1][a] = "X";
      }
    } else if (y == 1) {
      for (var b = x; b < n + 1; b++) {
        arr[b][1] = "X";
      }
    } else {
      arr[x][y] = "X";
    }
  });
  for (var i = 2; i < n + 1; i++) {
    for (var k = 2; k < m + 1; k++) {
      if (arr[i][k] !== "X") {
        if (arr[i - 1][k] === "X" && arr[i][k - 1] === "X") {
          arr[i][k] = 0;
        } else if (arr[i][k - 1] === "X") {
          arr[i][k] = arr[i - 1][k] % 1000000007;
        } else if (arr[i - 1][k] === "X") {
          arr[i][k] = arr[i][k - 1] % 1000000007;
        } else {
          arr[i][k] = (arr[i][k - 1] + arr[i - 1][k]) % 1000000007;
        }
      }
    }
  }
  return arr[n][m] % 1000000007;
}
