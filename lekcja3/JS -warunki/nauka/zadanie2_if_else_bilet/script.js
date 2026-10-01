// Twoje rozwiazanie
const Wiek = Number(prompt("Podaj Wiek"));
if (Wiek < 18){
    bilet="Bilet Ulgowy 15zł"
} else {
    bilet="Bilet Normalny 25zł"
}
document.write(bilet)
