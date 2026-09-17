// Math.floor i %
let dni = Number(prompt("Podaj Liczbe Dni "));
let tygodnie = Math.floor(dni / 7);
let reszta_dni = dni%7;
document.write(dni + " dni to " + tygodnie + " tygodnie i " + reszta_dni + " dni.")