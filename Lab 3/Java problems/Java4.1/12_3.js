let i;
function multiplyNumeric(obj){
    for(let i in obj){
        if(typeof obj[i]=='number'){
            obj[i]*=2;
        }
    }
}
let menu;
menu={
    width:200,
    height:300,
    title:"My menu"
};
multiplyNumeric(menu);
alert(menu.width);
alert(menu.height)
alert(menu.title);