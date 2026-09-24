// 1h = 3600s
godzina = Number(prompt("Podaj godzine"));
minuta = Number(prompt("Podaj minute"));
sekunda = Number(prompt("Podaj sekunde"));
sekundyG = godzina*3600;
sekundyM = minuta * 60;
sekundyT = sekunda+sekundyG+sekundyM;
document.write("Od północy minęło: " + sekundyT + " sekund")