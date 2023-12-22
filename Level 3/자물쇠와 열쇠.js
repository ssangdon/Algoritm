const rotate = arr => {
  let len = arr.length;
  let newArr = Array.from(Array(len), () => Array(len).fill(0));
  for (var i = 0; i < len; i++) {
    for (var k = 0; k < len; k++) {
      newArr[i][k] = arr[len - 1 - k][i];
    }
  }
  return newArr;
};

function solution(key, lock) {
  let lockLen = lock.length;
  let keyLen = key.length;
  let total = (keyLen - 1) * 2 + lockLen;
  let newBoard = Array.from(Array(total), () => Array(total).fill(0));
  let a = 0;
  let b = 0;

  const check = arr => {
    for (var i = keyLen - 1; i < keyLen - 1 + lockLen; i++) {
      for (var k = keyLen - 1; k < keyLen - 1 + lockLen; k++) {
        if (arr[i][k] !== 1) return false;
      }
    }
    return true;
  };

  for (var i = keyLen - 1; i < keyLen - 1 + lockLen; i++) {
    for (var k = keyLen - 1; k < keyLen - 1 + lockLen; k++) {
      newBoard[i][k] = lock[a][b++];
    }
    a++;
    b = 0;
  }
  for (var i = 0; i < 4; i++) {
    key = rotate(key);
    for (var j = 0; j <= total - keyLen; j++) {
      for (var m = 0; m <= total - keyLen; m++) {
        const boardSlice = JSON.parse(JSON.stringify(newBoard));
        for (var q = 0; q < keyLen; q++) {
          for (var w = 0; w < keyLen; w++) {
            boardSlice[j + q][m + w] += key[q][w];
          }
        }
        if (check(boardSlice)) return true;
      }
    }
  }
  return false;
}
