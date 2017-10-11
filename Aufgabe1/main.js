window.addEventListener("load", init);
function init() {
    let canvas = document.getElementsByTagName("canvas")[0];
    console.log(canvas);
    let crc2 = canvas.getContext("2d");
    console.log(crc2);
    /*hellgraues Rechteck f�r den Himmel*/
    crc2.fillStyle = "#E0FFFF";
    crc2.fillRect(0, 0, 800, 600);
    /*Dreieckiger Berg �ber Rechteck
    #DCDCDC
    */
    crc2.beginPath();
    crc2.moveTo(0, 0);
    crc2.lineTo(800, 600);
    crc2.lineTo(0, 600);
    crc2.closePath();
    crc2.stroke(); /*#E0FFFF*/
    crc2.fillStyle = "#F2F2F2";
    crc2.fill();
    /*linie Skiberg*/
    crc2.beginPath();
    crc2.moveTo(0, 0);
    crc2.lineTo(800, 600);
    crc2.stroke();
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
}
