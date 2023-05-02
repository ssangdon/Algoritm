//dp를 이용해서 풀까?
//이분탐색으로 풀자!
// l~r범위에 있는 애들은 다 잡을 수 있다고 가정
// l~r범위 내림차순으로 sort, 무적권 먼저 사용
// 1트 : 65.0
// 2트 : 78.1
// 3트 : 84.4
// 4트 : 100,0

function solution(n, k, enemy) {
  var answer = 0;

  let [l, r] = [0, enemy.length];
  let mid = 0;
  while (l <= r) {
    mid = Math.floor((l + r) / 2);
    let slice = enemy.slice(0, mid);
    slice.sort((a, b) => b - a);
    let sum = 0;
    let idx = k;
    for (var j = k; j < slice.length; j++) {
      sum += slice[j];
    }
    if (sum <= n) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return l - 1;
}

console.log(solution(2, 4, [3, 3, 3, 3]));
