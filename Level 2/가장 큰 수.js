function solution(numbers) {
  var answer = "";
  //문자열을 이어붙히기 위하여, 정수를 문자열로 바꾸자!
  numbers = numbers.map(d => d.toString());
  numbers.sort((a, b) => b + a - (a + b));
  if (numbers.join("") * 1 === 0) {
    return "0";
  } else {
    return numbers.join("");
  }
}
