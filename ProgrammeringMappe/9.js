/*
9.  Skriv en funktion, som kan ændre et array til at stå i omvendt rækkefølge.
    F.eks. vil [1, 2, 3, 4] blive til [4, 3, 2, 1]

    Vis hvordan funktionen kan gøres til en metode i en class.

    Beskriv koden med et flowchart og offentliggør den på et git repository.
*/
function myFunction (arr){
    
    let reverse = [];
    
    for(let i = arr.length - 1; i > -1; i--){
        
        let e = arr[i];
        
        reverse.push(e);
        
    }
    return reverse;
        
}
        
console.log(myFunction([1, 2, 3, 4, 5]));

class revArr{
    constructor(arr){
        this.arr = arr
    }
    
myRev(){
    
    let reverse = [];
    
    for(let i = this.arr.length - 1; i > -1; i--){
        
        let e = this.arr[i];
        
        reverse.push(e);
        
    }
    return reverse;
    
}
}

let reverseArr = new revArr([5, 4, 3, 2, 1]);
console.log(reverseArr.myRev());