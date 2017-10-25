/*Aufgabe 1 von Denise Marcella Alka, 08.Oktober.2017
hiermit versichere ich, dass der Code von mir
(Denise Marcella Alka, 256690)
eigenst�ndig geschrieben wurde; er wurde nicht diktiert oder kopiert;
*/
var A3;
(function (A3) {
    window.addEventListener("load", init);
    /*globale Variable*/
    let crc2;
    let arrayX = [];
    let arrayY = [];
    let imgData;
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        crc2 = canvas.getContext("2d");
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
        /*Wolken*/
        //drawCloud(670, 120, 10, "#FFFFFF");
        //drawCloud(730, 110, 10, "#FFFFFF");
        /* B�ume
        /*winzige B�ume; Zufallschleife*/
        for (let i = 0; i < 4; i++) {
            let x = 150 + Math.random() * 100;
            let y = 180 + Math.random() * 60;
            drawTreeS(x, y, "#6E8B3D");
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
        /*Schneeflocken*/
        /*for (let i: number = 0; i < 500; i++) {
            let x: number = 1 + Math.random() * 780;
            let y: number = 1 + Math.random() * 580;
            drawSnowf(x, y);
        }
        */
        // hier Hintergrund speichern
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);
        /*Schneeflocken zeichnen*/
        for (let i = 0; i < 10; i++) {
            arrayX[i] = 100; //320
            arrayY[i] = 100; //150
            drawSnowf(arrayX[i], arrayY[i]);
        }
        aniSnowf();
        //window.setTimeout(aniSnowf, 20);
        //window.setTimeout(aniCloud, 400);
        aniCloud();
    }
    //FUNKTIONEN
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
        crc2.arc(x, y, rad, 0, 2 * Math.PI);
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
    function randomCloud(x, y, rad, color) {
        for (let i = 0; i < 500; i++) {
            let x = 1 + Math.random() * 800; //780
            let y = 1 + Math.random() * 600; //580
            drawCloud(x, y, rad, color);
        }
    }
    /*Animation Wolken*/
    function aniCloud() {
        console.log("Timeout");
        //Bild einf�gen, hier Hintergrund restaurieren
        //crc2.putImageData(imgData, 0, 0);
        for (let i = 0; i < arrayX.length; i++) {
            arrayX[i] += Math.random() * 10 - 0; //*10 -50 
            arrayY[i] += Math.random() * 10 - 0; // *10 - 20
            drawCloud(arrayX[i], arrayY[i], 10, "#FFFFFF");
        }
        window.setTimeout(aniCloud, 100);
    }
    /*Schneeflocken*/
    function flocke() {
        crc2.arc(5, 10, 2, 0, 2 * Math.PI);
        crc2.fillStyle = "#FFFFFF";
        crc2.fill();
    }
    function drawSnowf(x, y) {
        crc2.beginPath(); /*
        /*x nach rechts; 1 ist radius 2 damit Kreis...bei 1 halbkreis*/
        crc2.arc(x, y, 2, 0, 2 * Math.PI);
        crc2.fillStyle = "#FFFFFF";
        crc2.fill();
    }
    function randomSnowf(x, y) {
        for (let i = 0; i < 500; i++) {
            let x = 1 + Math.random() * 800; //780
            let y = 1 + Math.random() * 600; //580
            drawSnowf(x, y);
        }
    }
    function aniSnowf() {
        console.log("Timeout");
        //Bild einf�gen, hier Hintergrund restaurieren
        crc2.putImageData(imgData, 0, 0);
        /*crc2.clearRect(0, 0, 400, 300);*/
        for (let i = 0; i < arrayX.length; i++) {
            arrayX[i] += Math.random() * 10 - 50; // hier experimentieren um
            arrayY[i] += Math.random() * 10 - 20; // andere Bewegungsmuster zu finden
            /*crc2.fillStyle = "#ff0000";
            crc2.fillRect(arrayX[i], arrayY[i], 20, 20);
            */
            randomSnowf(arrayX[i], arrayX[i]);
        }
        window.setTimeout(aniSnowf, 20); //20
    }
})(A3 || (A3 = {}));
//# sourceMappingURL=main.js.map