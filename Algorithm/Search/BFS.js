// DFS(Depth first Search)
// 그래프가 주어졌을때, stack을 사용하여, depth를 1씩 증가하면서 먼저 찾는 탐색기법
// 두 가지 방법이 있다.
// 1. while문 사용
// 2. 재귀함수 사용

const graph = {
  1: [1, 2, 3],
  2: [1, 4, 5],
  3: [1, 6, 7],
  4: [2],
  5: [2],
  6: [3],
  7: [3],
};

const BFS_while = graph => {
  let graphs = graph;
  let nodeNum = Object.keys(graphs).length;
  let visited = new Array(nodeNum).fill(false);
  let stack = [1];
  while (stack.length) {
    let size = stack.length;
    for (var i = 0; i < size; i++) {
      let popped = stack.shift();
      if (!visited[popped - 1]) {
        console.log(popped);
        visited[popped - 1] = true;
        stack.push(...graphs[popped]);
      }
    }
  }
};

BFS_while(graph);

const BFS_recursive = (graph, needVisit, visit) => {
  let graphs = graph;
  let visited = [...visit];
  let need = [...needVisit];
  if (need.length === 0) {
    return 0;
  }
  let shifted = need.shift();
  if (!visited.includes(shifted)) {
    visited.push(shifted);
    console.log(shifted);
    need.push(...graphs[shifted]);
    BFS_recursive(graphs, need, visited);
  } else {
    BFS_recursive(graphs, need, visited);
  }
};

BFS_recursive(graph, [1], []);
