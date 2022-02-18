function Calculator(){
    this.read=function(){
        this.x=+prompt('x','');
        this.y=+prompt('y','');
    };
    this.sum=function(){
        return this.x+this.y;
    };
    this.mul=function(){
        return this.x*this.y;
    };
}
let calculator;
calculator=new Calculator();
calculator.read();
alert("Sum="+calculator.sum());
alert("Mul="+calculator.mul())