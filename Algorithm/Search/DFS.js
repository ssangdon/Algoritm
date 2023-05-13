// DFS(Depth first Search)
// 그래프가 주어졌을때, queue를 사용하여, depth를 1씩 증가하면서 먼저 찾는 탐색기법
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
const DFS_while = graph => {
  //시작노드는 1부터
  let graphs = graph;
  let nodeNum = Object.keys(graphs).length;
  let visited = new Array(nodeNum).fill(0);
  let queue = [1];
  while (queue.length) {
    let shifted = queue.shift();
    if (!visited[shifted - 1]) {
      console.log(shifted);
      visited[shifted - 1] = 1;
      queue.unshift(...graphs[shifted]);
    }
  }
};

DFS_while(graph);

const DFS_recursive = (graph, visit, needVisit) => {
  let graphs = graph;
  let visited = [...visit];
  let need = [...needVisit];
  for (var i = 0; i < need.length; i++) {
    if (!visited.includes(needVisit[i])) {
      console.log(needVisit[i]);
      visited.push(needVisit[i]);
      need.unshift(...graphs[needVisit[i]]);
      return DFS_recursive(graph, visited, need);
    }
  }
};
DFS_recursive(graph, [], [1]);
