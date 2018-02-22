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
    let kokoId = 0;
    class Kokosnuss extends End.Objekt {
        constructor(_x, _y) {
            super(_x, _y);
            this.x = _x;
            this.y = _y;
            this.kokoId = ++kokoId;
        }
        move() {
            if (this.y > 600 * End.scale) {
                End.deleteKokosnuss(this.kokoId);
            }
            //test
            this.y += 10; //Math.random();
        }
        draw() {
            End.crc2.beginPath();
            End.crc2.arc(this.x, this.y, End.scale * 20, 0, 2 * Math.PI);
            End.crc2.fillStyle = "#8B4513";
            End.crc2.fill();
            /*HITZONE
            crc2.beginPath();
            crc2.fillStyle = "orange";
            crc2.moveTo(this.x-20, this.y+20);
            crc2.lineTo(this.x+20,this.y+20);
            //crc2.fillStyle = "orange";
            crc2.stroke();
            */
        }
    }
    End.Kokosnuss = Kokosnuss;
})(End || (End = {}));
//# sourceMappingURL=Kokosnuss.js.map