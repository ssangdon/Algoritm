// class bTree{
//     constuctor(value){
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
//     insert(value){
//         let newTree = new bTree(value);
//         if(this.left === null){
//             this.left = newTree
//         }else{
//             this.right = newTree;
//         }
//     }
// }

function solution(info, edges) {
  var answer = 0;
  let root = 0;
  let sheep = 0;
  let wolf = 0;
  let result = [];
  let tree = Array.from(Array(info.length), () => Array(0));
  edges.sort((a, b) => a[0] - b[0]);
  edges.forEach(d => {
    let [parent, child] = d;
    tree[parent].push(child);
  });
  const dfs = (node, sheep, wolf, possible) => {
    answer = Math.max(sheep, answer);
    console.log(possible, node);
    if (sheep <= wolf) return;
    let needVisit = [...possible, ...tree[node]];
    needVisit.splice(possible.indexOf(node), 1);
    for (let now of needVisit) {
      if (info[now]) dfs(now, sheep, wolf + 1, needVisit);
      else dfs(now, sheep + 1, wolf, needVisit);
    }
  };
  dfs(0, 1, 0, [0]);
  return answer;
}
