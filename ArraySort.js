const person=['rakib','sakib','akib','jakib'];
console.log(person.sort());

const number=[4,5,3,7,9,6,4,7];

const numbers_asc=[...number].sort(function(a,b){return a-b});
console.log(numbers_asc);
const numbers_dsc=[...number].sort(function(a,b){return b-a});
console.log(numbers_dsc);