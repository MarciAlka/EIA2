/* 
    Name: Denise Marcella Alka
    Matrikel: 256690
    Datum: 06.02.2017
    Hiermit versichere ich, dass ich diesen
    Code selbst geschrieben habe. Er wurde
    nicht kopiert und auch nicht diktiert
 */
namespace End {

    export class Objekt {
    
        x: number;
        y: number;
 
        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
         
        }
        
        update(): void {
           this.move();
           this.draw();
       }

        draw(): void {
            // abstract
        }
        
        move(): void {

        }


    }
}