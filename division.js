class Division {
    constructor(x, y, w, h) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        // for (var k = 0; k <= width; k = k + 80) {
        //     division.push(new Division(k, height - divisionHeigt / 2, 10, divisionHeight));
        // }
        rectMode(CENTER);
        fill("white");
        rect(pos.x, pos.y, this.w, this.h);
    }
}