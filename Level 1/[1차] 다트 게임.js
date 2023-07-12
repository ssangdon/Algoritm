function solution(dartResult) {
  var answer = 0;
  var sum = 0;
  var numStack = [];
  var regex = /[0-9]/g;
  let splited = dartResult.split("");
  for (var i = 0; i < splited.length; i++) {
    if (regex.test(splited[i])) {
      if (splited[i] == 1) {
        if (splited[i + 1] == 0) {
          i++;
          numStack.push(10);
        } else {
          numStack.push(parseInt(splited[i]));
        }
      } else {
        numStack.push(parseInt(splited[i]));
      }
    } else if (splited[i] === "S" || splited[i] === "D" || splited[i] === "T") {
      let popped = numStack.pop();
      switch (splited[i]) {
        case "S":
          popped = Math.pow(popped, 1);
          break;
        case "D":
          popped = Math.pow(popped, 2);
          break;
        case "T":
          popped = Math.pow(popped, 3);
          break;
      }
      numStack.push(popped);
    } else {
      if (splited[i] === "*") {
        let popped = numStack.pop();
        if (numStack.length === 0) {
          popped *= 2;
          numStack.push(popped);
        } else {
          let popped2 = numStack.pop();
          popped *= 2;
          popped2 *= 2;
          numStack.push(popped2);
          numStack.push(popped);
        }
      } else {
        let popped = numStack.pop();
        popped = popped * -1;
        numStack.push(popped);
      }
    }
  }
  return (answer = numStack.reduce((prev, now) => (prev += now)));
}
