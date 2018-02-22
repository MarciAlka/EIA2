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
            const speed = 10 * End.scale;
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
            End.crc2.moveTo(this.x - 15 * End.scale, this.y);
            /*
            crc2.quadraticCurveTo(5, 45, this.x-25, this.y+27);
            crc2.quadraticCurveTo(40, 70, this.x, this.y+22);
            crc2.quadraticCurveTo(60, 40, this.x-15, this.y);
            */
            End.crc2.quadraticCurveTo(this.x - End.scale * 45, this.y + End.scale * 7, this.x - End.scale * 25, this.y + End.scale * 27);
            End.crc2.quadraticCurveTo(this.x - End.scale * 10, this.y + End.scale * 32, this.x, this.y + End.scale * 22);
            End.crc2.quadraticCurveTo(this.x + End.scale * 10, this.y + End.scale * 2, this.x - End.scale * 15, this.y);
            End.crc2.stroke();
            End.crc2.fillStyle = "#DB2929";
            End.crc2.fill();
            //Krabbenbein    
            //Bein 1 links
            End.crc2.fillStyle = "#DB2929";
            End.crc2.fillRect(this.x - End.scale * 32, this.y + End.scale * 2, End.scale * 8, End.scale * 6);
            End.crc2.fillStyle = "#DB2929";
            End.crc2.fillRect(this.x - End.scale * 37, this.y + End.scale * 3, End.scale * 8, End.scale * 6);
            End.crc2.fillRect(this.x - End.scale * 42, this.y + End.scale * 4, End.scale * 6, End.scale * 6);
            End.crc2.beginPath();
            End.crc2.moveTo(this.x - End.scale * 40, this.y + End.scale * 9); //untere
            End.crc2.lineTo(this.x - End.scale * 50, this.y + End.scale * 12); //linke spitze
            End.crc2.lineTo(this.x - End.scale * 40, this.y + End.scale * 4);
            End.crc2.fillStyle = "#DB2929";
            End.crc2.fill();
            //Bein 2 links
            End.crc2.fillStyle = "#DB2929";
            End.crc2.fillRect(this.x - End.scale * 32, this.y + End.scale * 9, End.scale * 8, End.scale * 6);
            End.crc2.fillStyle = "#DB2929";
            End.crc2.fillRect(this.x - End.scale * 37, this.y + End.scale * 10, End.scale * 8, End.scale * 6);
            End.crc2.fillRect(this.x - End.scale * 42, this.y + End.scale * 11, End.scale * 6, End.scale * 6);
            End.crc2.beginPath();
            End.crc2.moveTo(this.x - End.scale * 40, this.y + End.scale * 16);
            End.crc2.lineTo(this.x - End.scale * 50, this.y + End.scale * 19);
            End.crc2.lineTo(this.x - End.scale * 40, this.y + End.scale * 11);
            End.crc2.fillStyle = "#DB2929";
            End.crc2.fill();
            //Bein 3 links
            End.crc2.fillStyle = "#DB2929";
            End.crc2.fillRect(this.x - End.scale * 32, this.y + End.scale * 16, End.scale * 8, End.scale * 6);
            End.crc2.fillStyle = "#DB2929";
            End.crc2.fillRect(this.x - End.scale * 37, this.y + End.scale * 17, End.scale * 8, End.scale * 6);
            End.crc2.fillRect(this.x - End.scale * 42, this.y + End.scale * 18, End.scale * 6, End.scale * 6);
            End.crc2.beginPath();
            End.crc2.moveTo(this.x - End.scale * 40, this.y + End.scale * 23);
            End.crc2.lineTo(this.x - End.scale * 50, this.y + End.scale * 26);
            End.crc2.lineTo(this.x - End.scale * 40, this.y + End.scale * 18);
            End.crc2.fillStyle = "#DB2929";
            End.crc2.fill();
            //Bein 1 rechts
            End.crc2.fillStyle = "#DB2929";
            End.crc2.fillRect(this.x - End.scale * 2, this.y + End.scale * 2, End.scale * 8, End.scale * 6);
            End.crc2.fillStyle = "#DB2929";
            End.crc2.fillRect(this.x + End.scale * 3, this.y + End.scale * 3, End.scale * 8, End.scale * 6);
            End.crc2.fillRect(this.x + End.scale * 8, this.y + End.scale * 4, End.scale * 6, End.scale * 6);
            End.crc2.beginPath();
            End.crc2.moveTo(this.x + End.scale * 12, this.y + End.scale * 9); //untere
            End.crc2.lineTo(this.x + End.scale * 22, this.y + End.scale * 12); //linke spitze
            End.crc2.lineTo(this.x + End.scale * 12, this.y + End.scale * 4);
            End.crc2.fillStyle = "#DB2929";
            End.crc2.fill();
            //Bein 2 rechts
            End.crc2.fillStyle = "#DB2929";
            End.crc2.fillRect(this.x - End.scale * 2, this.y + End.scale * 9, End.scale * 8, End.scale * 6);
            End.crc2.fillStyle = "#DB2929";
            End.crc2.fillRect(this.x + End.scale * 3, this.y + End.scale * 10, End.scale * 8, End.scale * 6);
            End.crc2.fillRect(this.x + End.scale * 8, this.y + End.scale * 11, End.scale * 6, End.scale * 6);
            End.crc2.beginPath();
            End.crc2.moveTo(this.x + End.scale * 12, this.y + End.scale * 16);
            End.crc2.lineTo(this.x + End.scale * 22, this.y + End.scale * 19);
            End.crc2.lineTo(this.x + End.scale * 12, this.y + End.scale * 11);
            End.crc2.fillStyle = "#DB2929";
            End.crc2.fill();
            //Bein 3 rechts
            End.crc2.fillStyle = "#DB2929";
            End.crc2.fillRect(this.x - End.scale * 2, this.y + End.scale * 16, End.scale * 8, End.scale * 6);
            End.crc2.fillStyle = "#DB2929";
            End.crc2.fillRect(this.x + End.scale * 3, this.y + End.scale * 17, End.scale * 8, End.scale * 6);
            End.crc2.fillRect(this.x + End.scale * 8, this.y + End.scale * 18, End.scale * 6, End.scale * 6);
            End.crc2.beginPath();
            End.crc2.moveTo(this.x + End.scale * 12, this.y + End.scale * 23);
            End.crc2.lineTo(this.x + End.scale * 22, this.y + End.scale * 26);
            End.crc2.lineTo(this.x + End.scale * 12, this.y + End.scale * 18);
            End.crc2.fillStyle = "#DB2929";
            End.crc2.fill();
            //Schere 1 links
            End.crc2.fillStyle = "#DB2929";
            End.crc2.fillRect(this.x - End.scale * 30, this.y + End.scale * 24, End.scale * 6, End.scale * 6);
            End.crc2.beginPath();
            End.crc2.moveTo(this.x - End.scale * 27, this.y + End.scale * 33); //untere
            End.crc2.lineTo(this.x - End.scale * 37, this.y + End.scale * 36); //spitze
            End.crc2.lineTo(this.x - End.scale * 27, this.y + End.scale * 28);
            End.crc2.fillStyle = "#DB2929";
            End.crc2.fill();
            End.crc2.beginPath();
            End.crc2.moveTo(this.x - End.scale * 27, this.y + End.scale * 33);
            End.crc2.lineTo(this.x - End.scale * 17, this.y + End.scale * 36);
            End.crc2.lineTo(this.x - End.scale * 27, this.y + End.scale * 28);
            End.crc2.fillStyle = "#DB2929";
            End.crc2.fill();
            //Schere 2 rechts
            End.crc2.fillStyle = "#DB2929";
            End.crc2.fillRect(this.x - End.scale * 8, this.y + End.scale * 24, End.scale * 6, End.scale * 6);
            End.crc2.beginPath();
            End.crc2.moveTo(this.x - End.scale * 4, this.y + End.scale * 33); //untere
            End.crc2.lineTo(this.x - End.scale * 14, this.y + End.scale * 36); //spitze
            End.crc2.lineTo(this.x - End.scale * 4, this.y + End.scale * 28);
            End.crc2.fillStyle = "#DB2929";
            End.crc2.fill();
            End.crc2.beginPath();
            End.crc2.moveTo(this.x - End.scale * 4, this.y + End.scale * 33);
            End.crc2.lineTo(this.x + End.scale * 6, this.y + End.scale * 36);
            End.crc2.lineTo(this.x - End.scale * 4, this.y + End.scale * 28);
            End.crc2.fillStyle = "#DB2929";
            End.crc2.fill();
            //Krabbenaugen
            End.crc2.beginPath();
            End.crc2.arc(this.x - End.scale * 22, this.y + End.scale * 24, 2.5, 0, 2 * Math.PI);
            End.crc2.fillStyle = "black";
            End.crc2.fill();
            End.crc2.beginPath();
            End.crc2.arc(this.x - End.scale * 23, this.y + End.scale * 24, 1, 0, 2 * Math.PI);
            End.crc2.fillStyle = "white";
            End.crc2.fill();
            End.crc2.beginPath();
            End.crc2.arc(this.x - End.scale * 10, this.y + End.scale * 24, 2.5, 0, 2 * Math.PI);
            End.crc2.fillStyle = "black";
            End.crc2.fill();
            End.crc2.beginPath();
            End.crc2.arc(this.x - End.scale * 11, this.y + End.scale * 24, 1, 0, 2 * Math.PI);
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