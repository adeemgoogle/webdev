function camelize(str){
    return str
    .split('-')
        .map(
        (word,index)=>index===0? word:word[0].toUpperCase()+word.slice(1)
    )
        .join('');
}
alert(camelize("background-color"))
alert(camelize("list-style-image"))
alert(camelize("-webkit-transition"))