// Oblicz Gross i Tax
const STAWKA_VAT = 0.23;
nazwa = prompt("Podaj nazwe towaru");
cena_n = Number(prompt("Podaj cenę netto"));
cena_b = cena_n + cena_n*STAWKA_VAT;
document.write(nazwa + ", netto " + cena_n + " PLN, VAT " + (cena_n*STAWKA_VAT).toFixed(2) + " i brutto " + cena_b + " PLN" )
