function solution(bandage, health, attacks) {
  var answer = 0;
  let time = 0;
  let healthMax = health;
  let cS = 0;
  for (var i = 0; i < attacks.length - 1; i++) {
    let [t1, d1] = attacks[i];
    let [t2, d2] = attacks[i + 1];
    health -= d1;
    if (health <= 0) return -1;
    let mok = Math.floor((t2 - t1 - 1) / bandage[0]);

    if (mok >= 1) {
      health += mok * bandage[2];
      health += (t2 - t1 - 1) * bandage[1];
    } else {
      health += (t2 - t1 - 1) * bandage[1];
    }

    if (health > healthMax) {
      health = healthMax;
    }
    // console.log(health)
  }
  // console.log(health)
  let [lT, lA] = attacks[attacks.length - 1];
  health -= lA;
  if (health <= 0) {
    return -1;
  } else {
    return health;
  }
}
