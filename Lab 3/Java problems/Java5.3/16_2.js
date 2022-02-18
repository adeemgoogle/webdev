function checkSpam(str){
    let str1=str.toLowerCase();
    return str1.includes('viagra')||str1.includes('XXX');
}
alert(checkSpam('buy ViAgRA now'));
alert(checkSpam('free xxxxx'));
alert(checkSpam("innocent rabbit"));