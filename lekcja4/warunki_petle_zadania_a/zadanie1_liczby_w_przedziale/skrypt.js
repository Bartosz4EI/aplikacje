// Zadanie: Wypisz liczby z przedziału <A, B>
// Pamiętaj o konwersji typów! (parseInt)
let A = Number(prompt("Podaj liczbe start"));
let B = Number(prompt("Podaj liczbe stop"));
if(A>B){
    for(i=A;i>=B;i--){
        document.write(i+" ");
    }
} else{
    for(i=A;i<=B;i++){
        document.write(i+" ");
    }
}