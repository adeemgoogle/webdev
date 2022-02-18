function readNumber() {
    let x;
    do {
        x = prompt("?", '');
    } while (!isFinite(x));
    if (x === null || x === '') return null;
    return +x;
}
alert(readNumber());