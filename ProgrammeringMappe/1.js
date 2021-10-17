/*
1.  Skriv en funktion, som kan svare på om en værdi findes i et array.
    F.eks. vil svaret på om 4 findes i [1, 2, 3] være false.

    Vis hvordan funktionen kan gøres til en metode i en class.

    Beskriv koden med et flowchart og offentliggør den på et git repository.
*/    

function includes(num, arr){
    for(let i = 0; i < arr.length; i++) {
      if (arr[i] === num)
        return true;
    }
    return false;
}

console.log(includes(7, [1, 2, 3, 4, 5]))

class Raekke {

  constructor(arrIn) {
    this.arr = arrIn;
  }

  includes(num) {
    for(let i = 0; i < this.arr.length; i++) {
      if (this.arr[i] === num)
        return true;
    }
    return false;
  }

}

let minRaekke = new Raekke([1, 2, 3, 4, 5]);

console.log(minRaekke.includes(7));