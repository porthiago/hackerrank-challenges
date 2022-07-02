// let ar = [4, 5, 5, 5, 6, 6, 4, 1, 4, 4, 3, 6, 6, 3, 6, 1, 4, 5, 5, 5];

let ar = [4, 2, 4, 2, 1];

let pairSum = 0;

for (let i = 0; i < ar.length; i++) {
  for (let j = i + 1; j < ar.length; j++) {
    if (ar[i] === ar[j]) {
      pairSum++;

      ar.splice(ar.indexOf(ar[i]), 1);
      j--;
      ar.splice(ar.indexOf(ar[j]), 1);
      i--;
      
      break;
    }
  }
}

console.log(pairSum);
