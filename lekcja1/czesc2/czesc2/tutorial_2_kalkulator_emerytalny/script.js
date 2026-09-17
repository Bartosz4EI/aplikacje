// Stała WIEK_EMERYTALNY = 65
const WIEK_EMERYTALNY = 65;
let imie = prompt("Podaj Imie")
let wiek = Number(prompt("Podaj wiek"));
document.write("Witaj " + imie + " do emerytury zostało ci " + (WIEK_EMERYTALNY-wiek) + " lat");