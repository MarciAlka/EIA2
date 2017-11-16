/*Aufgabe 5 von Denise Marcella Alka, 15.November.2017
hiermit versichere ich, dass der Code von mir
(Denise Marcella Alka, 256690)
eigenst�ndig geschrieben wurde; er wurde nicht diktiert oder kopiert;
*/
var A5;
(function (A5) {
    window.addEventListener("load", init);
    //let wolkeX: number[] = [];
    //let wolkeY: number[] = [];
    //let skiX: number[] = [];
    //let skiY: number[] = [];
    //let snowX: number[] = [];
    //let snowY: number[] = [];
    //let skiXOrig: number[] = [];
    //let skiYOrig: number[] = [];
    //let wolkeXOrig: number[] = [];
    //let wolkeYOrig: number[] = [];
    //Neu
    let skiArr = [];
    let snowArr = [];
    let wolkeArr = [];
    let clski;
    let clsnow;
    let clwolken;
    //let clb�ume: B�ume;
    let imgData;
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        A5.crc2 = canvas.getContext("2d");
        //hellgraues Rechteck f�r den Himmel
        var gradient = A5.crc2.createLinearGradient(0, 0, 0, 600);
        gradient.addColorStop(0, "#E0FFFF"); //Ursprungsfarbe
        gradient.addColorStop(0.5, "#4ba1b4");
        gradient.addColorStop(1, "#4962bf");
        A5.crc2.fillStyle = gradient;
        A5.crc2.fillRect(0, 0, 800, 600);
        /*Berge*/
        A5.crc2.beginPath();
        A5.crc2.moveTo(600, 400);
        A5.crc2.lineTo(800, 500);
        A5.crc2.lineTo(10, 600);
        A5.crc2.closePath();
        A5.crc2.fillStyle = "#FCFCFC";
        A5.crc2.fill();
        A5.crc2.beginPath();
        A5.crc2.moveTo(750, 450);
        A5.crc2.lineTo(800, 470);
        A5.crc2.lineTo(100, 470);
        A5.crc2.closePath();
        A5.crc2.fillStyle = "#FCFCFC";
        A5.crc2.fill();
        A5.crc2.beginPath();
        A5.crc2.moveTo(800, 470);
        A5.crc2.lineTo(800, 600);
        A5.crc2.lineTo(400, 600);
        A5.crc2.closePath();
        A5.crc2.fillStyle = "#FCFCFC";
        A5.crc2.fill();
        A5.crc2.beginPath();
        A5.crc2.moveTo(720, 450);
        A5.crc2.lineTo(870, 470);
        A5.crc2.lineTo(400, 600);
        A5.crc2.closePath();
        A5.crc2.fillStyle = "#FCFCFC";
        A5.crc2.fill();
        /*Dreieckiger Berg �ber Rechteck*/
        A5.crc2.beginPath();
        A5.crc2.moveTo(0, 0);
        A5.crc2.lineTo(800, 600);
        A5.crc2.lineTo(0, 600);
        A5.crc2.closePath();
        A5.crc2.stroke(); /*#E0FFFF*/
        A5.crc2.fillStyle = "#F7F7F7";
        A5.crc2.fill();
        /*linie Skilift*/
        A5.crc2.beginPath();
        A5.crc2.moveTo(70, 0); //30,0
        A5.crc2.lineTo(800, 530); //800,580 ; 840,580
        A5.crc2.stroke();
        /*Sonne*/
        A5.crc2.beginPath();
        /*350 nach rechts; 2 damit Kreis...bei 1 halbkreis*/
        A5.crc2.arc(700, 100, 50, 0, 2 * Math.PI);
        A5.crc2.fillStyle = "#FFD700";
        A5.crc2.fill();
        //B�ume    
        //winzige B�ume; Zufallschleife
        for (let i = 0; i < 4; i++) {
            let x = 150 + Math.random() * 100;
            let y = 180 + Math.random() * 60;
            drawTreeS(x, y, "#6E8B3D");
        }
        // hier Hintergrund speichern
        imgData = A5.crc2.getImageData(0, 0, canvas.width, canvas.height);
        //Animationen
        for (let i = 0; i < 120; i++) {
            //NEU!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!TEST
            clsnow = new A5.Schnee(10 + Math.random() * 800, 100 + Math.random() * 600);
            snowArr[i] = clsnow;
        }
        for (let i = 0; i < 3; i++) {
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
            clski = new A5.Skifahrer(200, 100, Math.random() * 2 - 1, Math.random() * 2 - 1);
            skiArr[i] = clski;
        }
        /* ARRAY GEHT SO NICHT :(
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
        */
        for (let i = 0; i < 3; i++) {
            //NEU!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!TEST
            clwolken = new A5.Wolken(0 + Math.random() * 800, 0 + Math.random() * 80 + 50);
            wolkeArr[i] = clwolken;
        }
        animate();
        A5.crc2.putImageData(imgData, 0, 0);
        //hier endet init()
    }
    //FUNKTIONEN
    //winziger Baum
    function drawTreeS(x, y, color) {
        A5.crc2.beginPath();
        A5.crc2.moveTo(x, y);
        A5.crc2.lineTo(x + 10, y + 50);
        A5.crc2.lineTo(x - 10, y + 50);
        A5.crc2.closePath();
        A5.crc2.stroke();
        A5.crc2.fillStyle = color;
        A5.crc2.fill();
    }
    //kleiner Baum
    function drawTreeL(x, y, color) {
        A5.crc2.beginPath();
        A5.crc2.moveTo(x, y);
        A5.crc2.lineTo(x + 30, y + 100);
        A5.crc2.lineTo(x - 30, y + 100);
        A5.crc2.closePath();
        A5.crc2.stroke();
        A5.crc2.fillStyle = color;
        A5.crc2.fill();
    }
    //mittlerer Baum
    function drawTreeM(x, y, color) {
        A5.crc2.beginPath();
        A5.crc2.moveTo(x, y);
        A5.crc2.lineTo(x + 50, y + 200);
        A5.crc2.lineTo(x - 50, y + 200);
        A5.crc2.closePath();
        A5.crc2.stroke();
        A5.crc2.fillStyle = color;
        A5.crc2.fill();
    }
    //Wolken, Schnee, Skifahrer
    //Funktion draw...(z.b.skifahrer) nun eine methode in Klasse Skifahrer
    //Funktion Animate 
    function animate() {
        //Bild einf�gen, hier Hintergrund restaurieren
        A5.crc2.clearRect(0, 0, 800, 600);
        A5.crc2.putImageData(imgData, 0, 0);
        clski.updateSki();
        clsnow.updateSchnee();
        clwolken.updateWolken();
        //schneeflocken
        for (let i = 0; i < snowArr.length; i++) {
            let s = snowArr[i];
            s.updateSchnee();
        }
        //Animation Wolken
        for (let i = 0; i < wolkeArr.length; i++) {
            let s = wolkeArr[i];
            s.updateWolken();
        }
        //Animation Skifahrer
        //
        for (let i = 0; i < skiArr.length; i++) {
            let s = skiArr[i];
            s.updateSki();
        }
        //DAS HIER MUSS NUN IN DIE KLASSE AUSGELAGERT WERDEN!!!!!!
        for (let i = 0; i < skiArr.length; i++) {
            let s = skiArr[i]; //
            s.updateSki();
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
})(A5 || (A5 = {}));
//# sourceMappingURL=main.js.map