function solution(k, d) {
  var answer = 0;
  let max = Math.floor(d / k) * k; // 최대로 갈 수 있는 좌표
  for (var i = 0; i <= d; i += k) {
    // 거리가 d보다 작거나 같아 질 때까지 최대로 갈 수 있는 좌표에서 k만큼 빼주자.
    while (Math.sqrt(Math.pow(i, 2) + Math.pow(max, 2)) > d) {
      max -= k;
    }
    answer += max / k + 1;
  }
  return answer;
}
