// 프림 알고리즘
// 임의의 노드 T에 대해서 가중치가 작은 간선을 선택한다.
const arr = [
  [1, 2, 5],
  [1, 3, 4],
  [2, 3, 2],
  [2, 4, 7],
  [3, 4, 6],
  [4, 6, 8],
  [4, 5, 3],
  [3, 5, 11],
  [6, 5, 8],
];
const prim = (n, arr) => {
  const graph = Array.from(Array(n + 1), () => Array(n + 1).fill(Infinity));
  let length = n - 1;
  let count = 0;
  let weight = 0;
  let start = 1;
  let node = new Array(n + 1).fill(0);
  for (var i = 0; i < node.length; i++) {
    node[i] = i;
  }
  arr.map(data => {
    let [x, y, value] = data;
    graph[x][y] = value;
    graph[y][x] = value;
  });
  let visited = [start];
  while (count !== length) {
    console.log(start);
    let picked = graph[start];
    let min = Math.min(...picked);
    let idx = picked.indexOf(min);
    if (!visited.includes(idx)) {
      visited.push(idx);
      weight += min;
      count++;
      start = idx;
    } else {
      let stack = [];
      picked.map((data, i) => {
        if (data >= min && i !== 0 && i !== idx && !visited.includes(i))
          stack.push([data, i]);
      });
      stack.sort((a, b) => a[0] - b[0]);
      console.log(stack);
      start = stack[0][1];
    }
  }
  console.log(weight);
};

prim(6, arr);
