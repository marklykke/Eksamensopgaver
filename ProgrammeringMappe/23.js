/*
23. Skriv en funktion. som kan udregne kvadratrødder.
    F.eks. er  kvadratroden af 4 2, 9 3, 16 4, osv.

    Vis hvordan funktionen kan gøres til en metode i en class.

    Beskriv koden med et flowchart og offentliggør den på et git repository.
*/
function myFunction(arr){
    let sq = {}
    for(let i = 0; i < arr.length; i++){
        let e = Math.sqrt(arr[[i]]);
        sq[i] = e;
    }
    return sq
}
console.log(myFunction([4, 9, 16]))

class sq{
    constructor(arr){
        this.arr = arr
    }
mySum(){
    let sq = {}
    for(let i = 0; i < this.arr.length; i++){
        let e = Math.sqrt(this.arr[[i]]);
        sq[i] = e;
    }
    return sq
}
}
let hygge = new sq([15, 9, 16, 4, 23, -2]);
console.log(hygge.mySum());
