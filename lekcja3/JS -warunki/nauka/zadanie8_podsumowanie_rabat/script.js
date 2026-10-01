// Twoje rozwiazanie
const kwota = Number(prompt("Podaj kwote"));
const karta = prompt("Czy posiadasz karte");
const kod = prompt("Podaj kod promocyjny");
wiadomosc="tak";
if (kwota<0){
    wiadomosc="błąd";
} else if(kwota>=200&&karta==="tak"){
    rabat=15;
    kwota_r=kwota-rabat/100;
} else if(kwota>=200&karta==="nie"){
    rabat=10;
    kwota_r=kwota-rabat/100;
} else if(kwota>=100||kod==="START"){
    rabat=5;
    kwota_r=kwota-rabat/100;
} else{
    rabat=0;
    kwota_r=kwota;
}
if(wiadomosc==="tak"){
    document.write("Kwota " + kwota + "zł, rabat " + rabat + "%, do zapłaty " + kwota_r + " zł")
}
