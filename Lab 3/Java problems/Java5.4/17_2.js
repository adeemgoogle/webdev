function sumInput() {
    let num = [];
    while (true) {
        let x = prompt("Введите число", 0);
        if (x === ""||x === null||!isFinite(x)) break;
        num.push(+x);
    }
    let sum = 0;
    for (let num1 of num) {
        sum += num1;
    }
    return sum;
}
alert( sumInput() );