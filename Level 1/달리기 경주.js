function solution(players, callings) {
  var answer = [];
  let map = new Map();
  players.forEach((d, i) => map.set(d, i));
  callings.forEach(data => {
    let curIdx = map.get(data);
    let curPlayer = players[curIdx];
    let prevPlayer = players[curIdx - 1];
    players[curIdx] = prevPlayer;
    players[curIdx - 1] = curPlayer;
    map.set(curPlayer, curIdx - 1);
    map.set(prevPlayer, curIdx);
  });
  return players;
}
console.log(
  solution(
    ["mumu", "soe", "poe", "kai", "mine"],
    ["kai", "kai", "mine", "mine"]
  )
);
