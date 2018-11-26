//Denise Marcella Alka

namespace xMas {
    
    window.addEventListener("load", init);
    
    enum EItems {
        Tanne = 0,
        Fichte,
        Kiefer,
        Nordmanntanne,
        GoldKugel,
        RotKugel,
        GoldLametta,
        RotLametta,
        Staender,
        Topf
    }
    
    interface IItem {
        anzahl: number,
        anzeigeName: string,
        preis: number,
    }
    
    type TWarenkorb = IItem[];
    
    let warenkorb: TWarenkorb = [];
    
    // musst du auffüllen!!!
    warenkorb[EItems.Tanne] = {
        anzahl: 0,
        anzeigeName: 'Tanne',
        preis: 8.0,
    };
    
    warenkorb[EItems.Fichte] = {
        anzahl: 0,
        anzeigeName: 'Fichte',
        preis: 5.5,
    };
    
     warenkorb[EItems.Kiefer] = {
        anzahl: 0,
        anzeigeName: 'Kiefer',
        preis: 9.0,
    };
    
     warenkorb[EItems.Nordmanntanne] = {
        anzahl: 0,
        anzeigeName: 'Nordmanntanne',
        preis: 9.0,
    };
    
    warenkorb[EItems.Staender] = {
        anzahl: 0,
        anzeigeName: 'Staender',
        preis: 2.0,
    };
    
    warenkorb[EItems.Topf] = {
        anzahl: 0,
        anzeigeName: 'Topf',
        preis: 4.0,
    };
    
     warenkorb[EItems.GoldKugel] = {
        anzahl: 0,
        anzeigeName: 'goldene Kugel',
        preis: 0.5,
    };
    
     warenkorb[EItems.RotKugel] = {
        anzahl: 0,
        anzeigeName: 'rote Kugel',
        preis: 0.5,
    };
    
     warenkorb[EItems.GoldLametta] = {
        anzahl: 0,
        anzeigeName: 'goldenes Lametta',
        preis: 0.5,
    };
    
    warenkorb[EItems.RotLametta] = {
        anzahl: 0,
        anzeigeName: 'rotes Lametta',
        preis: 0.5,
    };
    
    function init () {
        
        let shoppingCart: string[] = [];
        let selectElement: HTMLSelectElement = <HTMLSelectElement>document.getElementById("selectTree");
    
        
        //erster Bereich: Allgemeine Auswahl
        
        //Baumauswahl
        
        
        switch((<HTMLOptionElement>selectElement.options[selectElement.selectedIndex]).value){
            case 'Fichte': {
                preisBerechnung();
                break;
            }
            case 'Tanne': {
                preisBerechnung();
                break;
            }
            case 'Kiefer':{
                preisBerechnung();
                break;
            }
            case 'Nordmanntanne':{
                preisBerechnung();
                break;
            }
            default: {
                console.log('nothing selected', (<HTMLOptionElement>selectElement.options[selectElement.selectedIndex]).value);
                break;}
        }
        /*
        let berechneWarenkorb = function(standerIsChecked: boolean) {
            if (standerIsChecked){
                shoppingCart.push ("Staender: 2,00 EUR");  
                
            }
            else {
                let index = shoppingCart.indexOf("Staender: 2,00 EUR");
                if (index !== -1){
                    shoppingCart.splice(index,1);
                }
                    
            }
            
            console.log('wurde gedrückt', shoppingCart);
        };*/
        
        //Ständer?
        
        let elementStaender = <HTMLInputElement> document.getElementById("staenderCheckbox");
        let staenderIsChecked = elementStaender.checked;
        
        elementStaender.addEventListener('change', function (event) {
            warenkorb[EItems.Staender].anzahl = (<HTMLInputElement>event.target).checked
                ? 1
                : 0
            ;
            preisBerechnung();
        });
       
        
        //Topf?
        let elementTopf = <HTMLInputElement> document.getElementById("topfCheckbox");
        let topfIsChecked = elementTopf.checked;
       
        elementTopf.addEventListener('change', function (event) {
            warenkorb[EItems.Topf].anzahl = (<HTMLInputElement>event.target).checked
                ? 1
                : 0
            ;
            preisBerechnung();
        });
        
        //var CheckTrue = document.querySelector("treeCheckbox");
        
        //Seitenladen
        //berechneWarenkorb(staenderIsChecked);
        
        
        
        if (topfIsChecked==true){
            shoppingCart.push ("Topf: 4,00 EUR");  
            //StanderIsChecked=false
        }
        else {
            const index = shoppingCart.indexOf("Topf: 4,00 EUR");
            if (index !== -1){
                shoppingCart.splice(index,1);
            }
                //StanderIsChecked=true;
        }
        
        //Zeites Fieldset Deko
        
      
        
        //Warenkorb
       console.log(shoppingCart);
        for (let i:number=0; i < shoppingCart.length; i++){
        
        //document.getElementById("warenkorb").innerHTML = shoppingCart[i];
        
        // shoppingCart.forEach(function (s, i, o) {
       // document.getElementById("warenkorb" + i).innerHTML = shoppingCart[i];
        
            /*
            if (""==shoppingCart[]){
                    
            }
            */
            
        }
        
    }
    
