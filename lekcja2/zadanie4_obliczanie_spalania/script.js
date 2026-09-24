// Wzór: (litry / km) * 100
litry = Number(prompt("Podaj liczbe zużytego paliwa "));
km = Number(prompt("Podaj liczbe przejechanych km "));
spalanie = (litry/km)*100;
document.write("Spalanie wynosi " + spalanie + " l/100km")