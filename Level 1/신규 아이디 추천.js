// function solution(new_id) {
//     var answer = '';
//     let str = new_id
//     let stack = [];
//     let regex = /[0-9a-z\.\-\_]/;
//     let newStr = ''
//     //1단계
//     str = str.toLowerCase();
//     // console.log(str)
//     //2단계
//     for(var i =0; i<str.length; i++){
//         if(regex.test(str[i])){
//             newStr += str[i];
//         }
//     }
//     // console.log(newStr)
//     //3단계
//     newStr = newStr.replace(/\.+/g,'.')
//     // console.log(newStr)
//     //4단계
//     if(newStr[0] === '.') newStr = newStr.substr(1)
//     if(newStr[newStr.length-1] === '.') newStr = newStr.substr(0,newStr.length-1)
//     // console.log(newStr)
//     //5단계
//     if(newStr.length === 0) newStr = 'a';
//     // console.log(newStr)
//     //6단계
//     if(newStr.length >= 16) newStr = newStr.substr(0,15);
//     if(newStr[newStr.length-1] === '.') newStr = newStr.substr(0, newStr.length-1);
//     // console.log(newStr)
//     //7단계
//     while(newStr.length < 3) newStr += newStr[newStr.length-1];
//     // console.log(newStr)
//     return (newStr)
// }
function solution(new_id) {
  var answer = "";
  answer = new_id
    .toLowerCase() //1단계
    .replace(/[^\w\-\.]/g, "") //2단계
    .replace(/\.+/g, ".") //3단계
    .replace(/^\.|\.$/g, "") //4단계
    .replace(/^$/, "a") //5단계
    .slice(0, 15)
    .replace(/\.$/, ""); // 6단계

  const len = answer.length;
  return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
}
