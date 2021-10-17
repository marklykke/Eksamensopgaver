/*
7. Skriv en funktion, som kan simulere terningekast med forskellige antal terninger og sider.
    F.eks. kunne resultatet af 3 terninger med 10 sider være [3, 5, 9].

    Vis hvordan funktionen kan gøres til en metode i en class.

    Beskriv koden med et flowchart og offentliggør den på et git repository.
*/
function myFunction (num){
    
    let sumNum = [];
    
    for(let i = 0; i < num; i++){
        
        let e = Math.floor(Math.random() * 7);
        
        sumNum.push(e);
        
    }
    return sumNum;
    
}

console.log(myFunction(6));

class sumNum{
    constructor(num){
        this.num = num;
    }
    
myNum (){
    let sumNum = [];
    
    for(let i = 0; i < this.num; i++){
        
        let e = Math.floor(Math.random() * 7);
        
        sumNum.push(e);
        
    }
    return sumNum;    
}        
}

let finalNum = new sumNum(6)
console.log(finalNum.myNum())