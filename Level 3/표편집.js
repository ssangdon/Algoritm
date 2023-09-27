class linkedList {
  constructor(idx, node) {
    this.idx = idx;
    this.prev = node;
    this.back;
  }
}

function solution(n, k, cmd) {
  var answer = new Array(n).fill("O");
  let root = new linkedList(0);
  let prevNode = root;
  let currentNode = root;
  for (var i = 1; i < n; i++) {
    const cur = new linkedList(i, prevNode);
    prevNode.back = cur;
    prevNode = cur;
    if (i === k) currentNode = cur;
  }
  let trash = [];
  cmd.forEach(data => {
    let [command, num] = data.split(" ");
    let count = 0;
    switch (command) {
      case "U":
        while (count < num && currentNode.prev) {
          currentNode = currentNode.prev;
          count++;
        }
        break;
      case "D":
        while (count < num && currentNode.back) {
          currentNode = currentNode.back;
          count++;
        }
        break;
      case "C":
        trash.push(currentNode);
        let prev = currentNode.prev;
        let back = currentNode.back;
        if (prev && back) {
          prev.back = back;
          back.prev = prev;
          currentNode = back;
        } else if (prev) {
          prev.back = null;
          currentNode = prev;
        } else if (back) {
          back.prev = null;
          currentNode = back;
        }
        break;
      case "Z":
        let popNode = trash.pop();
        let prevNode = popNode.prev;
        let backNode = popNode.back;
        if (prevNode) {
          prevNode.back = popNode;
        }
        if (backNode) {
          backNode.prev = popNode;
        }
        break;
    }
  });
  trash.forEach(d => {
    answer[d.idx] = "X";
  });
  return answer.join("");
}
