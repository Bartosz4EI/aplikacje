// Twoje rozwiązanie

let waga = Number(prompt("Podaj wage paki w kg"));
let koszt;
if(waga<=1){
    koszt = 12;
} else {
    koszt = (Math.ceil(waga)*3)+9;
}

koszt=Math.round(koszt*100)/100;

document.getElementById("wynik").textContent="Koszt dostawy " + koszt;