/* 
    Name: Denise Marcella Alka
    Matrikel: 256690
    Datum: 06.02.2017
    Hiermit versichere ich, dass ich diesen
    Code selbst geschrieben habe. Er wurde
    nicht kopiert und auch nicht diktiert
 */

namespace End {

    window.addEventListener("load", init);


    //globale Variable
    export let crc2: CanvasRenderingContext2D;


    let objektArr: Objekt[] = [];
    let kokosArr: Kokosnuss [] = [];

    export let clkrabbe: Krabbe;
    let clwolken: Wolken;
    //Test, i.wo anders drinnen?
    let clkokos: Kokosnuss;

    let imgData: ImageData;

    export function addKokosnuss(nut: Kokosnuss) {
        objektArr.push(nut);
        kokosArr.push(nut);
    }

    function init(): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];

        crc2 = canvas.getContext("2d");

        //Rechteck für den Himmel
        var gradient = crc2.createLinearGradient(0, 0, 0, 600);
        gradient.addColorStop(0, "#E0FFFF"); //Ursprungsfarbe
        gradient.addColorStop(0.5, "#4ba1b4");
        gradient.addColorStop(1, "#4962bf");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, 800, 600);

        //Meer Verlauf
        var gradient = crc2.createLinearGradient(0, 250, 0, 600);
        gradient.addColorStop(0, "#E0FFFF"); //Ursprungsfarbe
        gradient.addColorStop(0.5, "#4ba1b4");
        gradient.addColorStop(1, "#4962bf");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, 800, 600);

        //Son    
        // Create gradient
        //CanvasGradient createRadialGradient(x0, y0, radius0, x1, y1, radius1)
        //x0 - Horizontale Koordinate des Mittelpunkts des ersten Kreises
        //y0 - Vertikale Koordinate des Mittelpunkts des ersten Kreises
        //radius0 - Radius des ersten Kreises
        //x1 - Horizontale Koordinate des Mittelpunkts des zweiten Kreises
        //y1 - Vertikale Koordinate des Mittelpunkts des zweiten Kreises
        //radius1 - Radius des zweiten Kreises
        var gradient2 = crc2.createRadialGradient(400, 150, 100, 400, 150, 50);

        // Add colors oben nach unten: oberste zeile ganz außen!!
        gradient2.addColorStop(0.098, 'rgba(255, 255, 255, 0)');
        gradient2.addColorStop(0.102, 'rgba(255, 255, 255, 0.1)')
        gradient2.addColorStop(0.398, 'rgba(255, 225, 0, 1.0)');
        gradient2.addColorStop(0.400, 'rgba(252, 252, 189, 1.0)');
        gradient2.addColorStop(0.999, 'rgba(250, 250, 250, 1.0)');

        // Fill with gradient
        crc2.fillStyle = gradient2;
        //crc2.arc(400, 300, 50, 0, 2 * Math.PI);
        crc2.fillRect(0, 0, 800, 600);

        //Strand
        //Meer Verlauf hell ivory: #FFFFF0 ; dunkel: #FAEBD7
        var gradient = crc2.createLinearGradient(0, 300, 0, 600);
        gradient.addColorStop(0, "#FAEBD7"); //Ursprungsfarbe
        gradient.addColorStop(0.5, "#FAEBD7");
        gradient.addColorStop(1, "#FFFFF0");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 400, 800, 600);

        //Palme mit linien?? Ansatz, nachher auslagern
        //Rechteck 1
        /* noch ausKOMMENTiert
        crc2.beginPath();
        crc2.moveTo(80, 600);
        crc2.lineTo(20, 600);
        crc2.lineTo(15, 550);
        crc2.lineTo(70,550);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#CD853F";
        crc2.fill();
        
        //Rechteck 2
        crc2.beginPath();
        crc2.moveTo(70, 550); bis hierhin verändert
        crc2.lineTo(20, 600);
        crc2.lineTo(15, 550);
        crc2.lineTo(70,550);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#CD853F";
        crc2.fill();
        */  
        /*Sprechblase für späteren Text! KOMMENTAR
        crc2.beginPath();
        crc2.moveTo(75, 25);
        crc2.quadraticCurveTo(25, 25, 25, 62.5);
        crc2.quadraticCurveTo(25, 100, 50, 100);
        crc2.quadraticCurveTo(50, 120, 30, 125);
        crc2.quadraticCurveTo(60, 120, 65, 100);
        crc2.quadraticCurveTo(125, 100, 125, 62.5);
        crc2.quadraticCurveTo(125, 25, 25        crc2.stroke();
        */
    
    
        // hier Hintergrund speichern
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);
    
        clkrabbe = new Krabbe(400, 450);

        objektArr.push(clkrabbe);

        //Animation    
        for (let i: number = 0; i < 3; i++) {

            clwolken = new Wolken(0 + Math.random() * 800, 0 + Math.random() * 80 + 50);

            objektArr.push(clwolken);
        }

        
        const generateKokosnuss = () => {
            addKokosnuss(
                new Kokosnuss(
                    parseInt((new Date()).getTime().toString().substr(-2)) * 10 + Math.random() * 800,
                    0
                )     
                              
            );              
            
            
        };
        
        for (let i: number = 0; i < 6; i++) {
            generateKokosnuss();
        }

        const genRandomKokosnuss = () => {
            generateKokosnuss();
            setTimeout(genRandomKokosnuss, Math.random() * 1000);
            
        };

        genRandomKokosnuss();
        animate();
        
        //Funktion Button_Event; Krabbe bewegt sich, wenn man auf die pfeiltasten drückt
        
        document.querySelector("body").addEventListener("keydown",function(e: KeyboardEvent){
           //const event: KeyboardEvent = window.event ? window.event : e;
            switch(e.keyCode){
                    //linke Pfeiltaste
                    case 37:
                        clkrabbe.move_Krabbe_links();
                    break;
                    //rechte Pfeiltaste
                    case 39:
                        clkrabbe.move_Krabbe_rechts();
                    break;
                }          
        });
        
        document.querySelector("body").addEventListener("keyup",function(e: KeyboardEvent){
           //const event: KeyboardEvent = window.event ? window.event : e;
            switch(e.keyCode){
                    //linke Pfeiltaste
                    case 37:
                        clkrabbe.stop_Krabbe();
                    break;
                    //rechte Pfeiltaste
                    case 39:
                        clkrabbe.stop_Krabbe();
                    break;
                }          
        });
        
        
        crc2.putImageData(imgData, 0, 0);

    }


    // FUNKTIONEN

    //Funktion Animate 
    function animate(): void {


        //Bild einfügen, hier Hintergrund restaurieren
        crc2.clearRect(0, 0, 800, 600)
        crc2.putImageData(imgData, 0, 0);

        //Kokosnuss, Wolken
        objektArr.forEach(obj => obj.update());

        //cocosCrash();
        
        //Geschwindigkeit
        window.setTimeout(animate, 100);
    }

    //Funktion für Palme
    function Palme(x: number, y: number, color: string): void {
        crc2.beginPath();
        crc2.moveTo(x, y);
        crc2.lineTo(x + 30, y + 100);
        crc2.lineTo(x - 30, y + 100);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = color;
        crc2.fill();
    }
    
    
    function cocosCrash(){
        kokosArr.forEach (kokosnuss => {
            if (clkrabbe.y <= kokosnuss.y +10 && clkrabbe.x <= kokosnuss.x+20 && clkrabbe.x >= kokosnuss.x-20){
                alert("GAME OVER \n Seite bitte neu laden lassen");
            }
        }); 
    }
    
    
    export function deleteKokosnuss(nut: number){
        //arr.find(callback[, thisArg])
        kokosArr.splice(kokosArr.findIndex(kokosnuss => kokosnuss.kokoId === nut), 1);
        
        
        //kokosArr.splice(kokosArr.reduce((/*acc, item, index*/Kokosnuss.kokoId,nut,0) => { return /*item*/ Kokosnuss.kokoId == nut ? index : /*acc*/ Kokosnuss.kokoId }, -1), 1);
        //objektArr.splice(objektArr.reduce(nut), 1);
    }


} //namespace Ende