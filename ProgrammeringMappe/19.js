/*
19. Skriv en funktion, som kan tjekke om et bestemt ord findes i en tekst.
    F.eks. tjek om teksten "Indeholder denne tekst ordet 'programmering'?" indeholer ordet "programmering".

    Vis hvordan funktionen kan gøres til en metode i en class.

    Beskriv koden med et flowchart og offentliggør den på et git repository.
*/
function myFunction() {
  let str = "Indeholder denne tekst ordet 'programmering'?";

  if (str.search("programmering") > 0) {
    return true;
}
return false;
}
console.log(myFunction());

class opgave19 {
  constructor(search) {
this.search = search;
  }
  mySum() {
    let str = "Indeholder denne tekst ordet 'programmering'?";

    if (str.search("programmering") > 0) {
      return true;
  }
  return false;
  }
  }
let daw = new opgave19(this.search);
console.log(daw.mySum());