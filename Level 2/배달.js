const getMin = (arr, visi) => {
  let isVisited = visi;
  let min = Infinity;
  let idx = 0;
  for (var i = 1; i <= arr.length; i++) {
    if (arr[i] < min && !isVisited[i]) {
      min = arr[i];
      idx = i;
    }
  }
  return [min, idx];
};

function solution(N, road, K) {
  var answer = 0;
  let arr = Array.from(Array(N + 1), () => Array(N + 1).fill(Infinity));
  let visited = new Array(N + 1).fill(false);

  for (var k = 1; k <= N; k++) {
    arr[k][k] = 0;
  }
  visited[1] = true;
  road.forEach((data, idx) => {
    let [x, y, value] = data;
    arr[x][y] = Math.min(arr[x][y], value);
    arr[y][x] = Math.min(arr[y][x], value);
  });
  let weight = arr[1];
  let count = 0;
  let min = 0;
  let end = N;
  while (count < end - 1) {
    let [minVal, idx] = getMin(weight, visited);
    let selectedArr = arr[idx];
    for (var k = 1; k <= N; k++) {
      if (weight[k] > selectedArr[k] + minVal && !visited[k]) {
        weight[k] = selectedArr[k] + minVal;
      }
    }
    visited[idx] = true;
    count++;
  }
  return weight.filter(d => d <= K).length;
}
