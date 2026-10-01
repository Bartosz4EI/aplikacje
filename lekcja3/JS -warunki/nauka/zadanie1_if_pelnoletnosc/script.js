// Twoje rozwiazanie
const wiek = Number(prompt("Podaj Wiek"));
let pelnoletnosc = "Niepełnoletni"
if (wiek>=18){
    pelnoletnosc="Pełnoletni"
};
document.write("Wiek: " + wiek +" " + pelnoletnosc);
