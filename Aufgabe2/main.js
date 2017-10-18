/*Aufgabe 1 von Denise Marcella Alka, 08.Oktober.2017
hiermit versichere ich, dass der Code von mir
(Denise Marcella Alka, 256690)
eigenst�ndig geschrieben wurde
*/
var A2;
(function (A2) {
    window.addEventListener("load", init);
    let crc2;
    /*globale Variable*/
    /*let crc2: CanvasRenderingContext2D = canvas.getContext("2d");*/
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        let crc2 = canvas.getContext("2d");
        console.log(crc2);
        /*hellgraues Rechteck f�r den Himmel*/
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
        /*Dreieckiger Berg �ber Rechteck*/
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
        crc2.moveTo(30, 0);
        crc2.lineTo(800, 580);
        crc2.stroke();
        /*Sonne*/
        crc2.beginPath();
        /*350 nach rechts; 2 damit Kreis...bei 1 halbkreis*/
        crc2.arc(700, 100, 50, 0, 2 * Math.PI);
        crc2.fillStyle = "#FFD700";
        crc2.fill();
        /*Wolke 1*/
        /*crc2.beginPath();
        crc2.arc(670, 120, 10, 0, 2 * Math.PI);
        crc2.fillStyle ="#FFFFFF";
        crc2.fill();
        /*W1.2*/
        /*crc2.beginPath();
        crc2.arc(680, 130, 10, 0, 2 * Math.PI);
        crc2.fillStyle ="#FFFFFF";
        crc2.fill();
        /*W1.3*/
        /*crc2.beginPath();
        crc2.arc(660, 130, 10, 0, 2 * Math.PI);
        crc2.fillStyle ="#FFFFFF";
        crc2.fill();
        /*W1.4*/
        /*crc2.beginPath();
        crc2.arc(670, 128, 10, 0, 2 * Math.PI);
        crc2.fillStyle ="#FFFFFF";
        crc2.fill();
        
            /*Wolke 2*/
        /*crc2.beginPath();
        crc2.arc(730, 110, 10, 0, 2 * Math.PI);
        crc2.fillStyle ="#FFFFFF";
        crc2.fill();
        /*W2.2*/
        /*crc2.beginPath();
        crc2.arc(740, 120, 10, 0, 2 * Math.PI);
        crc2.fillStyle ="#FFFFFF";
        crc2.fill();
        /*W2.3*/
        /*crc2.beginPath();
        crc2.arc(720, 120, 10, 0, 2 * Math.PI);
        crc2.fillStyle ="#FFFFFF";
        crc2.fill();
        /*W2.4*/
        /*crc2.beginPath();
        crc2.arc(730, 118, 10, 0, 2 * Math.PI);
        crc2.fillStyle ="#FFFFFF";
        crc2.fill();
        */
        /*Wolken*/
        drawCloud(670, 120, 10, "#FFFFFF");
        drawCloud(730, 110, 10, "#FFFFFF");
        /* B�ume*/
        /*winzige B�ume; Zufallschleife*/
        for (let i = 0; i < 4; i++) {
            let x = 150 + Math.random() * 100;
            let y = 180 + Math.random() * 60;
            drawTreeS(10, 100, "#6E8B3");
        }
        /*kleine B�ume*/
        drawTreeL(250, 250, "#6E8B3D");
        drawTreeL(100, 100, "#6E8B3D");
        drawTreeL(150, 180, "#6E8B3D");
        drawTreeL(400, 380, "#6E8B3D");
        /*mittlere B�ume*/
        drawTreeM(50, 100, "#6E8B3D");
        drawTreeM(200, 200, "#6E8B3D");
        /*Ausnahme kleiner Baum*/
        drawTreeS(75, 280, "#6E8B3D");
        /*weiter mittlere B�ume*/
        drawTreeM(60, 400, "#6E8B3D");
        drawTreeM(200, 380, "#6E8B3D");
    }
})(A2 || (A2 = {}));
/*winziger Baum*/
function drawTreeS(x, y, color) {
    crc2.beginPath();
    crc2.moveTo(x, y);
    crc2.lineTo(x + 10, y + 50);
    crc2.lineTo(x - 10, y + 50);
    crc2.closePath();
    crc2.stroke();
    crc2.fillStyle = color;
    crc2.fill();
}
/*kleiner Baum*/
function drawTreeL(x, y, color) {
    crc2.beginPath();
    crc2.moveTo(x, y);
    crc2.lineTo(x + 30, y + 100);
    crc2.lineTo(x - 30, y + 100);
    crc2.closePath();
    crc2.stroke();
    crc2.fillStyle = color;
    crc2.fill();
}
/*mittlerer Baum*/
function drawTreeM(x, y, color) {
    crc2.beginPath();
    crc2.moveTo(x, y);
    crc2.lineTo(x + 50, y + 200);
    crc2.lineTo(x - 50, y + 200);
    crc2.closePath();
    crc2.stroke();
    crc2.fillStyle = color;
    crc2.fill();
}
/*Wolken*/
function drawCloud(x, y, rad, color) {
    crc2.beginPath();
    crc2.arc(670, 120, rad, 0, 2 * Math.PI);
    crc2.fillStyle = color;
    crc2.fill();
    /*W1.2*/
    crc2.beginPath();
    crc2.arc(x + 10, y + 10, rad, 0, 2 * Math.PI);
    crc2.fillStyle = color;
    crc2.fill();
    /*W1.3*/
    crc2.beginPath();
    crc2.arc(x - 10, y + 10, rad, 0, 2 * Math.PI);
    crc2.fillStyle = color;
    crc2.fill();
    /*W1.4*/
    crc2.beginPath();
    crc2.arc(x, y + 8, rad, 0, 2 * Math.PI);
    crc2.fillStyle = color;
    crc2.fill();
}
/*Schneeflocken*/ 
//# sourceMappingURL=main.js.map