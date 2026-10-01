// Twoje rozwiazanie
const login = prompt("Login");
const haslo = prompt("Hasło");
const regulamin = prompt("Czy akceptujesz regulamin");
wiadomosc="Odmowa dostępu";
if(login==="uczen"&&haslo==="1234"&&regulamin==="tak"){
    wiadomosc="Zalogowano";
};
document.write(wiadomosc);
