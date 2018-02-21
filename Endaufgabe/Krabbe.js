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
    class Krabbe extends End.Objekt {
        constructor(_x, _y) {
            super(_x, _y);
            this.x = _x;
            this.y = _y;
            this.dx = _x;
            this.move();
        }
        move() {
            /*
            this.x += this.dx;
            
            if (this.x > 800) {
                this.x = 800;
            }

            if (this.x < 0) {
                this.x = 0;
            }
            */
            const speed = 10;
            let movement = 0;
            if (this.x > this.dx && this.x - this.dx > speed)
                movement = -speed;
            else if (this.x < this.dx && this.dx - this.x > speed)
                movement = speed;
            this.x += movement;
            this.draw();
        }
        /*
        move_Krabbe_links(): void {
                this.dx =- 10;
        }

        move_Krabbe_rechts(): void {
            
                this.dx = + 10;
        }
        */
        move_Krabbe(targetX) {
            this.dx = targetX;
        }
        stop_Krabbe() {
            this.dx = this.x;
        }
        draw() {
            //Krabbe
            //void ctx.quadraticCurveTo(cpx, cpy, x, y);
            End.crc2.beginPath();
            End.crc2.moveTo(this.x, this.y);
            End.crc2.moveTo(this.x - 15, this.y);
            /*
            crc2.quadraticCurveTo(5, 45, this.x-25, this.y+27);
            crc2.quadraticCurveTo(40, 70, this.x, this.y+22);
            crc2.quadraticCurveTo(60, 40, this.x-15, this.y);
            */
            End.crc2.quadraticCurveTo(this.x - 45, this.y + 7, this.x - 25, this.y + 27);
            End.crc2.quadraticCurveTo(this.x - 10, this.y + 32, this.x, this.y + 22);
            End.crc2.quadraticCurveTo(this.x + 10, this.y + 2, this.x - 15, this.y);
            End.crc2.stroke();
            End.crc2.fillStyle = "#DB2929";
            End.crc2.fill();
            //Krabbenbein    
            //Bein 1 links
            End.crc2.fillStyle = "#DB2929";
            End.crc2.fillRect(this.x - 32, this.y + 2, 8, 6);
            End.crc2.fillStyle = "#DB2929";
            End.crc2.fillRect(this.x - 37, this.y + 3, 8, 6);
            End.crc2.fillRect(this.x - 42, this.y + 4, 6, 6);
            End.crc2.beginPath();
            End.crc2.moveTo(this.x - 40, this.y + 9); //untere
            End.crc2.lineTo(this.x - 50, this.y + 12); //linke spitze
            End.crc2.lineTo(this.x - 40, this.y + 4);
            End.crc2.fillStyle = "#DB2929";
            End.crc2.fill();
            //Bein 2 links
            End.crc2.fillStyle = "#DB2929";
            End.crc2.fillRect(this.x - 32, this.y + 9, 8, 6);
            End.crc2.fillStyle = "#DB2929";
            End.crc2.fillRect(this.x - 37, this.y + 10, 8, 6);
            End.crc2.fillRect(this.x - 42, this.y + 11, 6, 6);
            End.crc2.beginPath();
            End.crc2.moveTo(this.x - 40, this.y + 16);
            End.crc2.lineTo(this.x - 50, this.y + 19);
            End.crc2.lineTo(this.x - 40, this.y + 11);
            End.crc2.fillStyle = "#DB2929";
            End.crc2.fill();
            //Bein 3 links
            End.crc2.fillStyle = "#DB2929";
            End.crc2.fillRect(this.x - 32, this.y + 16, 8, 6);
            End.crc2.fillStyle = "#DB2929";
            End.crc2.fillRect(this.x - 37, this.y + 17, 8, 6);
            End.crc2.fillRect(this.x - 42, this.y + 18, 6, 6);
            End.crc2.beginPath();
            End.crc2.moveTo(this.x - 40, this.y + 23);
            End.crc2.lineTo(this.x - 50, this.y + 26);
            End.crc2.lineTo(this.x - 40, this.y + 18);
            End.crc2.fillStyle = "#DB2929";
            End.crc2.fill();
            //Bein 1 rechts
            End.crc2.fillStyle = "#DB2929";
            End.crc2.fillRect(this.x - 2, this.y + 2, 8, 6);
            End.crc2.fillStyle = "#DB2929";
            End.crc2.fillRect(this.x + 3, this.y + 3, 8, 6);
            End.crc2.fillRect(this.x + 8, this.y + 4, 6, 6);
            End.crc2.beginPath();
            End.crc2.moveTo(this.x + 12, this.y + 9); //untere
            End.crc2.lineTo(this.x + 22, this.y + 12); //linke spitze
            End.crc2.lineTo(this.x + 12, this.y + 4);
            End.crc2.fillStyle = "#DB2929";
            End.crc2.fill();
            //Bein 2 rechts
            End.crc2.fillStyle = "#DB2929";
            End.crc2.fillRect(this.x - 2, this.y + 9, 8, 6);
            End.crc2.fillStyle = "#DB2929";
            End.crc2.fillRect(this.x + 3, this.y + 10, 8, 6);
            End.crc2.fillRect(this.x + 8, this.y + 11, 6, 6);
            End.crc2.beginPath();
            End.crc2.moveTo(this.x + 12, this.y + 16);
            End.crc2.lineTo(this.x + 22, this.y + 19);
            End.crc2.lineTo(this.x + 12, this.y + 11);
            End.crc2.fillStyle = "#DB2929";
            End.crc2.fill();
            //Bein 3 rechts
            End.crc2.fillStyle = "#DB2929";
            End.crc2.fillRect(this.x - 2, this.y + 16, 8, 6);
            End.crc2.fillStyle = "#DB2929";
            End.crc2.fillRect(this.x + 3, this.y + 17, 8, 6);
            End.crc2.fillRect(this.x + 8, this.y + 18, 6, 6);
            End.crc2.beginPath();
            End.crc2.moveTo(this.x + 12, this.y + 23);
            End.crc2.lineTo(this.x + 22, this.y + 26);
            End.crc2.lineTo(this.x + 12, this.y + 18);
            End.crc2.fillStyle = "#DB2929";
            End.crc2.fill();
            //Schere 1 links
            End.crc2.fillStyle = "#DB2929";
            End.crc2.fillRect(this.x - 30, this.y + 24, 6, 6);
            End.crc2.beginPath();
            End.crc2.moveTo(this.x - 27, this.y + 33); //untere
            End.crc2.lineTo(this.x - 37, this.y + 36); //spitze
            End.crc2.lineTo(this.x - 27, this.y + 28);
            End.crc2.fillStyle = "#DB2929";
            End.crc2.fill();
            End.crc2.beginPath();
            End.crc2.moveTo(this.x - 27, this.y + 33);
            End.crc2.lineTo(this.x - 17, this.y + 36);
            End.crc2.lineTo(this.x - 27, this.y + 28);
            End.crc2.fillStyle = "#DB2929";
            End.crc2.fill();
            //Schere 2 rechts
            End.crc2.fillStyle = "#DB2929";
            End.crc2.fillRect(this.x - 8, this.y + 24, 6, 6);
            End.crc2.beginPath();
            End.crc2.moveTo(this.x - 4, this.y + 33); //untere
            End.crc2.lineTo(this.x - 14, this.y + 36); //spitze
            End.crc2.lineTo(this.x - 4, this.y + 28);
            End.crc2.fillStyle = "#DB2929";
            End.crc2.fill();
            End.crc2.beginPath();
            End.crc2.moveTo(this.x - 4, this.y + 33);
            End.crc2.lineTo(this.x + 6, this.y + 36);
            End.crc2.lineTo(this.x - 4, this.y + 28);
            End.crc2.fillStyle = "#DB2929";
            End.crc2.fill();
            //Krabbenaugen
            End.crc2.beginPath();
            End.crc2.arc(this.x - 22, this.y + 24, 2.5, 0, 2 * Math.PI);
            End.crc2.fillStyle = "black";
            End.crc2.fill();
            End.crc2.beginPath();
            End.crc2.arc(this.x - 23, this.y + 24, 1, 0, 2 * Math.PI);
            End.crc2.fillStyle = "white";
            End.crc2.fill();
            End.crc2.beginPath();
            End.crc2.arc(this.x - 10, this.y + 24, 2.5, 0, 2 * Math.PI);
            End.crc2.fillStyle = "black";
            End.crc2.fill();
            End.crc2.beginPath();
            End.crc2.arc(this.x - 11, this.y + 24, 1, 0, 2 * Math.PI);
            End.crc2.fillStyle = "white";
            End.crc2.fill();
            /*HITZONES
            crc2.beginPath();
            crc2.moveTo(this.x+15, this.y);
            crc2.lineTo(this.x-45,this.y);
            crc2.fillStyle = "blue";
            crc2.stroke();
            */
        }
    }
    End.Krabbe = Krabbe;
})(End || (End = {}));
//# sourceMappingURL=Krabbe.js.map