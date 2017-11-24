/*Aufgabe 6 von Denise Marcella Alka, 21.November.2017
hiermit versichere ich, dass der Code von mir
(Denise Marcella Alka, 256690)
eigenst�ndig geschrieben wurde; er wurde nicht diktiert oder kopiert;
*/
var A6;
(function (A6) {
    class Schnee extends A6.Objekt {
        constructor(_x, _y) {
            super(_x, _y);
            this.x = _x;
            this.y = _y;
        }
        move() {
            if (this.y > 600) {
                this.y = 0;
            }
            //test
            this.y += 10; //Math.random();
        }
        draw() {
            A6.crc2.beginPath();
            A6.crc2.arc(this.x, this.y, 2, 0, 2 * Math.PI);
            A6.crc2.fillStyle = "#FFFFFF";
            A6.crc2.fill();
        }
    }
    A6.Schnee = Schnee;
})(A6 || (A6 = {}));
//# sourceMappingURL=Schnee.js.map