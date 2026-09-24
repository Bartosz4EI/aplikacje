// Litry = (trasa/100)*spalanie
trasa = Number(prompt("Podaj długość trasy"));
spalanie = Number(prompt("Podaj spalanie l/100km"));
paliwo = Number(prompt("Podaj cene paliwa"));
litry = (trasa/100)*spalanie;
koszt = litry*paliwo;
document.write("Potrzebujesz " + paliwo + " litrów paliwa, koszt wyprawy: " + koszt + " zł")