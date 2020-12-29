class Paper{
    constructor(){
        var options ={
            
            restitution :0.3,
            friction :0.5,
            density :1.2,
            isStatic:false
            
        }
        this.body = Bodies.circle(250,540,20,options);
        this.width = 33;

        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER)
        var angle = this.body.angle;
        fill("white");
        rotate(angle);
        ellipse(0,0,20,20);
        pop();
     
    }
}
