/*Work by Marci Alka*/

window.addEventListener("load", init);

function init(): void {
    let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
    console.log(canvas);

    let crc2: CanvasRenderingContext2D = canvas.getContext("2d");
    console.log(crc2);
    
    /*hellgraues Rechteck für den Himmel*/
    crc2.fillStyle = "#E0FFFF";
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
    
    /*linie Skiberg*/
    /*
    crc2.beginPath();
    crc2.moveTo(0, 0);
    crc2.lineTo(800, 600);
    crc2.stroke();
    */
    
    /*linie Skilift*/
    crc2.beginPath();
    crc2.moveTo(30, 0);
    crc2.lineTo(800, 580);
    crc2.stroke();
    
    /*Sonne*/
    crc2.beginPath();
    /*350 nach rechts; 2 damit Kreis...bei 1 halbkreis*/
    crc2.arc(700, 100, 50, 0, 2 * Math.PI);
    crc2.fillStyle ="#FFD700";
    crc2.fill();
    
    /*Wolke 1*/
    crc2.beginPath();
    crc2.arc(670, 120, 10, 0, 2 * Math.PI);
    crc2.fillStyle ="#FFFFFF";
    crc2.fill();
    /*W1.2*/
    crc2.beginPath();
    crc2.arc(680, 130, 10, 0, 2 * Math.PI);
    crc2.fillStyle ="#FFFFFF";
    crc2.fill();
    /*W1.3*/
    crc2.beginPath();
    crc2.arc(660, 130, 10, 0, 2 * Math.PI);
    crc2.fillStyle ="#FFFFFF";
    crc2.fill();
    /*W1.4*/
    crc2.beginPath();
    crc2.arc(670, 128, 10, 0, 2 * Math.PI);
    crc2.fillStyle ="#FFFFFF";
    crc2.fill();
    
        /*Wolke 2*/
    crc2.beginPath();
    crc2.arc(730, 110, 10, 0, 2 * Math.PI);
    crc2.fillStyle ="#FFFFFF";
    crc2.fill();
    /*W2.2*/
    crc2.beginPath();
    crc2.arc(740, 120, 10, 0, 2 * Math.PI);
    crc2.fillStyle ="#FFFFFF";
    crc2.fill();
    /*W2.3*/
    crc2.beginPath();
    crc2.arc(720, 120, 10, 0, 2 * Math.PI);
    crc2.fillStyle ="#FFFFFF";
    crc2.fill();
    /*W2.4*/
    crc2.beginPath();
    crc2.arc(730, 118, 10, 0, 2 * Math.PI);
    crc2.fillStyle ="#FFFFFF";
    crc2.fill();
    
    /*grüne Bäume
    Grundangaben:
    
    winziger Baum:
    crc2.moveTo(350, 260);
    crc2.lineTo(360, 310);
    crc2.lineTo(340, 310);
    
    kleiner Baum:
    crc2.moveTo(250, 250);
    crc2.lineTo(280, 350);
    crc2.lineTo(220, 350);
    
    
    mittlerer Baum:
    crc2.moveTo(200, 300);
    crc2.lineTo(250, 500);
    crc2.lineTo(150, 500);
    */
    
    /*winzig*/
    crc2.beginPath();
    crc2.moveTo(10, 100);
    crc2.lineTo(20, 150);
    crc2.lineTo(0, 150);
    crc2.closePath();
    crc2.stroke(); 
    crc2.fillStyle = "#6E8B3D";
    crc2.fill();
    
    crc2.beginPath();
    crc2.moveTo(20, 40);
    crc2.lineTo(30, 90);
    crc2.lineTo(10, 90);
    crc2.closePath();
    crc2.stroke(); 
    crc2.fillStyle = "#6E8B3D";
    crc2.fill();
    
    crc2.beginPath();
    crc2.moveTo(180, 150);
    crc2.lineTo(190, 200);
    crc2.lineTo(170, 200);
    crc2.closePath();
    crc2.stroke(); 
    crc2.fillStyle = "#6E8B3D";
    crc2.fill();
    
    crc2.beginPath();
    crc2.moveTo(350, 260);
    crc2.lineTo(360, 310);
    crc2.lineTo(340, 310);
    crc2.closePath();
    crc2.stroke(); 
    crc2.fillStyle = "#6E8B3D";
    crc2.fill();
    
    /*klein*/
    crc2.beginPath();
    crc2.moveTo(250, 250);
    crc2.lineTo(280, 350);
    crc2.lineTo(220, 350);
    crc2.closePath();
    crc2.stroke(); 
    crc2.fillStyle = "#6E8B3D";
    crc2.fill();
    
    crc2.beginPath();
    crc2.moveTo(100, 100);
    crc2.lineTo(130, 200);
    crc2.lineTo(70, 200);
    crc2.closePath();
    crc2.stroke(); 
    crc2.fillStyle = "#6E8B3D";
    crc2.fill();
    
    crc2.beginPath();
    crc2.moveTo(150, 180);
    crc2.lineTo(180, 280);
    crc2.lineTo(120, 280);
    crc2.closePath();
    crc2.stroke(); 
    crc2.fillStyle = "#6E8B3D";
    crc2.fill();
    
    crc2.beginPath();
    crc2.moveTo(400, 380);
    crc2.lineTo(430, 480);
    crc2.lineTo(370, 480);
    crc2.closePath();
    crc2.stroke(); 
    crc2.fillStyle = "#6E8B3D";
    crc2.fill();
    
    /*mittel*/
    crc2.beginPath();
    crc2.moveTo(50, 100);
    crc2.lineTo(100, 300);
    crc2.lineTo(0, 300);
    crc2.closePath();
    crc2.stroke(); 
    crc2.fillStyle = "#6E8B3D";
    crc2.fill();
    
    crc2.beginPath();
    crc2.moveTo(200, 200);
    crc2.lineTo(250, 400);
    crc2.lineTo(150, 400);
    crc2.closePath();
    crc2.stroke(); 
    crc2.fillStyle = "#6E8B3D";
    crc2.fill();
    
    /*Ausnahme klein*/
    crc2.beginPath();
    crc2.moveTo(75, 280);
    crc2.lineTo(105, 380);
    crc2.lineTo(45, 380);
    crc2.closePath();
    crc2.stroke(); 
    crc2.fillStyle = "#6E8B3D";
    crc2.fill();
    
    crc2.beginPath();
    crc2.moveTo(60, 400);
    crc2.lineTo(110, 600);
    crc2.lineTo(10, 600);
    crc2.closePath();
    crc2.stroke(); 
    crc2.fillStyle = "#6E8B3D";
    crc2.fill();
    
    crc2.beginPath();
    crc2.moveTo(200, 380);
    crc2.lineTo(250, 580);
    crc2.lineTo(150, 580);
    crc2.closePath();
    crc2.stroke(); 
    crc2.fillStyle = "#6E8B3D";
    crc2.fill();
    
}



