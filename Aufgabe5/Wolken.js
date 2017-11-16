/*Aufgabe 5 von Denise Marcella Alka, 15.November.2017
hiermit versichere ich, dass der Code von mir
(Denise Marcella Alka, 256690)
eigenst�ndig geschrieben wurde; er wurde nicht diktiert oder kopiert;
*/
var A5;
(function (A5) {
    class Wolken {
        //rad: number
        //dx: number;
        //dy: number;
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        updateWolken() {
            this.move();
            this.draw();
        }
        move() {
            if (this.x > 800) {
                this.x = 0;
            }
            this.x += 10;
            this.y += 0;
        }
        draw() {
            A5.crc2.beginPath();
            A5.crc2.arc(this.x, this.y, 10, 0, 2 * Math.PI); //10 radius
            A5.crc2.fillStyle = "#FFFFFF";
            A5.crc2.fill();
            //W1.2
            A5.crc2.beginPath();
            A5.crc2.arc(this.x + 10, this.y + 10, 10, 0, 2 * Math.PI);
            A5.crc2.fillStyle = "#FFFFFF";
            A5.crc2.fill();
            //W1.3
            A5.crc2.beginPath();
            A5.crc2.arc(this.x - 10, this.y + 10, 10, 0, 2 * Math.PI); //10 radius
            A5.crc2.fillStyle = "#FFFFFF";
            A5.crc2.fill();
            //W1.4
            A5.crc2.beginPath();
            A5.crc2.arc(this.x, this.y + 8, 10, 0, 2 * Math.PI);
            A5.crc2.fillStyle = "#FFFFFF";
            A5.crc2.fill();
        } //draw
    }
    A5.Wolken = Wolken; //class
})(A5 || (A5 = {})); //namespace
//# sourceMappingURL=Wolken.js.map