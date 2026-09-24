// Stawka * Godziny
stawka = Number(prompt("Podaj stawke godzinową"));
godziny = Number(prompt("Podaj liczbe przepracowanych godzin"));
wyplata = (stawka*godziny).toFixed(2);
document.write("Twoja wypłata za " + godziny + " godzin przy stawce " + stawka + " zł wynosi " + wyplata + " zł ")