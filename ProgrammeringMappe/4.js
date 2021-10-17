/*
4.  Skriv en funktion, som kan konkatitenere 2 rækker af tal.
    F.eks. vil [1, 2, 3] og [4, 5, 6]. blive til [1, 2, 3, 4, 5, 6]

    Vis hvordan funktionen kan gøres til en metode i en class.

    Beskriv koden med et flowchart og offentliggør den på et git repository.
*/
function myFunction (arr, arr1){
    
    let sumArr = [];
    let sum = {};
    
    for(let i = 0; i < arr.length; i++){
        
        let e = arr[i];
        
        if (! sum[e]){
            
            sum[e] = true;
            sumArr.push(e);
            
        }
        
    }
    
    
    for(let i = 0; i < arr1.length; i++){
        
        let e = arr1[i];
        if (! sum[e]){
            
            sum[e] = true;
            sumArr.push(e);
        }
    }
    return sumArr;
}
console.log(myFunction([1, 2, 3, 4], [3, 4, 5, 6, 7, 8, 9]));

class sumArr{
    constructor(arr, arr1){
        this.arr = arr;
        this.arr1 = arr1;
    }
    
myArr (){
    
    let sumArr = [];
    let sum = {};
    
    for(let i = 0; i < this.arr.length; i++){
        
        let e = this.arr[i];
        
        if (! sum[e]){
            
            sum[e] = true;
            sumArr.push(e);
            
        }
        
    }
    
    
    for(let i = 0; i < this.arr1.length; i++){
        
        let e = this.arr1[i];
        if (! sum[e]){
            
            sum[e] = true;
            sumArr.push(e);
        }
    }
    return sumArr;
}
}  

let totalArr = new sumArr([1, 2, 3, 4], [3, 4, 5, 6, 7, 8, 9]);
console.log(totalArr.myArr());