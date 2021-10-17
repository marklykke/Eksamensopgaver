/*
15. Skriv en funktion, som kan tællene antallet af ord i en string.
    F.eks. er der 7 ord i "Dette er en string med syv ord.".

    Vis hvordan funktionen kan gøres til en metode i en class.

    Beskriv koden med et flowchart og offentliggør den på et git repository.
*/
function myFunction (arr){
    
    let ord = 0;
    
    for(let i = 0; i < arr.length; i++){
        
        if (arr[i] === " "){
            
            ord += 1;
            
        }
    }
    return ord + 1;
    
}
console.log(myFunction("der er fem ord her"));

class ordLen{
    constructor(arr){
        this.arr = arr
    }

myOrd (){
    
    let ord = 0;
    
    for(let i = 0; i < this.arr.length; i++){
        
        if (this.arr[i] === " "){
            
            ord += 1;
            
        }
    }
    return ord + 1;
    
}    
}

let totalOrd = new ordLen("der er fem ord her med lidt flere ord til");
console.log(totalOrd.myOrd())