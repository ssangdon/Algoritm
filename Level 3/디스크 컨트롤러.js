function solution(jobs) {
  var answer = 0;
  let count = jobs.length;
  jobs.sort((a, b) => b[0] - a[0]);
  let queue = [];
  let time = 0;
  let sum = 0;
  while (queue.length || jobs.length) {
    while (jobs.length && time >= jobs[jobs.length - 1][0]) {
      let popped = jobs.pop();
      queue.push(popped);
    }
    if (queue.length) {
      queue.sort((a, b) => b[1] - a[1]);
      let completed = queue.pop();
      time += completed[1];
      sum += time - completed[0];
    } else {
      time++;
    }
  }
  return Math.floor(sum / count);
}
