// 크루스칼 알고리즘, 싸이클을 이루지 않고 비용이 가장 적은 경로를 찾는 알고리즘
// 비용이 적은 순서대로 sort 한뒤, union-find를 이용하여, 노드들을 묶는다.
// 만약 추가하려는 노드가 싸이클을 이룰시 추가하지않고, 다음 노드로 넘어간다.

const costs = [
  [7, 1, 12],
  [4, 7, 13],
  [4, 1, 28],
  [1, 5, 17],
  [4, 2, 24],
  [2, 5, 62],
  [2, 1, 67],
  [7, 5, 73],
  [5, 6, 45],
  [5, 3, 20],
  [6, 3, 37],
];

const Kruskal = cost => {
  let costs = cost;
  costs.sort((a, b) => a[2] - b[2]);
  let node = [];
  for (var i = 0; i <= 7; i++) {
    node.push(i);
  }

  const getParent = (parent, x) => {
    if (parent[x] === x) return x;
    return getParent(parent, parent[x]);
  };

  const unionParent = (parent, x, y) => {
    let a = getParent(parent, x);
    let b = getParent(parent, y);
    if (a < b) parent[b] = a;
    else parent[a] = b;
  };

  const findParent = (parent, x, y) => {
    let a = getParent(parent, x);
    let b = getParent(parent, y);
    if (a === b) return true;
    else return false;
  };
  let count = 0;

  for (var i = 0; i < costs.length; i++) {
    if (!findParent(node, costs[i][0], costs[i][1])) {
      unionParent(node, costs[i][0], costs[i][1]);
      count += costs[i][2];
    }
  }
  console.log(count);
};

Kruskal(costs);
