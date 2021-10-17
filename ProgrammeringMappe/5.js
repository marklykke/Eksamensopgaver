/*
5.  Skriv et funktion, som kan tjekke om et array er symmetrisk eller ej.
    F.eks. er [1, 2, 2, 1] symmetrisk, hvorimod [1, 2, 3, 4] ikke er.

    Vis hvordan funktionen kan gøres til en metode i en class.

    Beskriv koden med et flowchart og offentliggør den på et git repository.
*/
function myFunction (arr){
    
    let myArrLen = arr.length;
    
    if (arr.length%2 === 0){
        
        let ArrLen = arr.length - 1;
        
        for(let i = 0; i < ArrLen; i++){
            
            if(arr[i] == arr[ArrLen]){
                
                ArrLen -= 1;
                return true;
                
            }
            return false;
            
        }
        
    }
    return false;
    
}
console.log(myFunction([1, 2, 2, 1]));

class Symmetry{
    constructor(arr){
        this.arr = arr;
    }
    
mySymmetry(){
    
    let myArrLen = this.arr.length;
    
    if (this.arr.length%2 === 0){
        
        let ArrLen = this.arr.length - 1;
        
        for(let i = 0; i < ArrLen; i++){
            
            if(this.arr[i] == this.arr[ArrLen]){
                
                ArrLen -= 1;
                return true;
                
            }
            return false;
            
        }
        
    }
    return false;
    
}    
}

let DoneSymmetry = new Symmetry([1, 2, 2, 2]);
console.log(DoneSymmetry.mySymmetry());