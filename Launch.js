class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB : pointB,
            length: 10,
            stiffness: 0.03
        }

        this.launcherr = Matter.Constraint.create(options);
        this.bodyA = bodyA;
        this.pointB = pointB;
        World.add(world, this.launcherr);
    }

    release() {
        this.launcherr.bodyA = null;
        }
    
    display(){
    if(this.launcherr.bodyA){
     var pointA = this.launcherr.bodyA.position;
    var pointB = this.pointB;
    line(pointA.x, pointA.y, pointB.x, pointB.y);   
    }
    
}
}