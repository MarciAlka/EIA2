/*
    Name: Denise Marcella Alka
    Matrikel: 256690
    Datum: 06.02.2017
    Hiermit versichere ich, dass ich diesen
    Code selbst geschrieben habe. Er wurde
    nicht kopiert und auch nicht diktiert
 */
var End;
(function (End) {
    window.addEventListener("load", init);
    let gameOver = false;
    End.scale = (document.querySelector('canvas').clientWidth / 800);
    let objektArr = [];
    let clwolken;
    //Test, i.wo anders drinnen?
    let clkokos;
    let imgData;
    function addKokosnuss(nut) {
        objektArr.push(nut);
        //kokosArr.push(nut);
    }
    End.addKokosnuss = addKokosnuss;
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.height;
        End.crc2 = canvas.getContext("2d");
        //Rechteck f�r den Himmel
        var gradient = End.crc2.createLinearGradient(0, 0, 0, End.scale * 600);
        gradient.addColorStop(0, "#E0FFFF"); //Ursprungsfarbe
        gradient.addColorStop(0.5, "#4ba1b4");
        gradient.addColorStop(1, "#4962bf");
        End.crc2.fillStyle = gradient;
        End.crc2.fillRect(0, 0, End.scale * 800, End.scale * 600);
        //Meer Verlauf
        var gradient = End.crc2.createLinearGradient(0, End.scale * 250, 0, End.scale * 600);
        gradient.addColorStop(0, "#E0FFFF"); //Ursprungsfarbe
        gradient.addColorStop(0.5, "#4ba1b4");
        gradient.addColorStop(1, "#4962bf");
        End.crc2.fillStyle = gradient;
        End.crc2.fillRect(0, 0, End.scale * 800, End.scale * 600);
        //Son    
        // Create gradient
        //CanvasGradient createRadialGradient(x0, y0, radius0, x1, y1, radius1)
        //x0 - Horizontale Koordinate des Mittelpunkts des ersten Kreises
        //y0 - Vertikale Koordinate des Mittelpunkts des ersten Kreises
        //radius0 - Radius des ersten Kreises
        //x1 - Horizontale Koordinate des Mittelpunkts des zweiten Kreises
        //y1 - Vertikale Koordinate des Mittelpunkts des zweiten Kreises
        //radius1 - Radius des zweiten Kreises
        var gradient2 = End.crc2.createRadialGradient(End.scale * 400, End.scale * 150, End.scale * 100, End.scale * 400, End.scale * 150, End.scale * 50);
        // Add colors oben nach unten: oberste zeile ganz au�en!!
        gradient2.addColorStop(0.098, 'rgba(255, 255, 255, 0)');
        gradient2.addColorStop(0.102, 'rgba(255, 255, 255, 0.1)');
        gradient2.addColorStop(0.398, 'rgba(255, 225, 0, 1.0)');
        gradient2.addColorStop(0.400, 'rgba(252, 252, 189, 1.0)');
        gradient2.addColorStop(0.999, 'rgba(250, 250, 250, 1.0)');
        // Fill with gradient
        End.crc2.fillStyle = gradient2;
        //crc2.arc(400, 300, 50, 0, 2 * Math.PI);
        End.crc2.fillRect(0, 0, End.scale * 800, End.scale * 600);
        //Strand
        //Meer Verlauf hell ivory: #FFFFF0 ; dunkel: #FAEBD7
        var gradient = End.crc2.createLinearGradient(0, End.scale * 300, 0, End.scale * 600);
        gradient.addColorStop(0, "#FAEBD7"); //Ursprungsfarbe
        gradient.addColorStop(0.5, "#FAEBD7");
        gradient.addColorStop(1, "#FFFFF0");
        End.crc2.fillStyle = gradient;
        End.crc2.fillRect(0, End.scale * 400, End.scale * 800, End.scale * 600);
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
        crc2.quadraticCurveTo(125, 25, 25        crc2.stroke();
        */
        // hier Hintergrund speichern
        imgData = End.crc2.getImageData(0, 0, canvas.width, canvas.height);
        End.clkrabbe = new End.Krabbe(End.scale * 400, End.scale * 450);
        objektArr.push(End.clkrabbe);
        //Animation    
        for (let i = 0; i < 3; i++) {
            clwolken = new End.Wolken(0 + Math.random() * 800 * End.scale, 0 + Math.random() * 80 * End.scale + End.scale * 50);
            objektArr.push(clwolken);
        }
        const generateKokosnuss = () => {
            addKokosnuss(new End.Kokosnuss(parseInt((new Date()).getTime().toString().substr(-2)) * 10 * End.scale + Math.random() * End.scale * 800, 0));
        };
        for (let i = 0; i < 6; i++) {
            generateKokosnuss();
        }
        const genRandomKokosnuss = () => {
            generateKokosnuss();
            setTimeout(genRandomKokosnuss, Math.random() * 1000);
        };
        genRandomKokosnuss();
        animate();
        //Funktion Button_Event; Krabbe bewegt sich, wenn man auf die pfeiltasten dr�ckt
        document.querySelector("body").addEventListener("keydown", function (e) {
            //const event: KeyboardEvent = window.event ? window.event : e;
            switch (e.keyCode) {
                //linke Pfeiltaste
                case 37:
                    End.clkrabbe.move_Krabbe(30 * End.scale);
                    break;
                //rechte Pfeiltaste
                case 39:
                    End.clkrabbe.move_Krabbe(document.querySelector('canvas').clientWidth);
                    break;
            }
        });
        document.querySelector("body").addEventListener("keyup", function (e) {
            //const event: KeyboardEvent = window.event ? window.event : e;
            switch (e.keyCode) {
                //linke Pfeiltaste
                case 37:
                    End.clkrabbe.stop_Krabbe();
                    break;
                //rechte Pfeiltaste
                case 39:
                    End.clkrabbe.stop_Krabbe();
                    break;
            }
        });
        //Funktion Handy touch
        document.querySelector("body").addEventListener("touchstart", function (e) {
            const canvasTouchPosX = e.touches.item(0).clientX - document.querySelector('canvas').clientLeft;
            End.clkrabbe.move_Krabbe(canvasTouchPosX);
        });
        document.querySelector("body").addEventListener("touchmove", function (e) {
            const canvasTouchPosX = e.touches.item(0).clientX - document.querySelector('canvas').clientLeft;
            End.clkrabbe.move_Krabbe(canvasTouchPosX);
        });
        document.querySelector("body").addEventListener("touchend", function (e) {
            End.clkrabbe.stop_Krabbe();
        });
        End.crc2.putImageData(imgData, 0, 0);
    }
    // FUNKTIONEN
    //Funktion Animate 
    function animate() {
        //Bild einf�gen, hier Hintergrund restaurieren
        End.crc2.clearRect(0, 0, End.scale * 800, End.scale * 600);
        End.crc2.putImageData(imgData, 0, 0);
        //Kokosnuss, Wolken
        objektArr.forEach(obj => obj.update());
        cocosCrash();
        if (gameOver) {
            return;
        }
        //Geschwindigkeit
        window.setTimeout(animate, 100);
    }
    //Funktion f�r Palme
    /*
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
    */
    function cocosCrash() {
        objektArr.forEach(obj => {
            if (!(obj instanceof End.Kokosnuss)) {
                return;
            }
            let kokosnuss = obj;
            if (End.clkrabbe.y + End.scale * 3 <= kokosnuss.y + End.scale * 10 &&
                End.clkrabbe.y + End.scale * 35 > kokosnuss.y &&
                End.clkrabbe.x <= kokosnuss.x + End.scale * 60 &&
                End.clkrabbe.x >= kokosnuss.x - End.scale * 35) {
                alert("GAME OVER \n Seite bitte neu laden lassen");
                gameOver = true;
            }
        });
    }
    function deleteKokosnuss(nut) {
        //arr.find(callback[, thisArg])
        //kokosArr.splice(kokosArr.findIndex(kokosnuss => kokosnuss.kokoId === nut), 1);
        /*
         * objektArr.find(function contains(element)    { return element.kokoId === nut; });
         * objektArr.find(                  element  =>          element.kokoId === nut    ;
         */
        if (objektArr.find(function contains(element) {
            if (element instanceof End.Kokosnuss) {
                return element.kokoId === nut;
            }
            return false;
        })) {
            objektArr.splice(objektArr.findIndex(kokosnuss => kokosnuss.kokoId === nut), 1);
        }
        //kokosArr.splice(kokosArr.reduce((/*acc, item, index*/Kokosnuss.kokoId,nut,0) => { return /*item*/ Kokosnuss.kokoId == nut ? index : /*acc*/ Kokosnuss.kokoId }, -1), 1);
        //objektArr.splice(objektArr.reduce(nut), 1);
    }
    End.deleteKokosnuss = deleteKokosnuss;
})(End || (End = {})); //namespace Ende
//# sourceMappingURL=main.js.map