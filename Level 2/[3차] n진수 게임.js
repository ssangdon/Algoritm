// 숫자 다 뽑고, 해당하는 숫자 주면, 시간초과
// 해당하는 숫자만 배열에 넣고, join으로 리턴하자.
// 최대 숫자 length는? 16진법이 최대다,
function solution(n, t, m, p) {
  var answer = "";
  let numArr = [];
  let count = 0;
  p -= 1;
  for (var i = 0; i <= t * m; i++) {
    let parseNum = i.toString(n).split("");

    for (var k = 0; k < parseNum.length; k++) {
      if (numArr.length === t) {
        break;
      }
      if (count % m == p) {
        numArr.push(parseNum[k].toUpperCase());
      }
      count++;
    }
  }
  return numArr.join("");
}

console.log(solution(5, 16, 2, 1));
