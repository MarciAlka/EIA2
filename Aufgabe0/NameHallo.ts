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


















/*
window.onload = () =>
{
    var button = <HTMLButtonElement>document.getElementById("Button1");
    button.onclick = function ()
    
    {
    var box = new Prompt_Box_Hi();
    box.show();
    }     
};
*/