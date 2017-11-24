/*Aufgabe 6 von Denise Marcella Alka, 21.November.2017
hiermit versichere ich, dass der Code von mir
(Denise Marcella Alka, 256690)
eigenst�ndig geschrieben wurde; er wurde nicht diktiert oder kopiert;
*/
var A6;
(function (A6) {
    class Wolken extends A6.Objekt {
        constructor(_x, _y) {
            super(_x, _y);
            this.x = _x;
            this.y = _y;
        }
        move() {
            if (this.x > 800) {
                this.x = 0;
            }
            this.x += 10;
            this.y += 0;
        }
        draw() {
            A6.crc2.beginPath();
            A6.crc2.arc(this.x, this.y, 10, 0, 2 * Math.PI); //10 radius
            A6.crc2.fillStyle = "#FFFFFF";
            A6.crc2.fill();
            //W1.2
            A6.crc2.beginPath();
            A6.crc2.arc(this.x + 10, this.y + 10, 10, 0, 2 * Math.PI);
            A6.crc2.fillStyle = "#FFFFFF";
            A6.crc2.fill();
            //W1.3
            A6.crc2.beginPath();
            A6.crc2.arc(this.x - 10, this.y + 10, 10, 0, 2 * Math.PI); //10 radius
            A6.crc2.fillStyle = "#FFFFFF";
            A6.crc2.fill();
            //W1.4
            A6.crc2.beginPath();
            A6.crc2.arc(this.x, this.y + 8, 10, 0, 2 * Math.PI);
            A6.crc2.fillStyle = "#FFFFFF";
            A6.crc2.fill();
        } //draw
    }
    A6.Wolken = Wolken; //class
})(A6 || (A6 = {})); //namespace
//# sourceMappingURL=Wolken.js.map