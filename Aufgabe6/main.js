/*Aufgabe 5 von Denise Marcella Alka, 15.November.2017
hiermit versichere ich, dass der Code von mir
(Denise Marcella Alka, 256690)
eigenst�ndig geschrieben wurde; er wurde nicht diktiert oder kopiert;
*/
var A6;
(function (A6) {
    window.addEventListener("load", init);
    //Neu
    let skiArr = [];
    let snowArr = [];
    let wolkeArr = [];
    let objektArr = [];
    let clski;
    let clsnow;
    let clwolken;
    //let clb�ume: B�ume;
    let imgData;
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        A6.crc2 = canvas.getContext("2d");
        //hellgraues Rechteck f�r den Himmel
        var gradient = A6.crc2.createLinearGradient(0, 0, 0, 600);
        gradient.addColorStop(0, "#E0FFFF"); //Ursprungsfarbe
        gradient.addColorStop(0.5, "#4ba1b4");
        gradient.addColorStop(1, "#4962bf");
        A6.crc2.fillStyle = gradient;
        A6.crc2.fillRect(0, 0, 800, 600);
        /*Berge*/
        A6.crc2.beginPath();
        A6.crc2.moveTo(600, 400);
        A6.crc2.lineTo(800, 500);
        A6.crc2.lineTo(10, 600);
        A6.crc2.closePath();
        A6.crc2.fillStyle = "#FCFCFC";
        A6.crc2.fill();
        A6.crc2.beginPath();
        A6.crc2.moveTo(750, 450);
        A6.crc2.lineTo(800, 470);
        A6.crc2.lineTo(100, 470);
        A6.crc2.closePath();
        A6.crc2.fillStyle = "#FCFCFC";
        A6.crc2.fill();
        A6.crc2.beginPath();
        A6.crc2.moveTo(800, 470);
        A6.crc2.lineTo(800, 600);
        A6.crc2.lineTo(400, 600);
        A6.crc2.closePath();
        A6.crc2.fillStyle = "#FCFCFC";
        A6.crc2.fill();
        A6.crc2.beginPath();
        A6.crc2.moveTo(720, 450);
        A6.crc2.lineTo(870, 470);
        A6.crc2.lineTo(400, 600);
        A6.crc2.closePath();
        A6.crc2.fillStyle = "#FCFCFC";
        A6.crc2.fill();
        /*Dreieckiger Berg �ber Rechteck*/
        A6.crc2.beginPath();
        A6.crc2.moveTo(0, 0);
        A6.crc2.lineTo(800, 600);
        A6.crc2.lineTo(0, 600);
        A6.crc2.closePath();
        A6.crc2.stroke(); /*#E0FFFF*/
        A6.crc2.fillStyle = "#F7F7F7";
        A6.crc2.fill();
        /*linie Skilift*/
        A6.crc2.beginPath();
        A6.crc2.moveTo(70, 0); //30,0
        A6.crc2.lineTo(800, 530); //800,580 ; 840,580
        A6.crc2.stroke();
        /*Sonne*/
        A6.crc2.beginPath();
        /*350 nach rechts; 2 damit Kreis...bei 1 halbkreis*/
        A6.crc2.arc(700, 100, 50, 0, 2 * Math.PI);
        A6.crc2.fillStyle = "#FFD700";
        A6.crc2.fill();
        //B�ume    
        //winzige B�ume; Zufallschleife
        for (let i = 0; i < 4; i++) {
            let x = 150 + Math.random() * 100;
            let y = 180 + Math.random() * 60;
            drawTreeS(x, y, "#6E8B3D");
        }
        // hier Hintergrund speichern
        imgData = A6.crc2.getImageData(0, 0, canvas.width, canvas.height);
        //Animationen
        for (let i = 0; i < 120; i++) {
            clsnow = new A6.Schnee(10 + Math.random() * 800, 100 + Math.random() * 600);
            objektArr.push(clsnow);
        }
        for (let i = 0; i < 3; i++) {
            let skiX = 2000;
            let skiY = Math.random() * 300 - 200; //Random davor 100
            let skiDx = Math.random() * 2 - 1;
            let skiDy = Math.random() * 2 - 1;
            clski = new A6.Skifahrer(skiX, skiY, skiDx, skiDy);
            objektArr.push(clski);
        }
        console.log(skiArr.length);
        for (let i = 0; i < 3; i++) {
            clwolken = new A6.Wolken(0 + Math.random() * 800, 0 + Math.random() * 80 + 50);
            objektArr.push(clwolken);
        }
        animate();
        A6.crc2.putImageData(imgData, 0, 0);
    }
    //FUNKTIONEN
    //winziger Baum
    function drawTreeS(x, y, color) {
        A6.crc2.beginPath();
        A6.crc2.moveTo(x, y);
        A6.crc2.lineTo(x + 10, y + 50);
        A6.crc2.lineTo(x - 10, y + 50);
        A6.crc2.closePath();
        A6.crc2.stroke();
        A6.crc2.fillStyle = color;
        A6.crc2.fill();
    }
    //kleiner Baum
    function drawTreeL(x, y, color) {
        A6.crc2.beginPath();
        A6.crc2.moveTo(x, y);
        A6.crc2.lineTo(x + 30, y + 100);
        A6.crc2.lineTo(x - 30, y + 100);
        A6.crc2.closePath();
        A6.crc2.stroke();
        A6.crc2.fillStyle = color;
        A6.crc2.fill();
    }
    //mittlerer Baum
    function drawTreeM(x, y, color) {
        A6.crc2.beginPath();
        A6.crc2.moveTo(x, y);
        A6.crc2.lineTo(x + 50, y + 200);
        A6.crc2.lineTo(x - 50, y + 200);
        A6.crc2.closePath();
        A6.crc2.stroke();
        A6.crc2.fillStyle = color;
        A6.crc2.fill();
    }
    //Wolken, Schnee, Skifahrer
    //Funktion draw...(z.b.skifahrer) nun eine methode in Klasse Skifahrer
    //Funktion Animate 
    function animate() {
        //Bild einf�gen, hier Hintergrund restaurieren
        A6.crc2.clearRect(0, 0, 800, 600);
        A6.crc2.putImageData(imgData, 0, 0);
        //schneeflocken
        for (let i = 0; i < objektArr.length; i++) {
            let s = objektArr[i];
            s.update();
        }
        //B�ume    
        //kleine B�ume
        drawTreeL(250, 250, "#6E8B3D");
        drawTreeL(100, 100, "#6E8B3D");
        drawTreeL(150, 180, "#6E8B3D");
        drawTreeL(400, 380, "#6E8B3D");
        //mittlere B�ume
        drawTreeM(50, 100, "#6E8B3D");
        drawTreeM(200, 200, "#6E8B3D");
        //Ausnahme kleiner Baum
        drawTreeS(75, 280, "#6E8B3D");
        //weiter mittlere B�ume
        drawTreeM(60, 400, "#6E8B3D");
        drawTreeM(200, 380, "#6E8B3D");
        //Geschwindigkeit
        window.setTimeout(animate, 100);
    }
})(A6 || (A6 = {}));
//# sourceMappingURL=main.js.map