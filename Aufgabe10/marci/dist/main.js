var A10;
(function (A10) {
    var fieldset = [
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
    function init() {
        window.removeEventListener("load", init);
        // Returns the first Element within the document that matches the specified selector,
        // or group of selectors, or null if no matches are found.
        // https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
        var articles = document.querySelector('.js-articles');
        var articlesHTML = '';
        // An arrow function expression has a shorter syntax than a function expression
        // and does not have its own this, arguments, super, or new.target.
        // These function expressions are best suited for non-method functions,
        // and they cannot be used as constructors; es muss eine Fkt uebergeben werden
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
        fieldset.forEach(function (item) {
            //template literals, string ueber mehrere Zeilen + expressions einfuegen
            articlesHTML += "\n        <div class=\"o-articles__item\">\n            <label>\n                <span>" + item.name + "</span>\n                <br>Preis: " + item.price + "\u20AC\n                <br>Anzahl:\n                <br><input\n                    name=\"" + item.name + "\"\n                    type=\"number\"\n                    placeholder=\"Anzahl\"\n                    value=\"" + item.quantity + "\"\n                    onkeyup=\"A10.calculateArticleInfo();\"\n                >\n            </label>\n        </div>\n";
        });
        articles.innerHTML = articlesHTML;
    }
    function calculateArticleInfo() {
        var priceElement = document.querySelector('.js-price');
        var total = 0;
        var articlesOutHTML = "\n            <tr class=\"o-total-table__row\">\n                <th class=\"o-total-table__heading\">Artikelname</th>\n                <th class=\"o-total-table__heading\">Preis</th>\n                <th class=\"o-total-table__heading\">Anzahl</th>\n                <th class=\"o-total-table__heading\">Zu zahlen</th>\n            </tr>\n";
        // for (let item of fieldset) {}
        fieldset.forEach(function (item) {
            var element = document.querySelector("input[name=\"" + item.name + "\"]");
            item.quantity = parseInt(element.value) || 0;
            total += item.quantity * item.price;
            if (item.quantity > 0) {
                articlesOutHTML += "\n            <tr class=\"o-total-table__row\">\n                <td>" + item.name + "\n                <td>" + item.price + "\n                <td><input type=\"number\" value=\"1\">\n                <td>" + item.price * item.quantity + "\n            </tr>\n";
            }
        });
        articlesOutHTML += "\n            <tr class=\"o-total-table__row c-total-table__row--total\">\n                <td>\n                <td>\n                <td>\n                <td class=\"c-total-table__total\">" + total + "\n            </tr>\n";
        //toFixed berechnung Preis Zahl nach String mit 2 Nachkommastellen
        priceElement.innerHTML = total.toFixed(2).toLocaleString();
        //Artikelauflistung
    }
    A10.calculateArticleInfo = calculateArticleInfo;
    window.addEventListener("load", init);
})(A10 || (A10 = {}));
//# sourceMappingURL=main.js.map