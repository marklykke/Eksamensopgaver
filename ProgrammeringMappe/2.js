/*
2.  Skriv en funktion, som kan udregne summen af tallene i et array.
    F.eks. vil summen af [1, 2, 3] være 6.

    Vis hvordan funktionen kan gøres til en metode i en class.

    Beskriv koden med et flowchart og offentliggør den på et git repository.
*/
function myFunction (arr){
    
    let sum = 0;
    
    for(let i = 0; i < arr.length; i++){
        
        sum = sum + arr[i];
        
    }
    return sum;
}

console.log(myFunction([1, 2, 3, 4, 5]));

class sumArr{
    constructor(arr){
        this.arr = arr;
    }
mySum (){ // Navnet på min metode
    
    let sum = 0;
    
    for(let i = 0; i < this.arr.length; i++){
        
        sum = sum + this.arr[i];
        
    }
    return sum;
}
}

let sum1 = new sumArr([1, 2, 3, 4, 5]);
console.log(sum1.mySum());