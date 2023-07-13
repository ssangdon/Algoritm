const gyo = (str1, str2) => {
  let splited1 = str1.split("");
  let splited2 = str2.split("");
  let len = Math.max(str1.length, str2.length);
  let set = new Set(splited1.concat(splited2));
  return set.size > len ? true : false;
};

const getCombination = (arr, selectNum) => {
  let result = [];
  if (selectNum === 1) return arr.map(d => [d]);
  arr.forEach((fixed, idx, origin) => {
    let rest = origin.slice(idx + 1);
    let combination = getCombination(rest, selectNum - 1);
    let attached = combination.map(data => [fixed, ...data]);
    result.push(...attached);
  });
  return result;
};

function solution(relation) {
  var answer = 0;
  let used = [];
  let entire = relation.length;
  let columnNum = relation[0].length;
  let numArr = [];
  let fixed = [];
  let checkArr = new Array(columnNum).fill(true);
  for (var k = 0; k < columnNum; k++) {
    numArr[k] = k;
  }
  for (var i = 1; i <= columnNum; i++) {
    let selectNum = i;
    let combination = getCombination(numArr, selectNum);
    combination.forEach((d, i) => {
      let set = new Set();
      let check = true;
      for (var k = 0; k < entire; k++) {
        let str = "";
        for (var j = 0; j < d.length; j++) {
          str += `${relation[k][d[j]]}/`;
        }
        set.add(str);
      }
      if (set.size === entire) {
        let indexNum = "";
        d.map(data => (indexNum += data));
        used.push(indexNum);
      }
    });
  }
  used.forEach((data, idx, origin) => {
    let val = data;
    if (fixed.length === 0) fixed.push(data);
    else {
      let check = true;
      for (var i = 0; i < fixed.length; i++) {
        check = check && gyo(fixed[i], val);
      }
      if (check) {
        fixed.push(val);
      }
    }
  });
  return fixed.length;
}
