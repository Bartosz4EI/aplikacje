// Twoje rozwiązanie

let liczba = Number(prompt("Podaj liczcbe"));
let min=0;
let max=100;
const clamped = Math.min(max, Math.max(min,liczba));
document.getElementById("wynik").textContent="Wynik po clamp: " + clamped;