/*
3.  Skriv en funktion, som finde det højeste og det laveste tal i et array.
    F.eks. vil svaret på [1, 2, 3, 4, 5] være [1, 5].

    Vis hvordan funktionen kan gøres til en metode i en class.

    Beskriv koden med et flowchart og offentliggør den på et git repository.
*/
function myFunction (arr){
    
    let max = arr[0];
    let minimum = arr[0];
    let current = 0;
    
    for(let i = 0; i < arr.length; i++){
        current = arr[i];
        
        
        if (current < minimum){
            minimum = current;
        }
        
        if (current > max){
            max = current;
        }
        
    }
    
    return ([minimum, max]);
    
}

console.log(myFunction([4, 1, 6, -2, 3, 2]));

class maxMini{
    constructor(arr){
        this.arr = arr;
    }
myMaxMini (){
    let max = this.arr[0];
    let minimum = this.arr[0];
    let current = 0;
    
    for(let i = 0; i < this.arr.length; i++){
        current = this.arr[i];
        
        
        if (current < minimum){
            minimum = current;
        }
        
        if (current > max){
            max = current;
        }
        
    }
    
    return ([minimum, max]);
    
}
}

let maxMini1 = new maxMini([4, 1, 6, -2, 3, 2]);
console.log(maxMini1.myMaxMini());