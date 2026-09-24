// Rachunek + (Rachunek * Napiwek%)
kwota= Number(prompt("Podaj kwote rachunku"));
osoby = Number(prompt("Podaj ilość osób"));
napiwek = Number(prompt("Podaj napiwek(w procentach)"));
napiwekT=kwota*napiwek/100;
total=kwota+napiwekT;
perperson=total/osoby;
document.write("Rachunek " + kwota + " Napiwek (" + napiwek + "%) " + napiwekT + " zł, razem " + total + "zł, na osobe " + perperson + " zł")