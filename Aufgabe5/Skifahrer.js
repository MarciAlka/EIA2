/*Aufgabe 5 von Denise Marcella Alka, 15.November.2017
hiermit versichere ich, dass der Code von mir
(Denise Marcella Alka, 256690)
eigenst�ndig geschrieben wurde; er wurde nicht diktiert oder kopiert;
*/
var A5;
(function (A5) {
    class Skifahrer {
        //color: string;
        constructor(_x, _y, _dx, _dy) {
            this.x = _x;
            this.y = _y;
            this.dx = _dx;
            this.dy = _dy;
        }
        updateSki() {
            this.move();
            this.draw();
        }
        move() {
            //this.x += Math.random() * 4 - 2; // hier experimentieren um
            //this.y += Math.random() * 4 - 2; // andere Bewegungsmuster zu finden
            if (this.x > 800) {
                //this.x = 0;
                this.y = 0;
            }
            if (this.y > 600) {
                this.y = 0;
                this.y = 0;
            }
            this.x += 10;
            this.y += 10;
            //this.y += this.dy;
            //this.y += this.dx; 
        }
        draw() {
            // Dreieck f�r Beine/Ski
            A5.crc2.beginPath();
            A5.crc2.moveTo(this.x, this.y + 5);
            A5.crc2.lineTo(this.x + 10, this.y + 33);
            A5.crc2.lineTo(this.x - 5, this.y + 23);
            A5.crc2.closePath();
            A5.crc2.stroke();
            A5.crc2.fillStyle = "red";
            A5.crc2.fill();
            //Kreis f�r Kopf
            A5.crc2.beginPath();
            A5.crc2.arc(this.x + 1, this.y + 1, 5, 0, 2 * Math.PI);
            A5.crc2.fillStyle = "#f1c56b";
            A5.crc2.fill();
            //Viereck k�rper crc2.fillRect(0, 0, 800, 600);
            A5.crc2.fillStyle = "#9cacdb";
            A5.crc2.fillRect(this.x - 5, this.y + 4, 10, 14);
        }
    }
    A5.Skifahrer = Skifahrer;
})(A5 || (A5 = {}));
//# sourceMappingURL=Skifahrer.js.map