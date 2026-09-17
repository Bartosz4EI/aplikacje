// Oblicz średnią z 3 ocen
let ocena1 = Number(prompt("Podaj pierwszą ocene"));
let ocena2 = Number(prompt("Podaj drugą ocene"));
let ocena3 = Number(prompt("Podaj trzecią ocene"));
let srednia = (ocena1 + ocena2 + ocena3)/3;
srednia.toFixed(2);
document.write(("Twoje oceny to " + ocena1 + " " + ocena2 + " " + ocena3 + "<br>" + "Ich średnia wynosi " + srednia));