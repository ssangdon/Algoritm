class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  // 경우의 수를 따져보자.
  // 입력값이 현재 부모노드보다 작을 경우 -> 왼쪽 자식노드로 가야한다.
  // 입력값이 현재 부모노드보다 클 경우 -> 오른쪽 자식노드로 가야한다.

  pushNode(value) {
    //입력값이 부모노드보다 큰 경우
    if (this.value < value) {
      if (this.right === null) {
        this.right = new BinaryTree(value);
      } else {
        this.right.pushNode(value);
      }
    } else if (this.value > value) {
      if (this.left === null) {
        this.left = new BinaryTree(value);
      } else {
        this.left.pushNode(value);
      }
    } else {
      return console.log("이미 존재하는 노드입니다.");
    }
  }
  serachNode(value) {
    if (this.value === value) {
      return true;
    }
    if (this.value < value) {
      if (this.right !== null) {
        return this.right.serachNode(value);
      } else {
        return false;
      }
    }
    if (this.value > value) {
      if (this.left !== null) {
        return this.left.serachNode(value);
      } else {
        return false;
      }
    }
  }
}

const bt = new BinaryTree(1);
bt.pushNode(2);
bt.pushNode(3);
bt.pushNode(5);
bt.pushNode(4);
console.log(bt.serachNode(3));
