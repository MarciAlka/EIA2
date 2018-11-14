//Denise Marcella Alka
var xMas;
(function (xMas) {
    window.addEventListener("load", init);
    function init() {
        let price = 0;
        let shoppingCart = [];
        //querySelector:"selectTree"
        //erster Bereich: Allgemeine Auswahl
        // Checkbox f�r Baumauswahl
        //var elementTree = <HTMLInputElement> document.getElementById("treeCheckbox");
        //var treeIsChecked = elementTree.checked;
        //St�nder?
        var elementStander = document.getElementById("standerCheckbox");
        var standerIsChecked = elementStander.checked;
        //Topf?
        var elementTopf = document.getElementById("topfCheckbox");
        var topfIsChecked = elementTopf.checked;
        //var CheckTrue = document.querySelector("treeCheckbox");
        if (standerIsChecked == true) {
            shoppingCart.push("Staender: 2,00 EUR");
        }
        else {
            const index = shoppingCart.indexOf("Staender: 2,00 EUR");
            if (index !== -1) {
                shoppingCart.splice(index, 1);
            }
        }
        /*
        switch(StanderIsChecked){
            case true: {
                shoppingCart.push ("Staender: 2 EUR");
                StanderIsChecked=false;
                break;
            }
            case false: {
                const index = shoppingCart.indexOf("Staender: 2 EUR");
                if (index !== -1){
                shoppingCart.splice(index,1);
                }
                StanderIsChecked=true;
                break;
            }
        }
        */
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
})(xMas || (xMas = {}));
//# sourceMappingURL=main.js.map