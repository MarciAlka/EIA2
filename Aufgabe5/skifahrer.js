/*Aufgabe 5 von Denise Marcella Alka, 15.November.2017
hiermit versichere ich, dass der Code von mir
(Denise Marcella Alka, 256690)
eigenst�ndig geschrieben wurde; er wurde nicht diktiert oder kopiert;
*/
var A5;
(function (A5) {
    class Skifahrer {
        //dx: number;
        //dy: number;
        //color: string;
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        //let skiXOrig: number[] = [];
        //let skiYOrig: number[] = [];
        updateSki() {
            this.move();
            this.draw();
        }
        //}
        move() {
            //this.x += Math.random() * 4 - 2; // hier experimentieren um
            //this.y += Math.random() * 4 - 2; // andere Bewegungsmuster zu finden
            for (let i = 0; i < A5.skiArr.length; i++) {
                //hab kein Array mehr, also alternative!->nachtrag:Arr oben erstellt in main
                let s = A5.skiArr[i]; //
                s.updateSki();
                s.x += 10;
                s.y += 10;
                //drawSki (skiX[i], skiY[i]);
                //drawSki(s);
                if (s.x > 800 || s.y > 600) {
                    s.x = A5.skiXOrig[i]; // = skiXOrigin[i]
                    s.y = A5.skiYOrig[i]; // = skiYOrigin[i]
                }
            }
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
        initruf() {
            for (let i = 0; i < 3; i++) {
                A5.clski = new Skifahrer(200, 100);
                //existiert noch nicht! clski.setRandomStyle();
                if (i == 0) {
                    A5.skiArr[i].x = 10;
                    A5.skiArr[i].y = 100;
                    A5.skiXOrig[i] = A5.skiArr[i].x;
                    A5.skiYOrig[i] = A5.skiArr[i].y;
                }
                else if (i == 1) {
                    A5.skiArr[i].x = -290;
                    A5.skiArr[i].y = 100;
                    A5.skiXOrig[i] = A5.skiArr[i].x;
                    A5.skiYOrig[i] = A5.skiArr[i].y;
                }
                else if (i == 2) {
                    A5.skiArr[i].x = -190;
                    A5.skiArr[i].y = -200;
                    A5.skiXOrig[i] = A5.skiArr[i].x;
                    A5.skiYOrig[i] = A5.skiArr[i].y;
                }
            }
        }
    }
    A5.Skifahrer = Skifahrer;
})(A5 || (A5 = {}));
//# sourceMappingURL=skifahrer.js.map