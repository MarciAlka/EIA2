// Aufgabe 10: Baumkonfigurator
// Name: Denise Alka
// Matrikel: 256690
// Datum: 10.01.2018
//
// Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

namespace Aufgabe11 {
    export interface Interface_Ware {

        id: string;
        nr: number;
        preis: number;
        name: string;
        farbe: string;
    }

    export class Ware implements Interface_Ware {
        //counter hier setzen!
        static counter: number = 0;
        id: string;
        nr: number;
        preis: number;
        name: string;
        farbe: string;
        
        //Constructor zum bauen
        constructor(name: string, preis: number, farbe: string) {
            Ware.counter++;
            this.id = "Ware " + Ware.counter;
            this.name = name;
            this.preis = preis;
            this.nr = 1;
            this.farbe = farbe;
        }

    }


}