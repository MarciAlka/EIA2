/* 
    Name: Denise Marcella Alka
    Matrikel: 256690
    Datum: 06.02.2017
    Hiermit versichere ich, dass ich diesen
    Code selbst geschrieben habe. Er wurde
    nicht kopiert und auch nicht diktiert
*/

namespace End {
    let kokoId:number = 0;
    
	export class Kokosnuss extends Objekt {
        
        public kokoId: number;
          
        constructor(_x: number, _y: number) {
            super(_x,_y);
            this.x = _x;
            this.y = _y;
            this.kokoId = ++kokoId;
            
        }

        
        move(): void {    
            
                if (this.y > 600) {
                    deleteKokosnuss(this.kokoId);
//                    this.x = 1 + Math.random() * 800;
                }
            
            //test
             this.y += 10;//Math.random();
                
        }

        
        draw() : void {
            crc2.beginPath();
            crc2.arc(this.x, this.y, scale*20, 0, 2 * Math.PI);
            crc2.fillStyle = "#8B4513";
            crc2.fill();
            
            /*HITZONE
            crc2.beginPath();
            crc2.fillStyle = "orange";
            crc2.moveTo(this.x-20, this.y+20);
            crc2.lineTo(this.x+20,this.y+20);
            //crc2.fillStyle = "orange";
            crc2.stroke();
            */
            
        }
    }
    
}