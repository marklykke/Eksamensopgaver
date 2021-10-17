/*
13. Skriv en funktion, som kan bestemme om alle tallene i en række er ens.
    F.eks. er tallene [1, 2, 3] ikke ens, hvorimod tallene i [1, 1, 1] er ens.

    Vis hvordan funktionen kan gøres til en metode i en class.

    Beskriv koden med et flowchart og offentliggør den på et git repository.
*/
function opgave13 (arr){

let result = arr[0];
  for (let i=1; i < arr.length; i++) {
    if (result !== arr[i]){
      return false;
    }
  }
      return true;
}

console.log(opgave13([1, 1, 1]));




class sumArr2{
  constructor(arr){
    this.arr = arr;
  }

mySum1 (){
  let result = this.arr[0];
    for (let i=1; i < this.arr.length; i++) {
      if (result !== this.arr[i]){
        return false;
      }
    }
        return true;
}
}

let sumArrayNum = new sumArr2([1, 1, 1, 2]);
console.log(sumArrayNum.mySum1());