// 이긴횟수 + 진횟수 === n-1이면 순위 픽스

function solution(n, results) {
  var answer = 0;
  let graph = {};
  for (var i = 1; i <= n; i++) {
    graph[i] = [];
  }
  results.forEach(data => {
    let [w, l] = data;
    graph[w].push(l);
  });

  let count = {};

  for (var i = 1; i <= n; i++) {
    let start = i;
    let visited = [start];
    let needVisit = graph[start];
    while (needVisit.length !== 0) {
      let shifted = needVisit.shift();
      if (!visited.includes(shifted)) {
        visited.push(shifted);
        needVisit.push(...graph[shifted]);
      }
    }
    visited.forEach(d => {
      if (count[d] === undefined) {
        count[d] = 1;
      } else {
        count[d]++;
      }
    });
    graph[start] = visited;
  }
  for (var i = 1; i <= n; i++) {
    if (graph[i].length + count[i] === n + 1) {
      answer++;
    }
  }
  return answer;
}
