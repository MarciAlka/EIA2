/*Aufgabe 6 von Denise Marcella Alka, 21.November.2017
hiermit versichere ich, dass der Code von mir
(Denise Marcella Alka, 256690)
eigenst�ndig geschrieben wurde; er wurde nicht diktiert oder kopiert;
*/
var A6;
(function (A6) {
    class Objekt {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        update() {
            this.move();
            this.draw();
        }
        draw() {
            // abstract
        }
        move() {
        }
    }
    A6.Objekt = Objekt;
})(A6 || (A6 = {}));
//# sourceMappingURL=Objekt.js.map