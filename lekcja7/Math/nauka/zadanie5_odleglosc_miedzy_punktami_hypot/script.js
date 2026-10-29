// Twoje rozwiązanie

let x1 = Number(prompt("Podaj x1"));
let y1 = Number(prompt("Podaj y1"));
let x2 = Number(prompt("Podaj x2"));
let y2 = Number(prompt("Podaj y2"));

let odleglosc_x = x2-x1;
let odleglosc_y = y2-y1;
let odleglosc = Math.hypot(odleglosc_x,odleglosc_y);
odleglosc = Math.round(odleglosc*100)/100;
document.getElementById("wynik").textContent="Odległość: " + odleglosc;