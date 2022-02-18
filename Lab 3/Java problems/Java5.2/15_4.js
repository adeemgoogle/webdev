function randomInteger(min,max){
    let int;
    int=min+Math.random()*(max-min);
    return Math.round(int)
}
alert(randomInteger(1,3));