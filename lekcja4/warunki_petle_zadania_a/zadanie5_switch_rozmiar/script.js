// Twoje rozwiazanie
const rozmiar = prompt("Podaj rozmiar");
switch(rozmiar){
    case "S":
        etykieta = "mały";
        break;
    case "M":
        etykieta = "średni";
        break;
    case "L":
        etykieta = "duży";
        break;
    case "XL":
        etykieta = "bardzo duży";
        break;
    default:
        etykieta = "nieznany rozmiar";
}
document.write(rozmiar + ", " + etykieta);