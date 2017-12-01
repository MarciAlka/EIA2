/* vorgegebener Code ohne Hilfe ergänzt von Denise Alka
29.11.2017
*/

namespace StudiVZ {
    interface StudentData {
        
        matrikel: number,
        name: string,
        vName: string,
        alter: number,
        gender: boolean,
        kommentar: string
        
    }
    var students: StudentData[] = [];
    var stop: boolean = false;

    while (!stop) {
        var action: string = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");

        switch (action) {
            case "n":
            case "N":
                var input: string = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 männlich oder 1 weiblich) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel: number = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }

    function saveData(_input: string): string {


         let s:string[] = _input.split (",");
            
            /*
            if (students[0] || students[3] != Number(s[0])||Number(s[3])){   
                console.log ("Fehler bei Eingabe Matrikelnummer oder Alter");
                alert ("Fehler bei Eingabe Matrikelnummer oder Alter");    
            }*/
            
            let _matrikel = parseInt(s[0],10);
            let _alter = parseInt (s[3],10);
            let _gender = parseInt (s[4],10) == 1
        
            let studentTmp: StudentData = {
                matrikel: _matrikel,
                name: s[1],
                vName: s[2],
                alter: _alter,
                gender: _gender,
                kommentar: s[5]
                
            }; 
           
            students.push(studentTmp);
        
  
            if (_gender != true||false) {
            
                console.log ("Fehler bei Eingabe gender: Bitte 1 oder 0");
                alert ("Fehler bei Eingabe gender: Bitte 1 oder 0");    
            }


            
        return "Daten wurden erfolgreich gespeichert!";
    }
    function queryData(_matrikel: number): string {
        
        for (let i: number = 0; i < students.length; i++){
            
             if (students[i].matrikel == _matrikel) {
                 
                let gender: number = students[i].gender ? 1: 0; 
                 
                return "Gefundene Daten zur Matrikelnummer/Found data: " + students[i].matrikel + 
                    "\n\nName: " + students[i].vName + students[i].name + 
                    "\nAlter: " + students[i].alter + 
                    "\nGeschlecht: " + gender + 
                    "\nKommentar: " + students[i].kommentar;
            }

            else {
                return "Die eingegebene Matrikelnummer existiert nicht/imma. number not found";
            }
            
        }
        
        
    }
}