/* 
    Name: Denise Marcella Alka
    Matrikel: 256690
    Datum: 22.02.2017
    Hiermit versichere ich, dass ich diesen
    Code selbst geschrieben habe. Er wurde
    nicht kopiert und auch nicht diktiert
 */

namespace End {

    window.addEventListener("load", init);


    //globale Variable
    export let crc2: CanvasRenderingContext2D;
    let gameOver: boolean = false;
    export let scale: number = (document.querySelector('canvas').clientWidth / 800);
    


    let objektArr: Objekt[] = [];
    //let kokosArr: Kokosnuss [] = [];

    export let clkrabbe: Krabbe;
    let clwolken: Wolken;
    //Test, i.wo anders drinnen?
    let clkokos: Kokosnuss;

    let imgData: ImageData;

    export function addKokosnuss(nut: Kokosnuss) {
        objektArr.push(nut);
        //kokosArr.push(nut);
    }

    function init(): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;        

        crc2 = canvas.getContext("2d");

        //Rechteck für den Himmel
        var gradient = crc2.createLinearGradient(0, 0, 0, scale*600);
        gradient.addColorStop(0, "#E0FFFF"); //Ursprungsfarbe
        gradient.addColorStop(0.5, "#4ba1b4");
        gradient.addColorStop(1, "#4962bf");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, scale*800, scale*600);

        //Meer Verlauf
        var gradient = crc2.createLinearGradient(0, scale*250, 0, scale*600);
        gradient.addColorStop(0, "#E0FFFF"); //Ursprungsfarbe
        gradient.addColorStop(0.5, "#4ba1b4");
        gradient.addColorStop(1, "#4962bf");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, scale*800, scale*600);

        //Son    
        // Create gradient
        //CanvasGradient createRadialGradient(x0, y0, radius0, x1, y1, radius1)
        //x0 - Horizontale Koordinate des Mittelpunkts des ersten Kreises
        //y0 - Vertikale Koordinate des Mittelpunkts des ersten Kreises
        //radius0 - Radius des ersten Kreises
        //x1 - Horizontale Koordinate des Mittelpunkts des zweiten Kreises
        //y1 - Vertikale Koordinate des Mittelpunkts des zweiten Kreises
        //radius1 - Radius des zweiten Kreises
        var gradient2 = crc2.createRadialGradient(scale*400, scale*150, scale*100, scale*400, scale*150, scale*50);

        // Add colors oben nach unten: oberste zeile ganz außen!!
        gradient2.addColorStop(0.098, 'rgba(255, 255, 255, 0)');
        gradient2.addColorStop(0.102, 'rgba(255, 255, 255, 0.1)');
        gradient2.addColorStop(0.398, 'rgba(255, 225, 0, 1.0)');
        gradient2.addColorStop(0.400, 'rgba(252, 252, 189, 1.0)');
        gradient2.addColorStop(0.999, 'rgba(250, 250, 250, 1.0)');

        // Fill with gradient
        crc2.fillStyle = gradient2;
        //crc2.arc(400, 300, 50, 0, 2 * Math.PI);
        crc2.fillRect(0, 0, scale*800, scale*600);

        //Strand
        //Meer Verlauf hell ivory: #FFFFF0 ; dunkel: #FAEBD7
        var gradient = crc2.createLinearGradient(0, scale*300, 0, scale*600);
        gradient.addColorStop(0, "#FAEBD7"); //Ursprungsfarbe
        gradient.addColorStop(0.5, "#FAEBD7");
        gradient.addColorStop(1, "#FFFFF0");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, scale*400, scale*800, scale*600);

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

        clkrabbe = new Krabbe(scale* 400, scale* 450);

        objektArr.push(clkrabbe);

        //Animation    
        for (let i: number = 0; i < 3; i++) {

            clwolken = new Wolken(0 + Math.random() * 800 * scale, 0 + Math.random() * 80*scale + scale* 50);

            objektArr.push(clwolken);
        }


        const generateKokosnuss = () => {
            addKokosnuss(
                new Kokosnuss(
                    parseInt((new Date()).getTime().toString().substr(-2)) * 10 * scale + Math.random() * scale*800,
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

        document.querySelector("body").addEventListener("keydown", function(e: KeyboardEvent) {
            //const event: KeyboardEvent = window.event ? window.event : e;
            switch (e.keyCode) {
                //linke Pfeiltaste
                case 37:
                    clkrabbe.move_Krabbe(30*scale);
                    break;
                //rechte Pfeiltaste
                case 39:
                    clkrabbe.move_Krabbe(document.querySelector('canvas').clientWidth);
                    break;
            }
        });

        document.querySelector("body").addEventListener("keyup", function(e: KeyboardEvent) {
            //const event: KeyboardEvent = window.event ? window.event : e;
            switch (e.keyCode) {
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

        //Funktion Handy touch
        document.querySelector("body").addEventListener("touchstart", function(e: TouchEvent) {

            const canvasTouchPosX = e.touches.item(0).clientX - document.querySelector('canvas').clientLeft;

            clkrabbe.move_Krabbe(canvasTouchPosX);
        });
        
        document.querySelector("body").addEventListener("touchmove", function(e: TouchEvent) {

            const canvasTouchPosX = e.touches.item(0).clientX - document.querySelector('canvas').clientLeft;

            clkrabbe.move_Krabbe(canvasTouchPosX);
        });
        
        document.querySelector("body").addEventListener("touchend", function(e: TouchEvent) {
            clkrabbe.stop_Krabbe();
        });


        crc2.putImageData(imgData, 0, 0);

    }


    // FUNKTIONEN

    //Funktion Animate 
    function animate(): void {


        //Bild einfügen, hier Hintergrund restaurieren
        crc2.clearRect(0, 0, scale*800, scale* 600);
        crc2.putImageData(imgData, 0, 0);

        //Kokosnuss, Wolken
        objektArr.forEach(obj => obj.update());

        cocosCrash();
        
        if(gameOver) {return;}

        //Geschwindigkeit
        window.setTimeout(animate, 100);
    }

    function cocosCrash() {
        objektArr.forEach(obj => {
            if (!(obj instanceof Kokosnuss)) {
                return;
            }
            
            let kokosnuss: Kokosnuss = obj as Kokosnuss;
            
            if (
                clkrabbe.y + scale*3 <= kokosnuss.y + scale* 10 &&
                clkrabbe.y + scale*35 > kokosnuss.y &&
                clkrabbe.x <= kokosnuss.x + scale* 60 &&
                clkrabbe.x >= kokosnuss.x - scale* 35
            ) {
                alert("GAME OVER \n Seite bitte neu laden lassen");
                gameOver = true;
            }
        });
    }


    export function deleteKokosnuss(nut: number) {
        //arr.find(callback[, thisArg])
        //kokosArr.splice(kokosArr.findIndex(kokosnuss => kokosnuss.kokoId === nut), 1);
        /*
         * objektArr.find(function contains(element)    { return element.kokoId === nut; });
         * objektArr.find(                  element  =>          element.kokoId === nut    ;
         */
        if (objektArr.find(function contains(element: Objekt) {
            if (element instanceof Kokosnuss) {
                return (element as Kokosnuss).kokoId === nut;
            }
        
            return false;
        })
        ) {
            objektArr.splice(objektArr.findIndex(kokosnuss => (kokosnuss as Kokosnuss).kokoId === nut), 1);
        }

    }


} //namespace Ende