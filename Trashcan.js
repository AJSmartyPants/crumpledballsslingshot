class Trashcan{
    constructor(){
        var options = {
            isStatic : true

        }

        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, options);
        //this.width = width;
        //this.height = height;
        //this.x = this.position.x;
        //this.y = this.position.y;
        this.width = 100;
        this.height = 80;
        this.x = 100;
        this.y = 100;
        World.add(world, this.body);


    }

    display(){
        imageMode(CENTER);
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, this.width, this. height);

    }

    }