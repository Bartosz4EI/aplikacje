// Twoje rozwiązanie

let min = 0;
let max = 999999;
let losowa = Math.floor(Math.random()*(max-min+1))+min;
losowa=String(losowa).padStart(6,"0");
document.getElementById("wynik").textContent="Kod promocyjny " + losowa;