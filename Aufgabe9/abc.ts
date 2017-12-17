/*
    Name: Denise Marcella Alka
    Matrikel: 256690
    Datum: 14.12.2017
    Hiermit versichere ich, dass ich diesen
    Code selbst geschrieben habe. Er wurde
    nicht kopiert und auch nicht diktiert
*/
namespace aufgabe9 {
    
    window.addEventListener("load", letters);
    
    let letter: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    let currentLetter: string;
    
    //current 
    function letters() {
    
        for (let i = 0; i < letter.length; i++){
            // div Quadrate für Buchstaben erstellen; siehe vorherige Aufgabe!        
            let div = document.createElement("div");
        
            // Design in css Datei (so wie, divs in einer Reihe usw)
            //Stil der divs:
            div.style.backgroundColor = "lightblue";
            div.style.width = "3%";
            div.style.margin = "1%";//"0,2em";/*"0.5em";*/
            div.style.height = "4%";
            
            //Klasse für Elemente
            div.className="alphabet";
            
            //alle nicht geclicked anfangs
            //div.setAttribute("isClicked", "false");
            
            div.innerText = letter[i];
            
            div.addEventListener("click", handleMouseDown);
            document.body.appendChild(div); 
        }
        
        drawTextFeld();
    
    }
        
        function drawTextFeld() : void{
        // Versuch Textfeld
    
        let t: HTMLDivElement = document.createElement("div");
    
            //Stil des Textfeldes
            t.style.backgroundColor = "#dedede";/*"#F2F2F2";*/
            t.style.border = "2px solid lightgrey";
            t.style.width = "95%";
            t.style.height = "38em";//"50%";
            t.style.marginTop ="3em";
            
            //Buchstaben im Textfeld aufrufen
            letter.addEventListener("click", callLetters);
    
            document.body.appendChild(t);
    
        //Versuch Ende
        
 
    }
        
      
    function handleMouseDown(_event: MouseEvent): void {
    
        /*let d: HTMLHeadingElement = <HTMLHeadingElement>_event.target;*/
        let d: HTMLElement = <HTMLElement>_event.target;
        //d.style.color = "black";
        d.style.backgroundColor = "red";
        
        //nur 1 angeclicked
        d.setAttribute("isClicked", "true");
        
        //komplette liste buchstaben
        //iterieren
        //vergleich
        let getAlphabet:NodeListOf<HTMLDivElement> = <NodeListOf<HTMLDivElement>>document.getElementsByClassName("alphabet");
        for (let i = 0; i < getAlphabet.length; i++){
            if(getAlphabet[i].innerHTML != d.innerHTML){
                //efaultwert
                getAlphabet[i].style.backgroundColor = "lightblue";
                
                }  
        }
        
        /*neu
        d.innerText =currentLetter
        d.style.backgroundColor = "lightblue";
        d.style.width = "3%";
        d.style.margin = "1%";//"0,2em";/*"0.5em";
        d.style.height = "4%";
        d.style.left = _event.pageX + "px";
        d.style.top= _event.pageY + "px";
        
        d.addEventListener("click", callLetters);
        document.body.appendChild(d);
        
        let clicking: HTMLDivElement = <HTMLDivElement>_event.target;
        */
    }
    
    //Buchstaben in Brief einfügen
    function callLetters(_event: MouseEvent): void {

        let box: HTMLDivElement = document.createElement("div");
        
        box.innerText =currentLetter;
        box.style.backgroundColor ="lightblue";
        box.style.width = "95%";
        box.style.height = "38em";
        box.style.marginTop ="3em";
        box.style.fontSize = "30px";
        box.style.left = _event.pageX + "px";
        box.style.top= _event.pageY + "px";
        
        box.addEventListener("click", callLetters);
        document.body.appendChild(box);
        
          let clicking: HTMLDivElement = <HTMLDivElement>_event.target;
    }
    
}