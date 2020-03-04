const ages =[12,13,14,15];
const ages2 =[11,15,12,14,16];
const ages3 =[11,55,77,88];
// old niom
const allAges =ages.concat(ages2).concat(ages3);
console.log
//new niom
const allAges2 = [...ages, ...ages2, 5, ...ages3];
console.log(allAges2);
//maximum
const a=555;
const b=3333;
const c = 9089;
const maximum = Math.max(a,b,c);
console.log(maximum);
// array er maximum ber korar
const tkPoisa= [55,66,77,099];
const maximum2 = Math.max(...tkPoisa);
console.log(maximum2);
