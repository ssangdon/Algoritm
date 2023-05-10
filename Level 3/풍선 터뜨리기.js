function solution(a) {
  var answer = 0;
  let min1 = a[0];
  let min2 = a[a.length - 1];
  let arr1 = [];
  let arr2 = [];
  for (var i = 1; i < a.length - 1; i++) {
    if (a[i] < min1) {
      min1 = a[i];
      arr1.push(a[i]);
    }
  }
  for (var k = a.length - 2; k > 0; k--) {
    if (a[k] < min2) {
      min2 = a[k];
      arr2.push(a[k]);
    }
  }
  let set = new Set([...arr1, ...arr2]);
  return (answer = set.size + 2);
}
