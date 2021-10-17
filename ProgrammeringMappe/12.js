/*
12. Skriv en funktion, som kan udregne potensener.
    F.eks. er 2^2 = 4, 2^3 = 8, 2^4 = 16, osv.

    Vis hvordan funktionen kan gøres til en metode i en class.

    Beskriv koden med et flowchart og offentliggør den på et git repository.
*/
function myFunction(arr){
    
    let tal = 2;
    let sumArr = [];
    
    for(let i = 0; i < arr.length; i++){
        
        let e = Math.pow(2, arr[i]);
        
        sumArr.push(e);  
        
    }
    return sumArr;
    
}
console.log(myFunction([1, 2, 3, 4, 5, 6, 8, 9, 10]));


class potArr{
    constructor(arr){
        this.arr = arr
    }
myPot(){
    let tal = 2;
    let sumArr = [];
    
    for(let i = 0; i < this.arr.length; i++){
        
        let e = Math.pow(2, this.arr[i]);
        
        sumArr.push(e);  
        
    }
    return sumArr;
}
}

let totalPot = new potArr([1, 2, 3, 4, 5, 6, 8, 9, 10]);
console.log(totalPot.myPot())