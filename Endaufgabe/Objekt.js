var End;
(function (End) {
    class Objekt {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        update() {
            this.move();
            this.draw();
        }
        draw() {
            // abstract
        }
        move() {
        }
    }
    End.Objekt = Objekt;
})(End || (End = {}));
//# sourceMappingURL=Objekt.js.map