// Pobierz dane, wyświetl bilet
imie = prompt("Podaj Imie");
nazwisko = prompt("Podaj Nazwisko");
bilet = prompt("Podaj Typ Biletu");
cena = Number(prompt("Podaj Cene biletu"));
document.write("<h2>" + imie + " " + nazwisko + "</h2><br>" + "Rodzaj " + bilet + " oraz Cena " + cena +" PLN" )