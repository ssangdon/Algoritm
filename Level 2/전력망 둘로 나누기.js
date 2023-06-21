function solution(n, wires) {
  var answer = -1;
  let tree = {};
  wires.forEach(data => {
    let [x, y] = data;
    if (tree[x] === undefined) tree[x] = [y];
    else tree[x].push(y);
    if (tree[y] === undefined) tree[y] = [x];
    else tree[y].push(x);
  });
  let entries = Object.entries(tree);
  entries.sort((a, b) => {
    return b[1].length - a[1].length;
  });
  let countArr = [];
  for (var i = 0; i < entries.length; i++) {
    let connected = entries[i][1];
    let key = entries[i][0];
    connected.forEach(data => {
      let disconnected = data;
      let needVisit = tree[disconnected].slice();
      let visited = [parseInt(key), disconnected];
      let count = 1;
      while (needVisit.length) {
        let shifted = needVisit.shift();
        if (shifted !== key && !visited.includes(shifted)) {
          visited.push(shifted);
          needVisit.push(...tree[shifted]);
          count++;
        }
      }
      countArr.push([data, parseInt(key), count]);
    });
  }

  let numArr = [];
  countArr.forEach(d => {
    numArr.push(Math.abs(n - d[2] * 2));
  });

  return Math.min(...numArr);
}
