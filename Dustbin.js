class Dustbin
{
    constructor(x,y)
    {
        var options = {
            isStatic : true
        }
        this.x = x;
        this.y = y;
        this.width = 200;
        this.height = 200;
        this.thickness = 20;
        this.angle = 0;

        this.image = loadImage("dustbingreen.png");

        this.bottomBody = Bodies.rectangle(this.x,this.y,this.width,this.thickness,options);
        World.add(world,this.bottomBody);

        this.leftBody = Bodies.rectangle(this.x-100,this.y-95,this.thickness,this.height,options);
        World.add(world,this.leftBody);
        Matter.Body.setAngle(this.leftBody,this.angle);

        this.rightBody = Bodies.rectangle(this.x+100,this.y-95,this.thickness,this.height,options);
        World.add(world,this.rightBody);
        Matter.Body.setAngle(this.rightBody,this.angle);

    }

    display()
    {
        var bottomBodyPos = this.bottomBody.position;
        
        push ();
        translate(bottomBodyPos.x,bottomBodyPos.y);
        rectMode(CENTER);
        //strokeWeight(4);
        fill ("white");
        rect(0,0,this.width,this.thickness);
        
        pop ();

        var leftBodyPos = this.leftBody.position;
        push ();
        translate(leftBodyPos.x,leftBodyPos.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        rotate(this.angle);
        //strokeWeight(4);
        fill ("white");
        rect(0,0,this.thickness,this.height);
        pop ();

        var rightBodyPos = this.rightBody.position;
        push ();
        translate(rightBodyPos.x,rightBodyPos.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        rotate(this.angle);
        //strokeWeight(4);
        fill ("white");
        rect(0,0,this.thickness,this.height);
        pop ();

        imageMode (CENTER);
        image(this.image,bottomBodyPos.x,bottomBodyPos.y-90,240,220);  
    }
}