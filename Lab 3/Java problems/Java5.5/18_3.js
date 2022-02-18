function filterRangeInPlace(arr,a,b){
    let i,x;
    for(i=0;i<arr.length;i++){
        x=arr[i];
        if(x<a||x>b){
            arr.splice(i,1);
            i--;
        }
    }
}
let arr=[5,3,8,1];
filterRangeInPlace(arr,1,4);
alert(arr);