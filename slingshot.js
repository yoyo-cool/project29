class SlingShot{
    constructor(a,b){
        var options={
            bodyA:a,
            pointB:b,
            lenght:10,
            stiffness:0.03
        }

        this.launch=Constraint.create(options)
        World.add(world, this.launch)

        this.pointb=b
    }

    display(){
        if(this.launch.bodyA){

        strokeWeight(3)
        line(this.launch.bodyA.position.x,this.launch.bodyA.position.y,
            this.launch.pointB.x,this.launch.pointB.y)
    }
}
    fly(){
        this.launch.bodyA=null
    }
    attach(){
        this.launch.bodyA=polygon
    }
}