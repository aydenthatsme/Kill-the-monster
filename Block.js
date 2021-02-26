    class Block{

        constructor(x,y,width,height){

        var options = {
        restitution: 0.4,
        friction: 1,
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width;
        this.height = height;
        World.add(world.this.body);


        /*

        World.add(world, this.body);
        OR
        World.add(myWorld, this.body);


        World --> physics engine world which we used to make in sketch.js via namespacing
        const World= Matter.World;

        world --> this is ur copy of the physics engine world

        this.body --> the name of ur physics engine body
        */
        }
        display(){
            var angle = this.body.angle;
            var pos = this.body.position;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();


    }




    }









