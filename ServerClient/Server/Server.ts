// importiert alles als Http Objekt -> Interpreter sucht nach jeden möglichen Import im http Modul und hängt es nacheinander an
// das http Objekt im Code an
import * as Http from "http";

namespace L06_SendData {
    //Konsolenausgabe zum Test
    console.log("Starting server");
    // Der Port (egal was sich im Port befindet) wird in die Variable (Zahl) "port" gespeichert
    let port: number = process.env.PORT;
    // Wenn Port undefinert
    if (port == undefined)
        //den Port auf 8100 setzen
        port = 8100;
    //Variable Server vom Typ Http.Server -> erstelle einen Http Server
    let server: Http.Server = Http.createServer();
    //Dem Server einen EventListener hinzufügen, die bei einer Anfrage des CLients ausgelöst wird ->
    server.addListener("request", handleRequest);
    //wartet auf eingehende Daten
    server.addListener("listening", handleListen);
    //hört auf eingegebenen Port
    server.listen(port);

    function handleListen(): void {
        //Konsolenausgabe "Listening"
        console.log("Listening");
    }
    
    //Parameter mit Eingabe (Http einkommende Nachricht vom Client) und Ausgabe (Serverantwort)
    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
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
}