// Twoje rozwiazanie
let min = 1;
let max = 10;
let losowa = Math.floor(Math.random()*(max-min+1))+min;
document.getElementById("wynik").textContent="Wynik " + losowa;