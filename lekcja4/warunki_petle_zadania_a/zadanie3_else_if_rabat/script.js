// Twoje rozwiazanie
const kwota = Number(prompt("Podaj kwote"));
if(kwota>=100){
    rabat=10;
} else if(kwota>=50){
    rabat=5;
} else {
    rabat=0;
}
document.write("Kwota " + kwota + " rabat: " + rabat + "%");