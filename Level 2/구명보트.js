function solution(people, limit) {
  var answer = 0;
  people.sort((a, b) => a - b);
  let p1 = 0;
  let p2 = people.length - 1;
  while (p1 <= p2) {
    //한번에 두명밖에 못탄다는 점 인지
    // 가장 가벼운 사람과 가장 무거운사람이 같이 탈 수 있나?
    if (people[p1] + people[p2] <= limit) {
      //탈수있으면 같이 태우자.
      p1++;
      p2--;
    } else {
      //못탄다면 무거운사람 혼자 태우자
      p2--;
    }
    answer++;
  }
  return answer;
}
