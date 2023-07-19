const get = r => {
  let max = r;
  let count = 0;
  let start = 0;
  let isOn = 0;
  while (start <= r) {
    let len = Math.sqrt(start ** 2 + max ** 2);
    while (len > r) {
      max -= 1;
      len = Math.sqrt(start ** 2 + max ** 2);
    }
    if (Number.isInteger(Math.sqrt(start ** 2 + max ** 2))) isOn++;
    count += max + 1;
    start++;
  }
  return [count * 4 - r * 4 - 3, isOn * 4 - 4];
};

function solution(r1, r2) {
  let a = get(r1);
  let b = get(r2);
  if (a[1] !== 4) {
    return b[0] - a[0] + a[1];
  } else {
    return b[0] - a[0] + 4;
  }
}
