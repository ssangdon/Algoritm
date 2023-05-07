function solution(n, times) {
  var answer = 0;
  times.sort((a, b) => a - b);
  let l = 1;
  let r = n * times.at(-1);
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    let count = 0;
    times.forEach(data => {
      count += Math.floor(mid / data);
    });
    if (count >= n) {
      r = mid - 1;
    } else if (count < n) {
      l = mid + 1;
    }
  }
  return l;
}
