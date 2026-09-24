// Kantor wymiany walut
const EURO = 4.30;
const DOLAR = 3.90;
kwota = Number(prompt("Ile złotych chcesz wymienić?"));
document.write("Kwota " + kwota + " PLN to <hr> " + (kwota/EURO).toFixed(2) + " EUR i <hr> " + (kwota/DOLAR).toFixed(2) + " USD");