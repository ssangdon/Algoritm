function solution(a) {
  let answer = 0;
  let obj = a.reduce((acc, val) => {
    acc[val] ? acc[val]++ : (acc[val] = 1);
    return acc;
  }, {});
  let entries = Object.entries(obj).sort((a, b) => b[1] - a[1]);
  for (const [key, value] of entries) {
    const ans = count(a, +key);
    if (answer < ans) answer = ans;
    else break;
  }
  return answer;
}

function count(arr, value) {
  let count = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== value && arr[i + 1] !== value) continue;
    if (arr[i] === arr[i + 1]) continue;
    count += 2;
    i++;
  }
  return count;
}
