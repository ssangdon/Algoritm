function solution(name, yearning, photo) {
  var answer = [];
  let obj = {};
  name.forEach((d, i) => (obj[d] = yearning[i]));
  photo.map(d => {
    let sum = 0;
    d.forEach(data => {
      obj[data] === undefined ? null : (sum += obj[data]);
    });
    answer.push(sum);
  });
  return answer;
}
