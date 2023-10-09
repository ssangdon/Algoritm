function solution(n, s, a, b, fares) {
  let min = Infinity;
  let graph = Array.from(Array(n), () => Array(n).fill(Infinity));
  console.log(graph);
  fares.forEach((data, idx) => {
    let [x, y, value] = data;
    graph[x - 1][y - 1] = value;
    graph[y - 1][x - 1] = value;
  });
}

solution(6, 4, 6, 2, [
  [4, 1, 10],
  [3, 5, 24],
  [5, 6, 2],
  [3, 1, 41],
  [5, 1, 24],
  [4, 6, 50],
  [2, 4, 66],
  [2, 3, 22],
  [1, 6, 25],
]);
