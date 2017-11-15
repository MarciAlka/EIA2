/*Aufgabe 5 von Denise Marcella Alka, 15.November.2017
hiermit versichere ich, dass der Code von mir 
(Denise Marcella Alka, 256690) 
eigenständig geschrieben wurde; er wurde nicht diktiert oder kopiert;
*/

namespace A5 {
    window.addEventListener("load", init);

    
/*   interface InterSki {

        x: number;
        y: number;
        dx: number;
        dy: number;
        color: string;

    }    
*/    
    
    //globale Variable
    export let crc2: CanvasRenderingContext2D;

    export let wolkeX: number[] = [];
    export let wolkeY: number[] = [];
    //let skiX: number[] = [];
    //let skiY: number[] = [];
    export let snowX: number[] = [];
    export let snowY: number[] = [];

    export let skiXOrig: number[] = [];
    export let skiYOrig: number[] = [];

    export let wolkeXOrig: number[] = [];
    export let wolkeYOrig: number[] = [];

    
//    let skiArr: InterSki[] = [];
    
    //Neu
    export let skiArr: Skifahrer[] = [];
    
    export let clski: Skifahrer;
    export let clsnow: Schnee;
    export let clwolken: Wolken;
    //let clbäume: Bäume;
    

    let imgData: ImageData;


    function init(): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        
        crc2 = canvas.getContext("2d");
                       
        //hellgraues Rechteck für den Himmel

        var gradient = crc2.createLinearGradient(0, 0, 0, 600);
        gradient.addColorStop(0, "#E0FFFF"); //Ursprungsfarbe
        gradient.addColorStop(0.5, "#4ba1b4");
        gradient.addColorStop(1, "#4962bf");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, 800, 600);

        /*Berge*/
        crc2.beginPath();
        crc2.moveTo(600, 400);
        crc2.lineTo(800, 500);
        crc2.lineTo(10, 600);
        crc2.closePath();
        crc2.fillStyle = "#FCFCFC";
        crc2.fill();

        crc2.beginPath();
        crc2.moveTo(750, 450);
        crc2.lineTo(800, 470);
        crc2.lineTo(100, 470);
        crc2.closePath();
        crc2.fillStyle = "#FCFCFC";
        crc2.fill();

        crc2.beginPath();
        crc2.moveTo(800, 470);
        crc2.lineTo(800, 600);
        crc2.lineTo(400, 600);
        crc2.closePath();
        crc2.fillStyle = "#FCFCFC";
        crc2.fill();

        crc2.beginPath();
        crc2.moveTo(720, 450);
        crc2.lineTo(870, 470);
        crc2.lineTo(400, 600);
        crc2.closePath();
        crc2.fillStyle = "#FCFCFC";
        crc2.fill();
        

        /*Dreieckiger Berg über Rechteck*/
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(800, 600);
        crc2.lineTo(0, 600);
        crc2.closePath();
        crc2.stroke(); /*#E0FFFF*/
        crc2.fillStyle = "#F7F7F7";
        crc2.fill();

        /*linie Skilift*/
        crc2.beginPath();
        crc2.moveTo(70, 0); //30,0
        crc2.lineTo(800, 530); //800,580 ; 840,580
        crc2.stroke();

        /*Sonne*/
        crc2.beginPath();
        /*350 nach rechts; 2 damit Kreis...bei 1 halbkreis*/
        crc2.arc(700, 100, 50, 0, 2 * Math.PI);
        crc2.fillStyle = "#FFD700";
        crc2.fill();

        
        //Bäume    
        //winzige Bäume; Zufallschleife
        for (let i: number = 0; i < 4; i++) {
            let x: number = 150 + Math.random() * 100;
            let y: number = 180 + Math.random() * 60;

            drawTreeS(x, y, "#6E8B3D");
        }
        /* Bäume sind nun in Animate, bis auf die zufällig platzierten... sonst werden diese animiert.
        //kleine Bäume
        drawTreeL(250, 250, "#6E8B3D");
        drawTreeL(100, 100, "#6E8B3D");
        drawTreeL(150, 180, "#6E8B3D");
        drawTreeL(400, 380, "#6E8B3D");

        //mittlere Bäume
        drawTreeM(50, 100, "#6E8B3D");
        drawTreeM(200, 200, "#6E8B3D");

        //Ausnahme kleiner Baum
        drawTreeS(75, 280, "#6E8B3D");

        //weiter mittlere Bäume
        drawTreeM(60, 400, "#6E8B3D");
        drawTreeM(200, 380, "#6E8B3D");
        */
        

        // hier Hintergrund speichern
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);
        

        
        //Animationen


        for (let i: number = 0; i < 100; i++) {
        //NEU!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!TEST
        clsnow = new Schnee (100,100);
            
            snowX[i] = 10 + Math.random() * 800;
            snowY[i] = 100 + Math.random() * 600;
        }
        
        
        for (let i: number = 0; i < 3; i++) {
        /*
            skiArr[i] = {
                x: 200,
                y: 100,
                dx: Math.random() * 2 - 1,
                dy: Math.random() * 2 - 1,
                color: "#FFFFFF"//"hsl(" + Math.random() * 360 + ", 100%, 50%)"
            };
        */
            
            //NEU!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!TEST
            clski = new Skifahrer (200,100);
            
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
            
            //NEU!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!TEST
            clwolken = new Wolken (100,100);
            
            
            if (i == 0) {
                wolkeX[i] = 10;
                wolkeY[i] = 100; //100

                wolkeXOrig[i] = wolkeX[i];
                wolkeYOrig[i] = wolkeY[i];
            }
            else if (i == 1) {
                wolkeX[i] = 200;
                wolkeY[i] = 140;
                wolkeXOrig[i] = wolkeX[i];
                wolkeYOrig[i] = wolkeY[i];
            }
            else if (i == 2) {
                wolkeX[i] = -190;
                wolkeY[i] = 250;
                wolkeXOrig[i] = wolkeX[i];
                wolkeYOrig[i] = wolkeY[i];
            }

            //wolkeX[i] = 10;
            //wolkeY[i] = 100;
        }

        animate();

        crc2.putImageData(imgData, 0, 0);

        //hier endet init()
    }






    //FUNKTIONEN

    //winziger Baum
    function drawTreeS(x: number, y: number, color: string): void {

        crc2.beginPath();
        crc2.moveTo(x, y);
        crc2.lineTo(x + 10, y + 50);
        crc2.lineTo(x - 10, y + 50);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = color;
        crc2.fill();
    }

    //kleiner Baum
    function drawTreeL(x: number, y: number, color: string): void {

        crc2.beginPath();
        crc2.moveTo(x, y);
        crc2.lineTo(x + 30, y + 100);
        crc2.lineTo(x - 30, y + 100);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = color;
        crc2.fill();
    }


    //mittlerer Baum
    function drawTreeM(x: number, y: number, color: string): void {

        crc2.beginPath();
        crc2.moveTo(x, y);
        crc2.lineTo(x + 50, y + 200);
        crc2.lineTo(x - 50, y + 200);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = color;
        crc2.fill();
    }

    //Wolken    
    /*function drawCloud(x: number, y: number, rad: number, color: string): void {
        crc2.beginPath();
        crc2.arc(x, y, rad, 0, 2 * Math.PI);
        crc2.fillStyle = color;
        crc2.fill();
        //W1.2
        crc2.beginPath();
        crc2.arc(x + 10, y + 10, rad, 0, 2 * Math.PI);
        crc2.fillStyle = color;
        crc2.fill();
        //W1.3
        crc2.beginPath();
        crc2.arc(x - 10, y + 10, rad, 0, 2 * Math.PI);
        crc2.fillStyle = color;
        crc2.fill();
        //W1.4
        crc2.beginPath();
        crc2.arc(x, y + 8, rad, 0, 2 * Math.PI);
        crc2.fillStyle = color;
        crc2.fill();
    }*/


    //Schneeflocken   
