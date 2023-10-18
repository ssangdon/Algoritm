function solution(progresses, speeds) {
  var answer = [];
  let remain = [];
  let stack = [];
  let len = progresses.length;
  progresses.forEach((d, i) => {
    remain[i] = Math.ceil((100 - d) / speeds[i]);
  });
  while (remain.length) {
    let a = remain[0];
    remain = remain.map(d => d - a);
    let sum = 0;
    while (remain[0] <= 0) {
      remain.shift();
      sum++;
    }
    answer.push(sum);
  }

  return answer;
}
