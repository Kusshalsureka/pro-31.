class Plinko {
    constructor(x, y) {
        var options = {
            isStatic: true,
            // restitution: 0.3,
            // friction: 0.5,
            // density: 1.2
        }
        this.radius = 15;
        this.body = Bodies.circle(x, y, this.radius, options);
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill("pink");
        ellipse(0, 0, this.radius, this.radius);
        pop();
    }
}