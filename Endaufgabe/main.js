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
    let objektArr = [];
    //let clski: Krabbe;
    //let clsnow: Kokos;
    //let clwolken: Wolken;
    let imgData;
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        End.crc2 = canvas.getContext("2d");
        //Rechteck f�r den Himmel
        var gradient = End.crc2.createLinearGradient(0, 0, 0, 600);
        gradient.addColorStop(0, "#E0FFFF"); //Ursprungsfarbe
        gradient.addColorStop(0.5, "#4ba1b4");
        gradient.addColorStop(1, "#4962bf");
        End.crc2.fillStyle = gradient;
        End.crc2.fillRect(0, 0, 800, 600);
        //Meer Verlauf
        var gradient = End.crc2.createLinearGradient(0, 250, 0, 600);
        gradient.addColorStop(0, "#E0FFFF"); //Ursprungsfarbe
        gradient.addColorStop(0.5, "#4ba1b4");
        gradient.addColorStop(1, "#4962bf");
        End.crc2.fillStyle = gradient;
        End.crc2.fillRect(0, 0, 800, 600);
        //Sonne
        // Create gradient
        //CanvasGradient createRadialGradient(x0, y0, radius0, x1, y1, radius1)
        //x0 - Horizontale Koordinate des Mittelpunkts des ersten Kreises
        //y0 - Vertikale Koordinate des Mittelpunkts des ersten Kreises
        //radius0 - Radius des ersten Kreises
        //x1 - Horizontale Koordinate des Mittelpunkts des zweiten Kreises
        //y1 - Vertikale Koordinate des Mittelpunkts des zweiten Kreises
        //radius1 - Radius des zweiten Kreises
        var gradient2 = End.crc2.createRadialGradient(400, 150, 100, 400, 150, 50);
        // Add colors oben nach unten: oberste zeile ganz au�en!!
        gradient2.addColorStop(0.098, 'rgba(255, 255, 255, 0)');
        gradient2.addColorStop(0.102, 'rgba(255, 255, 255, 0.1)');
        gradient2.addColorStop(0.398, 'rgba(255, 225, 0, 1.0)');
        gradient2.addColorStop(0.400, 'rgba(252, 252, 189, 1.0)');
        gradient2.addColorStop(0.999, 'rgba(250, 250, 250, 1.0)');
        // Fill with gradient
        End.crc2.fillStyle = gradient2;
        //crc2.arc(400, 300, 50, 0, 2 * Math.PI);
        End.crc2.fillRect(0, 0, 800, 600);
        //Strand
        //Meer Verlauf hell ivory: #FFFFF0 ; dunkel: #FAEBD7
        var gradient = End.crc2.createLinearGradient(0, 300, 0, 600);
        gradient.addColorStop(0, "#FAEBD7"); //Ursprungsfarbe
        gradient.addColorStop(0.5, "#FAEBD7");
        gradient.addColorStop(1, "#FFFFF0");
        End.crc2.fillStyle = gradient;
        End.crc2.fillRect(0, 400, 800, 600);
    }
})(End || (End = {}));
//# sourceMappingURL=main.js.map