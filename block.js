class Block{
    constructor(x, y, width, height) {
        var options = {
            'restitution':1,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.x=x
        this.y=y
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        fill("blue")
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
      }
}
