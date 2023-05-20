// 가장 기본적인 트리구조
// 부모노드 하나의 여러개의 자식 노드들이 존재하는 자료구조이다
class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  treeInsert(value) {
    const childNode = new Tree(value);
    this.children.push(childNode);
  }
  search(value) {
    if (this.value === value) {
      return true;
    }
    for (let childNode of this.children) {
      if (childNode.search(value)) {
        return true;
      }
    }
    return false;
  }
}

const a = new Tree(1);
a.treeInsert(7);
a.treeInsert(2);

a.treeInsert(3);
a.treeInsert(4);
a.treeInsert(5);
a.treeInsert(6);

console.log(a);
console.log(a.search(10));
