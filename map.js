const kvArray_2 = [

  { key: 1 , value: 10},
  { key: 2 , value: 20},
  { key: 3 , value: 30},

];

// const reformattedArray = kvArray_2.map(({ key, value }) => ({ [key]: value }));

const reformatteArray =  kvArray_2.map(({key,value}) => ({ [key] : value }));

const numbers = [1,4,9];


const doubles = numbers.map((num)=> num*2);


const arrayLike = {

   length:3,
   0:2,
   1:3,
   2:4,

};


console.log(doubles);

console.log(reformatteArray);

