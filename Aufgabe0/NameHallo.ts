/*Aufgabe 0 von Denise Marcella Alka, 06.Oktober.2017*/

class Prompt_Box_Hi

{
    show()
    {
        var promptValue = prompt('Please insert your Name','');
            if (promptValue != null) {
                document.getElementById("Status").innerHTML = "Willkommen" + promptValue + "!";
        }
        else
        {
            document.getElementById("Status").innerText = "cancel Prompt Box";
        }
    }
}

















