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

let objektArr: Objekt [] = [];
    
let clkrabbe: Krabbe;
let clkokos: Kokosnuss;
let clwolken: Wolken;
    

let imgData: ImageData;


   
function init(): void {
    let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        
    crc2 = canvas.getContext("2d");
                       
    //Rechteck f�r den Himmel
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
        
    //Sonne
        
            // Create gradient
            //CanvasGradient createRadialGradient(x0, y0, radius0, x1, y1, radius1)
            //x0 - Horizontale Koordinate des Mittelpunkts des ersten Kreises
            //y0 - Vertikale Koordinate des Mittelpunkts des ersten Kreises
            //radius0 - Radius des ersten Kreises
            //x1 - Horizontale Koordinate des Mittelpunkts des zweiten Kreises
            //y1 - Vertikale Koordinate des Mittelpunkts des zweiten Kreises
            //radius1 - Radius des zweiten Kreises
      var gradient2 = crc2.createRadialGradient(400, 150, 100, 400, 150, 50);
      
            // Add colors oben nach unten: oberste zeile ganz au�en!!
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
        crc2.moveTo(70, 550); bis hierhin ver�ndert
        crc2.lineTo(20, 600);
        crc2.lineTo(15, 550);
        crc2.lineTo(70,550);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#CD853F";
        crc2.fill();
        */
    
    /*Sprechblase f�r sp�teren Text! KOMMENTAR
    crc2.beginPath();
    crc2.moveTo(75, 25);
    crc2.quadraticCurveTo(25, 25, 25, 62.5);
    crc2.quadraticCurveTo(25, 100, 50, 100);
    crc2.quadraticCurveTo(50, 120, 30, 125);
    crc2.quadraticCurveTo(60, 120, 65, 100);
    crc2.quadraticCurveTo(125, 100, 125, 62.5);
    crc2.quadraticCurveTo(125, 25, 75, 25);
    crc2.stroke();
    */
    
    //Krabbe
    
    /*
    crc2.beginPath();
    crc2.moveTo(50,38);
    crc2.moveTo(35,38);
    crc2.quadraticCurveTo(5, 45, 25, 65);
    crc2.quadraticCurveTo(40, 70, 50, 60);
    crc2.quadraticCurveTo(60, 40, 35, 38);
    crc2.stroke();
    crc2.fillStyle = "#DB2929";
    crc2.fill();
    
        //Krabbenbeine
    
            //Bein 1 links
    crc2.fillStyle = "#DB2929";
    crc2.fillRect(18, 40, 8, 6);
    crc2.fillStyle = "#DB2929";
    crc2.fillRect(13, 41, 8, 6);
    crc2.fillRect(8, 42, 6, 6);
    
    crc2.beginPath();
    crc2.moveTo(10, 47);//untere
    crc2.lineTo(0, 50); //linke spitze
    crc2.lineTo(10, 42);
    crc2.fillStyle = "#DB2929";
    crc2.fill();

            //Bein 2 links
    crc2.fillStyle = "#DB2929";
    crc2.fillRect(18, 47, 8, 6);
    crc2.fillStyle = "#DB2929";
    crc2.fillRect(13, 48, 8, 6);
    crc2.fillRect(8, 49, 6, 6);
    
    crc2.beginPath();
    crc2.moveTo(10, 54);
    crc2.lineTo(0, 57); 
    crc2.lineTo(10, 49);
    crc2.fillStyle = "#DB2929";
    crc2.fill();
    
            //Bein 3 links
    crc2.fillStyle = "#DB2929";
    crc2.fillRect(18, 54, 8, 6);
    crc2.fillStyle = "#DB2929";
    crc2.fillRect(13, 55, 8, 6);
    crc2.fillRect(8, 56, 6, 6);
    
    crc2.beginPath();
    crc2.moveTo(10, 61);
    crc2.lineTo(0, 64); 
    crc2.lineTo(10, 56);
    crc2.fillStyle = "#DB2929";
    crc2.fill();
    
            //Bein 1 rechts
    crc2.fillStyle = "#DB2929";
    crc2.fillRect(48, 40, 8, 6);
    crc2.fillStyle = "#DB2929";
    crc2.fillRect(53, 41, 8, 6);
    crc2.fillRect(58, 42, 6, 6);
    
    crc2.beginPath();
    crc2.moveTo(62, 47);//untere
    crc2.lineTo(72, 50); //linke spitze
    crc2.lineTo(62, 42);
    crc2.fillStyle = "#DB2929";
    crc2.fill();

            //Bein 2 rechts
    crc2.fillStyle = "#DB2929";
    crc2.fillRect(48, 47, 8, 6);
    crc2.fillStyle = "#DB2929";
    crc2.fillRect(53, 48, 8, 6);
    crc2.fillRect(58, 49, 6, 6);
    
    crc2.beginPath();
    crc2.moveTo(62, 54);
    crc2.lineTo(72, 57); 
    crc2.lineTo(62, 49);
    crc2.fillStyle = "#DB2929";
    crc2.fill();
    
            //Bein 3 rechts
    crc2.fillStyle = "#DB2929";
    crc2.fillRect(48, 54, 8, 6);
    crc2.fillStyle = "#DB2929";
    crc2.fillRect(53, 55, 8, 6);
    crc2.fillRect(58, 56, 6, 6);
    
    crc2.beginPath();
    crc2.moveTo(62, 61);
    crc2.lineTo(72, 64); 
    crc2.lineTo(62, 56);
    crc2.fillStyle = "#DB2929";
    crc2.fill();
    
        //Schere 1 links
    crc2.fillStyle = "#DB2929";
    crc2.fillRect(20, 62, 6, 6);
    
    crc2.beginPath();
    crc2.moveTo(23, 71);//untere
    crc2.lineTo(13, 74); //spitze
    crc2.lineTo(23, 66);
    crc2.fillStyle = "#DB2929";
    crc2.fill();
    
    crc2.beginPath();
    crc2.moveTo(23, 71);
    crc2.lineTo(33, 74); 
    crc2.lineTo(23, 66);
    crc2.fillStyle = "#DB2929";
    crc2.fill();
    
        //Schere 2 rechts
    crc2.fillStyle = "#DB2929";
    crc2.fillRect(42, 62, 6, 6);
    
    crc2.beginPath();
    crc2.moveTo(46, 71);//untere
    crc2.lineTo(36, 74); //spitze
    crc2.lineTo(46, 66);
    crc2.fillStyle = "#DB2929";
    crc2.fill();
    
    crc2.beginPath();
    crc2.moveTo(46, 71);
    crc2.lineTo(56, 74); 
    crc2.lineTo(46, 66);
    crc2.fillStyle = "#DB2929";
    crc2.fill();
    
        //Krabbenaugen
    crc2.beginPath();
    crc2.arc(28, 62, 2.5, 0, 2 * Math.PI);
    crc2.fillStyle = "black";
    crc2.fill();
    
    crc2.beginPath();
    crc2.arc(27, 62, 1, 0, 2 * Math.PI);
    crc2.fillStyle = "white";
    crc2.fill();
    
    crc2.beginPath();
    crc2.arc(40, 62, 2.5, 0, 2 * Math.PI);
    crc2.fillStyle = "black";
    crc2.fill();
    
    crc2.beginPath();
    crc2.arc(39, 62, 1, 0, 2 * Math.PI);
    crc2.fillStyle = "white";
    crc2.fill();
    */
    
    // hier Hintergrund speichern
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);
    
    //Krabbe
    
    /* test Krabbe
    clkrabbe = new Krabbe (50,38);
            
            objektArr.push(clkrabbe);
    */
    
    clkrabbe = new Krabbe (400,450);
            
            objektArr.push(clkrabbe);
    
    //Animationen
        
        for (let i: number = 0; i < 3; i++) {

        clwolken = new Wolken (0 + Math.random() * 800, 0 + Math.random() * 80 + 50);
            
        objektArr.push(clwolken);
        }

        for (let i: number = 0; i < 3; i++) {
      
        clkokos = new Kokosnuss (10 + Math.random() * 800, 100 + Math.random() * 600);
            
            objektArr.push(clkokos);

        }
        
        for (let i: number = 0; i < 2; i++) {
      
        clkokos = new Kokosnuss (1 + Math.random() * 800, 200 + Math.random() * 600);
            
            objektArr.push(clkokos);

        }
    
        animate();
    

        crc2.putImageData(imgData, 0, 0);
    
    }


// FUNKTIONEN

//Funktion Animate 
function animate(): void {
         
 
    //Bild einf�gen, hier Hintergrund restaurieren
    crc2.clearRect(0, 0, 800, 600)
    crc2.putImageData(imgData, 0, 0);
        
    //Kokosnuss, Wolken
    for (let i: number = 0; i < objektArr.length; i++) { 
            
        let s: Objekt = objektArr[i];                        
        s.update();
            
           
        }
    
    //Geschwindigkeit
    window.setTimeout(animate, 100);
}

//Funktion f�r Palme
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
    
    
} //namespace Ende