// 이미 한 그룹에 속해있으면, 어떤걸 선택해도 같은 그룹으로 결과가 나온다...
// 그룹의 원소수가 가장 큰거 두개만 잡으면 된다!

function solution(cards) {
  var answer = 1;
  let arrs = [];
  let check = new Array(cards.length).fill(false);
  cards.forEach((data, idx, origin) => {
    if (!check[idx]) {
      let arr = [];
      arr.push(data);
      check[idx] = true;
      let next = cards[data - 1];
      let nextIdx = origin.indexOf(next);
      while (!check[nextIdx]) {
        check[nextIdx] = true;
        arr.push(next);
        next = cards[next - 1];
        nextIdx = origin.indexOf(next);
      }
      arrs.push(arr.length);
    }
  });

  arrs.sort((a, b) => b - a);
  if (arrs.length == 1) {
    answer = 0;
  } else {
    for (var i = 0; i < 2; i++) {
      answer *= arrs[i];
    }
  }
  return answer;
}
