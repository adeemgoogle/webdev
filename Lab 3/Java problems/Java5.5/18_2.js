function filterRange(arr,a,b){
    return arr.filter(item=>(a<=item && item<=b));
}
let arr,filtered;
arr=[5,3,8,1];
filtered=filterRange(arr,1,4);
alert(filtered);
alert(arr);