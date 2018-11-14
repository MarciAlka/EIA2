//Denise Marcella Alka

namespace xMas {
    
    window.addEventListener("load", init);
    
    function init () {
        
        let price: number = 0;
        let shoppingCart: string[] = [];
    
        //querySelector:"selectTree"
        
        //erster Bereich: Allgemeine Auswahl
        
        // Checkbox für Baumauswahl
        
        //var elementTree = <HTMLInputElement> document.getElementById("treeCheckbox");
        //var treeIsChecked = elementTree.checked;
        
        //Ständer?
        var elementStander = <HTMLInputElement> document.getElementById("standerCheckbox");
        var standerIsChecked = elementStander.checked;
        
        //Topf?
        var elementTopf = <HTMLInputElement> document.getElementById("topfCheckbox");
        var topfIsChecked = elementTopf.checked;
        
        
        //var CheckTrue = document.querySelector("treeCheckbox");
        
        
        if (standerIsChecked==true){
            shoppingCart.push ("Staender: 2,00 EUR");  
            
        }
        else {
            const index = shoppingCart.indexOf("Staender: 2,00 EUR");
            if (index !== -1){
                shoppingCart.splice(index,1);
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
        document.getElementById("warenkorb" + i).innerHTML = shoppingCart[i];
        
        // Die Variable o enthält eine Referenz auf das Array obst.
        //alert(++i + ". Obst-Umfrage: Mögen Sie " + s + "?");
        //}
        //);
            
        }
        
    }
 }
    

    
  