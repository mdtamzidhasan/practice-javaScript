let age=13;

if(age>=18)
{
    console.log('You can vote');
}
else{
    console.log('ghumai thako');
}
age=18;
age>=18 ? console.log('You can vote') : console.log('ghumai thako');


let price=500;
let isLeader=false;

price=isLeader===true?0:price+100;
console.log(price);

//semi advance ternary
price=2200;
isLeader=true;
if(isLeader==true)
{
    if(price>=1000)
    {
        price=price/2;
    }
    else{
        price=0;
    }
}
else{
    price+=100;
}
console.log(price);
//using ternary
price=isLeader==true?price>=1000?price/2:0:price+100;
console.log(price);