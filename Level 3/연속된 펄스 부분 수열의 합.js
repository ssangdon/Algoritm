// Dp로 문제를 풀자
// arr1, arr2를 나누고
// 최대값을 선택하는 점화식을 세우자

function solution(sequence) {
  var answer = 0;
  //[1, -1, 1, -1, ...]을 곱한 값중 최대값을 담을 배열
  let arr1 = [];
  let arr2 = [];
  sequence.forEach((data, idx) => {
    if (idx === 0) {
      arr1 = [data];
      arr2 = [-data];
    } else if (idx % 2 === 0) {
      //점화식 =>  그전까지의 합에다 data를 계산한것과, 그냥 data값중에 큰 것 선택
      arr1.push(Math.max(arr1[idx - 1] + data, data));
      arr2.push(Math.max(arr2[idx - 1] - data, -data));
    } else {
      arr1.push(Math.max(arr1[idx - 1] - data, -data));
      arr2.push(Math.max(arr2[idx - 1] + data, data));
    }
    answer = Math.max(answer, arr1[idx], arr2[idx]);
  });
  return answer;
}

console.log(solution([2, 3, -6, 1, 3, -1, 2, 4]));
