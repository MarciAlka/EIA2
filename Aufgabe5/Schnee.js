/*Aufgabe 5 von Denise Marcella Alka, 15.November.2017
hiermit versichere ich, dass der Code von mir
(Denise Marcella Alka, 256690)
eigenst�ndig geschrieben wurde; er wurde nicht diktiert oder kopiert;
*/
var A5;
(function (A5) {
    class Schnee {
        //dx: number;
        //dy: number;
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        updateSchnee() {
            this.move();
            this.draw();
        }
        move() {
            for (let i = 0; i < A5.snowX.length; i++) {
                //snowX[i] += 0; 
                //snowY[i] += 5;  
                //drawSnowf(snowX[i], snowY[i]);
                if (A5.snowY[i] > 600) {
                    A5.snowY[i] = 0;
                }
            }
        }
        draw() {
            A5.crc2.beginPath();
            A5.crc2.arc(this.x, this.y, 2, 0, 2 * Math.PI);
            A5.crc2.fillStyle = "#FFFFFF";
            A5.crc2.fill();
        }
    }
    A5.Schnee = Schnee;
})(A5 || (A5 = {}));
//# sourceMappingURL=Schnee.js.map