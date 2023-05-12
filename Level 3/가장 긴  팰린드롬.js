const check = str => {
  let mid = Math.floor(str.length / 2);
  for (var i = 0; i < mid; i++) {
    if (str[i] !== str[str.length - i - 1]) return false;
  }
  return true;
};

function solution(s) {
  var answer = 0;
  for (var i = s.length; i >= 1; i--) {
    for (var k = 0; k <= s.length - i; k++) {
      let slice = s.slice(k, k + i);
      let checked = check(slice);
      if (checked) return slice.length;
    }
  }
}
