function solution(tickets) {
  var answer = [];
  let answerLen = tickets.length;
  let result = [];
  let visited = [];
  tickets.sort();
  console.log(tickets);
  const re = (str, count) => {
    result.push(str);
    if (count === answerLen) {
      answer = result;
      return 1;
    }
    for (var i = 0; i < tickets.length; i++) {
      if (!visited[i] && tickets[i][0] === str) {
        visited[i] = 1;
        if (re(tickets[i][1], count + 1)) return 1;
        visited[i] = 0;
      }
    }
    result.pop();
    return 0;
  };
  re("ICN", 0, []);
  return answer;
}
