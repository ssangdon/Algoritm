function solution(storey) {
  var answer = 0;
  let len = storey.toString();
  let arr = storey.toString().split("");
  arr.reverse();
  for (var i = 0; i < arr.length; i++) {
    let value = Number(arr[i]);
    if (i !== arr.length - 1) {
      if (value > 5) {
        answer += 10 - Number(arr[i]);
        arr[i] = 0;
        arr[i + 1] = Number(arr[i + 1]) + 1;
      } else if (value == 5) {
        if (arr[i + 1] >= 5) {
          answer += 10 - Number(arr[i]);
          arr[i] = 0;
          arr[i + 1] = Number(arr[i + 1]) + 1;
        } else {
          answer += Number(arr[i]);
        }
      } else {
        answer += Number(arr[i]);
      }
    } else {
      if (arr[i] > 5) {
        answer += 10 - Number(arr[i]) + 1;
      } else {
        answer += Number(arr[i]);
      }
    }
  }
  return answer;
}
