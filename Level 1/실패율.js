function solution(N, stages) {
  var answer = [];
  let kk = [];
  let people = stages.length;
  //dp 사용하여 스테이지별로 사람 수 만들자.
  let failArr = Array.from(Array(N + 2), () => Array(2).fill(0));
  stages.sort((a, b) => a - b);
  for (var i = 0; i < stages.length; i++) {
    let stage = stages[i];
    failArr[stage][0]++;
    failArr[stage][1] = people;
  }

  for (var k = 1; k <= N; k++) {
    let failRate = failArr[k][0] / failArr[k][1];
    failArr[k][1] === 0
      ? null
      : (failArr[k + 1][1] = failArr[k][1] - failArr[k][0]);
    isNaN(failRate) ? answer.push([k, 0]) : answer.push([k, failRate]);
  }
  answer.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    } else {
      return b[1] - a[1];
    }
  });
  return answer.map(d => d[0]);
}

// function solution(N, stages){
//     let result = [];
//     for(var i =1 ; i<=N; i++){
//         let whole = stages.filter((d)=>d>=i).length;
//         let current = stages.filter((d)=>d===i).length;
//         result.push([i, current/whole])
//     }
//     result.sort((a,b)=>b[1]-a[1])
//     return result.map((d)=>d[0])
// }
