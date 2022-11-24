// const message = 'Hello world' // Try edit me

// Update header text
// document.querySelector('#header').innerHTML = message

// Log to console
// console.log(message)

// const kvArray = [
//   { key: 1, value: 10 },
//   { key: 2, value: 20 },
//   { key: 3, value: 30 },
// ];
const kvArray_2 = [

  { key: 1 , value: 10},
  { key: 2 , value: 20},
  { key: 3 , value: 30},

];

const reformattedArray = kvArray_2.map(({ key, value }) => ({ [key]: value }));
const reformatteArray =  kvArray_2.map(({key,value}) => ({ [key] : value }));
console.log(reformatteArray);