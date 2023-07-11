//플로이드-와샬 알고리즘
// 모든 정점으로부터 다른 모든 정점으로까지 가는 최단거리를 구하는 알고리즘
// 점화식 : graph[x][y] = Math.min(graph[x][y], graph[x][i] + graph[i][y])
// 시간복잡도 : O(n^3)

const INF = Infinity;

const arr = [
  [0, 4, INF, 6],
  [3, 0, 7, INF],
  [5, INF, 0, 4],
  [INF, INF, 2, 0],
];

const getCombination = (arr, selectNum) => {
  let result = [];
  if (selectNum === 1) return arr.map(data => [data]);
  arr.forEach((fixed, idx, origin) => {
    let rest = [...origin.slice(0, idx), ...origin.slice(idx + 1)];
    let combi = getCombination(rest, selectNum - 1);
    let attached = combi.map(d => [fixed, ...d]);
    result.push(...attached);
  });
  return result;
};

const Floyd_Warshall = (N, arr) => {
  let graph = arr;
  let n = N;
  let numArr = new Array(n).fill().map((_, i) => i);

  for (var i = 0; i < n; i++) {
    let filtered = getCombination(
      numArr.slice().filter(d => d !== i),
      2
    );
    filtered.map((data, idx) => {
      let [x, y] = data;
      graph[x][y] = Math.min(graph[x][y], graph[x][i] + graph[i][y]);
    });
  }
  console.log(graph);
};
Floyd_Warshall(4, arr);
