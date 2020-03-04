// value always constant
const number = [12 , 30];
//number change
number[1] =90;
number.push(13);
console.log(number);
// not const
let patient ="Apple khan";
patient ="komola sundori";
console.log(patient);
// leak jate na hoy
for( let i=0; i<0; i++ ){
    sum = sum+i;
}
//console.log(i); //eita execute hbe na.
// if num2 is not given then they count 20 as num2's backup
function add(num1 , num2=20){
    return num1+num2;
}//default 0 o deoa jay
const total = add(15);
console.log(total);