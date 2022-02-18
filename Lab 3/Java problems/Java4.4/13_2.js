let calculator;
calculator={
    sum(){
        return this.a+this.b;
    },
    mult(){
        return this.a*this.b;
    },
    read(){
        this.a=+prompt('a','');
        this.b=+prompt('b','');
    }
};
calculator.read();
alert(calculator.sum());
alert(calculator.mult());