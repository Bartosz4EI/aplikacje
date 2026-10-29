// Twoje rozwiązanie

let r = Number(prompt("Podaj promień"));
let pi=Math.PI;
let pole = pi*(r**2);
pole=Math.round(pole*100)/100;
document.getElementById("wynik").textContent="Pole wynosi " + pole;
