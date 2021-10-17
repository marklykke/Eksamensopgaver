/*
25. Skriv en funktion, som kan sortere et array af tal.
    F.eks. kunne "[3, 5, 2, 1, 2]" blive til "[1, 2, 2, 3, 5]".

    Vis hvordan funktionen kan gøres til en metode i en class.

    Beskriv koden med et flowchart og offentliggør den på et git repository.
*/
function arraysorter(arr){
  for (i=0; i<arr.length-1; i++){
    let mini = i;

    for (let j = i+1; j < arr.length; j++){
      if (arr[j]<arr[mini]) {
        mini = j;
      }
    }
    if (mini !=i){
      let result = arr[i];
      arr[i]=arr[mini];
      arr[mini]=result;
    }
  }
  return arr;
}

console.log(arraysorter([43, 12, 78, 54, -12, 8]));

class opgave25 {
  constructor(arr){
    this.arr = arr;
  }

mySum3 (){
  for (i=0; i<this.arr.length-1; i++){
    let mini = i;

    for (let j = i+1; j < this.arr.length; j++){
      if (this.arr[j]<this.arr[mini]) {
        mini = j;
      }
    }
    if (mini !=i){
      let result = this.arr[i];
      this.arr[i]=this.arr[mini];
      this.arr[mini]=result;
    }
  }
  return this.arr;
}
}
let sorter = new opgave25([43, 12, 78, 54, -12, 8]);
console.log(sorter.mySum3());