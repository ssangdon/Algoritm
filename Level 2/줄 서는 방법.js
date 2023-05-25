// 총 경우의 수 = n! -> n * (n-1)!이다.
// 즉 순서대로, n개씩 (n-1)!개가 존재한다.
// 몇번째에 있는지 구하기 위해서, Math.floor(k/(n-1))히지
// 펙토리얼 함수를 이용하여, 가짓수를 구하자
// 핵심은 인덱스를 가지고 노는 것 이다.
// k번째 수를 구하기 위해선 어떻게 해야할까?
// n * (n-1)! 을 이용하는게 핵심이다

const factorial = num => {
  let answer = 1;
  while (num > 0) {
    answer *= num;
    num--;
  }
  return answer;
};

function solution(n, k) {
  var answer = [];
  let arr = [];
  for (var i = 0; i < n; i++) {
    arr[i] = i + 1;
  }
  k--;
  while (n > 0) {
    n--;
    let b = factorial(n);
    let idx = Math.floor(k / b);
    answer.push(arr[idx]);
    arr = [...arr.slice(0, idx), ...arr.slice(idx + 1)];
    k = k % b;
  }
  return answer;
}
