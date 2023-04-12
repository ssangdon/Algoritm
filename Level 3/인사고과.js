function solution(scores) {
  var answer = 0;
  let rank = 1;
  let wanho = scores[0];
  let wanhoSum = wanho[0] + wanho[1];
  let max = 0;
  scores.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : b[0] - a[0]));
  for (var score of scores) {
    if (score[1] < max) {
      if (score === wanho) return -1;
    } else {
      max = Math.max(score[1], max);
      if (score[0] + score[1] > wanhoSum) {
        rank++;
      }
    }
  }
  return rank;
}
