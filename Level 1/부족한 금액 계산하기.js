function solution(price, money, count) {
  var answer = -1;
  let arr = [];
  for (var i = 1; i <= count; i++) {
    arr.push(price * i);
  }
  let sum = arr.reduce((prev, now) => (prev += now));
  return sum - money > 0 ? sum - money : 0;
}
