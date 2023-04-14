function solution(n, computers) {
  var answer = 0;
  let graph = {};
  let visited = new Array(n).fill(false);
  computers.map((data, idx) => {
    data.map((d, i) => {
      if (d === 1) {
        graph[idx] === undefined
          ? (graph[idx] = [i])
          : (graph[idx] = [...graph[idx], i]);
      }
    });
  });

  const dfs = (graph, start) => {
    if (visited[start]) return 0;
    else {
      visited[start] = true;
      let needVisit = graph[start];
      for (var i = 0; i < needVisit.length; i++) {
        dfs(graph, needVisit[i]);
      }
    }
  };
  for (var i = 0; i < n; i++) {
    if (!visited[i]) {
      answer++;
      dfs(graph, i);
    }
  }
  return answer;
}
