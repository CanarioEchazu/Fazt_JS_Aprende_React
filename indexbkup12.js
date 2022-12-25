// video 1:08:30

const person = {
    name: 'Dario',
    adress: {
        city: 'London',
    }
};

console.log(person.adress.city);
console.log(person.location?.city) // if location is undefined, it will not throw an error