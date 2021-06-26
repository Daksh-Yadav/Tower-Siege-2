class Block{
    constructor(x, y, width, height) {
      this.image = loadImage("block.png")
        var options = {
          friction: 0.01           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var blockpos = this.body.position;
        var angle = this.body.angle;
        var pos= this.body.position;
        
        push();
        if(this.body.speed > 3) {
        World.remove(world, this.body);
        this.Visiblity = this.Visiblity - 5;
        tint(255,this.Visiblity);
        image(this.image,0,0,this.width,this.height);
        }
        else {
        translate(blockpos.x,blockpos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        }
        pop();
      }
}
