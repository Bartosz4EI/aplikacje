// Ustal szukaną liczbę
// Pętla do...while z promptami i alertami
// Gratulacje po pętli
const zgadywanie = 7;
let i = 0;
do{
    zgad = Number(prompt("Zgadnij liczbe"));
    if(zgad>zgadywanie){
        alert("Za dużo");
    } else if(zgad<zgadywanie){
        alert("Za mało");
    }
    i=i+1;
} while (zgad !== zgadywanie)
document.write("<br><br> BRAWO! ZGADŁEŚ, ILOŚĆ PRÓB " + i);