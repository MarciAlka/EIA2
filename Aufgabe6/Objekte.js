/*Aufgabe 6 von Denise Marcella Alka, 21.November.2017
hiermit versichere ich, dass der Code von mir
(Denise Marcella Alka, 256690)
eigenst�ndig geschrieben wurde; er wurde nicht diktiert oder kopiert;
*/
var A6;
(function (A6) {
    class Objekte {
        //dx: number;
        //dy: number;
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
            this.draw();
        }
        //        update(): void {
        //            this.move();
        //            this.draw();
        //        }
        draw() {
            // abstract
        }
        move() {
            //this.x += Math.random() * 4 - 2;
            //this.y += Math.random() * 4 - 2;
        }
    }
    A6.Objekte = Objekte;
})(A6 || (A6 = {}));
//# sourceMappingURL=Objekte.js.map