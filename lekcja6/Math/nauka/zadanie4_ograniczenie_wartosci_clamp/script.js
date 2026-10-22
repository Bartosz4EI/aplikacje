// Twoje rozwiązanie
let liczba = Number(prompt("Podaj liczbę"));
min=0;
max=100;
liczba=Math.min(max, Math.max(min, liczba));
document.getElementById("wynik").textContent =  "Wynik po clamp: " + liczba;
