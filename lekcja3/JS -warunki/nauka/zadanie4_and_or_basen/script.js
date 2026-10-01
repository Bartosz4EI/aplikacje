// Twoje rozwiazanie
const wiek = Number(prompt("Podaj Wiek"));
const plywanie = prompt("Czy potrafisz pływać");
const opiekun = prompt("Czy jesteś z opiekunem");
pozwolenie="Brak wstępu";
if(plywanie==="tak"&&(wiek>=12||opiekun==="tak")){
    pozwolenie="Wstęp dozwolony";
};
document.write(pozwolenie);
