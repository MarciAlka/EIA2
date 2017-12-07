/* Hiermit versichere ich, dass die Aufgabe 8
von mir selbstst�ndig gemacht wurde.
*/

namespace L08_DOM {
    window.addEventListener("load", eingabe);
    
    /*
    function quadratDaten() {
        
        //Position, gr��e, Farbe
        let pos: number;
        let groesse: number;
        let farbe: string;
                
    
    }
    */
    
    function eingabe() {
        
        //Eingabefenster f�r Benutzer
        var anzahl = prompt("Geben Sie eine Zahl zwischen 10 und 100 ein.");
        
        //Ausgabefehler sollte eine andere Zahl eingegeben werden, die nicht zwischen 1 und 100 liegt
        //The Number.isNaN() method determines whether a value is NaN (Not-A-Number), (siehe w3school)
        //String der eingabe in eine number umwandeln mit parseInt
        if (Number.isNaN(parseInt(anzahl)) || parseInt(anzahl) < 10 || parseInt(anzahl) > 100) {
            alert("falsche Eingabe, bitte Zahlen zwischen 10 und 100 eingeben!");
            eingabe();
        }
        
        else {
            // hier wird init aufgerufen und zuf�llige Boxen werden erzeugt, x,y, Farbe
            for (let i = 0; i < parseInt(anzahl); i++) {
                init(Math.random() * window.innerWidth - 80, Math.random() * window.innerHeight - 80, Math.random() * 360);
            }
        }
        
    }
    
    function init(x, y, color): void {
        
        //for (let i: number = 0; i < 10; i++) {
            
            let div = document.createElement("div");
            //Buchstaben f�r Farben
            var letters = '0123456789ABCDEF';
            
            div.style.width = "10px";
            div.style.height = "10px";
            //zuf�llige Farben hsl: Farbs�ttigung (saturation): 
            //(0% = Neutralgrau, 50% = wenig ges�ttigte Farbe, 
            //100% = ges�ttigte, reine Farbe), entspricht einem 
            //Intervall von Null bis Eins
            //div.style.color= letters[Math.floor(Math.random() * 16)];
            div.style.backgroundColor = "hsl(" + color + ", 100%, 50%)";
            
            //Verschiebung:
            div.style.left = x + "px";
            div.style.top = y + "px";
            
            document.body.appendChild(div);
                
        
        
            /* Code von del
            
            let h: HTMLHeadingElement = document.createElement("h2");
            h.innerText = "Hallo, ich bin h2-Element Nr." + i;
            document.body.appendChild(h);
            if (i == 3) 
                h.style.color = "red";
            
            */
        //}
    }
}