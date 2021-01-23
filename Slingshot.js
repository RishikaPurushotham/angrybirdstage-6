class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.5,
            length: 5
        }
        this.s1=loadImage("sprites/sling1.png")
        this.s2=loadImage("sprites/sling2.png")
        this.s3=loadImage("sprites/sling3.png")
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }
attach(body){
    this.sling.bodyA=body
}
    display(){
        image(this.s1,200,68,50,150)
        image(this.s2,170,70,55,80)
      
        if(this.sling.bodyA){

            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
          push()
          stroke("#301608")
          if(pointA.x<200){
strokeWeight(7)
line(pointA.x-20,pointA.y,pointB.x-10,pointB.y)
line(pointA.x-20,pointA.y,pointB.x+30,pointB.y-3)
          }else{
            strokeWeight(3)
            line(pointA.x+25,pointA.y,pointB.x-10,pointB.y)
            line(pointA.x+25,pointA.y,pointB.x+30,pointB.y-3)


          }
        }
    }
    
}