/*
    function drawSnowf(x: number, y: number): void {
        crc2.beginPath();
        crc2.arc(x, y, 2, 0, 2 * Math.PI);
        crc2.fillStyle = "#FFFFFF";
        crc2.fill();
    }
*/


    //Skifahrer
    //Funktion skifahrer nun eine methode in Klasse Skifahrer
    

    //Funktion Animate 
    function animate(): void {
         
 
        //Bild einfügen, hier Hintergrund restaurieren
        crc2.clearRect(0, 0, 800, 600)
        crc2.putImageData(imgData, 0, 0);
        
        clski.updateSki();
        clsnow.updateSchnee();
        clwolken.updateWolken();
        
        //clBäume.updatebäume();

        //schneeflocken
        /*for (let i: number = 0; i < snowX.length; i++) {

            snowX[i] += 0; //Math.random() * 5 - 0; 10
            snowY[i] += 5; //Math.random() * 10 - 0; 0  

            drawSnowf(snowX[i], snowY[i]);

            if (snowY[i] > 600) {
                snowY[i] = 0;
            }

        }*/

        //Animation Wolken
        /*
        for (let i: number = 0; i < wolkeX.length; i++) {

            wolkeX[i] += 10;
            wolkeY[i] += 0;

            //drawCloud(wolkeX[i], wolkeY[i], 15, "#FFFFFF");

            if (wolkeX[i] > 800) {
                wolkeX[i] = wolkeXOrig[i];   //0;        
            }
        }
        */

        //Animation Skifahrer
        //
            /*
           for (let i: number = 0; i < skiArr.length; i++) {
            skiArr[i].x += 10;
            skiArr[i].y += 10;

            //drawSki (skiX[i], skiY[i]);
            drawSki(skiArr[i]);

            if (skiArr[i].x > 800 || skiArr[i].y > 600) {
                skiArr[i].x = skiXOrig[i]; // = skiXOrigin[i]
                skiArr[i].y = skiYOrig[i]; // = skiYOrigin[i]
            }


            }*/
            
        
            //DAS HIER MUSS NUN IN DIE KLASSE AUSGELAGERT WERDEN!!!!!!
            /*for (let i: number = 0; i < skiArr.length; i++) {
                //hab kein Array mehr, also alternative! ->nachtrag:Arr oben erstellt
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


            }*/
        
           //Bäume    
        /*//winzige Bäume; Zufallschleife -> nicht hier, sonst animiert
        for (let i: number = 0; i < 4; i++) {
            let x: number = 150 + Math.random() * 100;
            let y: number = 180 + Math.random() * 60;

            drawTreeS(x, y, "#6E8B3D");
        }
        */
        //kleine Bäume
        drawTreeL(250, 250, "#6E8B3D");
        drawTreeL(100, 100, "#6E8B3D");
        drawTreeL(150, 180, "#6E8B3D");
        drawTreeL(400, 380, "#6E8B3D");

        //mittlere Bäume
        drawTreeM(50, 100, "#6E8B3D");
        drawTreeM(200, 200, "#6E8B3D");

        //Ausnahme kleiner Baum
        drawTreeS(75, 280, "#6E8B3D");

        //weiter mittlere Bäume
        drawTreeM(60, 400, "#6E8B3D");
        drawTreeM(200, 380, "#6E8B3D");


        
        //Geschwindigkeit
        window.setTimeout(animate, 100);

    }

    // hier endet Namespace    
}