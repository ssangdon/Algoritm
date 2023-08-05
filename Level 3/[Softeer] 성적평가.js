// let inputs = require("fs").readFileSync("a.txt").toString().trim().split("\n");
const inputs = [
  "5",
  "40 80 70 70 70",
  "50 10 20 70 70",
  "100 70 30 90 90",
  "100 100 50 50 100",
];
function solution(inputs) {
  let n = parseInt(inputs[0]);
  let sum = new Array(n).fill(0);
  let lastRank = new Array(n).fill(0);
  let obj = {};
  let newRank = 1;
  let str = "";
  for (var i = 1; i < inputs.length; i++) {
    let scores = inputs[i].split(" ").map(d => parseInt(d));
    let rank = 1;
    let scoreObj = {};
    let ranking = new Array(n).fill(0);
    let sorted = scores.slice().sort((a, b) => b - a);
    sorted.forEach(data => {
      if (scoreObj[data] === undefined) {
        scoreObj[data] = [rank, 1];
        rank++;
      } else {
        let [a, b] = scoreObj[data];
        b += 1;
        // rank -= 1;
        scoreObj[data] = [a, b];
        rank += 1;
      }
    });
    for (var k = 0; k < scores.length; k++) {
      sum[k] = sum[k] + scores[k];
      ranking[k] = scoreObj[scores[k]][0];
    }
    str += ranking.join(" ") + "\n";
  }
  let sums = sum.slice().sort((a, b) => b - a);
  sums.forEach(data => {
    if (obj[data] === undefined) {
      obj[data] = [newRank, 1];
      newRank++;
    } else {
      let [a, b] = obj[data];
      b += 1;
      obj[data] = [a, b];
      newRank += 1;
    }
  });
  for (var j = 0; j < sum.length; j++) {
    lastRank[j] = obj[sum[j]][0];
  }

  str += lastRank.join(" ");
  console.log(str);
}
solution(inputs);
