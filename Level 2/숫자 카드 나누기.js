const getGCD = (num1, num2) => {
  const remainder = num1 % num2;
  if (remainder === 0) return num2;
  return getGCD(num2, remainder);
};
const get = num => {
  let arr = [];
  for (var i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      arr.push(i);
      arr.push(num / i);
    }
  }
  arr = [...arr, num];
  return arr;
};
function solution(arrayA, arrayB) {
  var answer = 0;
  let gcd = 0;
  let gcd2 = 0;
  let result = [];
  let a = arrayA.slice();
  let b = arrayB.slice();
  let times = arrayA.length - 1;

  while (times > 0) {
    let popped1 = arrayA.pop();
    let popped2 = arrayA.pop();
    let popped3 = arrayB.pop();
    let popped4 = arrayB.pop();
    gcd = getGCD(popped1, popped2);
    gcd2 = getGCD(popped3, popped4);
    arrayA.push(gcd);
    arrayB.push(gcd2);
    times--;
  }
  if (a.length === 1) gcd = a[0];
  if (b.length === 1) gcd2 = b[0];
  let cdArr = get(gcd);
  let cdArr2 = get(gcd2);
  // console.log(cdArr, cdArr2)
  for (var k = cdArr.length - 1; k >= 0; k--) {
    const check = element => element % cdArr[k] === 0;
    if (!b.some(check)) {
      result.push(cdArr[k]);
      break;
    }
  }
  for (var j = cdArr2.length - 1; j >= 0; j--) {
    let check = e => e % cdArr2[j] === 0;
    if (!a.some(check)) {
      // console.log(cdArr2[j])
      result.push(cdArr2[j]);
      break;
    }
  }

  return result.length === 0 ? 0 : Math.max(...result);
}
