/*
6.  Skriv en funktion, som kan bestemme hyppigheden af hvert tal i et array.
    F.eks. kunne "[0, 1, 1, 1, 2, 3, 3]" blive til "[[1, 0], [3, 1], [1, 2], [2, 3]]".

    Vis hvordan funktionen kan gøres til en metode i en class.

    Beskriv koden med et flowchart og offentliggør den på et git repository.
*/
function myFunction(arr){
    
    arr.sort()
    let freq = []
    let tal = []
    let prev = arr[0]
    let antal = 0 
    
    for(let i = 0; i < arr.length; i++){
        
//        console.log(arr[i])
        
        if(arr[i] != prev){
            
            prev = arr[i]
            freq.push(antal)
            tal.push(arr[(i - 1)])
            antal = 0
            
        }
        antal += 1
    }
    return {freq, tal}
    
}
console.log(myFunction([1, 1, 2, 1, 3, 3, 3, 3, 1]))