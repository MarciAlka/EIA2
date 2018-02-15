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
                    deleteKokosnuss(this);
                    const clkokos = new Kokosnuss(parseInt((new Date()).getTime().toString().substr(-2)) * 10 + Math.random() * 800, 0);
                    addKokosnuss(clkokos);
//                    this.x = 1 + Math.random() * 800;
                }
            
            //test
             this.y += 10;//Math.random();
                
        }

        
        draw() : void {
            crc2.beginPath();
            crc2.arc(this.x, this.y, 20, 0, 2 * Math.PI);
            crc2.fillStyle = "#8B4513";
            crc2.fill();
            
            crc2.beginPath();
            crc2.fillStyle = "orange";
            crc2.moveTo(this.x-20, this.y+20);
            crc2.lineTo(this.x+20,this.y+20);
            //crc2.fillStyle = "orange";
            crc2.stroke();
            
        }
    }
    
}