/*Aufgabe 6 von Denise Marcella Alka, 21.November.2017
hiermit versichere ich, dass der Code von mir 
(Denise Marcella Alka, 256690) 
eigenständig geschrieben wurde; er wurde nicht diktiert oder kopiert;
*/

namespace A6 {

    export class Wolken extends Objekte {
    
        //x: number;
        //y: number;
     
        
        constructor(_x: number, _y: number) {
            super(_x,_y);
            this.x = _x;
            this.y = _y;
        }

        updateWolken(): void {
            this.move();
            this.draw();
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