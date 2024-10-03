let price=4000;

if(price>=5000)
{
    let discountAmount=price*10/100;
    let payAble=price-discountAmount;
    console.log(payAble);
}
else if(price>=3000)
{
    discountAmount=price*5/100;
    payAble=price-discountAmount;
    console.log(payAble);
}
else{
    console.log(price);
}