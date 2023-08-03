function solution(prices) {
  let stack = [];
  let arr = new Array(prices.length).fill(0);
  for (var i = 0; i < prices.length; i++) {
    while (stack.length && prices[stack.at(-1)] > prices[i]) {
      let popped = stack.pop();
      arr[popped] = i - popped;
    }
    stack.push(i);
  }
  while (stack.length) {
    let popped = stack.pop();
    arr[popped] = prices.length - 1 - popped;
  }

  return arr;
}
