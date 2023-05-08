//MST문제, 쿠르스칼 알고리즘을 이용하자.
//가중치가 작은 노드들부터 더하자. 하지만 사이클이 형성되면 안된다!
//union-find를 이용하여 사이클형성되는지 확인

function solution(n, costs) {
  var answer = 0;
  costs.sort((a, b) => a[2] - b[2]);
  const node = [];
  for (var i = 0; i < n; i++) {
    node.push(i);
  }

  const checkParentNode = (parent, x) => {
    if (parent[x] === x) return x;
    return (parent[x] = checkParentNode(parent, parent[x]));
  };

  const union = (parent, x, y) => {
    let a = checkParentNode(parent, x);
    let b = checkParentNode(parent, y);
    if (a < b) return (parent[b] = a);
    else return (parent[a] = b);
  };
  const find = (parent, x, y) => {
    let a = checkParentNode(parent, x);
    let b = checkParentNode(parent, y);
    if (a === b) return true;
    else return false;
  };
  for (let val of costs) {
    if (!find(node, val[0], val[1])) {
      answer += val[2];
      union(node, val[0], val[1]);
    }
  }
  return answer;
}
