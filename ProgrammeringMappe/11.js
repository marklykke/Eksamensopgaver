/*
11. Skriv en funktion, som kan kan udregne et tals fakultet.
    F.eks. er fakultet af 4  = 1 * 2 * 3 * 4 = 24.

    Vis hvordan funktionen kan gøres til en metode i en class.

    Beskriv koden med et flowchart og offentliggør den på et git repository.
*/    

function myFunction(num){
    
    let result = num;
    let tal = num - 1;
    
    for(let i = 0; i < tal; i++){
        
        num = num - 1;
        result = result * num;
        
    }
    return result;
    
}
console.log(myFunction(4))

class sumRes{
    constructor(num){
      this.num = num;  
    }
    
mySum(){
    
    let result = this.num;
    let tal = this.num - 1;
    
    for(let i = 0; i < tal; i++){
        
        this.num = this.num - 1;
        result = result * this.num;
        
    }
    return result;
    
}
}

let totalRes = new sumRes(4);
console.log(totalRes.mySum());