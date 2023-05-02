//조합을 이용해서, 코스요리 개수개만큼 각각 찾자

const combination = (arr, selectNum) => {
  let result = [];
  if (selectNum === 1) return arr.map(d => [d]);
  arr.forEach((data, idx, origin) => {
    let rest = origin.slice(idx + 1);
    let combi = combination(rest, selectNum - 1);
    let attached = combi.map(d => [data, ...d]);
    result.push(...attached);
  });
  return result;
};

function solution(orders, course) {
  var answer = [];
  for (var i = 0; i < course.length; i++) {
    let chooseNum = course[i];
    let obj = {};
    orders.map(data => {
      let splited = data.split("").sort();
      let wholeCase = combination(splited, chooseNum);
      wholeCase.map(d => {
        let str = d.join("");
        obj[str] === undefined ? (obj[str] = 1) : (obj[str] += 1);
      });
    });
    let entries = Object.entries(obj);
    entries.sort((a, b) => b[1] - a[1]);
    if (entries.length >= 2) {
      let maxNum = entries[0][1];
      let newArr = entries
        .filter(data => data[1] != 1)
        .filter(d => d[1] == maxNum)
        .map(da => answer.push(da[0]));
    }
  }
  return answer.sort();
}
