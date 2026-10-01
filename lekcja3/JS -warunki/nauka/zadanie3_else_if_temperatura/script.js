const Temp = Number(prompt("Podaj temperature"));
if(Temp<0){
    etykieta="mróz";
} else if(Temp<=15){
    etykieta="chłodno";
} else if(Temp<=25){
    etykieta="ciepło"
} else {
    etykieta="gorąco";
}
document.write(Temp + " °C, " + etykieta);
