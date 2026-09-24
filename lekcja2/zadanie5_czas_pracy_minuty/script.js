// Użyj Math.floor() i %
minuty = Number(prompt("Podaj liczbe minut"));
godziny = Math.floor(minuty/60);
reszta = minuty%60;
document.write(minuty +" minut to " + godziny + " godzin " + reszta + " minut");