const getGDC = (num1, num2) => {
  return num2 > 0 ? getGDC(num2, num1 % num2) : num1;
};

function solution(w, h) {
  let wholeNum = w * h;
  let gdc = getGDC(h, w);
  return wholeNum - (w + h - gdc);
}
