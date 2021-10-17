/*
22. Skriv en funktion, som kan producere et givent antal af de første værdier fra fibonacci sekvensen (summen af de to forrige tal bliver til det næste tal).
    F.eks. er produktionen af de første 7 tal 1, 1, 2, 3, 5, 8, 13.

    Vis hvordan funktionen kan gøres til en metode i en class.

    Beskriv koden med et flowchart og offentliggør den på et git repository.
*/
function Fibonacci(num){
    let before = 0;
    let actual = 1;
    let next = 1;

    for(let i = 0; i < num; i++){
        console.log(next)
        before = actual + next;
        actual = next
        next = before
    }
}

Fibonacci(10);


class opgave22{
  constructor(num){
    this.num = num;
  }

mySum2 (){
  let before = 0;
  let actual = 1;
  let next = 1;

  for(let i = 0; i < this.num; i++){
    console.log(next)
    before = actual + next;
    actual = next
    next = before
}
    return actual
}
}
let times = new opgave22(10);
console.log(times.mySum2());