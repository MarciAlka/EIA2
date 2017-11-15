/*Aufgabe 5 von Denise Marcella Alka, 15.November.2017
hiermit versichere ich, dass der Code von mir 
(Denise Marcella Alka, 256690) 
eigenständig geschrieben wurde; er wurde nicht diktiert oder kopiert;
*/

namespace A5 {
    
    export class Skifahrer {
    
        x: number;
        y: number;
        //dx: number;
        //dy: number;
        //color: string;
        
        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }

        
        //let skiXOrig: number[] = [];
        //let skiYOrig: number[] = [];

        updateSki(): void {
            this.move();
            this.draw();
        }
    
    

        //}
    
    
        move(): void {
            //this.x += Math.random() * 4 - 2; // hier experimentieren um
            //this.y += Math.random() * 4 - 2; // andere Bewegungsmuster zu finden
            
            
            
            for (let i: number = 0; i < skiArr.length; i++) {
                //hab kein Array mehr, also alternative!->nachtrag:Arr oben erstellt in main
                let s: Skifahrer = skiArr[i]; //
                s.updateSki();
                
            s.x += 10;
            s.y += 10;

            //drawSki (skiX[i], skiY[i]);
            //drawSki(s);

            if (s.x > 800 || s.y > 600) {
                s.x = skiXOrig[i]; // = skiXOrigin[i]
                s.y = skiYOrig[i]; // = skiYOrigin[i]
            }


            }
            
            
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
    
     initruf():void{
     for (let i: number = 0; i < 3; i++) {

        clski = new Skifahrer(200, 100);
        //existiert noch nicht! clski.setRandomStyle();

            if (i == 0) {
                skiArr[i].x = 10;
                skiArr[i].y = 100;

                skiXOrig[i] = skiArr[i].x;
                skiYOrig[i] = skiArr[i].y;
            }
            else if (i == 1) {
                skiArr[i].x = -290;
                skiArr[i].y = 100;
                skiXOrig[i] = skiArr[i].x;
                skiYOrig[i] = skiArr[i].y;
            }
            else if (i == 2) {
                skiArr[i].x = -190;
                skiArr[i].y = -200;
                skiXOrig[i] = skiArr[i].x;
                skiYOrig[i] = skiArr[i].y;
            }
         }
        }
         
         
         
    }
        

}