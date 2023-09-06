const dir = {
  0: "d",
  1: "l",
  2: "r",
  3: "u",
};
function solution(n, m, x, y, r, c, k) {
  var answer = "";
  let result = [];
  let dx = [1, 0, 0, -1];
  let dy = [0, -1, 1, 0];
  let board = Array.from(Array(n), () => Array(m).fill("."));
  board[x - 1][y - 1] = "S";
  board[r - 1][c - 1] = "E";
  let fastAnswer = k - (Math.abs(x - r) + Math.abs(y - c));
  if (fastAnswer < 0 || fastAnswer % 2 != 0) return "impossible";
  let queue = [x - 1, y - 1];
  const re = (current, stack) => {
    if (result.length > 0) return;
    if (stack.length > k) return;
    let [nx, ny] = current;
    if (Math.abs(nx - (r - 1)) + Math.abs(ny - (c - 1)) + stack.length > k) {
      return;
    }
    if (stack.length === k && nx === r - 1 && ny === c - 1) {
      result.push(stack);
      return;
    }
    for (var i = 0; i < 4; i++) {
      let lx = nx + dx[i];
      let ly = ny + dy[i];
      if (lx >= 0 && lx < n && ly >= 0 && ly < m) {
        re([lx, ly], stack + dir[i]);
      }
    }
  };
  let a = re(queue, "");
  // console.log(result)

  return result[0];
}
