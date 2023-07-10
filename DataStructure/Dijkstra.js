const INF = Infinity;
const arr = [
  [0, 2, 5, 1, INF, INF],
  [2, 0, 3, 2, INF, INF],
  [5, 3, 0, 3, 1, 5],
  [1, 2, 3, 0, 1, INF],
  [INF, INF, 1, 1, 0, 2],
  [INF, INF, 5, INF, 2, 0],
];

const getMin = (weight, visited) => {
  let min = Infinity;
  let idx = 0;
  for (var i = 0; i < weight.length; i++) {
    if (weight[i] < min && !visited[i]) {
      idx = i;
      min = weight[i];
    }
  }
  return [min, idx];
};

const Dijkstra = (n, arr, start) => {
  let graph = arr;
  let visited = new Array(n).fill(false);
  let count = 0;
  let weight = graph[start];
  visited[start] = true;
  while (count < n - 1) {
    let [minValue, minIdx] = getMin(weight, visited);
    let selectedArr = graph[minIdx];
    for (var i = 0; i < n; i++) {
      if (weight[i] > minValue + selectedArr[i] && !visited[i]) {
        weight[i] = selectedArr[i] + minValue;
      }
    }
    visited[minIdx] = true;
    count++;
  }
  console.log(weight);
};

Dijkstra(6, arr, 0, 5);
