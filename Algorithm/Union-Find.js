//    1
//  2   3
//    4
// 모두 연결 되어있다고 하자

const graph = {
  1: [2, 3],
  2: [1, 4],
  3: [1, 4],
  4: [2, 3],
};
const unionFind = () => {
  let node = [];
  for (var i = 0; i < 4; i++) {
    node[i] = i;
  }
  //부모노드 가져오기
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
  //   let cost = 0;
  //   let costs = [
  //     [0, 1, 2],
  //     [1, 2, 3],
  //     [2, 3, 5],
  //     [2, 0, 7],
  //   ];
  //   for (var i = 0; i < costs.length; i++) {
  //     if (!findParent(node, costs[i][0], costs[i][1])) {
  //       unionParent(node, costs[i][0], costs[i][1]);
  //       cost += costs[i][2];
  //     }
  //   }
  //   console.log(cost);
};

unionFind();
