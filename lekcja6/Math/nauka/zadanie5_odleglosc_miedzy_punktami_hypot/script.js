// Twoje rozwiązanie

let x1 = Number(prompt("Podaj x1"));
let y1 = Number(prompt("Podaj y1"));
let x2 = Number(prompt("Podaj x2"));
let y2 = Number(prompt("Podaj y2"));

dx= x2-x1;
dy=y2-y1;
liczba=Math.hypot(dx, dy);
liczba=Math.round(liczba*100)/100;
document.getElementById("wynik").textContent = "Odległość: " + liczba;
