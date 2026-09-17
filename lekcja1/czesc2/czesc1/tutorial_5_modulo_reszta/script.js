// Użyj % do obliczenia reszty
let cukierki = Number(prompt("podaj ilość cukierków"));
let dzieci = Number(prompt("podaj ilość dzieci"));
let reszta = cukierki%dzieci;
let na_dziecko = cukierki-reszta;
document.write("każde dziecko dostanie " + na_dziecko +  " cukierki, a dla Ciebie zostanie " + reszta + " sztuka.")