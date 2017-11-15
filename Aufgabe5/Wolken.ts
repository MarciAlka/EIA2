/*Aufgabe 5 von Denise Marcella Alka, 15.November.2017
hiermit versichere ich, dass der Code von mir 
(Denise Marcella Alka, 256690) 
eigenständig geschrieben wurde; er wurde nicht diktiert oder kopiert;
*/

namespace A5 {

    export class Wolken {
    
        x: number;
        y: number;
        //rad: number
        //dx: number;
        //dy: number;
     
        
        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }

        updateWolken(): void {
            this.move();
            this.draw();
        }
    
        
        move(): void {
            
            for (let i: number = 0; i < wolkeX.length; i++) {

                wolkeX[i] += 10;
                wolkeY[i] += 0;

                //drawCloud(wolkeX[i], wolkeY[i], 15, "#FFFFFF");

                if (wolkeX[i] > 800) {
                    wolkeX[i] = wolkeXOrig[i];          
                }
            }
           
            
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