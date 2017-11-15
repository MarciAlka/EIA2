/*Aufgabe 5 von Denise Marcella Alka, 15.November.2017
hiermit versichere ich, dass der Code von mir 
(Denise Marcella Alka, 256690) 
eigenständig geschrieben wurde; er wurde nicht diktiert oder kopiert;
*/

namespace A5 {

    export class Schnee {
    
        x: number;
        y: number;
        //dx: number;
        //dy: number;
     
        
        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }

        updateSchnee(): void {
            this.move();
            this.draw();
        }
    
        
        move(): void {
            for (let i: number = 0; i < snowX.length; i++) {
                
                
                //snowX[i] += 0; 
                //snowY[i] += 5;  

                //drawSnowf(snowX[i], snowY[i]);

                if (snowY[i] > 600) {
                    snowY[i] = 0;
                }

           
            }
        }

        
        draw() : void {
            crc2.beginPath();
            crc2.arc(this.x, this.y, 2, 0, 2 * Math.PI);
            crc2.fillStyle = "#FFFFFF";
            crc2.fill();
        }
    }
    
}