window.addEventListener("load", init);

function init(): void {
    let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
    console.log(canvas);

    let crc2: CanvasRenderingContext2D = canvas.getContext("2d");
    console.log(crc2);
    
    /*hellgraues Rechteck für den Himmel*/
    crc2.fillStyle = "#E0FFFF";
    crc2.fillRect(0, 0, 800, 600);
    
    /*Dreieckiger Berg über Rechteck
    #DCDCDC
    */
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
    
}



