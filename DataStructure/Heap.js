//힙 자료구조
// 완전 이진트리의 일종이다.
// 최대값 or 최소값을 찾는데 효율적인 방법이다.
// O(logN)정도 걸린다.
// 부모노드 > 자식노드 or 부모노드 < 자식노드 규칙이 지켜져야한다.
// left = 부모노드 idx * 2 + 1
// right = 부모노드 idx * 2 + 2

class Heap {
  constructor() {
    this.heap = [];
  }
  swap(a, b) {
    //구조분해 할당으로 Swap 시킨다.
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
  size() {
    this.heap.length;
  }
  insert(value) {
    //max힙이므로, 부모는 자식보다 값이 커야함. 따라서 추가된 자식노드의 값이 부모노드보다 작으면 그대로, 크면 스왑해줘야한다.
    this.heap.push(value);
    let idx = this.heap.length - 1;
    let parent = Math.floor((idx - 1) / 2);
    while (this.heap[parent] < this.heap[idx]) {
      this.swap(parent, idx);
      idx = parent;
      parent = Math.floor((idx - 1) / 2);
    }
  }
  delete() {
    let idx = 0;
    let lastIdx = this.heap.length - 1;
    this.swap(idx, lastIdx);
    let value = this.heap.pop();
    while (idx < lastIdx) {
      let leftChild = idx * 2 + 1;
      let rightChild = idx * 2 + 2;

      //더이상 노드가 존재하지 않을 경우
      if (leftChild >= lastIdx) {
        break;
      } else if (rightChild >= lastIdx) {
        if (this.heap[leftChild] > this.heap[idx]) {
          this.swap(leftChild, idx);
          idx = leftChild;
        } else {
          break;
        }
      } else {
        if (
          this.heap[leftChild] > this.heap[idx] &&
          this.heap[rightChild] > this.heap[idx]
        ) {
          if (this.heap[leftChild] > this.heap[rightChild]) {
            this.swap(leftChild, idx);
            idx = leftChild;
          } else {
            this.swap(rightChild, idx);
            idx = rightChild;
          }
        } else if (this.heap[leftChild] > this.heap[idx]) {
          this.swap(leftChild, idx);
          idx = leftChild;
        } else if (this.heap[rightChild] > this.heap[idx]) {
          this.swap(rightChild, idx);
          idx = rightChild;
        } else {
          break;
        }
      }
    }
  }
}

const a = new Heap();
a.insert(1);
a.insert(2);
a.insert(3);
a.insert(9);
a.insert(10);
a.insert(12);

console.log(a.heap);
