//연속되는 0의 개수가 k개 이상이면 break
// 돌의 원소의 값으로 이진탐색을 하자.
// 최소:1, 최대:20000000

function solution(stones, k) {
  var answer = 0;
  let l = 1;
  let r = 200000001;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    let count = 0;
    for (var i = 0; i < stones.length; i++) {
      if (stones[i] - mid <= 0) count++;
      else count = 0;
      if (count === k) break;
    }
    if (count === k) r = mid - 1;
    else l = mid + 1;
  }
  return l;
}
