/*Aufgabe 6 von Denise Marcella Alka, 21.November.2017
hiermit versichere ich, dass der Code von mir 
(Denise Marcella Alka, 256690) 
eigenständig geschrieben wurde; er wurde nicht diktiert oder kopiert;
*/

namespace A6 {

    export class Objekte {
    
        x: number;
        y: number;
        //dx: number;
        //dy: number;
     
        
        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
            this.draw();
        }
        
//        update(): void {
//            this.move();
//            this.draw();
//        }

        draw(): void {
            // abstract
        }
        
        move(): void {
            //this.x += Math.random() * 4 - 2;
            //this.y += Math.random() * 4 - 2;
        }


    }
}