let salaries;
salaries={
    John:100,
    Ann:160,
    Pete:130
}
let sum;
sum=0;
let i;
for (let i in salaries){
    sum+=salaries[i];
}
alert(sum);