    //___________________________________________________________________
    //WICHTIG
    
    //  kugelGoldCheckbox.addEventListener('change', function (event) {
    // event.target.checked ?? -> ja: zeige kugelGoldNumber, nein: verberge kugelGoldNumber
    // kugelGoldNumber.style.display = 'block'; oder 'none';
    //     });
    (<HTMLInputElement>document.getElementById("kugelGoldCheckbox")).addEventListener('change', function (event){
        if ((<HTMLInputElement>event.target).checked){
           document.getElementById("kugelGoldNumber").style.display = "block"; 
        }
        else {
            document.getElementById("kugelGoldNumber").style.display = 'none';
        }
    }); //;????????????????
    //________________________________________________________________________
    
    // kugelGoldNumber.addEventListener('change', function (event) {
    //    preisBerechnung();
    // });
    
    /*
    let elementStaender = <HTMLInputElement> document.getElementById("staenderCheckbox");
        let staenderIsChecked = elementStaender.checked;
        
        elementStaender.addEventListener('change', function (event) {
            warenkorb[EItems.Staender].anzahl = (<HTMLInputElement>event.target).checked
                ? 1
                : 0
            ;
            preisBerechnung();
        });
    */
    
    /*
    document.getElementById("kugelGoldNumber").addEventListener('change', function (event) {
        warenkorb[EItems.GoldKugel].anzahl = (<HTMLInputElement>event.target).checked
                ? 1
                : 0
            ;
        preisBerechnung();
     });
    */
    
    
    document.getElementById("kugelGoldNumber").addEventListener('change', function (event) {
        var anzahlGoldKugel = (<HTMLInputElement>document.getElementById("kugelGoldNumber")).value;
        if(parseInt(anzahlGoldKugel) > 0){preisBerechnung();}
        //warenkorb[EItems.GoldKugel].anzahl = (<HTMLInputElement>event.target).checked
          //      ? 1
            //    : 0
            //;
        preisBerechnung();
     });
    
    function preisBerechnung() {
        var preis: number = 0;
        //warenkorb[EItems.GoldKugel].anzahl = parseInt((<HTMLInputElement>document.getElementById('kugelGoldNumber')).value)
        
        // mache ausgabe leer
        //var anzahlGoldKugel = document.getElementById("kugelGoldNumber").value;
        
        // for item in warenkorb  (let i:number=0;)
        for (let i: number =0; i < warenkorb.length; i++){

        //  if item.anzahl > 0
           if (warenkorb[i].anzahl > 0){ 
               
        //     preis += item.preis * item.anzahl
               preis += warenkorb[i].preis* warenkorb[i].anzahl;
               console.log(preis);
        //     zeige item mit anzahl und preis an
        
               // Du kannst Strings, in die du Variablen einfügen möchtest, statt
               // warenkorb[i].anzahl + "x " + warenkorb[i].anzeigeName
               // auch so:
               // `${warenkorb[i].anzahl}x ${warenkorb[i].anzeigeName}`
               // schreiben
               document.getElementById("warenkorb" + i).innerHTML = warenkorb[i].anzahl + "x " + warenkorb[i].anzeigeName;
               
        
        // itemPreis * itemAnzahl + anderesItem * ItemAnzahl
               
               }
            else {
               document.getElementById("warenkorb" + i).innerHTML = '';
               }
        }
        
        document.getElementById("preis").innerHTML = preis.toString();
    }
    
    
 }
    

    
  