function solution(gems) {
  var answer = [];
  let size = new Set(gems).size;
  let map = new Map();
  for (var i = 0; i < gems.length; i++) {
    map.delete(gems[i]);
    map.set(gems[i], i + 1);
    if (map.size === size) {
      let ansArr = [map.values().next().value, i + 1];
      answer.push(ansArr);
    }
  }
  answer.sort((a, b) => {
    if (b[1] - b[0] === a[1] - a[0]) {
      return a[0] > b[0] ? 1 : -1;
    } else {
      return a[1] - a[0] > b[1] - b[0] ? 1 : -1;
    }
  });
  return answer[0];
}
