// const names = ['john', 'peter', 'bob'];
// const newNames = ['marcos', 'pablo', 'juan'];

// console.log([...names, ...newNames]);

const user = {
    name: 'Dario',
    lastname: 'Echazu'
};

const address = {
    street: 'Dean Funes 123',
    city: "Salta"
}

const userInfo = {
    ...user,
    ...address
};

console.log(user);
console.log(address);
console.log(userInfo);