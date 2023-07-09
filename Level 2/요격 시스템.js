function solution(targets) {
  var answer = 1;
  let len = targets.length;
  // 앞을 오름차순으로 정렬, 앞이 같을 경우 뒤 역시 오름차순으로 정렬
  targets.sort((a, b) => (a[0] === b[0] ? b[0] - a[0] : a[0] - b[0]));
  let r = targets[0][1];
  for (var i = 1; i < len; i++) {
    //해당 미사일 마지막이 다음 미사일 처음보다 클경우엔 그대로 진행
    if (r > targets[i][0]) {
      //여기서 다음 미사일의 마지막부분이 현재 미사일 마지막부분보다 작을 경우엔 r을 다음 미사일의 마지막부분으로 바꾸어주어야한다. (이 생각하는데 오래걸림;;;)
      if (r > targets[i][1]) {
        r = targets[i][1];
      }
    } else {
      //범위 안에 들어오지 않을경우 answer++ 해준뒤, r을 다음 미사일 끝부분으로 변경.
      answer++;
      r = targets[i][1];
    }
  }
  return answer;
}
