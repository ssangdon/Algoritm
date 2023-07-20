function solution(weights) {
  var answer = 0;
  let cash = {};
  let caseArr = [1, 1 / 2, 2 / 3, 3 / 4];
  weights.sort((a, b) => a - b);
  weights.forEach(data => {
    caseArr.forEach(d => {
      let val = d * data;
      if (cash[val] !== undefined) {
        answer += cash[val];
      }
    });
    cash[data] === undefined ? (cash[data] = 1) : cash[data]++;
  });

  return answer;
}
