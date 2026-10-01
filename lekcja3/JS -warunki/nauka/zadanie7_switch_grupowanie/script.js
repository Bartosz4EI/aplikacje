// Twoje rozwiazanie
const ocena = Number(prompt("Podaj ocene"));
switch(ocena){
    case 6:
    case 5:
        opis="wyróżnienie";
    case 4:
    case 3:
        opis="ocena pozytywna";
    case 2:
    case 1:
        opis="do poprawy";
    default:
        opis="nieznana ocena";
}
document.write("Ocena " + ocena + ": " + opis)
