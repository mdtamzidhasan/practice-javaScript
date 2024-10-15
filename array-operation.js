function sumOfNumbers(numbers)
{
    let sum=0;
    for(const number of numbers)
    {
        sum=sum+number;

    }
    return sum;
}

function checkEven(numbers)
{
    const even=[];
    for(const number of numbers)
    {   
        if(number%2===0)
        {
            even.push(number);
        }
    }
    return even;
}

const nums=[3,5,7,7,2,34];
const sum=sumOfNumbers(nums);
const evens=checkEven(nums);
console.log('sum of all numbers is:',sum)
console.log(evens);
