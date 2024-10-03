let update=' i am learning web dev.'

let reverse='';
for(let letter of update)
{
    reverse=letter+reverse;
}
console.log(reverse);

let rev=update.split('').reverse().join('');
console.log(rev);