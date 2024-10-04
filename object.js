let student={
    name:'tanana',
    age:13,
    school:{
        schoolName:'jat gelo jat gelo',
        class:['first', 'second', 'third'],
        result:{
            grade:4.5,
            position :'top'
        }
    }
};

console.log(student);
console.log(student['name']);
console.log(student.school.result.position);

for(let prop in student)
{
    console.log(prop,':',student[prop]);
}