//모든 경우의 수를 찾는 순열 알고리즘.
const permutation = (arr, selectNum) => {
  let result = [];
  if (selectNum === 1) return arr.map(d => [d]);
  arr.forEach((data, idx, origin) => {
    let rest = [...origin.slice(0, idx), ...origin.slice(idx + 1)];
    let permu = permutation(rest, selectNum - 1);
    let attached = permu.map(d => [data, ...d]);
    result.push(...attached);
  });
  return result;
};

function solution(k, dungeons) {
  var answer = -1;
  let depthResult = [];
  let totalCase = permutation(dungeons, dungeons.length);
  totalCase.map(d => {
    let num = k;
    let count = 0;
    for (var i = 0; i < d.length; i++) {
      if (d[i][0] <= num) {
        num -= d[i][1];
        count++;
      }
    }
    depthResult.push(count);
  });
  return Math.max(...depthResult);
}
