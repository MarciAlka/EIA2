/*Aufgabe 5 von Denise Marcella Alka, 15.November.2017
hiermit versichere ich, dass der Code von mir 
(Denise Marcella Alka, 256690) 
eigenständig geschrieben wurde; er wurde nicht diktiert oder kopiert;
*/

namespace A6 {
    window.addEventListener("load", init);


    //globale Variable
    export let crc2: CanvasRenderingContext2D;

    
    //Neu
    let skiArr: Objekt[] = [];
    let snowArr: Objekt [] = [];
    let wolkeArr: Objekt[] = [];
    let objektArr: Objekt [] = [];
    
    let clski: Skifahrer;
    let clsnow: Schnee;
    let clwolken: Wolken;
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
        
        // hier Hintergrund speichern
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);
        

        
        //Animationen


        for (let i: number = 0; i < 120; i++) {
      
        clsnow = new Schnee (10 + Math.random() * 800, 100 + Math.random() * 600);

            
            objektArr.push(clsnow);

        }
        
        
        for (let i: number = 0; i < 3; i++) {
               
            let skiX = 2000;
            let skiY = Math.random() * 300 - 200; //Random davor 100
            let skiDx = Math.random() * 2 - 1;
            let skiDy = Math.random() * 2 - 1;
            
            clski = new Skifahrer (skiX, skiY, skiDx, skiDy);
            
            objektArr.push(clski);
            
        }
        
        console.log(skiArr.length);
        
        for (let i: number = 0; i < 3; i++) {

            clwolken = new Wolken (0 + Math.random() * 800, 0 + Math.random() * 80 + 50);
            
            objektArr.push(clwolken);
        } 

        animate();

        crc2.putImageData(imgData, 0, 0);
        
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


    //Wolken, Schnee, Skifahrer
    //Funktion draw...(z.b.skifahrer) nun eine methode in Klasse Skifahrer
    

    //Funktion Animate 
    function animate(): void {
         
 
        //Bild einfügen, hier Hintergrund restaurieren
        crc2.clearRect(0, 0, 800, 600)
        crc2.putImageData(imgData, 0, 0);
        
        
      

        //schneeflocken
        for (let i: number = 0; i < objektArr.length; i++) { //snowArr.length
            

            let s: Objekt = objektArr[i];                        
            s.update();
            
           
        }
          
        
           //Bäume    

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