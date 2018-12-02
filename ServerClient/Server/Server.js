"use strict";
// importiert alles als Http Objekt -> Interpreter sucht nach jeden m�glichen Import im http Modul und h�ngt es nacheinander an
// das http Objekt im Code an
const Http = require("http");
var L06_SendData;
(function (L06_SendData) {
    //Konsolenausgabe zum Test
    console.log("Starting server");
    // Der Port (egal was sich im Port befindet) wird in die Variable (Zahl) "port" gespeichert
    let port = process.env.PORT;
    // Wenn Port undefinert
    if (port == undefined)
        //den Port auf 8100 setzen
        port = 8100;
    //Variable Server vom Typ Http.Server -> erstelle einen Http Server
    let server = Http.createServer();
    //Dem Server einen EventListener hinzuf�gen, die bei einer Anfrage des CLients ausgel�st wird ->
    server.addListener("request", handleRequest);
    //wartet auf eingehende Daten
    server.addListener("listening", handleListen);
    //h�rt auf eingegebenen Port
    server.listen(port);
    function handleListen() {
        //Konsolenausgabe "Listening"
        console.log("Listening");
    }
    //Parameter mit Eingabe (Http einkommende Nachricht vom Client) und Ausgabe (Serverantwort)
    function handleRequest(_request, _response) {
        //Konsolenausgabe "I hear voices"
        console.log("I hear voices!");
        //Parameter response -> CSS Header
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        //Antwort wird in URL geschrieben
        _response.write(_request.url);
        //beendet die Antwort
        _response.end();
    }
})(L06_SendData || (L06_SendData = {}));
//# sourceMappingURL=Server.js.map