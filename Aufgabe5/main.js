/*Aufgabe 5 von Denise Marcella Alka, 15.November.2017
hiermit versichere ich, dass der Code von mir
(Denise Marcella Alka, 256690)
eigenst�ndig geschrieben wurde; er wurde nicht diktiert oder kopiert;
*/
var A5;
(function (A5) {
    window.addEventListener("load", init);
    A5.wolkeX = [];
    A5.wolkeY = [];
    //let skiX: number[] = [];
    //let skiY: number[] = [];
    A5.snowX = [];
    A5.snowY = [];
    A5.skiXOrig = [];
    A5.skiYOrig = [];
    A5.wolkeXOrig = [];
    A5.wolkeYOrig = [];
    //    let skiArr: InterSki[] = [];
    //Neu
    A5.skiArr = [];
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
        /* B�ume sind nun in Animate, bis auf die zuf�llig platzierten... sonst werden diese animiert.
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
        */
        // hier Hintergrund speichern
        imgData = A5.crc2.getImageData(0, 0, canvas.width, canvas.height);
        //Animationen
        for (let i = 0; i < 100; i++) {
            //NEU!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!TEST
            A5.clsnow = new A5.Schnee(100, 100);
            A5.snowX[i] = 10 + Math.random() * 800;
            A5.snowY[i] = 100 + Math.random() * 600;
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
            A5.clski = new A5.Skifahrer(200, 100);
            if (i == 0) {
                A5.skiArr[i].x = 10;
                A5.skiArr[i].y = 100;
                A5.skiXOrig[i] = A5.skiArr[i].x;
                A5.skiYOrig[i] = A5.skiArr[i].y;
            }
            else if (i == 1) {
                A5.skiArr[i].x = -290;
                A5.skiArr[i].y = 100;
                A5.skiXOrig[i] = A5.skiArr[i].x;
                A5.skiYOrig[i] = A5.skiArr[i].y;
            }
            else if (i == 2) {
                A5.skiArr[i].x = -190;
                A5.skiArr[i].y = -200;
                A5.skiXOrig[i] = A5.skiArr[i].x;
                A5.skiYOrig[i] = A5.skiArr[i].y;
            }
            //NEU!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!TEST
            A5.clwolken = new A5.Wolken(100, 100);
            if (i == 0) {
                A5.wolkeX[i] = 10;
                A5.wolkeY[i] = 100; //100
                A5.wolkeXOrig[i] = A5.wolkeX[i];
                A5.wolkeYOrig[i] = A5.wolkeY[i];
            }
            else if (i == 1) {
                A5.wolkeX[i] = 200;
                A5.wolkeY[i] = 140;
                A5.wolkeXOrig[i] = A5.wolkeX[i];
                A5.wolkeYOrig[i] = A5.wolkeY[i];
            }
            else if (i == 2) {
                A5.wolkeX[i] = -190;
                A5.wolkeY[i] = 250;
                A5.wolkeXOrig[i] = A5.wolkeX[i];
                A5.wolkeYOrig[i] = A5.wolkeY[i];
            }
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
    function animate() {
        //Bild einf�gen, hier Hintergrund restaurieren
        A5.crc2.clearRect(0, 0, 800, 600);
        A5.crc2.putImageData(imgData, 0, 0);
        A5.clski.updateSki();
        A5.clsnow.updateSchnee();
        A5.clwolken.updateWolken();
        //clB�ume.updateb�ume();
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
        //B�ume    
        /*//winzige B�ume; Zufallschleife -> nicht hier, sonst animiert
        for (let i: number = 0; i < 4; i++) {
            let x: number = 150 + Math.random() * 100;
            let y: number = 180 + Math.random() * 60;

            drawTreeS(x, y, "#6E8B3D");
        }
        */
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