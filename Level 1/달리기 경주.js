function solution(players, callings) {
  var answer = [];
  let map = new Map();
  players.forEach((d, i) => map.set(d, i));
  console.log(players);
  console.log(callings);
  callings.forEach(data => {
    let curIdx = map.get(data);
    let curPlayer = players[curIdx];
    let prevPlayer = players[curIdx - 1];
    players[curIdx] = prevPlayer;
    players[curIdx - 1] = curPlayer;
    map.set(curPlayer, curIdx - 1);
    map.set(prevPlayer, curIdx);
  });
  return answer;
}
console.log(solution(["A", "B", "C", "D", "E"], ["B", "D", "E", "E"]));
