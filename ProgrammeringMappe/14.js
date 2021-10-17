/*
14. Skriv en funktion, som kan bortfiltrere ulige tal fra en række af tal.
    F.eks. vil [1, 2, 3, 4, 5] blive til [2, 4].

    Vis hvordan funktionen kan gøres til en metode i en class.

    Beskriv koden med et flowchart og offentliggør den på et git repository.
*/
function myFunction (arr){
    
    let sumArr = []
    
    for(let i = 0; i < arr.length; i++){
        
        let e = arr[i];
        
        if (e%2 == 0){
            sumArr.push(e);
            
        }
    }
    return sumArr;
    
}

console.log(myFunction([1, 2, 3, 4, 5, 6, 7]));

class sumArr{
    constructor(arr){
        this.arr = arr;
    }
myArr(){
    let sumArr = []
    
    for(let i = 0; i < this.arr.length; i++){
        
        let e = this.arr[i];
        
        if (e%2 == 0){
            sumArr.push(e);
            
        }
    }
    return sumArr;
}
}

let totalArr = new sumArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
console.log(totalArr.myArr())