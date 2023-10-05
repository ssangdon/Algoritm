function solution(n) {
  var answer = 0;
  let arr = new Array(n + 1).fill(0);
  arr[0] = 1;
  arr[1] = 1;
  arr[2] = 2;
  for (var i = 3; i <= n; i++) {
    for (var k = 0; k < i; k++) {
      arr[i] += arr[k] * arr[i - k - 1];
    }
  }
  return arr[n];
}
