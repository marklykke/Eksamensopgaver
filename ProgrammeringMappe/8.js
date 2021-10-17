/*
8.  Skriv en funktion, som kan bortfiltrere alle værdierne i et array, som er over en given værdi.
    F.eks. vil en bortfiltrering af tal over 2 i arrayet [1, 2, 3, 4, 5] blive til [1, 2].

    Vis hvordan funktionen kan gøres til en metode i en class.

    Beskriv koden med et flowchart og offentliggør den på et git repository.
*/
function myFunction (arr){

  let arr1 = []

  for(let i = 0; i < arr.length; i++){

        let e = arr[i];

        if (e < 4){
          arr1.push(e)
        }
    }
    return arr1;
}

console.log(myFunction([1, 2, 3, 4, 8, 9]))



class sumArr1{
    constructor(arr){
      this.arr = arr;
    }
mySum (){
  let arr1 = [];

  for(let i = 0; i < this.arr.length; i++){

        let e = this.arr[i];

        if (e < 9){
          arr1.push(e)
        }
    }
    return arr1;
}
}

let sumArr = new sumArr1([1, 2, 3, 4, 8, 9]);
console.log(sumArr.mySum())