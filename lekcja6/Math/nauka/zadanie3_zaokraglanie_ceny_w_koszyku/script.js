// Twoje rozwiązanie

let cena = Number(prompt("Podaj cene"));
let rabat = Number(prompt("Podaj rabat"));
cenar=cena-cena*(rabat/100);
cenar=Math.round(cenar*100)/100;
document.getElementById("wynik").textContent = "Cena po rabacie " + cenar + " zł";
