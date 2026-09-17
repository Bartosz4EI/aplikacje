// Pomnóż przez 0.8
let cena = Number(prompt("Podaj cene"));
let rabat_cena = cena * 0.8;

document.write("Cena przed obniżką: " + cena + "zł" + "<br>" + "Cena po rabacie (-20%): " + rabat_cena.toFixed(2) + " zł")
