/*Aufgabe 6 von Denise Marcella Alka, 21.November.2017
hiermit versichere ich, dass der Code von mir
(Denise Marcella Alka, 256690)
eigenst�ndig geschrieben wurde; er wurde nicht diktiert oder kopiert;
*/
var A6;
(function (A6) {
    class Skifahrer extends A6.Objekt {
        constructor(_x, _y, _dx, _dy) {
            super(_x, _y);
            this.x = _x;
            this.y = _y;
            this.dx = _dx;
            this.dy = _dy;
        }
        move() {
            if (this.x > 800 || this.y > 600) {
                this.x = 0;
                this.y = 0;
            }
            this.x += 10;
            this.y += 10;
            this.y += this.dy;
            this.x += this.dx;
        }
        draw() {
            // Dreieck f�r Beine/Ski
            A6.crc2.beginPath();
            A6.crc2.moveTo(this.x, this.y + 5);
            A6.crc2.lineTo(this.x + 10, this.y + 33);
            A6.crc2.lineTo(this.x - 5, this.y + 23);
            A6.crc2.closePath();
            A6.crc2.stroke();
            A6.crc2.fillStyle = "red";
            A6.crc2.fill();
            //Kreis f�r Kopf
            A6.crc2.beginPath();
            A6.crc2.arc(this.x + 1, this.y + 1, 5, 0, 2 * Math.PI);
            A6.crc2.fillStyle = "#f1c56b";
            A6.crc2.fill();
            //Viereck k�rper crc2.fillRect(0, 0, 800, 600);
            A6.crc2.fillStyle = "#9cacdb";
            A6.crc2.fillRect(this.x - 5, this.y + 4, 10, 14);
        }
    }
    A6.Skifahrer = Skifahrer;
})(A6 || (A6 = {}));
//# sourceMappingURL=Skifahrer.js.map