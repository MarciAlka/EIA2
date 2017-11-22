/*Aufgabe 6 von Denise Marcella Alka, 21.November.2017
hiermit versichere ich, dass der Code von mir 
(Denise Marcella Alka, 256690) 
eigenständig geschrieben wurde; er wurde nicht diktiert oder kopiert;
*/

namespace A6 {
    
    export class Skifahrer extends Objekte {
    
        x: number;
        y: number;
        dx: number;
        dy: number;
        
        //color: string;
        
        constructor(_x: number, _y: number, _dx:number, _dy:number) {
            super(_x,_y);
            this.x = _x;
            this.y = _y;
            this.dx = _dx;
            this.dy = _dy;
        }


        updateSki(): void {
            this.move();
            this.draw();
        }
    
    
    
        move(): void {
            //this.x += Math.random() * 4 - 2; // hier experimentieren um
            //this.y += Math.random() * 4 - 2; // andere Bewegungsmuster zu finden
            
            if (this.x > 800 || this.y > 600) {
                this.x = 0;
                this.y = 0;
            }


            this.x += 10;
            this.y += 10;
            
            
            this.y += this.dy;
            this.x += this.dx; 
            
           
            
        }

        draw(): void {

            // Dreieck für Beine/Ski
    
            crc2.beginPath();
            crc2.moveTo(this.x, this.y + 5);
            crc2.lineTo(this.x + 10, this.y + 33);
            crc2.lineTo(this.x - 5, this.y + 23);
            crc2.closePath();
            crc2.stroke();
            crc2.fillStyle = "red";
            crc2.fill();
    
            //Kreis für Kopf
            crc2.beginPath();
            crc2.arc(this.x + 1, this.y + 1, 5, 0, 2 * Math.PI);
            crc2.fillStyle = "#f1c56b";
            crc2.fill();
    
            //Viereck körper crc2.fillRect(0, 0, 800, 600);
    
            crc2.fillStyle = "#9cacdb";
            crc2.fillRect(this.x - 5, this.y + 4, 10, 14);


        }        
         
         
    }
        

}