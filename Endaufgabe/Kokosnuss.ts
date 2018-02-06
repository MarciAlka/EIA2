/* 
    Name: Denise Marcella Alka
    Matrikel: 256690
    Datum: 06.02.2017
    Hiermit versichere ich, dass ich diesen
    Code selbst geschrieben habe. Er wurde
    nicht kopiert und auch nicht diktiert
*/

namespace End {
	export class Kokosnuss extends Objekt {
          
        constructor(_x: number, _y: number) {
            super(_x,_y);
            this.x = _x;
            this.y = _y;
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
            crc2.arc(this.x, this.y, 10, 0, 2 * Math.PI);
            crc2.fillStyle = "#8B4513";
            crc2.fill();
            
        }
    }
    
}