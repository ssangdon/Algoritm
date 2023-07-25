const minusTime = str => {
  let result = "";
  let [hour, minute] = str.split(":");
  minute = parseInt(minute) - 1;
  hour = parseInt(hour);
  if (minute < 0) {
    minute = minute + 60;
    hour = hour - 1;
    if (hour < 10) {
      hour = `0${hour}`;
    }
    if (minute < 10) {
      minute = `0${minute}`;
    }
    result = `${hour}:${minute}`;
  } else {
    if (hour < 10) {
      hour = `0${hour}`;
    }
    if (minute < 10) {
      minute = `0${minute}`;
    }
    result = `${hour}:${minute}`;
  }
  return result;
};

const compareTime = (str1, str2) => {
  let a = parseInt(str1.replace(":", 0));
  let b = parseInt(str2.replace(":", 0));
  if (a >= b) return true;
  else return false;
};

const getTime = (str, dif) => {
  let result = "";
  let [hour, minute] = str.split(":");

  hour = parseInt(hour);
  minute = parseInt(minute) + dif;
  if (minute >= 60) {
    minute -= 60;
    hour += 1;
    if (hour < 10) {
      hour = `0${hour}`;
    }
    if (minute < 10) {
      minute = `0${minute}`;
    }
    result = `${hour}:${minute}`;
  } else {
    if (hour < 10) {
      hour = `0${hour}`;
    }
    if (minute < 10) {
      minute = `0${minute}`;
    }
    result = `${hour}:${minute}`;
  }
  return result;
};
function solution(n, t, m, timetable) {
  var answer = "";
  let bus = [];
  let time = 0;
  let startTime = "09:00";
  for (var i = 0; i < n; i++) {
    bus.push({
      start: startTime,
      max: m,
    });
    startTime = getTime(startTime, t);
  }
  timetable.sort((a, b) => {
    return parseInt(a.replace(":", 0)) - parseInt(b.replace(":", 0));
  });
  let timeIdx = 0;
  let wait = [];
  for (var i = 0; i < bus.length; i++) {
    let val = bus[i];
    // 마지막 버스일 경우
    if (i === bus.length - 1) {
      let stack = [];
      while (
        timeIdx < timetable.length &&
        compareTime(val.start, timetable[timeIdx]) &&
        val.max !== 0
      ) {
        stack.push(timetable[timeIdx]);
        timeIdx++;
        val.max -= 1;
      }
      // console.log(stack)
      if (val.max > 0) {
        time = val.start;
      } else {
        time = minusTime(stack.at(-1));
      }
      // console.log(time, val.start, val.max)
      // time = [timetable[timeIdx], val.start, val.max]
      break;
    }
    while (
      timeIdx < timetable.length &&
      compareTime(val.start, timetable[timeIdx]) &&
      val.max !== 0
    ) {
      timeIdx++;
      val.max -= 1;
    }
  }

  return time;
  // console.log(timetable)
  // console.log(bus)
}
