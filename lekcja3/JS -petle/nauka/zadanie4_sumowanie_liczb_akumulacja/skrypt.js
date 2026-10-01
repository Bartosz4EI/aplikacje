// Pobierz liczbę od użytkownika
// Zadeklaruj sumę
// Napisz pętlę for
// Wypisz wynik PO pętli
const liczba = Number(prompt("Podaj liczbe"));
let suma = 0;
for(let i=0;i<=liczba;i++){
    suma=suma+i;
}
document.write(suma);
