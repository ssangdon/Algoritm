function solution(picks, minerals) {
  var answer = 0;
  let caseArr = [];
  let idx = 0;
  let tools = picks.reduce((prev, now) => (prev += now));
  let can = tools * 5;
  while (idx < can) {
    let arr = minerals.slice(idx, idx + 5);
    let obj = {
      diamond: 0,
      iron: 0,
      stone: 0,
    };
    for (var i = 0; i < arr.length; i++) {
      obj[arr[i]] += 1;
    }
    idx += 5;
    caseArr.push(obj);
  }
  caseArr.sort((a, b) => {
    if (a.diamond === b.diamond) {
      if (a.iron === b.iron) {
        return a.stone - b.stone;
      } else {
        return b.iron - a.iron;
      }
    } else {
      return b.diamond - a.diamond;
    }
  });
  // console.log(caseArr)
  let order = 0;
  picks.forEach((data, i) => {
    let count = data;
    while (count > 0) {
      if (order > caseArr.length - 1) break;
      let { diamond, iron, stone } = caseArr[order];
      // 다이아 일경우
      if (i === 0) {
        let sum = 0;
        diamond === 0 ? null : (sum += diamond);
        iron === 0 ? null : (sum += iron);
        stone === 0 ? null : (sum += stone);
        answer += sum;
        order++;
      }
      // 철 일경우
      else if (i === 1) {
        let sum = 0;
        diamond === 0 ? null : (sum += diamond * 5);
        iron === 0 ? null : (sum += iron);
        stone === 0 ? null : (sum += stone);
        answer += sum;
        order++;
      }
      // 돌일경우
      else if (i === 2) {
        let sum = 0;
        diamond === 0 ? null : (sum += diamond * 25);
        iron === 0 ? null : (sum += iron * 5);
        stone === 0 ? null : (sum += stone);
        answer += sum;
        order++;
      }
      count -= 1;
    }
  });
  return answer;
}
