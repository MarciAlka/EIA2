// Aufgabe 10: Baumkonfigurator
// Name: Denise Alka
// Matrikel: 256690
// Datum: 10.01.2018
//
// Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var Aufgabe11;
(function (Aufgabe11) {
    class Ware {
        //Constructor zum bauen
        constructor(name, preis, farbe) {
            Ware.counter++;
            this.id = "Ware " + Ware.counter;
            this.name = name;
            this.preis = preis;
            this.nr = 1;
            this.farbe = farbe;
        }
    }
    //counter hier setzen!
    Ware.counter = 0;
    Aufgabe11.Ware = Ware;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=Ware.js.map