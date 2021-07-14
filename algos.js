
const test1NumsA = [1, 2];
const test1NumsB = [2, 1];
const expected1 = [];
// Explanation: 1 and 2 are in both arrays so are excluded

const test2NumsA = [1, 2, 3];
const test2NumsB = [4, 5, 6];
const expected2 = [1, 2, 3, 4, 5, 6];
// Explanation: neither array has shared values, so all are included

const test3NumsA = [4, 1, 2, 3, 4];
const test3NumsB = [1, 2, 3, 5, 5, 2];
const expected3 = [4, 5];

function symmetricDifferences(numsA, numsB) {
  var unique = {}
  var idxA = 0;
  var idxB = 0;

  while (idxA < numsA.length && idxB<numsB.length) {
      if(!unique[numsA[idxA]]){
        unique[numsA[idxA]] ="a";
      }
     if(!unique[numsB[idxB]]){
        unique[numsB[idxB]] = "b";
      }
      if(unique[numsA[idxA]]=="b"){
        delete unique[numsA[idxA]]
      }
      if(unique[numsB[idxB]]=="a"){
        delete unique[numsB[idxB]]
      }
      idxA++
      idxB++

  }
  return unique;
}

console.log(symmetricDifferences(test2NumsA, test2NumsB))