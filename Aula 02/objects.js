class Retangulo{
    h;
    l;
    p;
    a;

    per(){
        this.p = this.h*2 + this.l*2
        console.log(`The perimeter is ${this.p}`)
        return this.p
        
    }

    area(){
        this.a = this.h * this.l
        console.log(`The area is ${this.a}`)
        return this.a
        
    }

}

let l1 = new Retangulo();
l1.h = 10;
l1.l = 20;

let per = l1.per();
let area= l1.area();
