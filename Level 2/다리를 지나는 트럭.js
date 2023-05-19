function solution(bridge_length, weight, truck_weights) {
  var answer = 0;
  //다리 길이를 표현한 배열
  let bridge = new Array(bridge_length).fill(0);
  let time = 0;
  while (truck_weights.length !== 0) {
    //다음것을 미리 예측하는 sum
    // 즉, bridge[0]을 뺴고, truck_weight[0]번째를 예측
    let sum =
      bridge.reduce((prev, now) => (prev += now)) -
      bridge[0] +
      truck_weights[0];
    //만약 무게보다 작다면 진행해도 된다는 뜻이므로, 진행
    if (sum <= weight) {
      bridge.shift();
      bridge.push(truck_weights[0]);
      truck_weights.shift();
      time++;
    } else {
      bridge.push(0);
      bridge.shift();
      time++;
    }
  }
  return time + bridge.length;
}
