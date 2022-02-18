function copySorted(arr){
    return arr.slice().sort();
}
let arr,sorted;
arr=["HTML","JavaScript","CSS"];
sorted=copySorted(arr);
alert(arr);
alert(sorted);