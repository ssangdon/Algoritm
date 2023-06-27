function solution(files) {
  var answer = [];
  let filesObj = [];
  files.map((data, idx) => {
    let val = data;
    let head = "";
    let number = "";
    let tail = "";
    let numRegex = /\D/;
    let i = 0;
    let numCount = 0;
    while (isNaN(parseInt(val[i]))) {
      head += val[i];
      i++;
    }
    while (!isNaN(parseInt(val[i])) && numCount < 5 && i < val.length) {
      number += val[i].toString();
      i++;
      numCount++;
    }
    tail = val.substring(i);
    let obj = {
      HEAD: head,
      NUMBER: number,
      TAIL: tail,
    };
    filesObj.push(obj);
  });
  filesObj.sort((a, b) => {
    let strA = a.HEAD.toUpperCase();
    let strB = b.HEAD.toUpperCase();
    if (strA > strB) {
      return 1;
    } else if (strA < strB) {
      return -1;
    } else {
      const numA = parseInt(a.NUMBER);
      const numB = parseInt(b.NUMBER);
      return numA - numB;
    }
  });
  filesObj.map(data => {
    let value = data.HEAD + data.NUMBER + data.TAIL;
    answer.push(value);
  });
  return answer;
}
