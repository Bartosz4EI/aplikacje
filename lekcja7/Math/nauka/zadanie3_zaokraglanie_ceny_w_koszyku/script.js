// Twoje rozwiązanie

let cena = Number(prompt("Podaj cene produkru"));
let rabat = Number(prompt("Podaj rabat"));

cena_r=Math.round((cena-cena*rabat/100)*100)/100;
document.getElementById("wynik").textContent="Cena po rabacie " + cena_r + " zł";