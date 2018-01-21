namespace Aufgabe11 {

    //klasse f�r weihnachtsb�ume
    export class Baum implements Ware {
        id: string;
        name: string;
        preis: number;
        nr: number;
        farbe: string;

        constructor(name: string, preis: number) {
            //abstract
            Ware.counter++;
            this.id = "Baum " + Ware.counter; //eigene id
            this.name = name;
            this.preis = preis;
            this.nr = 1; //standardmaessig 1 im warenkorb
            this.farbe = "gr�n"; //alle B�ume sind gr�n ;)
        }
    }

    //klasse fuer schmuck
    export class Schmuck implements Ware {
        id: string;
        nKorb: number;
        name: string;
        preis: number;
        farbe: string; //optionaler parameter farbe
        nr: number;
        
        constructor(name: string, preis: number, farbe?: string) {
            Ware.counter++;
            this.id = "Schmuck " + Ware.counter;
            this.name = name;
            this.preis = preis;
            this.farbe = farbe;
            this.nr = 1; //standardmaessig 1 im warenkorb
        }
    }

    //klasse fuer halterungen
    export class Halter implements Ware {
        id: string;
        nr: number;
        name: string;
        preis: number;
        farbe: string;

        constructor(farbe: string, preis: number) {
            Ware.counter++;
            this.id = "Halterung " + Ware.counter;
            this.name = "Halterung";
            this.farbe = farbe;
            this.preis = preis;
            this.nr = 1; //standardm��ig 1 im warenkorb
        }
    }

    export function loadInfo(): void {

        
        data.addBaum(new Baum("Kiefer", 20.99));
        data.addBaum(new Baum("Nordmanntanne", 25.99));
        data.addBaum(new Baum("Fichte", 18.00));
        data.addBaum(new Baum("Edeltanne", 38.20));
        

        data.addHalterung(new Halter("silbern", 10.00));
        data.addHalterung(new Halter("schwarz", 10.00));
        data.addHalterung(new Halter("keine", 0.00));

        data.addSchmuck(new Schmuck("Kerze", 0.90));
        data.addSchmuck(new Schmuck("Lichterkette", 9.90));
        data.addSchmuck(new Schmuck("Kugel", 0.99, "gold"));
        data.addSchmuck(new Schmuck("Kugel", 0.99, "rot"));
        data.addSchmuck(new Schmuck("Kugel", 0.99, "silber"));
        data.addSchmuck(new Schmuck("Kugel", 0.99, "blau"));
        data.addSchmuck(new Schmuck("Kugel", 0.99, "gr�n"));
        data.addSchmuck(new Schmuck("Anh�nger", 0.99));
        data.addSchmuck(new Schmuck("Lametta", 1.99, "gold"));
        data.addSchmuck(new Schmuck("Lametta", 1.99, "rot"));
        data.addSchmuck(new Schmuck("Lametta", 1.99, "silber"));
        data.addSchmuck(new Schmuck("Lametta", 1.99, "blau"));
    }
}