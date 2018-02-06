/* 
    Name: Denise Marcella Alka
    Matrikel: 256690
    Datum: 06.02.2017
    Hiermit versichere ich, dass ich diesen
    Code selbst geschrieben habe. Er wurde
    nicht kopiert und auch nicht diktiert
 */

namespace End {

    export class Wolken extends Objekt {
    
        
        constructor(_x: number, _y: number) {
            super(_x,_y);
            this.x = _x;
            this.y = _y;
        }
    
        
        move(): void {

            if (this.x > 800) {
                this.x = 0;
            }
            this.x += 10;
            this.y += 0;
           
            
        }

        
        draw() : void {
            
            crc2.beginPath();
            crc2.arc(this.x, this.y, 10, 0, 2 * Math.PI);//10 radius
            crc2.fillStyle = "#FFFFFF";
            crc2.fill();
            //W1.2
            crc2.beginPath();
            crc2.arc(this.x + 10, this.y + 10, 10, 0, 2 * Math.PI);
            crc2.fillStyle = "#FFFFFF";
            crc2.fill();
            //W1.3
            crc2.beginPath();
            crc2.arc(this.x - 10, this.y + 10, 10, 0, 2 * Math.PI); //10 radius
            crc2.fillStyle = "#FFFFFF";
            crc2.fill();
            //W1.4
            crc2.beginPath();
            crc2.arc(this.x, this.y + 8, 10, 0, 2 * Math.PI);
            crc2.fillStyle = "#FFFFFF";
            crc2.fill();
        }//draw
    
    
    }//class

}//namespace