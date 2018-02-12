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
            this.dx = 0;
            this.move();
        }
        move() {
            this.x += this.dx;
            if (this.x > 800) {
                this.x = 800;
            }
            if (this.x < 0) {
                this.x = 0;
            }
            this.draw();
            window.setTimeout(this.move, 100);
        }
        move_Krabbe_links() {
            this.dx = -1;
        }
        move_Krabbe_rechts() {
            this.dx = +1;
        }
        stop_Krabbe() {
            this.dx = 0;
        }
        draw() {
            //Krabbe
            //void ctx.quadraticCurveTo(cpx, cpy, x, y);
            End.crc2.beginPath();
            //crc2.moveTo(50, 38);
            End.crc2.moveTo(this.x, this.y);
            //bis hierhin ge�ndert
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
            //Krabbenbei    
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
            //Krab    
            /*
            crc2.beginPath();
            crc2.moveTo(50,38);
            crc2.moveTo(35,38);
            crc2.quadraticCurveTo(5, 45, 25, 65);
            crc2.quadraticCurveTo(40, 70, 50, 60);
            crc2.quadraticCurveTo(60, 40, 35, 38);
            crc2.stroke();
            crc2.fillStyle = "#DB2929";
            crc2.fill();
            
                //Krabbenbeine
            
                    //Bein 1 links
            crc2.fillStyle = "#DB2929";
            crc2.fillRect(18, 40, 8, 6);
            crc2.fillStyle = "#DB2929";
            crc2.fillRect(13, 41, 8, 6);
            crc2.fillRect(8, 42, 6, 6);
            
            crc2.beginPath();
            crc2.moveTo(10, 47);//untere
            crc2.lineTo(0, 50); //linke spitze
            crc2.lineTo(10, 42);
            crc2.fillStyle = "#DB2929";
            crc2.fill();
        
                    //Bein 2 links
            crc2.fillStyle = "#DB2929";
            crc2.fillRect(18, 47, 8, 6);
            crc2.fillStyle = "#DB2929";
            crc2.fillRect(13, 48, 8, 6);
            crc2.fillRect(8, 49, 6, 6);
            
            crc2.beginPath();
            crc2.moveTo(10, 54);
            crc2.lineTo(0, 57);
            crc2.lineTo(10, 49);
            crc2.fillStyle = "#DB2929";
            crc2.fill();
            
                    //Bein 3 links
            crc2.fillStyle = "#DB2929";
            crc2.fillRect(18, 54, 8, 6);
            crc2.fillStyle = "#DB2929";
            crc2.fillRect(13, 55, 8, 6);
            crc2.fillRect(8, 56, 6, 6);
            
            crc2.beginPath();
            crc2.moveTo(10, 61);
            crc2.lineTo(0, 64);
            crc2.lineTo(10, 56);
            crc2.fillStyle = "#DB2929";
            crc2.fill();
            
                    //Bein 1 rechts
            crc2.fillStyle = "#DB2929";
            crc2.fillRect(48, 40, 8, 6);
            crc2.fillStyle = "#DB2929";
            crc2.fillRect(53, 41, 8, 6);
            crc2.fillRect(58, 42, 6, 6);
            
            crc2.beginPath();
            crc2.moveTo(62, 47);//untere
            crc2.lineTo(72, 50); //linke spitze
            crc2.lineTo(62, 42);
            crc2.fillStyle = "#DB2929";
            crc2.fill();
        
                    //Bein 2 rechts
            crc2.fillStyle = "#DB2929";
            crc2.fillRect(48, 47, 8, 6);
            crc2.fillStyle = "#DB2929";
            crc2.fillRect(53, 48, 8, 6);
            crc2.fillRect(58, 49, 6, 6);
            
            crc2.beginPath();
            crc2.moveTo(62, 54);
            crc2.lineTo(72, 57);
            crc2.lineTo(62, 49);
            crc2.fillStyle = "#DB2929";
            crc2.fill();
            
                    //Bein 3 rechts
            crc2.fillStyle = "#DB2929";
            crc2.fillRect(48, 54, 8, 6);
            crc2.fillStyle = "#DB2929";
            crc2.fillRect(53, 55, 8, 6);
            crc2.fillRect(58, 56, 6, 6);
            
            crc2.beginPath();
            crc2.moveTo(62, 61);
            crc2.lineTo(72, 64);
            crc2.lineTo(62, 56);
            crc2.fillStyle = "#DB2929";
            crc2.fill();
            
                //Schere 1 links
            crc2.fillStyle = "#DB2929";
            crc2.fillRect(20, 62, 6, 6);
            
            crc2.beginPath();
            crc2.moveTo(23, 71);//untere
            crc2.lineTo(13, 74); //spitze
            crc2.lineTo(23, 66);
            crc2.fillStyle = "#DB2929";
            crc2.fill();
            
            crc2.beginPath();
            crc2.moveTo(23, 71);
            crc2.lineTo(33, 74);
            crc2.lineTo(23, 66);
            crc2.fillStyle = "#DB2929";
            crc2.fill();
            
                //Scs
            crc2.fillStyle = "#DB2929";
            crc2.fillRect(42, 62, 6, 6);
            
            crc2.beginPath();
            crc2.moveTo(46, 71);//untere
            crc2.lineTo(36, 74); //spitze
            crc2.lineTo(46, 66);
            crc2.fillStyle = "#DB2929";
            crc2.fill();
            
            crc2.beginPath();
            crc2.moveTo(46, 71);
            crc2.lineTo(56, 74);
            crc2.lineTo(46, 66);
            crc2.fillStyle = "#DB2929";
            crc2.fill();
            
                //Krabbenaugen
            crc2.beginPath();
            crc2.arc(28, 62, 2.5, 0, 2 * Math.PI);
            crc2.fillStyle = "black";
            crc2.fill();
            
            crc2.beginPath();
            crc2.arc(27, 62, 1, 0, 2 * Math.PI);
            crc2.fillStyle = "white";
            crc2.fill();
            
            crc2.beginPath();
            crc2.arc(40, 62, 2.5, 0, 2 * Math.PI);
            crc2.fillStyle = "black";
            crc2.fill();
            
            crc2.beginPath();
            crc2.arc(39, 62, 1, 0, 2 * Math.PI);
            crc2.fillStyle = "white";
            crc2.fill();
            */
        }
    }
    End.Krabbe = Krabbe;
})(End || (End = {}));
//# sourceMappingURL=Krabbe.js.map