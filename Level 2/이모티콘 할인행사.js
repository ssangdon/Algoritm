const getPermutation = (arr, selectNum) => {
  let result = [];
  if (selectNum === 1) return arr.map(d => [d]);
  arr.forEach((data, idx, origin) => {
    let rest = origin;
    let permu = getPermutation(origin, selectNum - 1);
    let attached = permu.map(v => [data, ...v]);
    result.push(...attached);
  });
  return result;
};

function solution(users, emoticons) {
  var answer = [];
  let discount = [10, 20, 30, 40];
  let useLen = users.length;
  let permu = getPermutation(discount, emoticons.length);
  let result = [];

  permu.forEach((data, idx) => {
    let val = data;
    let sub = 0;
    let totalPrice = 0;
    let price = emoticons.slice();
    users.forEach((d, i) => {
      let vals = d;
      let eachPrice = 0;
      for (var i = 0; i < val.length; i++) {
        if (vals[0] <= val[i]) {
          eachPrice += Math.round(price[i] * ((100 - val[i]) / 100));
        }
      }
      if (eachPrice >= vals[1]) {
        sub++;
      } else {
        totalPrice += eachPrice;
      }
    });
    result.push([sub, totalPrice]);
  });
  result.sort((a, b) => {
    if (a[0] === b[0]) {
      return b[1] > a[1] ? 1 : -1;
    } else {
      return b[0] > a[0] ? 1 : -1;
    }
  });
  return result[0];
}
