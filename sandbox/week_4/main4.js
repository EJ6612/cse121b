const car = {type: 'Fiat', model: '500', color: 'white'};

const person = 
{
    firstName: 'John',
    lastName: 'Doe',
    age: 50,
    eyeColor: 'blue'
};

console.log(person.firstName + " " + person.lastName);
console.log(person.firstName + " is " + car.color);

const aCourse = {
    code: 'CSE121b',
    name: 'JavaScript Language', 
    logo: 'logo.jpeg',
    sections: [
        {sectionNumber: 1, roomNumber: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
        {sectionNumber: 2, roomNumber: 'STC 361', enrolled: 40, days: 'MW', instructor: 'Sis A'}
    ]
};

document.querySelector('#title').textContent = aCourse.name;
document.querySelector('#image').setAttribute('src', aCourse.logo);
document.querySelector('#image').setAttribute('alt', aCourse.name);

console.log(aCourse.sections[1]);

aCourse.sections.forEach(item => {
    document.querySelector('#sections').innerHTML += '<li>' 
    +item.roomNumber +" | " +item.days +" | " +item.instructor +" | Enrollment:  " +item.enrolled
    +'</li>';
});

let newListItem = document.createElement('li');
newListItem.textContent = aCourse.sections[0].roomNumber;
document.querySelector('#sections').appendChild(newListItem);
