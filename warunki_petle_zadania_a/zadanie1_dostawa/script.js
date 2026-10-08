// Twoje rozwiazanie
let kwota = Number(prompt("Podaj kwote koszyka"));
let dostawa = "Koszt dostawy 12 zł"
if(kwota>=120){
    dostawa = "Darmowa dostawa"
}
document.write(dostawa);