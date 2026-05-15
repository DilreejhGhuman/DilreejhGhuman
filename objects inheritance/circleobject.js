class circleobject extends AnimatedObjects{
    constructor(x,y){
        super(x,y);
        this.size = random(20,40);

       
    }

    display(){
        if(dist(this.x,this.y,mouseX,mouseY)<this.size/2){
            fill(255,0,0);

        }
        else fill (255);
        circle(this.x, this.y, this.size);
    }

}
