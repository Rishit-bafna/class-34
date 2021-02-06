class ground{

    constructor(x,y,width,height){
        var options = {
           restitution : 0.8,
           friction : 1.0,
           density : 0.04,
           isStatic : true,
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }

    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        rect(pos.x,pos.y,this.width,this.height);
        rectMode(CENTER);
        translate(pos.x,pos.y);
        rotate(angle);
        strokeWeight(3);
        fill("black");
        pop();
    }   

}