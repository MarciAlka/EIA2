//Denise Marcella Alka
var xMas;
(function (xMas) {
    window.addEventListener("load", init);
    var EItems;
    (function (EItems) {
        EItems[EItems["Tanne"] = 0] = "Tanne";
        EItems[EItems["Fichte"] = 1] = "Fichte";
        EItems[EItems["Kiefer"] = 2] = "Kiefer";
        EItems[EItems["Nordmanntanne"] = 3] = "Nordmanntanne";
        EItems[EItems["GoldKugel"] = 4] = "GoldKugel";
        EItems[EItems["RotKugel"] = 5] = "RotKugel";
        EItems[EItems["GoldLametta"] = 6] = "GoldLametta";
        EItems[EItems["RotLametta"] = 7] = "RotLametta";
        EItems[EItems["Staender"] = 8] = "Staender";
        EItems[EItems["Topf"] = 9] = "Topf";
    })(EItems || (EItems = {}));
    let warenkorb = [];
    // musst du auff�llen!!!
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
    function init() {
        let price = 0;
        let shoppingCart = [];
        let selectElement = document.getElementById("selectTree");
        //querySelector:"selectTree"
        //erster Bereich: Allgemeine Auswahl
        //Baumauswahl
        switch (selectElement.options[selectElement.selectedIndex].value) {
            case 'Fichte': {
                shoppingCart.push("Fichte: 5,50 EUR");
                break;
            }
            case 'Tanne': {
                shoppingCart.push("Tanne: 8,00 EUR");
                break;
            }
            case 'Kiefer': {
                shoppingCart.push("Kiefer: 9,00 EUR");
                break;
            }
            case 'Nordmanntanne': {
                shoppingCart.push("Nordmann-Tanne: 9,00 EUR");
                break;
            }
            default: {
                console.log('nothing selected', selectElement.options[selectElement.selectedIndex].value);
                break;
            }
        }
        //if (document.getElementById("Fichte")==true){   
        //}
        let berechneWarenkorb = function (standerIsChecked) {
            if (standerIsChecked) {
                shoppingCart.push("Staender: 2,00 EUR");
            }
            else {
                let index = shoppingCart.indexOf("Staender: 2,00 EUR");
                if (index !== -1) {
                    shoppingCart.splice(index, 1);
                }
            }
            console.log('wurde gedr�ckt', shoppingCart);
        };
        //St�nder?
        let elementStaender = document.getElementById("staenderCheckbox");
        let staenderIsChecked = elementStaender.checked;
        elementStaender.addEventListener('change', function (event) {
            warenkorb[EItems.Staender].anzahl = event.target.checked
                ? 1
                : 0;
            preisBerechnung();
        });
        //Topf?
        let elementTopf = document.getElementById("topfCheckbox");
        let topfIsChecked = elementTopf.checked;
        //var CheckTrue = document.querySelector("treeCheckbox");
        //Seitenladen
        berechneWarenkorb(staenderIsChecked);
        if (topfIsChecked == true) {
            shoppingCart.push("Topf: 4,00 EUR");
        }
        else {
            const index = shoppingCart.indexOf("Topf: 4,00 EUR");
            if (index !== -1) {
                shoppingCart.splice(index, 1);
            }
        }
        //Zeites Fieldset Deko
        //Warenkorb
        console.log(shoppingCart);
        for (let i = 0; i < shoppingCart.length; i++) {
            //document.getElementById("warenkorb").innerHTML = shoppingCart[i];
            // shoppingCart.forEach(function (s, i, o) {
            document.getElementById("warenkorb" + i).innerHTML = shoppingCart[i];
        }
    }
    function preisBerechnung() {
        var preis = 0;
        // mache ausgabe leer
        var anzahlGoldKugel = document.getElementById("kugelGoldNumber");
        // for item in warenkorb  (let i:number=0;)
        for (let i = 0; i < warenkorb.length; i++) {
            if (document.getElementById("kugelGoldNumber")) {
            }
            //anzahl+= warenkorb[i].anzahl+ document.getElementById("number");
            //  if item.anzahl > 0
            if (warenkorb[i].anzahl > 0) {
                //     preis += item.preis * item.anzahl
                preis = +warenkorb[i].preis * warenkorb[i].anzahl;
                console.log(preis);
                //     zeige item mit anzahl und preis an
                document.getElementById("warenkorb" + i).innerHTML = warenkorb[i].anzeigeName;
            }
        }
    }
})(xMas || (xMas = {}));
//# sourceMappingURL=main.js.map