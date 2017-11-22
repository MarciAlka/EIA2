/*Aufgabe 6 von Denise Marcella Alka, 21.November.2017
hiermit versichere ich, dass der Code von mir 
(Denise Marcella Alka, 256690) 
eigenständig geschrieben wurde; er wurde nicht diktiert oder kopiert;
*/

namespace A6 {

    export class Schnee extends Objekte {
    
        //x: number;
        //y: number;

     
        
        constructor(_x: number, _y: number) {
            super(_x,_y);
            this.x = _x;
            this.y = _y;
        }

        updateSchnee(): void {
            this.move();
            this.draw();
        }
    
        
        move(): void {


                if (this.y > 600) {
                    this.y = 0;
                }
            
            //test
             this.y += 10;//Math.random();
                
        }

        
        draw() : void {
            crc2.beginPath();
            crc2.arc(this.x, this.y, 2, 0, 2 * Math.PI);
            crc2.fillStyle = "#FFFFFF";
            crc2.fill();
            
        }
    }
    
}