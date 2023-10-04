function solution(money) {
  var answer = 0;
  let len = money.length;
  let dp1 = new Array(len).fill(0);
  let dp2 = new Array(len).fill(0);
  dp1[0] = money[0];
  dp1[1] = money[0];
  dp2[1] = money[1];
  for (var i = 2; i < money.length - 1; i++) {
    dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + money[i]);
  }
  for (var i = 2; i < money.length; i++) {
    dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + money[i]);
  }

  return Math.max(dp1[len - 2], dp2[len - 1]);
}
