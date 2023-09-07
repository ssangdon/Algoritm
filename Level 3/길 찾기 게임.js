let arr1 = [];
let arr2 = [];
class Tree {
  constructor([x, y], num) {
    this.value = [x, y];
    this.left = null;
    this.right = null;
    this.num = num;
  }
  pushNode([x, y], num) {
    if (x > this.value[0]) {
      if (this.right === null) {
        this.right = new Tree([x, y], num);
      } else {
        this.right.pushNode([x, y], num);
      }
    } else if (x < this.value[0]) {
      if (this.left === null) {
        this.left = new Tree([x, y], num);
      } else {
        this.left.pushNode([x, y], num);
      }
    }
  }
  frontCircuit() {
    arr1.push(this.num);
    if (this.left !== null) {
      this.left.frontCircuit();
    }
    if (this.right !== null) {
      this.right.frontCircuit();
    }
  }
  backCircuit() {
    if (this.left !== null) {
      this.left.backCircuit();
    }
    if (this.right !== null) {
      this.right.backCircuit();
    }
    arr2.push(this.num);
  }
}
let nodeNum = {};

function solution(nodeinfo) {
  var answer = [[]];
  nodeinfo.forEach((d, i) => {
    nodeNum[d] = i + 1;
  });
  nodeinfo.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    } else {
      return b[1] - a[1];
    }
  });
  let tree = new Tree(nodeinfo[0], nodeNum[nodeinfo[0]]);
  for (var i = 1; i < nodeinfo.length; i++) {
    tree.pushNode(nodeinfo[i], nodeNum[nodeinfo[i]]);
  }
  tree.frontCircuit();
  tree.backCircuit();
  let result = [];
  result.push(arr1);
  result.push(arr2);
  return result;
}
