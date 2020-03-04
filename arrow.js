function doubleIt(num){
    return num*2;
}
const result = doubleIt(5);
console.log(result);

// es6 function= arrow function
const doubleIt2 =num => num*2;//1 ta variable hole
const add = (x, y)=> x+y; //2 ta variable hole bracket
const result2 = add(50,70);
console.log(result2);
//kono variable na takle 

const lolo = ()=> 6;
const result3 = lolo();
console.log(result3);

//multiline function
const doMath = (x , y)=>{
    const sum = x+y;
    const diff = x-y;
    const result = sum*diff;
    return result;
}
const result4 = doMath(7, 5);
console.log(result4);
