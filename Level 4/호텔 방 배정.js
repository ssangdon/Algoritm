const findRoom = (number, room) => {
  if (!room.has(number)) {
    room.set(number, number + 1);
    return number;
  }
  let re = findRoom(room.get(number), room);
  room.set(number, re + 1);
  return re;
};

function solution(k, room_number) {
  var answer = [];
  let room = new Map();
  let len = room_number.length;
  for (var i = 0; i < len; i++) {
    let number = findRoom(room_number[i], room);
    answer.push(number);
  }
  return answer;
}
