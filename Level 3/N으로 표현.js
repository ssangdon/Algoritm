function solution(N, number) {
  var answer = 0;
  let count = Array.from(Array(9), () => new Set());
  if (N === number) return 1;
  for (var i = 1; i < 9; i++) {
    let strNum = String(N).repeat(i);
    count[i].add(parseInt(strNum));
  }
  for (var i = 1; i < 9; i++) {
    for (var k = 1; k < i; k++) {
      for (let a of count[k]) {
        for (let b of count[i - k]) {
          count[i].add(a + b);
          count[i].add(a - b);
          count[i].add(a / b);
          count[i].add(a * b);
        }
        if (count[i].has(number)) return i;
      }
    }
  }
  // console.log(count)
  return -1;
}
