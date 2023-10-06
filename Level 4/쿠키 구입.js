function solution(cookie) {
  var answer = 0;
  let len = cookie.length;
  let sum = cookie.reduce((prev, now) => (prev += now));
  let half = Math.floor(sum / 2);
  for (var i = 1; i <= len - 1; i++) {
    let lStandard = i - 1;
    let rStandard = i;
    let sum1 = cookie[lStandard];
    let sum2 = cookie[rStandard];
    while (1) {
      if (sum1 === sum2 && answer < sum1) {
        answer = sum1;
      } else if (sum1 <= sum2 && lStandard !== 0) {
        lStandard--;
        sum1 += cookie[lStandard];
      } else if (sum1 >= sum2 && rStandard !== len - 1) {
        rStandard++;
        sum2 += cookie[rStandard];
      } else {
        break;
      }
    }
  }
  return answer;
}
