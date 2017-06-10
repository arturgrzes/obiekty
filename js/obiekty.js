'use strict' 

function Osoba(imie,nazwisko){
    this.imie = imie;
    this.nazwisko = nazwisko;
    this.wyswietlInfo = function() {
        console.log("Imię" + this.imie+ "Nazwisko" + this.nazwisko);
    }
}

var artur = new Osoba('Artur', 'Grzes');
artur.wyswietlInfo();

var lukasz = new Osoba('Łukasz', 'Badocha');
lukasz.wyswietlInfo();