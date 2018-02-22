/* 
    Name: Denise Marcella Alka
    Matrikel: 256690
    Datum: 06.02.2017
    Hiermit versichere ich, dass ich diesen
    Code selbst geschrieben habe. Er wurde
    nicht kopiert und auch nicht diktiert
 */

namespace End {
    export class Krabbe extends Objekt {
    dx:number;
        constructor(_x: number, _y: number) {
            super(_x, _y);
            this.x = _x;
            this.y = _y;
            this.dx = _x;
            this.move();
        }


        move(): void {

            /*
            this.x += this.dx;
            
            if (this.x > 800) {
                this.x = 800;
            }

            if (this.x < 0) {
                this.x = 0;
            }
            */
            
            const speed = 10 * scale;
            let movement = 0;
            
            if (this.x > this.dx && this.x - this.dx > speed) movement = -speed;
            else if (this.x < this.dx && this.dx - this.x > speed) movement = speed;
            
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
        
        public move_Krabbe(targetX: number): void {
            this.dx = targetX;
        }
        
        stop_Krabbe():void {
            this.dx = this.x;
        }
        
        
        draw(): void {
            //Krabbe

            //void ctx.quadraticCurveTo(cpx, cpy, x, y);

            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.moveTo(this.x - 15 * scale, this.y);

            /*
            crc2.quadraticCurveTo(5, 45, this.x-25, this.y+27);
            crc2.quadraticCurveTo(40, 70, this.x, this.y+22);
            crc2.quadraticCurveTo(60, 40, this.x-15, this.y);
            */
            crc2.quadraticCurveTo(this.x - scale*45, this.y + scale*7, this.x - scale*25, this.y + scale*27);
            crc2.quadraticCurveTo(this.x - scale*10, this.y + scale*32, this.x, this.y + scale*22);
            crc2.quadraticCurveTo(this.x + scale*10, this.y + scale*2, this.x - scale*15, this.y);
            crc2.stroke();
            crc2.fillStyle = "#DB2929";
            crc2.fill();

            //Krabbenbein    
            //Bein 1 links
            crc2.fillStyle = "#DB2929";
            crc2.fillRect(this.x - scale*32, this.y + scale*2, scale*8, scale*6);
            crc2.fillStyle = "#DB2929";
            crc2.fillRect(this.x - scale*37, this.y + scale*3, scale*8, scale*6);
            crc2.fillRect(this.x - scale*42, this.y + scale*4, scale*6, scale*6);

            crc2.beginPath();
            crc2.moveTo(this.x - scale*40, this.y + scale*9);//untere
            crc2.lineTo(this.x - scale*50, this.y + scale*12); //linke spitze
            crc2.lineTo(this.x - scale*40, this.y + scale*4);
            crc2.fillStyle = "#DB2929";
            crc2.fill();

            //Bein 2 links
            crc2.fillStyle = "#DB2929";
            crc2.fillRect(this.x - scale*32, this.y + scale*9, scale*8, scale*6);
            crc2.fillStyle = "#DB2929";
            crc2.fillRect(this.x - scale*37, this.y + scale*10, scale*8, scale*6);
            crc2.fillRect(this.x - scale*42, this.y + scale*11, scale*6, scale*6);

            crc2.beginPath();
            crc2.moveTo(this.x - scale*40, this.y + scale*16);
            crc2.lineTo(this.x - scale*50, this.y + scale*19);
            crc2.lineTo(this.x - scale*40, this.y + scale*11);
            crc2.fillStyle = "#DB2929";
            crc2.fill();

            //Bein 3 links
            crc2.fillStyle = "#DB2929";
            crc2.fillRect(this.x - scale*32, this.y + scale*16, scale*8, scale*6);
            crc2.fillStyle = "#DB2929";
            crc2.fillRect(this.x - scale*37, this.y + scale*17, scale*8, scale*6);
            crc2.fillRect(this.x - scale*42, this.y + scale*18, scale*6, scale*6);

            crc2.beginPath();
            crc2.moveTo(this.x - scale*40, this.y + scale*23);
            crc2.lineTo(this.x - scale*50, this.y + scale*26);
            crc2.lineTo(this.x - scale*40, this.y + scale*18);
            crc2.fillStyle = "#DB2929";
            crc2.fill();

            //Bein 1 rechts
            crc2.fillStyle = "#DB2929";
            crc2.fillRect(this.x - scale*2, this.y + scale*2, scale*8, scale*6);
            crc2.fillStyle = "#DB2929";
            crc2.fillRect(this.x + scale*3, this.y + scale*3, scale*8, scale*6);
            crc2.fillRect(this.x + scale*8, this.y + scale*4, scale*6, scale*6);

            crc2.beginPath();
            crc2.moveTo(this.x + scale*12, this.y + scale*9);//untere
            crc2.lineTo(this.x + scale*22, this.y + scale*12); //linke spitze
            crc2.lineTo(this.x + scale*12, this.y + scale*4);
            crc2.fillStyle = "#DB2929";
            crc2.fill();

            //Bein 2 rechts
            crc2.fillStyle = "#DB2929";
            crc2.fillRect(this.x - scale*2, this.y + scale*9, scale*8, scale*6);
            crc2.fillStyle = "#DB2929";
            crc2.fillRect(this.x + scale*3, this.y + scale*10, scale*8, scale*6);
            crc2.fillRect(this.x + scale*8, this.y + scale*11, scale*6, scale*6);

            crc2.beginPath();
            crc2.moveTo(this.x + scale*12, this.y + scale*16);
            crc2.lineTo(this.x + scale*22, this.y + scale*19);
            crc2.lineTo(this.x + scale*12, this.y + scale*11);
            crc2.fillStyle = "#DB2929";
            crc2.fill();

            //Bein 3 rechts
            crc2.fillStyle = "#DB2929";
            crc2.fillRect(this.x - scale*2, this.y + scale*16, scale*8, scale*6);
            crc2.fillStyle = "#DB2929";
            crc2.fillRect(this.x + scale*3, this.y + scale*17, scale*8, scale*6);
            crc2.fillRect(this.x + scale*8, this.y + scale*18, scale*6, scale*6);

            crc2.beginPath();
            crc2.moveTo(this.x + scale*12, this.y + scale*23);
            crc2.lineTo(this.x + scale*22, this.y + scale*26);
            crc2.lineTo(this.x + scale*12, this.y + scale*18);
            crc2.fillStyle = "#DB2929";
            crc2.fill();

            //Schere 1 links
            crc2.fillStyle = "#DB2929";
            crc2.fillRect(this.x - scale*30, this.y + scale*24, scale*6, scale*6);

            crc2.beginPath();
            crc2.moveTo(this.x - scale*27, this.y + scale*33);//untere
            crc2.lineTo(this.x - scale*37, this.y + scale*36); //spitze
            crc2.lineTo(this.x - scale*27, this.y + scale*28);
            crc2.fillStyle = "#DB2929";
            crc2.fill();

            crc2.beginPath();
            crc2.moveTo(this.x - scale*27, this.y + scale*33);
            crc2.lineTo(this.x - scale*17, this.y + scale*36);
            crc2.lineTo(this.x - scale*27, this.y + scale*28);
            crc2.fillStyle = "#DB2929";
            crc2.fill();

            //Schere 2 rechts
            crc2.fillStyle = "#DB2929";
            crc2.fillRect(this.x - scale*8, this.y + scale*24, scale*6, scale*6);

            crc2.beginPath();
            crc2.moveTo(this.x - scale*4, this.y + scale*33);//untere
            crc2.lineTo(this.x - scale*14, this.y + scale*36); //spitze
            crc2.lineTo(this.x - scale*4, this.y + scale*28);
            crc2.fillStyle = "#DB2929";
            crc2.fill();

            crc2.beginPath();
            crc2.moveTo(this.x - scale*4, this.y + scale*33);
            crc2.lineTo(this.x + scale*6, this.y + scale*36);
            crc2.lineTo(this.x - scale*4, this.y + scale*28);
            crc2.fillStyle = "#DB2929";
            crc2.fill();

            //Krabbenaugen
            crc2.beginPath();
            crc2.arc(this.x - scale*22, this.y + scale*24, 2.5*scale, 0, scale*2 * Math.PI);
            crc2.fillStyle = "black";
            crc2.fill();

            crc2.beginPath();
            crc2.arc(this.x - scale*23, this.y + scale*24, scale, 0, scale*2 * Math.PI);
            crc2.fillStyle = "white";
            crc2.fill();

            crc2.beginPath();
            crc2.arc(this.x - scale*10, this.y + scale*24, scale*2.5, 0, scale*2 * Math.PI);
            crc2.fillStyle = "black";
            crc2.fill();

            crc2.beginPath();
            crc2.arc(this.x - scale*11, this.y + scale*24, scale, 0, scale*2 * Math.PI);
            crc2.fillStyle = "white";
            crc2.fill();
            
        
            /*HITZONES
            crc2.beginPath();
            crc2.moveTo(this.x+15, this.y);
            crc2.lineTo(this.x-45,this.y);
            crc2.fillStyle = "blue";
            crc2.stroke();
            */
            
            
            
        }
    }

}