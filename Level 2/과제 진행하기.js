// 정답 코드
function solution(plans) {
  var answer = [];
  let stack = [];
  plans.sort((a, b) =>
    parseInt(a[1].replace(":", "")) > parseInt(b[1].replace(":", "")) ? 1 : -1
  );
  for (var i = 0; i < plans.length; i++) {
    if (i == plans.length - 1) {
      answer.push(plans[i][0]);
    } else {
      let a = plans[i];
      let b = plans[i + 1];
      let timeDifMs =
        new Date(`2023-04-11 ${b[1]}:00`).getTime() -
        new Date(`2023-04-11 ${a[1]}:00`).getTime();
      let dif = timeDifMs / (1000 * 60);
      if (dif > a[2]) {
        answer.push(a[0]);
        let remainTime = dif - a[2];
        while (stack.length > 0 && remainTime > 0) {
          let popped = stack.pop();
          if (popped[1] > remainTime) {
            stack.push([popped[0], popped[1] - remainTime]);
            remainTime = 0;
          } else {
            answer.push(popped[0]);
            remainTime -= popped[1];
          }
        }
      } else if (dif == a[2]) {
        answer.push(a[0]);
      } else {
        stack.push([a[0], a[2] - dif]);
      }
    }
  }
  while (stack.length !== 0) {
    let p = stack.pop();
    answer.push(p[0]);
  }
  return answer;
}

console.log(
  solution([
    ["science", "12:40", "50"],
    ["music", "12:20", "40"],
    ["history", "14:00", "30"],
    ["computer", "12:30", "100"],
  ])
);

//오답 코드

// function solution(plans) {
//     var answer = [];
//     let stack = [];
//     plans.sort((a,b)=>parseInt(a[1].replace(":",'')) > parseInt(b[1].replace(":",'')) ? 1 : -1)
//     for(var i= 0; i<plans.length; i++){
//         if(i == plans.length-1){
//             answer.push(plans[i][0])
//         }else{
//         let a = plans[i];
//         let b = plans[i+1];
//         let timeDifMs = new Date(`2023-04-11 ${b[1]}:00`).getTime() - new Date(`2023-04-11 ${a[1]}:00`).getTime()
//         let dif = timeDifMs/ (1000*60);
//         if(dif > a[2]){
//             answer.push(a[0]);
//             let remainTime = dif-a[2];
//             while(stack.length > 0&& remainTime > 0 ){
//                 let popped = stack.pop();
//                 if(popped[1] > remainTime){
//                     stack.push([popped[0],popped[1]-remainTime])
//                     remainTime = 0;
//                 }else{
//                     remainTime -= popped[1];
//                 }
//             }
//         }else if(dif == a[2]){
//             answer.push(a[0]);
//         }else{
//             stack.push([a[0], a[2]-dif]);
//         }

//         }
//     }
//     while(stack.length !==0){
//         let popped = stack.pop();
//         answer.push(popped[0])
//     }
//     return answer;
// }
