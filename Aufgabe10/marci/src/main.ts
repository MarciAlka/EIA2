/*
    Name: Denise Marcella Alka
    Matrikel: 256690
    Datum: 03.01.2018
    Hiermit versichere ich, dass ich diesen
    Code selbst geschrieben habe. Er wurde
    nicht kopiert und auch nicht diktiert
*/

namespace A10 {
    interface Article {
        name: string,
        price: number,
        quantity: number,
    }

    let fieldset: Array<Article> = [
        {
            name: 'Rote Kugel',
            price: 0.5,
            quantity: 0,
        },
        {
            name: 'Weiße Kerze',
            price: 0.2,
            quantity: 0,
        },
        {
            name: 'Große Tanne',
            price: 30.,
            quantity: 0,
        },
        {
            name: 'Große Halterung',
            price: 15.,
            quantity: 0,
        },
        {
            name: 'Blau Kugel',
            price: 0.5,
            quantity: 0,
        },
        {
            name: 'Goldene Kugel',
            price: 0.5,
            quantity: 0,
        },
    ];

    function init(): void {
        window.removeEventListener("load", init);
        // Returns the first Element within the document that matches the specified selector,
        // or group of selectors, or null if no matches are found.
        // https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
        let articles: Element = document.querySelector('.js-articles');
        let articlesHTML: string = '';

        // An arrow function expression has a shorter syntax than a function expression
        // and does not have its own this, arguments, super, or new.target.
        // These function expressions are best suited for non-method functions,
        // and they cannot be used as constructors; es muss eine Fkt uebergeben werden
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
        fieldset.forEach(item => {
            //template literals, string ueber mehrere Zeilen + expressions einfuegen
            //onkeyup="A10.calculateArticleInfo();"
            articlesHTML += `
        <div class="o-articles__item">
            <label>
                <span>${item.name}</span>
                <br>Preis: ${item.price}€
                <br>Anzahl:
                <br><input
                    name="${item.name}"
                    type="number"
                    placeholder="Anzahl"
                    value="${item.quantity}"
                    onkeyup="A10.calculateArticleInfo();"
                    oninput="A10.calculateArticleInfo();"
                >                      
            </label>
        </div>
`;
        });

        articles.innerHTML = articlesHTML;
    }

    export function calculateArticleInfo(): void {
        let priceElement: Element = document.querySelector('.js-price');
        let total: number = 0;
        let articlesOutHTML: string = `
            <tr class="o-total-table__row">
                <th class="o-total-table__heading">Artikelname</th>
                <th class="o-total-table__heading">Preis</th>
                <th class="o-total-table__heading">Anzahl</th>
                <th class="o-total-table__heading">Zu zahlen</th>
            </tr>
`;

        // for (let item of fieldset) {}
        fieldset.forEach(item => {
            let element: HTMLInputElement = document.querySelector(`input[name="${item.name}"]`);
            item.quantity = parseInt(element.value) || 0;
            total += item.quantity * item.price;

            if (item.quantity > 0) {
                articlesOutHTML += `
            <tr class="o-total-table__row">
                <td>${item.name}
                <td>${item.price}
                <td><input type="number" value="1">
                <td>${item.price * item.quantity}
            </tr>
`;
            }
        });

        articlesOutHTML += `
            <tr class="o-total-table__row c-total-table__row--total">
                <td>
                <td>
                <td>
                <td class="c-total-table__total">${total}
            </tr>
`;

        //toFixed berechnung Preis Zahl nach String mit 2 Nachkommastellen
        priceElement.innerHTML = total.toFixed(2).toLocaleString();

        //Artikelauflistung

    }
    
    //l�d neu, wenn Seite sich neu l�d
    window.addEventListener("load", init);
}
