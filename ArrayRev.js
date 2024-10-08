const numbers=[22,2,2,155,664,67];

console.log(numbers);

//numbers.reverse();
//console.log(numbers);

const rev_numbers=[];
for (const num of numbers)
{
    rev_numbers.unshift(num);
}

console.log(rev_numbers);


const rev_rev_numbers=[];

for(let i=numbers.length-1;i>=0;i--)
{
    rev_rev_numbers.push(numbers[i]);
}
console.log(rev_rev_numbers);


