/*
    Name: Denise Marcella Alka
    Matrikel: 256690
    Datum: 06.02.2017
    Hiermit versichere ich, dass ich diesen
    Code selbst geschrieben habe. Er wurde
    nicht kopiert und auch nicht diktiert
 */
var End;
(function (End) {
    class Wolken extends End.Objekt {
        constructor(_x, _y) {
            super(_x, _y);
            this.x = _x;
            this.y = _y;
        }
        move() {
            if (this.x > End.scale * 800) {
                this.x = 0;
            }
            this.x += End.scale * 10;
            this.y += 0;
        }
        draw() {
            End.crc2.beginPath();
            End.crc2.arc(this.x, this.y, 10, 0, 2 * Math.PI); //10 radius
            End.crc2.fillStyle = "#FFFFFF";
            End.crc2.fill();
            //W1.2
            End.crc2.beginPath();
            End.crc2.arc(this.x + End.scale * 10, this.y + End.scale * 10, 10, 0, 2 * Math.PI);
            End.crc2.fillStyle = "#FFFFFF";
            End.crc2.fill();
            //W1.3
            End.crc2.beginPath();
            End.crc2.arc(this.x - End.scale * 10, this.y + End.scale * 10, 10, 0, 2 * Math.PI); //10 radius
            End.crc2.fillStyle = "#FFFFFF";
            End.crc2.fill();
            //W1.4
            End.crc2.beginPath();
            End.crc2.arc(this.x, this.y + End.scale * 8, 10, 0, 2 * Math.PI);
            End.crc2.fillStyle = "#FFFFFF";
            End.crc2.fill();
        } //draw
    }
    End.Wolken = Wolken; //class
})(End || (End = {})); //namespace
//# sourceMappingURL=Wolken.js.map