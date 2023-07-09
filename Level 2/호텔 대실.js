function solution(book_time) {
  let room = [];
  book_time.sort((a, b) => {
    return parseInt(a[0].replace(":", "")) - parseInt(b[0].replace(":", ""));
  });
  book_time.forEach((data, idx) => {
    let startTime = new Date(`2023-01-01 ${data[0]}:00`).getTime();
    let finishTime = new Date(`2023-01-01 ${data[1]}:00`).getTime();
    let minStartTime = startTime / (60 * 1000);
    let minFinishTime = finishTime / (60 * 1000) + 10;
    if (idx === 0) {
      room.push(minFinishTime);
    } else {
      let changed = false;
      for (var i = 0; i < room.length; i++) {
        if (room[i] <= minStartTime) {
          room[i] = minFinishTime;
          changed = true;
          break;
        }
      }
      if (!changed) {
        room.push(minFinishTime);
      }
    }
  });
  return room.length;
}
