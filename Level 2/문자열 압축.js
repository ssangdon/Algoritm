function solution(s) {
  let length = [s.length];
  let limit = Math.floor(s.length / 2);
  for (var i = 1; i <= limit; i++) {
    let unit = i;
    let idx = 0;
    let splitArr = [];
    let k = s.substr(idx, unit);
    splitArr.push([k, 1]);
    idx = unit;
    while (idx < s.length) {
      let a = s.substr(idx, unit);
      idx += unit;
      if (splitArr.at(-1)[0] !== a) {
        splitArr.push([a, 1]);
      } else {
        let popped = splitArr.pop();
        popped[1]++;
        splitArr.push(popped);
      }
    }
    let len = 0;
    while (splitArr.length) {
      let pop = splitArr.pop();
      if (pop[1] > 1) {
        let numCount = pop[1].toString().length;
        len += pop[0].length + numCount;
      } else {
        len += pop[0].length;
      }
    }
    length.push(len);
  }
  return Math.min(...length);
}
